// @mui material components
import { Card } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// Images
import bgImage from "assets/img/about_bg.jpeg";

// Author page sections
import Profile from "./sections/Profile";
// import Posts from "./sections/Posts";
import Contact from "./sections/Contact";
// import Footer from "./sections/Footer";

function About() {
  return (
    <>
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.1)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: "none",
          }}
        >
          <Profile />
          {/* <Posts /> */}
        </Card>
        <Contact />
      </MKBox>
    </>
  );
}

export default About;
