// import React from "react";
// import { Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import Badge from "@material-ui/core/Badge";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";
// import MoreIcon from "@material-ui/icons/MoreVert";
// import Button from "@material-ui/core/Button";
// import HomeIcon from "@material-ui/icons/Home";
// import CategoryIcon from "@material-ui/icons/Category";
// import InfoIcon from "@material-ui/icons/Info";
// import CreateIcon from "@material-ui/icons/Create";

// import clsx from 'clsx';
// // import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// // import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import MailIcon from '@material-ui/icons/Mail';

// //Need to change all Icons

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//     display: "none",
//     [theme.breakpoints.up("sm")]: {
//       display: "block",
//     },
//   },
//   sectionDesktop: {
//     display: "none",
//     justifyContent: "center",
//     [theme.breakpoints.up("sm")]: {
//       display: "flex",
//     },
//   },
//   sectionMobile: {
//     display: "flex",
//     [theme.breakpoints.up("sm")]: {
//       display: "none",
//       justify: "space-between",
//     },
//   },
//   //list drawer
//   list: {
//     width: 350,
//   },
//   fullList: {
//     width: 'auto',
//   },
// }));

// export default function Navbar() {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   //drawer
//   const [state, setState] = React.useState({
//     right: false,
//   });

//   const toggleDrawer = (anchor="right", open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <div
//       // className={clsx(classes.list, {
//       //   [classes.fullList]: anchor === 'top' || anchor === 'bottom',
//       // })}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {[ "danmweikart@gmail.com", "thedanitor", "linkedIn", "Seattle, WA"].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon><MailIcon /></ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );





//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = event => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = "primary-search-account-menu";
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{ vertical: "top", horizontal: "right" }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{ vertical: "top", horizontal: "right" }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = "primary-search-account-menu-mobile";

// //   Array to store mobile menu items, will be rendered by .map
//   const menuItems = [
//     {
//       ariaLabel: "home",
//       icon: <HomeIcon />,
//       pLabel: "Home",
//       link: "/",
//     },
//     {
//       ariaLabel: "about",
//       icon: <CategoryIcon href="/about" />,
//       pLabel: "About",
//       link: "/about",
//     },
//     {
//       ariaLabel: "projects",
//       icon: <CreateIcon href="/projects" />,
//       pLabel: "Projects",
//       link: "/projects",
//     },
//     {
//       ariaLabel: "skills",
//       icon: <InfoIcon href="/skills" />,
//       pLabel: "Skills",
//       link: "/skills",
//     },
//     {
//       ariaLabel: "contact",
//       icon: <InfoIcon onClick={toggleDrawer(true)} />,
//       pLabel: "Contact",
//       link: "/contact",
//     },
//   ];

//   return (
//     <div className={classes.root}>
//            <AppBar position="static">
//         <Toolbar>
//           <div className={classes.grow} />
//           <div className={classes.sectionDesktop}>
 
//             <Button color="inherit" href="/">
//               Home
//             </Button>
//             <Button color="inherit" href="/About">
//               About Me
//             </Button>
//             <Button color="inherit" href="/Projects">
//               Projects
//             </Button>
//             <Button color="inherit" href="/Skills">
//               Skills
//             </Button>
//             <Button  color="inherit">
//       {['Contact'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </Button>
            
//           </div>
//           <div className={classes.sectionMobile}>
//             <IconButton
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </div>
//         </Toolbar>
//       </AppBar>
//             {/* renderMobileMenu */}
//             <Menu
//         anchorEl={mobileMoreAnchorEl}
//         anchorOrigin={{ vertical: "top", horizontal: "right" }}
//         id={mobileMenuId}
//         keepMounted
//         transformOrigin={{ vertical: "top", horizontal: "right" }}
//         open={isMobileMenuOpen}
//         onClose={handleMobileMenuClose}
//       >
//         {menuItems.map(item => (
//           <MenuItem key={item.pLabel} component={Link} to={item.link}>
//             <IconButton aria-label={item.ariaLabel} color="inherit">
//               <Badge color="secondary">{item.icon}</Badge>
//             </IconButton>
//             <p>{item.pLabel}</p>
//           </MenuItem>
//         ))}
//       </Menu>
//       {renderMenu}
//     </div>
//   );
// }
