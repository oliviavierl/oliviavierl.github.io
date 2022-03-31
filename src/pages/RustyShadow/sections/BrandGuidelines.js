// @mui material components
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import SectionHeader from "components/SectionHeader";

// Images
import rs1 from "assets/img/rs-typo.png";
import rs2 from "assets/img/rs-logo.png";
import colors from "assets/theme/base/colors";

const imgSx = {
  mb: 3,
};

const imgs = [rs1, rs2];

function BrandGuidelines() {
  return (
    <MKBox component="section">
      <SectionHeader title="Brand Guidelines" bgColor={colors.showcaseColors.dark} />
      <Container sx={{ py: 12 }}>
        <>
          {imgs.map((img, i) => (
            <MKBox
              component="img"
              src={img}
              key={`designUpdates-img-${i}`}
              alt="Brand Guidelines"
              width="100%"
              sx={imgSx}
            />
          ))}
        </>
      </Container>
    </MKBox>
  );
}

export default BrandGuidelines;
