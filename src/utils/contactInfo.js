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
  "https://github.com/thedanitor",
  "https://github.com/thedanitor"
);

const linkedIn = new ContactInfo(
  "linkedIn",
  faLinkedin,
  "_blank",
  "https://www.linkedin.com/in/dan-weikart/",
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
  ""
);

let contactInfo = [email, github, linkedIn, resume, location];

export default contactInfo;