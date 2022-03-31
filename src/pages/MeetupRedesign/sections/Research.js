// @mui material components
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import SectionHeader from "components/SectionHeader";

// Images
import researchImg from "assets/img/pro1.png";
import PreviewableImg from "components/PreviewableImg";

const paragraphSx = {
  mb: 3,
};

function Research() {
  return (
    <MKBox component="section">
      <SectionHeader title="Research" />
      <Container sx={{ py: 12 }}>
        <PreviewableImg src={researchImg} alt="research" width="100%" sx={paragraphSx} />
        <MKTypography variant="body2" sx={paragraphSx}>
          Top three themes from brainstorm.
        </MKTypography>
        <MKTypography variant="body2" sx={paragraphSx}>
          1. Make the category button easy to find. Add search bar, be able to search while checking
          the category. Make the category icon smaller and into a circle shape
        </MKTypography>
        <MKTypography variant="body2" sx={paragraphSx}>
          2. Delete the time options and make the space more clear. Change the “+” icon to a star
          icon
        </MKTypography>
        <MKTypography variant="body2">
          3. Add photo to each group. Make the picture bigger to make the result list more
          attractive. Put less text information of each group and delete the other participants icon
        </MKTypography>
      </Container>
    </MKBox>
  );
}

export default Research;
