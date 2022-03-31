// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Author page sections
import bgImage from "assets/img/cover2.jpg";
import Intro from "./sections/Intro";
import BrandGuidelines from "./sections/BrandGuidelines";
import Personas from "./sections/Personas";
import ComponentLibrary from "./sections/ComponentLibrary";
import Finals from "./sections/Finals";

function RustyShadow() {
  return (
    <>
      <MKBox bgColor="white">
        <MKBox
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            textAlign: "center",
            pt: { xs: "15vh", lg: "30vh" },
            pb: { xs: "5vh", lg: "20vh" },
          }}
        >
          <MKTypography variant="h1">RustyShadow</MKTypography>
          <MKTypography variant="h5" mt={1}>
            A Convenient, Full-featured Community for Urban Exploration Lovers
          </MKTypography>
        </MKBox>
        <MKBox component="img" src={bgImage} alt="logo" width="100%" />
        <Intro />
        <BrandGuidelines />
        <ComponentLibrary />
        <Personas />
        <Finals />
      </MKBox>
    </>
  );
}

export default RustyShadow;
