// @mui material components
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import SectionHeader from "components/SectionHeader";

// Images
import final11 from "assets/img/final11.png";
import final12 from "assets/img/final12.png";
import final13 from "assets/img/final13.png";
import final14 from "assets/img/final14.png";
import final15 from "assets/img/final15.png";

const imgSx = {
  mb: 3,
};

const imgs = [final11, final12, final13, final14, final15];

function FinalWireframes() {
  return (
    <MKBox component="section">
      <SectionHeader title="Final Wireframes" />
      <Container sx={{ py: 12 }}>
        <>
          {imgs.map((img, i) => (
            <MKBox
              component="img"
              src={img}
              key={`designUpdates-img-${i}`}
              alt="Design Updates"
              width="100%"
              sx={imgSx}
            />
          ))}
        </>
      </Container>
    </MKBox>
  );
}

export default FinalWireframes;
