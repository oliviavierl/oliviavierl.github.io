// @mui material components
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import c0 from "assets/img/moodboard.png";
import c1 from "assets/img/color.png";
import c2 from "assets/img/typo.png";
import c3 from "assets/img/ai.png";
import colors from "assets/theme/base/colors";

const imgs = [c0, c1, c2, c3];

function ComponentLibrary() {
  return (
    <MKBox component="section" sx={{ backgroundColor: colors.showcaseColors.dark }}>
      <Container sx={{ py: 12, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <MKTypography
          variant="h3"
          sx={{
            py: 3,
            fontWeight: "bold",
            color: colors.white.main,
          }}
        >
          Component Library
        </MKTypography>
        <MKTypography
          variant="body2"
          sx={{
            mb: 12,
            color: colors.white.main,
          }}
        >
          I created a component library, allowing me to craft the interface of the product with
          speed. This also gives the development team all the basics and variations needed.
        </MKTypography>
        {imgs.map((img, i) => (
          <MKBox
            component="img"
            src={img}
            key={`ComponentLibrary-img-${i}`}
            alt="Design Updates"
            width="100%"
          />
        ))}
      </Container>
    </MKBox>
  );
}

export default ComponentLibrary;
