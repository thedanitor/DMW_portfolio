// import HomeIcon from "@material-ui/icons/Home";
// import CategoryIcon from "@material-ui/icons/Category";
// import InfoIcon from "@material-ui/icons/Info";
// import CreateIcon from "@material-ui/icons/Create";

import { faHome, faInfoCircle, faBriefcase, faLightbulb } from "@fortawesome/free-solid-svg-icons";

function MenuItem(ariaLabel, icon, pLabel, link) {
  this.ariaLabel = ariaLabel;
  this.icon = icon;
  this.pLabel = pLabel;
  this.link = link;
}

const home = new MenuItem("home", faHome, "Home", "/");

const about = new MenuItem("about", faInfoCircle, "About", "/about");

const projects = new MenuItem("projects", faBriefcase, "Projects", "/projects");

const skills = new MenuItem("skills", faLightbulb, "Skills", "/skills");


// const home = new MenuItem("home", <HomeIcon />, "Home", "/");

// const about = new MenuItem("about", <InfoIcon />, "About", "/about");

// const projects = new MenuItem("projects", <CreateIcon />, "Projects", "/projects");

// const skills = new MenuItem("skills", <CategoryIcon />, "Skills", "/skills");

let menuItems = [home, about, projects, skills];

export default menuItems;
