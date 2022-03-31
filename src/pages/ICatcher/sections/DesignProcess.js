import { Card, CardMedia, Container, Grid } from "@mui/material";
import PreviewableImg from "components/PreviewableImg";
import Tabs from "components/Tabs";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import SectionHeader from "components/SectionHeader";
import borders from "assets/theme/base/borders";

// Images
import dp1 from "assets/img/1.png";
import dp2 from "assets/img/2.png";
import dp3 from "assets/img/3.png";
import dp4 from "assets/img/4.png";
import pinterest from "assets/img/pinterest.png";
import sitemap from "assets/img/sitemap.png";
import persona1 from "assets/img/persona1.png";
import persona2 from "assets/img/persona2.png";
import sticker from "assets/img/stickers.png";
import first1 from "assets/img/first1.png";
import colors from "assets/theme/base/colors";

const imgs = [dp1, dp2, dp3, dp4];

function DesignProcess() {
  return (
    <MKBox component="section">
      <SectionHeader
        title="Design Process"
        bgColor={`linear-gradient(160deg, ${colors.showcaseColors.grey}, ${colors.black.main})`}
      />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 12,
        }}
      >
        <MKTypography
          variant="h3"
          sx={{
            py: 3,
            fontWeight: "bold",
          }}
        >
          Research
        </MKTypography>
        <MKTypography variant="body2">
          I interviewed four persons from different major to know better about how people gather
          inspirations and manage them in thier daily life to better understand these learning
          goals.
        </MKTypography>
        <MKTypography variant="body2" sx={{ color: colors.primary.main, alignSelf: "flex-start" }}>
          Learning Goal 1 To understand what habits people have when they are searching for
          inspirations online.
        </MKTypography>
        <MKTypography variant="body2" sx={{ color: colors.primary.main, alignSelf: "flex-start" }}>
          Learning Goal 2 To understand how people save thier inspirations in the daily life.
        </MKTypography>
        <MKBox sx={{ width: "100%", display: "flex" }}>
          {imgs.map((img, i) => (
            <MKBox
              component="img"
              src={img}
              key={`designUpdates-img-${i}`}
              alt="Brand Guidelines"
              sx={{
                minWidth: 0,
              }}
            />
          ))}
        </MKBox>
        <MKTypography
          variant="h3"
          sx={{
            mt: 10,
            mb: 2,
            fontWeight: "bold",
          }}
        >
          Competitors Analysis
        </MKTypography>
        <Grid container columnSpacing={8} rowSpacing={3}>
          <Grid
            item
            container
            xs={12}
            lg={4}
            sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <MKBox
              component="img"
              src={pinterest}
              alt="pinterest logo"
              sx={{ height: "80px", margin: "10px auto" }}
            />
            <MKTypography
              variant="body1"
              sx={{
                textAlign: "center",
              }}
            >
              Pinterest
            </MKTypography>
          </Grid>
          <Grid item container xs={12} lg={4} rowSpacing={3}>
            <Grid item xs={12}>
              <MKTypography
                variant="body1"
                sx={{
                  textAlign: "center",
                  color: colors.primary.main,
                }}
              >
                Adventages
              </MKTypography>
            </Grid>
            <Grid item xs={12}>
              <MKTypography variant="body2" sx={{ mb: 3 }}>
                1. Pinterest have tags for classifing the pinstures and folders.
              </MKTypography>
              <MKTypography variant="body2">
                2. The layout of Pinterest is very clear to show more pictures.
              </MKTypography>
            </Grid>
          </Grid>
          <Grid item container xs={12} lg={4} rowSpacing={3}>
            <Grid item xs={12}>
              <MKTypography
                variant="body1"
                sx={{
                  textAlign: "center",
                  color: colors.primary.main,
                }}
              >
                Disadventages
              </MKTypography>
            </Grid>
            <Grid item xs={12} sx={{ height: "100%" }}>
              <MKTypography variant="body2">
                Some app or website needs too many steps for saving pictures, like Pinterest. It's
                hard to manage and move pictures to diferrent folders.
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
        <MKTypography
          variant="h3"
          sx={{
            mt: 10,
            mb: 2,
            fontWeight: "bold",
          }}
        >
          Sitemap
        </MKTypography>
        <MKTypography variant="body2">
          Based on the reserch result I did before, I list down some ideas for the app design. I use
          Miro to create a mindmap board that helps me to think which functions I should add and
          what forms of inspiration I will make in my app design. It makes the navigation of my app
          design more clear.
        </MKTypography>
        <MKBox component="img" src={sitemap} alt="pinterest logo" width="100%" />
        <MKTypography variant="body2">
          From the sitemap, I made a list of main features that my app will have are as bellow:
        </MKTypography>
        <Grid
          container
          columnSpacing={8}
          rowSpacing={3}
          sx={{
            mt: 3,
            mb: 12,
            textAlign: "center",
          }}
        >
          <Grid item xs={4}>
            <MKTypography
              variant="body1"
              sx={{
                color: colors.primary.main,
              }}
            >
              Save inspirations of different forms
            </MKTypography>
          </Grid>
          <Grid item xs={4}>
            <MKTypography
              variant="body1"
              sx={{
                color: colors.primary.main,
              }}
            >
              Community for sharing works and make friends
            </MKTypography>
          </Grid>
          <Grid item xs={4}>
            <MKTypography
              variant="body1"
              sx={{
                color: colors.primary.main,
              }}
            >
              Manage folders of other apps
            </MKTypography>
          </Grid>
          <Grid item xs={4}>
            <MKTypography variant="body2">
              Create a new work of variable forms, like photo editing, add text and stickers,
              drawing, and picture collage, etc. Save them to the local folders.
            </MKTypography>{" "}
          </Grid>
          <Grid item xs={4}>
            <MKTypography variant="body2">
              Post works for sharing to other people and get comments. View other people's works to
              get new ideas. Also follow the people you like and make friends.
            </MKTypography>
          </Grid>
          <Grid item xs={4}>
            <MKTypography variant="body2">
              By link to other app, you can manage all the folders easier through using only one
              app.
            </MKTypography>
          </Grid>
        </Grid>
        <MKTypography
          variant="h3"
          sx={{
            py: 3,
            fontWeight: "bold",
          }}
        >
          Personas
        </MKTypography>
        <MKTypography variant="body2">
          To understand better of how people will use my app, I create two personas that are from
          the target users of my app. Based on each background, I made user flows for each person
          and create my wireframes from that.
        </MKTypography>
        {/* <MKBox component="img" src={persona1} alt="persona" width="100%" sx={{ mt: 8, mb: 15 }} />
        <MKBox component="img" src={persona2} alt="persona" width="100%" /> */}
        <Tabs
          sx={{
            width: "100%",
            mt: 6,
          }}
          items={[persona1, persona2].map((img, i) => (
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
              <CardMedia component="img" image={img} alt="persona image" />
            </Card>
          ))}
          buttons={["Zoe", "Matt"]}
        />
        <MKTypography
          variant="h3"
          sx={{
            mt: 10,
            py: 3,
            fontWeight: "bold",
          }}
        >
          Brainstorming & Concept Sketching
        </MKTypography>
        <MKTypography variant="body2">
          As I start brainstorming, I define the vision, mision and goals of my app idea. I choose
          one goal and write down the features that will fit for this goal. Then I draw some
          sketches of wireframe.
        </MKTypography>
        <MKBox component="img" src={sticker} alt="Concept" width="100%" sx={{ mt: 8, mb: 15 }} />
        <MKTypography
          variant="h3"
          sx={{
            py: 3,
            fontWeight: "bold",
          }}
        >
          First Version of Design
        </MKTypography>
        <MKTypography variant="body2">
          Based on the research and preparation before, I created the frame works. And here are the
          first version of my design show as below. later I will use these for user test. Then
          modify and polish it to the better version.
        </MKTypography>
        <PreviewableImg src={first1} alt="Concept" width="100%" sx={{ mt: 8, mb: 15 }} />
      </Container>
    </MKBox>
  );
}

export default DesignProcess;
