import lernImg from "../assets/images/lern_4-3.png";
import lernWide from "../assets/images/lern_wide.png";
import aqirImg from "../assets/images/aqir_home_screen_4-3.png";
import aqirWide from "../assets/images/aqir_home_screen_wide.png";
import burgerImg from "../assets/images/burger_4-3.png";
import burgerWide from "../assets/images/burger_wide.png";
// import dayPlannerImg from "../assets/images/dayPlanner_4-3.png";
// import dayPlannerWide from "../assets/images/dayPlanner_wide.png";
import employeeRosterImg from "../assets/images/employeeRoster_4-3.png";
import employeeRosterWide from "../assets/images/employeeRoster_wide.png";
import fearSettingImg from "../assets/images/fearSetting_4-3.png";
import fearSettingWide from "../assets/images/fearSetting_Home_wide.png";
import weatherDashboardImg from "../assets/images/weatherDashboard_4-3.png";
import weatherDashboardWide from "../assets/images/weatherDashboard_wide.png";

function ProjectData(
  name,
  image,
  imageLarge,
  tech,
  description,
  webUrl,
  githubUrl
) {
  this.name = name;
  this.image = image;
  this.imageLarge = imageLarge;
  this.tech = tech;
  this.description = description;
  this.webUrl = webUrl;
  this.githubUrl = githubUrl;
}

const lernProject = new ProjectData(
  "LERN",
  lernImg,
  lernWide,
  "HTML / CSS / JavaScript / MongoDB / Node / Express / React / Material-UI",
  "LERN is an open source education platform for taking and teaching online courses.",
  "https://lern-demo.herokuapp.com/",
  "https://github.com/jaredhennessy/LERN"
);

const aqirProject = new ProjectData(
  "AQIR",
  aqirImg,
  aqirWide,
  "HTML / CSS / JavaScript / MySQL / Node / Express / Handlebars / Bulma",
  "AQIR is an exclusive retail website that allows users to buy and sell products from the comfort of their home. Just sign up, login, and add or sell products with a community of users from around the world.",
  "https://thawing-castle-93200.herokuapp.com/",
  "https://github.com/ngoudeau2012/project_aqir"
);

const burgerProject = new ProjectData(
  "Add-A-Burger",
  burgerImg,
  burgerWide,
  "HTML / CSS / JavaScript / MySQL / Node / Express",
  "This website allows the user to enter a burger and virtually eat it.",
  "https://desolate-lake-88322.herokuapp.com/",
  "https://github.com/thedanitor/burger"
);

const employeeRosterProject = new ProjectData(
  "Employee Roster",
  employeeRosterImg,
  employeeRosterWide,
  "HTML / CSS / JavaScript / Node",
  "Once installed, this command line application prompts the user with questions to build an employee roster. The roster is then rendered to an HTML page.",
  "",
  "https://github.com/thedanitor/Employee_Roster"
);

const fearSetterProject = new ProjectData(
  "Fear Setter",
  fearSettingImg,
  fearSettingWide,
  "HTML / CSS / JavaScript / jQuery / UIkit",
  "AQIR is an exclusive retail website that allows users to buy and sell products from the comfort of their home. Just sign up, login, and add or sell products with a community of users from around the world.",
  "https://thedanitor.github.io/Project-1_Fear-Setter/",
  "https://github.com/thedanitor/Project-1_Fear-Setter"
);

const weatherProject = new ProjectData(
  "Weather Dashboard",
  weatherDashboardImg,
  weatherDashboardWide,
  "HTML / CSS / JavaScript / jQuery",
  "Search for current weather conditions and forecast for the next 5 days in any city.",
  "https://thedanitor.github.io/Weather_Dashboard/",
  "https://github.com/thedanitor/Weather_Dashboard"
);

// const dayPlannerProject = new ProjectData(
//   "Workday Scheduler App",
//   dayPlannerImg,
//   dayPlannerWide,
//   "HTML / CSS / JavaScript",
//   "Simple workday planner app. Save meetings to local storage.",
//   "https://thedanitor.github.io/Work_Day_Scheduler/",
//   "https://github.com/thedanitor/Work_Day_Scheduler"
// );

let portfolioList = [
  lernProject,
  aqirProject,
  burgerProject,
  employeeRosterProject,
  fearSetterProject,
  weatherProject,
  // dayPlannerProject,
  
];

export default portfolioList;
