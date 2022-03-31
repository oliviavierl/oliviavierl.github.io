/* eslint-disable no-param-reassign */
import { Fragment, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Container, Icon, Popper, Grow, Grid, Divider, Link as MuiLink } from "@mui/material";

import favicon from "assets/img/header-logo.svg";
import slash from "assets/img/slash.svg";
import breakpoints from "assets/theme/base/breakpoints";

import defaultRoutes from "routes";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
import boxShadows from "assets/theme/base/boxShadows";
import borders from "assets/theme/base/borders";
import DefaultNavbarDropdown, { linkComponent, routeComponent } from "./DefaultNavbarDropdown";
import DefaultNavbarMobile from "./DefaultNavbarMobile";

function DefaultNavbar({ brand, title, routes, transparent, light, action, sticky, center }) {
  const [dropdown, setDropdown] = useState("");
  const [dropdownEl, setDropdownEl] = useState("");
  const [dropdownName, setDropdownName] = useState("");
  const [nestedDropdown, setNestedDropdown] = useState("");
  const [nestedDropdownEl, setNestedDropdownEl] = useState("");
  const [nestedDropdownName, setNestedDropdownName] = useState("");
  const [arrowRef, setArrowRef] = useState(null);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const lastScrollTop = useRef(0);
  const [scrolled, setScrolled] = useState(false);

  const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    const scrollListener = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > lastScrollTop.current) {
        // downscroll code
        setScrolled(true);
      } else {
        // upscroll code
        setScrolled(false);
      }
      lastScrollTop.current = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    };
    document.addEventListener("scroll", scrollListener, false);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", displayMobileNavbar);
      document.removeEventListener("scroll", scrollListener);
    };
  }, []);

  const renderNavbarItems = routes.map(({ name, icon, href, route, collapse }) => (
    <DefaultNavbarDropdown
      key={name}
      name={name}
      icon={icon}
      href={href}
      route={route}
      collapse={Boolean(collapse)}
      onMouseEnter={({ currentTarget }) => {
        if (collapse) {
          setDropdown(currentTarget);
          setDropdownEl(currentTarget);
          setDropdownName(name);
        }
      }}
      onMouseLeave={() => collapse && setDropdown(null)}
      light={light}
    />
  ));

  // Render the routes on the dropdown menu
  const renderRoutes = routes.map(({ name, collapse, columns, rowsPerColumn }) => {
    let template;

    // Render the dropdown menu that should be display as columns
    if (collapse && columns && name === dropdownName) {
      const calculateColumns = collapse.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / rowsPerColumn);

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [];
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
      }, []);

      template = (
        <Grid key={name} container spacing={3} py={1} px={1.5}>
          {calculateColumns.map((cols, key) => {
            const gridKey = `grid-${key}`;
            const dividerKey = `divider-${key}`;

            return (
              <Grid key={gridKey} item xs={12 / columns} sx={{ position: "relative" }}>
                {cols.map((col, index) => (
                  <Fragment key={col.name}>
                    <MKTypography
                      display="block"
                      variant="button"
                      fontWeight="bold"
                      textTransform="capitalize"
                      py={1}
                      px={0.5}
                      mt={index !== 0 ? 2 : 0}
                    >
                      {col.name}
                    </MKTypography>
                    {col.collapse.map((item) => (
                      <MKTypography
                        key={item.name}
                        component={item.route ? Link : MuiLink}
                        to={item.route ? item.route : ""}
                        href={item.href ? item.href : (e) => e.preventDefault()}
                        target={item.href ? "_blank" : ""}
                        rel={item.href ? "noreferrer" : "noreferrer"}
                        minWidth="11.25rem"
                        display="block"
                        variant="button"
                        color="text"
                        textTransform="capitalize"
                        fontWeight="regular"
                        py={0.625}
                        px={2}
                        sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                          borderRadius: borderRadius.md,
                          cursor: "pointer",
                          transition: "all 300ms linear",

                          "&:hover": {
                            backgroundColor: grey[200],
                            color: dark.main,
                          },
                        })}
                      >
                        {item.name}
                      </MKTypography>
                    ))}
                  </Fragment>
                ))}
                {key !== 0 && (
                  <Divider
                    key={dividerKey}
                    orientation="vertical"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "-4px",
                      transform: "translateY(-45%)",
                      height: "90%",
                    }}
                  />
                )}
              </Grid>
            );
          })}
        </Grid>
      );

      // Render the dropdown menu that should be display as list items
    } else if (collapse && name === dropdownName) {
      template = collapse.map((item) => (
        <MKTypography
          key={item.name}
          {...(item.route ? routeComponent(item.route) : linkComponent(item.href))}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          variant="button"
          textTransform="capitalize"
          minWidth={item.description ? "14rem" : "12rem"}
          color={item.description ? "dark" : "text"}
          fontWeight={item.description ? "bold" : "regular"}
          py={item.description ? 1 : 0.625}
          px={2}
          sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
            borderRadius: borderRadius.md,
            cursor: "pointer",
            transition: "all 300ms linear",

            "&:hover": {
              backgroundColor: grey[200],
              color: dark.main,

              "& *": {
                color: dark.main,
              },
            },
          })}
          onMouseEnter={({ currentTarget }) => {
            if (item.dropdown) {
              setNestedDropdown(currentTarget);
              setNestedDropdownEl(currentTarget);
              setNestedDropdownName(item.name);
            }
          }}
          onMouseLeave={() => {
            if (item.dropdown) {
              setNestedDropdown(null);
            }
          }}
        >
          {item.description ? (
            <Box>
              {item.name}
              <MKTypography
                display="block"
                variant="button"
                color="text"
                fontWeight="regular"
                sx={{ transition: "all 300ms linear" }}
              >
                {item.description}
              </MKTypography>
            </Box>
          ) : (
            item.name
          )}
          {item.collapse && (
            <Icon fontSize="small" sx={{ fontWeight: "normal", verticalAlign: "middle", mr: -0.5 }}>
              keyboard_arrow_right
            </Icon>
          )}
        </MKTypography>
      ));
    }

    return template;
  });

  // Routes dropdown menu
  const dropdownMenu = (
    <Popper
      anchorEl={dropdown}
      popperRef={null}
      open={Boolean(dropdown)}
      placement="top-start"
      transition
      style={{ zIndex: 10 }}
      modifiers={[
        {
          name: "arrow",
          enabled: true,
          options: {
            element: arrowRef,
          },
        },
      ]}
      onMouseEnter={() => setDropdown(dropdownEl)}
      onMouseLeave={() => {
        if (!nestedDropdown) {
          setDropdown(null);
          setDropdownName("");
        }
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          sx={{
            transformOrigin: "left top",
            background: ({ palette: { white } }) => white.main,
          }}
        >
          <Box borderRadius="lg">
            <MKTypography variant="h1" color="white">
              <Icon ref={setArrowRef} sx={{ mt: -3 }}>
                arrow_drop_up
              </Icon>
            </MKTypography>
            <Box shadow="lg" borderRadius="lg" p={2} mt={2}>
              {renderRoutes}
            </Box>
          </Box>
        </Grow>
      )}
    </Popper>
  );

  // Render routes that are nested inside the dropdown menu routes
  const renderNestedRoutes = routes.map(({ collapse, columns }) =>
    collapse && !columns
      ? collapse.map(({ name: parentName, collapse: nestedCollapse }) => {
          let template;

          if (parentName === nestedDropdownName) {
            template =
              nestedCollapse &&
              nestedCollapse.map((item) => (
                <MKTypography
                  key={item.name}
                  {...(item.route ? routeComponent(item.route) : linkComponent(item.href))}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  variant="button"
                  textTransform="capitalize"
                  minWidth={item.description ? "14rem" : "12rem"}
                  color={item.description ? "dark" : "text"}
                  fontWeight={item.description ? "bold" : "regular"}
                  py={item.description ? 1 : 0.625}
                  px={2}
                  sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                    borderRadius: borderRadius.md,
                    cursor: "pointer",
                    transition: "all 300ms linear",

                    "&:hover": {
                      backgroundColor: grey[200],
                      color: dark.main,

                      "& *": {
                        color: dark.main,
                      },
                    },
                  })}
                >
                  {item.description ? (
                    <Box>
                      {item.name}
                      <MKTypography
                        display="block"
                        variant="button"
                        color="text"
                        fontWeight="regular"
                        sx={{ transition: "all 300ms linear" }}
                      >
                        {item.description}
                      </MKTypography>
                    </Box>
                  ) : (
                    item.name
                  )}
                  {item.collapse && (
                    <Icon
                      fontSize="small"
                      sx={{ fontWeight: "normal", verticalAlign: "middle", mr: -0.5 }}
                    >
                      keyboard_arrow_right
                    </Icon>
                  )}
                </MKTypography>
              ));
          }

          return template;
        })
      : null
  );

  // Dropdown menu for the nested dropdowns
  const nestedDropdownMenu = (
    <Popper
      anchorEl={nestedDropdown}
      popperRef={null}
      open={Boolean(nestedDropdown)}
      placement="right-start"
      transition
      style={{ zIndex: 10 }}
      onMouseEnter={() => {
        setNestedDropdown(nestedDropdownEl);
      }}
      onMouseLeave={() => {
        setNestedDropdown(null);
        setNestedDropdownName("");
        setDropdown(null);
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          sx={{
            transformOrigin: "left top",
            background: ({ palette: { white } }) => white.main,
          }}
        >
          <Box ml={2.5} mt={-2.5} borderRadius="lg">
            <Box shadow="lg" borderRadius="lg" py={1.5} px={1} mt={2}>
              {renderNestedRoutes}
            </Box>
          </Box>
        </Grow>
      )}
    </Popper>
  );

  return (
    <Box
      color={light ? "white" : "dark"}
      sx={({ palette: { transparent: transparentColor, white }, functions: { rgba } }) => ({
        backgroundColor: transparent ? transparentColor.main : rgba(white.main, 0.8),
        backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
        borderBottomLeftRadius: borders.borderRadius.xl,
        borderBottomRightRadius: borders.borderRadius.xl,
        ...(sticky
          ? { position: "sticky", top: scrolled ? "-10rem" : 0, zIndex: 10, transition: "top 0.2s" }
          : {}),
        ...(transparent ? {} : { boxShadow: boxShadows.md }),
      })}
    >
      <Container>
        <Box py={2} px={1}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box
              component={Link}
              to="/"
              lineHeight={1}
              py={transparent ? 1.5 : 0.75}
              display="flex"
              alignItems="center"
              sx={{
                "&:hover > div": {
                  opacity: [0, 1],
                },
              }}
            >
              <Box component="img" src={favicon} alt="logo" width="37.5px" mr={2} />
              <Box
                sx={{
                  opacity: 0,
                  transition: "opacity 150ms ease-in",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MKTypography variant="button" fontWeight="bold" color={light ? "white" : "dark"}>
                  {brand}
                </MKTypography>
                <Box component="img" src={slash} alt="/" height="1rem" sx={{ mx: [0, 2] }} />
                <MKTypography variant="button" fontWeight="bold" color={light ? "white" : "dark"}>
                  {title}
                </MKTypography>
              </Box>
            </Box>
            <Box
              color="inherit"
              display={{ xs: "none", lg: "flex" }}
              ml="auto"
              mr={center ? "auto" : 0}
            >
              {renderNavbarItems}
            </Box>
            <Box ml={{ xs: "auto", lg: 0 }}>
              {action &&
                (action.type === "internal" ? (
                  <MKButton
                    component={Link}
                    to={action.route}
                    variant={
                      action.color === "white" || action.color === "default"
                        ? "contained"
                        : "gradient"
                    }
                    color={action.color ? action.color : "info"}
                    size="small"
                  >
                    {action.label}
                  </MKButton>
                ) : (
                  <MKButton
                    component="a"
                    href={action.route}
                    target="_blank"
                    rel="noreferrer"
                    variant={
                      action.color === "white" || action.color === "default"
                        ? "contained"
                        : "gradient"
                    }
                    color={action.color ? action.color : "info"}
                    size="small"
                  >
                    {action.label}
                  </MKButton>
                ))}
            </Box>
            <Box
              display={{ xs: "inline-block", lg: "none" }}
              lineHeight={0}
              py={1.5}
              pl={1.5}
              color={transparent ? "white" : "inherit"}
              sx={{ cursor: "pointer" }}
              onClick={openMobileNavbar}
            >
              <Icon fontSize="default">{mobileNavbar ? "close" : "menu"}</Icon>
            </Box>
          </Box>
          <Box
            bgColor={transparent ? "white" : "transparent"}
            shadow={transparent ? "lg" : "none"}
            borderRadius="xl"
            px={transparent ? 2 : 0}
          >
            {mobileView && (
              <DefaultNavbarMobile routes={routes} open={mobileNavbar} onClose={openMobileNavbar} />
            )}
          </Box>
        </Box>
        {dropdownMenu}
        {nestedDropdownMenu}
      </Container>
    </Box>
  );
}

// Setting default values for the props of DefaultNavbar
DefaultNavbar.defaultProps = {
  brand: "Yifan Li",
  title: "Product Designer",
  routes: defaultRoutes,
  transparent: false,
  light: false,
  action: false,
  sticky: false,
  center: false,
};

// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  brand: PropTypes.string,
  title: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
        "default",
        "white",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
  sticky: PropTypes.bool,
  center: PropTypes.bool,
};

export default DefaultNavbar;
