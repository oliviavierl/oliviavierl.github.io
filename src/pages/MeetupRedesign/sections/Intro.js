// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import fbLogo from "assets/img/fb.png";
import eventBriteLogo from "assets/img/eb.png";
import alleventsLogo from "assets/img/ae.png";
import colors from "assets/theme/base/colors";

function Intro() {
  return (
    <MKBox component="section">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 12,
          // "& > p": {
          //   maxWidth: "980px"
          // }
        }}
      >
        <Grid
          container
          rowSpacing={3}
          sx={{
            maxWidth: "680px",
            textAlign: "center",
            pb: 3,
            mb: 12,
            border: "2px dashed",
            borderRadius: "10px",
            borderColor: colors.primary.main,
          }}
        >
          <Grid item xs={4}>
            <MKTypography variant="body2" fontWeight="bold">
              MY ROLE
            </MKTypography>
          </Grid>
          <Grid item xs={4}>
            <MKTypography variant="body2" fontWeight="bold">
              PROJECT TYPE
            </MKTypography>
          </Grid>
          <Grid item xs={4}>
            <MKTypography variant="body2" fontWeight="bold">
              TIMELINE
            </MKTypography>
          </Grid>
          <Grid item xs={4}>
            <MKTypography variant="body2">UI/UX Designer</MKTypography>
          </Grid>
          <Grid item xs={4}>
            <MKTypography variant="body2">Individual Project</MKTypography>
          </Grid>
          <Grid item xs={4}>
            <MKTypography variant="body2">15 Weeks</MKTypography>
          </Grid>
        </Grid>
        <MKTypography
          variant="h3"
          sx={{
            py: 3,
            fontWeight: "bold",
          }}
        >
          Problem Statement
        </MKTypography>
        <MKTypography variant="body2">
          I use this app in my daily life. It's good to find the group of people who share the same
          interests and to meet new friends. And it provides lots of choices when I don’t know what
          to do in my free time. The activities not only for fun but also for exchange knowledge and
          share new ideas. When I'm using this app, I found some steps that make me confusing. It
          will be more convenient if I change it. So i decided to pick this app to do the redesign.
        </MKTypography>
        <MKTypography
          variant="h3"
          sx={{
            mt: 8,
            py: 3,
            fontWeight: "bold",
          }}
        >
          Competitors Analysis
        </MKTypography>
        <MKTypography variant="body2">
          There are some of platforms that provide similar services to Meetup. The community hosts
          need a platform to build and grow their community, a place that lets the audience explore
          and discover events that they are most interested to attend. The similar Apps are like
          Facebook, Eventbrite, Allevents, Glocals, Nextdoor...
        </MKTypography>
        <Grid
          container
          columnSpacing={8}
          rowSpacing={3}
          sx={{
            mt: 3,
            maxWidth: "680px",
            textAlign: "center",
          }}
        >
          <Grid item xs={4}>
            <MKBox component="img" src={fbLogo} alt="logo" width="100%" />
          </Grid>
          <Grid item xs={4}>
            <MKBox component="img" src={eventBriteLogo} alt="logo" width="100%" />
          </Grid>
          <Grid item xs={4}>
            <MKBox component="img" src={alleventsLogo} alt="logo" width="100%" />
          </Grid>
          <Grid item xs={4}>
            <MKTypography variant="body2">
              Facebook has more functions including post photos in personal page, chat with friends
              and add new friends. It’s more for building relationship with other people.
            </MKTypography>
          </Grid>
          <Grid item xs={4}>
            <MKTypography variant="body2">
              Eventbrite provides official activities and events.
            </MKTypography>
          </Grid>
          <Grid item xs={4}>
            <MKTypography variant="body2">
              Allevents stands as the right alternative to meetup. It is the largest and the oldest
              player in the event discovery space which takes care of the needs of the event
              organizers and event-goers.
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Intro;
