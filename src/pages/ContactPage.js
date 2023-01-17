import { Typography, IconButton, Grid } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

function ContactPage() {
  return (
    <>
      <Grid container justifyContent="center" style={{ marginTop: "100px", marginBottom: "100px" }}>
        <Typography variant="h6">Juan Nieto</Typography>
      </Grid>
      <Grid container direction="row" justifyContent="center" alignItems="center" style={{ marginTop: "100px"}}>
        <IconButton style={{ color: "white" }}>
          <EmailIcon />
        </IconButton>
        <Typography variant="body1">contactnotachance@gmail.com</Typography>
      </Grid>
      <Grid container direction="row" justifyContent="center" alignItems="center" style={{ marginBottom: "100px" }}>
        <IconButton href="https://www.instagram.com/notachance/" style={{ color: "white" }}>
          <InstagramIcon />
        </IconButton>
        <Typography variant="body1">@notachance</Typography>
      </Grid>
      <Grid container direction="column" justifyContent="center" alignItems="center" style={{ marginTop: "100px", marginBottom: "100px" }}>
        <Typography variant="body1">Film | Photo | Design</Typography>
        <Typography variant="body1">All inquires contact email above.</Typography>
      </Grid>
    </>
  );
}

export default ContactPage;
