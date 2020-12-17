import Resume from "../assets/images/Dan_Weikart_Resume.pdf";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText, faMap } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

function ContactInfo(ariaLabel, icon, target, pLabel, href) {
  this.ariaLabel = ariaLabel;
  this.icon = icon;
  this.target = target;
  this.pLabel = pLabel;
  this.href = href;
}

const email = new ContactInfo(
  "email",
  faEnvelopeOpenText,
  "_blank",
  "danmweikart@gmail.com",
  "mailto: danmweikart@gmail.com"
);

const github = new ContactInfo(
  "github",
  faGithub,
  "_blank",
  "thedanitor",
  "https://github.com/thedanitor"
);

const linkedIn = new ContactInfo(
  "linkedIn",
  faLinkedin,
  "_blank",
  "dan-weikart",
  "https://www.linkedin.com/in/dan-weikart/"
);

const resume = new ContactInfo(
  "resume",
  faFilePdf,
  "_blank",
  "Resume",
  Resume
);

const location = new ContactInfo(
  "location",
  faMap,
  "_blank",
  "Seattle, WA",
  "https://www.google.com/maps/place/Seattle,+WA/@47.6129432,-122.4821475,11z/data=!3m1!4b1!4m5!3m4!1s0x5490102c93e83355:0x102565466944d59a!8m2!3d47.6062095!4d-122.3320708"
);

let contactInfo = [email, github, linkedIn, resume, location];

export default contactInfo;