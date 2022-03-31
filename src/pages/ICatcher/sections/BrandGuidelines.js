// @mui material components
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import SectionHeader from "components/SectionHeader";

// Images
import brandguidelines from "assets/img/brandguidelines.png";
import colors from "assets/theme/base/colors";

function BrandGuidelines() {
  return (
    <MKBox component="section">
      <SectionHeader
        title="Branding"
        bgColor={`linear-gradient(160deg, ${colors.showcaseColors.grey}, ${colors.black.main})`}
      />
      <Container sx={{ py: 12 }}>
        <MKBox component="img" src={brandguidelines} alt="Brand Guidelines" width="100%" />
      </Container>
    </MKBox>
  );
}

export default BrandGuidelines;
