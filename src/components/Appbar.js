import React from 'react';
import clsx from 'clsx';
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import GitHubIcon from '@material-ui/icons/GitHub';
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import CategoryIcon from "@material-ui/icons/Category";
import InfoIcon from "@material-ui/icons/Info";
import CreateIcon from "@material-ui/icons/Create";

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
      justify: "space-between",
    },
  },

}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

//   const handleDrawer = () => {
//     (setOpen(true) ? setOpen(false) : setOpen(true));
//     console.log(setOpen)
//   };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";

//   Array to store mobile menu items, will be rendered by .map
  const menuItems = [
    {
      ariaLabel: "home",
      icon: <HomeIcon />,
      pLabel: "Home",
      link: "/",
    },
    {
      ariaLabel: "about",
      icon: <CategoryIcon href="/about" />,
      pLabel: "About",
      link: "/about",
    },
    {
      ariaLabel: "projects",
      icon: <CreateIcon href="/projects" />,
      pLabel: "Projects",
      link: "/projects",
    },
    {
      ariaLabel: "skills",
      icon: <InfoIcon href="/skills" />,
      pLabel: "Skills",
      link: "/skills",
    },
    // {
    //   ariaLabel: "contact",
    //   icon: <InfoIcon href="/contact" />,
    //   pLabel: "Contact",
    //   link: "/contact",
    //   onclick: {handleDrawerOpen}
    // },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="static"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
        <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
 
            <Button color="inherit" href="/">
              Home
            </Button>
            <Button color="inherit" href="/About">
              About Me
            </Button>
            <Button color="inherit" href="/Projects">
              Projects
            </Button>
            <Button color="inherit" href="/Skills">
              Skills
            </Button>
            
          <Button
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            // onClick={setOpen}
            edge="start"
            // className={clsx(classes.menuButton
            //     // , open
            //     //  && classes.hide
            //      )}
          >
              Contact
            </Button>
            
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>

          {/* <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography> */}
        </Toolbar>
      </AppBar>
        {/* renderMobileMenu */}
        <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        {menuItems.map(item => (
          <MenuItem key={item.pLabel} component={Link} to={item.link}>
            <IconButton aria-label={item.ariaLabel} color="inherit">
              <Badge color="secondary">{item.icon}</Badge>
            </IconButton>
            <p>{item.pLabel}</p>
          </MenuItem>
        ))}
        <MenuItem >
        <IconButton aria-label="contact" color="inherit" onClick={handleDrawerOpen}>
              <Badge color="secondary">Contact</Badge>
            </IconButton>
        </MenuItem>
      </Menu>
      {renderMenu}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <List>
        {[ "danmweikart@gmail.com", "https://github.com/thedanitor", "https://www.linkedin.com/in/dan-weikart/", "Seattle, WA"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><MailIcon /><GitHubIcon/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      </Drawer>
    </div>
  );
}