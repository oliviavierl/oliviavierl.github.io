import PropTypes from "prop-types";
import { keyframes } from "@emotion/react";
// @mui material components
import { Box, Container } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MKTypography from "components/MKTypography";
import colors from "assets/theme/base/colors";
import wave from "assets/img/wave.svg";

const HighlightedText = ({ children }) => (
  <span
    style={{
      color: colors.primary.main,
      borderBottom: "2px solid",
      borderColor: colors.primary.main,
    }}
  >
    {children}
  </span>
);

HighlightedText.propTypes = {
  children: PropTypes.node.isRequired,
};

const bounce = keyframes`
    0% {transform: translateY(0)}
    20% {transform: translateY(10px)}
    100% {transform: translateY(0)}
`;

function Greeting() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "calc(100vh - 100px)",
        mb: "100px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", px: 1 }}>
        <Box component="img" src={wave} alt="" sx={{ width: "120px", ml: "-40px" }} />
        <MKTypography
          variant="h1"
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["3xl"],
            },
          })}
        >
          I'm <span style={{ color: colors.primary.main }}>Yifan!</span>
        </MKTypography>
        <MKTypography variant="h4" sx={{ mt: "12px", lineHeight: "40px", maxWidth: "980px" }}>
          I'm a passionate <HighlightedText>product designer</HighlightedText> from San Francisco,
          who creates <HighlightedText>impactful</HighlightedText> experiences to bring people{" "}
          <HighlightedText>delight</HighlightedText>!
        </MKTypography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "2rem",
          left: 0,
          right: 0,
          width: "20px",
          m: "auto",
          display: "flex",
          flexDirection: "column",
          animation: `${bounce} 1s linear infinite`,
        }}
      >
        <KeyboardArrowDownIcon sx={{ opacity: 0.5 }} />
        <KeyboardArrowDownIcon sx={{ mt: "-10px" }} />
      </Box>
    </Container>
  );
}

export default Greeting;
