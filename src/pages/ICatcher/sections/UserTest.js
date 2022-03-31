// @mui material components
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import SectionHeader from "components/SectionHeader";

// Images
import users from "assets/img/users.png";
import abtest from "assets/img/abtest.png";
import colors from "assets/theme/base/colors";
import PreviewableImg from "components/PreviewableImg";

function UserTest() {
  return (
    <MKBox component="section">
      <SectionHeader
        title="User Test"
        bgColor={`linear-gradient(160deg, ${colors.showcaseColors.grey}, ${colors.black.main})`}
      />
      <Container sx={{ py: 12, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <MKTypography
          variant="h3"
          sx={{
            py: 3,
            fontWeight: "bold",
          }}
        >
          Two Rounds of User Tests
        </MKTypography>
        <MKTypography variant="body2">
          I did two rounds of user test. I interviewed 6 people from students to work people. They
          are from different majors and occupations. I let them test the user flow to know better
          how the real users will use my app. Is it easy to use? Are there any confusing steps? And
          how they feel about my design. I got lots of feedback from them, which helps me a lot for
          the futher modifying.
        </MKTypography>
        <MKBox component="img" src={users} alt="Design Updates" width="100%" />
        <MKTypography
          variant="h3"
          sx={{
            py: 3,
            fontWeight: "bold",
          }}
        >
          A/B Test
        </MKTypography>
        <MKTypography variant="body2">
          I also Design a A/B test version of feature two. To learn which design page layout
          converts into higher usage. The metric they are tracking would be how long time they
          finish the flow.
        </MKTypography>
        <PreviewableImg src={abtest} alt="A/B Test" width="100%" />
      </Container>
    </MKBox>
  );
}

export default UserTest;
