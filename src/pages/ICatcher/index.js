// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Author page sections
import bgImage from "assets/img/cover3.jpg";
import Intro from "./sections/Intro";
import DesignProcess from "./sections/DesignProcess";
import BrandGuidelines from "./sections/BrandGuidelines";
import UserTest from "./sections/UserTest";
import Finals from "./sections/Finals";
import Modifications from "./sections/Modifications";

function ICatcher() {
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
          <MKTypography variant="h1">iCatcher</MKTypography>
          <MKTypography variant="h5" mt={1}>
            Better Experience of Sharing Ideas and Manage Inspirations
          </MKTypography>
        </MKBox>
        <MKBox component="img" src={bgImage} alt="logo" width="100%" />
        <Intro />
        <DesignProcess />
        <BrandGuidelines />
        <UserTest />
        <Modifications />
        <Finals />
      </MKBox>
    </>
  );
}

export default ICatcher;
