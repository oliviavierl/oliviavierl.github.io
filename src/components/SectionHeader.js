// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";

function SectionHeader({ title, bgColor, sx, ...props }) {
  return (
    <MKBox
      sx={{
        background: bgColor,
        py: 10,
        ...sx,
      }}
      {...props}
    >
      <Container>
        <MKTypography variant="h2" color="white">
          {title}
        </MKTypography>
      </Container>
    </MKBox>
  );
}

SectionHeader.defaultProps = {
  bgColor: colors.primary.main,
  sx: {},
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  sx: PropTypes.objectOf(PropTypes.any),
};

export default SectionHeader;
