// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKInput from "components/MKInput";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import bgImage from "assets/img/me.jpeg";
import { linkedinUrl } from "../../../constants";

const hobbies = [
  {
    icon: "🎬",
    title: "Sci-Fiction Movies",
    content:
      "I love watch movies. I'm so enjoy every kind of different stories bring me some escape time from daily life.",
  },
  {
    icon: "🍲",
    title: "Cooking",
    content:
      " Favorite food is Chinese food, especially spicy!! Not only love eat delicious food, but also willing to learn how to cook them. Cooking make me feel so relax.",
  },
  {
    icon: "🏋",
    title: "Gym work",
    content: "Go to gym every morning. Happy to find some company to join workout together.",
  },
];

function Contact() {
  return (
    <MKBox component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { rgba, linearGradient },
                  }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0.8),
                      rgba(gradients.dark.state, 0.8)
                    )}, url(${bgImage})`,
                  backgroundSize: "cover",
                }}
              >
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                    <MKTypography variant="body1" color="white" opacity={0.8} mb={3}>
                      Reach out if you would like to chat about work opportunities
                    </MKTypography>
                    <MKBox display="flex" color="white" p={1}>
                      <LinkedInIcon />
                      <MKTypography
                        component="a"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                        href={linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {linkedinUrl}
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" color="white" p={1}>
                      <LocationOnIcon />
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        San Francisco, CA
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={7}>
                <MKBox component="form" p={2} method="post" py={{ xs: 2, sm: 6 }}>
                  <MKBox px={3}>
                    <MKTypography variant="h2">Say Hi!</MKTypography>
                    <MKTypography variant="body2" color="text" mb={6}>
                      Chat with me about...
                    </MKTypography>
                  </MKBox>
                  {/* <MKBox pt={0.5} pb={3} px={3}>
                    <Grid container>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          name="author"
                          variant="standard"
                          label="My name is"
                          placeholder=""
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          value={author}
                          onChange={(e) => setAuthor(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          name="title"
                          variant="standard"
                          label="I'd like to talk about"
                          placeholder="A job opportunity..."
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          name="content"
                          variant="standard"
                          label="Tell me more"
                          placeholder="About yourself, your company or what you'd like to know about me..."
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          multiline
                          rows={6}
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      justifyContent="flex-end"
                      textAlign="right"
                      ml="auto"
                    >
                      <MKButton
                        variant="gradient"
                        component="a"
                        color="info"
                        href={`mailto:${email}subject=${title}&body=Hi Yifan,%0AThis is ${author}. ${content}`}
                      >
                        Send Email
                      </MKButton>
                    </Grid>
                  </MKBox> */}
                  {hobbies.map((hobby) => (
                    <MKBox key={hobby.title} px={3} sx={{ display: "flex", mb: 4 }}>
                      <MKTypography variant="h5" sx={{ mr: 2 }}>
                        {hobby.icon}
                      </MKTypography>
                      <MKBox>
                        <MKTypography variant="h5">{hobby.title}</MKTypography>
                        <MKTypography variant="body2" fontWeight="light">
                          {hobby.content}
                        </MKTypography>
                      </MKBox>
                    </MKBox>
                  ))}
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Contact;
