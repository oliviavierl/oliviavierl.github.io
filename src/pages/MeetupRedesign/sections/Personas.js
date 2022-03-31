// @mui material components
import { Card, CardMedia, Container } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import SectionHeader from "components/SectionHeader";
import Tabs from "components/Tabs";
import borders from "assets/theme/base/borders";

// Images
import p1 from "assets/img/p1.png";
import p21 from "assets/img/p21.png";
import p2 from "assets/img/p2.png";
import p22 from "assets/img/p22.png";
import p3 from "assets/img/p3.png";
import p33 from "assets/img/p33.png";

const imgs = [
  [p1, p21],
  [p2, p22],
  [p3, p33],
];

function Personas() {
  return (
    <MKBox component="section">
      <SectionHeader title="Personas" />
      <Container sx={{ py: 12 }}>
        {/* TODO */}
        <Tabs
          sx={{ width: "100%" }}
          items={imgs.map((imgSection, i) => (
            <Card
              key={`persona-img-${i}`}
              sx={{
                border: "1px solid rgba(0, 0, 0, 0.12)",
                borderTop: "none",
                p: 3,
                borderTopRightRadius: 0,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: borders.borderRadius.xl,
                borderBottomRightRadius: borders.borderRadius.xl,
              }}
            >
              {imgSection.map((img, j) => (
                <CardMedia
                  key={`persona-img-${j}`}
                  component="img"
                  image={img}
                  alt="persona image"
                />
              ))}
            </Card>
          ))}
          buttons={["Amanda", "George", "Penny"]}
        />
      </Container>
    </MKBox>
  );
}

export default Personas;
