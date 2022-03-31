import React, { useState } from "react";
// @mui material components
import { Container, Tooltip, Button, Zoom, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/img/avatar.png";
import colors from "assets/theme/base/colors";
import { linkedinUrl, email, instagramUrl, resumeUrl } from "../../../constants";

function Profile() {
  const [open, openSnackbar] = useState(false);

  return (
    <Container sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <MKBox sx={{ mt: -8, mb: 5 }}>
        <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
      </MKBox>
      <MKTypography variant="h3">Yifan Li</MKTypography>
      <MKBox sx={{ display: "flex", alignItems: "center", mt: 1, mb: 5 }}>
        <Tooltip title="Resume" TransitionComponent={Zoom}>
          <Link target="_blank" href={resumeUrl} mr={3} sx={{ display: "flex" }}>
            <HistoryEduIcon color="primary" />
          </Link>
        </Tooltip>
        <Link target="_blank" href={linkedinUrl} mr={3} sx={{ display: "flex" }}>
          <LinkedInIcon />
        </Link>
        <Tooltip
          TransitionComponent={Zoom}
          open={open}
          onClose={() => openSnackbar(false)}
          title="Email copied to clipboard"
        >
          <Button
            variant="text"
            sx={{
              mr: 3,
              p: 0,
              minWidth: 0,
              minHeight: 0,
              color: colors.dark.main,
              "&:hover, &:active, &:focus": {
                color: colors.dark.main,
              },
            }}
            onClick={() => {
              navigator.clipboard.writeText(email).then(
                () => {
                  openSnackbar(true);
                },
                () => {
                  window.location.href = `mailto:${email}`;
                }
              );
            }}
          >
            <EmailIcon sx={{ width: "20px", height: "20px" }} />
          </Button>
        </Tooltip>
        <Link target="_blank" href={instagramUrl} sx={{ display: "flex" }}>
          <InstagramIcon />
        </Link>
      </MKBox>
      <MKTypography variant="body1" fontWeight="light" mx={{ xs: 0, lg: 6 }}>
        I'm a ux /ui designer who loves clean, simple & unique design. I also enjoy crafting brand
        identities, icons, & ilustration work. I'm good at communicating with people, glad to work
        as a team and collaborate with other teammates. I'm willing to learn new things and grow
        with the team.
      </MKTypography>
    </Container>
  );
}

export default Profile;
