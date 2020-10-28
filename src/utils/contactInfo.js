import Resume from "../assets/images/Dan_Weikart_Resume.pdf";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function ContactInfo(ariaLabel, icon, target, pLabel, href) {
  this.ariaLabel = ariaLabel;
  this.icon = icon;
  this.target = target;
  this.pLabel = pLabel;
  this.href = href;
}

const email = new ContactInfo(
  "email",
  <MailIcon/>,
  "_blank",
  "danmweikart@gmail.com",
  "mailto: danmweikart@gmail.com"
);

const github = new ContactInfo(
  "github",
  <GitHubIcon/>,
  "_blank",
  "https://github.com/thedanitor",
  "https://github.com/thedanitor"
);

const linkedIn = new ContactInfo(
  "linkedIn",
  <LinkedInIcon/>,
  "_blank",
  "https://www.linkedin.com/in/dan-weikart/",
  "https://www.linkedin.com/in/dan-weikart/"
);

const resume = new ContactInfo(
  "resume",
  <PictureAsPdfIcon/>,
  "_blank",
  "Resume",
  Resume
);

const location = new ContactInfo(
  "location",
  <LocationOnIcon/>,
  "_blank",
  "Seattle, WA",
  ""
);

let contactInfo = [email, github, linkedIn, resume, location];

export default contactInfo;