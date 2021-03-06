import React from "react";
import contactInfo from "../utils/contactInfo";
import menuItems from "../utils/menuItems";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    boxShadow: "none",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: "rgba(97,158,215,0.95)",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
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
    margin: "auto",
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
  mobileMenu: {
    color: "rgba(97,158,215,0.95)",
    margin: 0,
    padding: 0,
  },
  navMenuItemMobile: {
    margin: 0,
  },
  navIconMobile: {
    margin: "1rem",
  },
  navButtonMobile: {
    margin: 0,
  },
  navButtonDesktop: {
    fontFamily: "Archivo Black",
  },
  contactListItem: {
    margin: "1rem",
    [theme.breakpoints.down(300)]: {
      margin: "0.75rem",
    },
  },
  contactListItemText: {
    fontFamily: "Archivo Black",
    [theme.breakpoints.down(300)]: {
      fontSize: "0.75rem",
    },
  },
  contactListIconLink: {
    [theme.breakpoints.down(300)]: {
      fontSize: "1.5rem",
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
    ></Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="transparent"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button
              color="primary"
              href="/"
              className={classes.navButtonDesktop}
            >
              Home
            </Button>
            <Button
              color="primary"
              href="/About"
              className={classes.navButtonDesktop}
            >
              About
            </Button>
            <Button
              color="primary"
              href="/Projects"
              className={classes.navButtonDesktop}
            >
              Projects
            </Button>
            <Button
              color="primary"
              href="/Skills"
              className={classes.navButtonDesktop}
            >
              Skills
            </Button>
            <Button
              className={classes.navButtonDesktop}
              color="primary"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
            >
              Contact
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <Button
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="primary"
            >
              <FontAwesomeIcon
                icon={faHamburger}
                aria-label="hamburger"
                size="2x"
                className={classes.navIconMobile}
              />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      {/* renderMobileMenu */}
      <Menu
        className={classes.mobileMenu}
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={index}
            component={Link}
            to={menuItem.link}
            color="primary"
            className={classes.navMenuItemMobile}
          >
            <Button className={classes.navButtonMobile}>
              {menuItem.pLabel}
            </Button>
          </MenuItem>
        ))}
        <MenuItem className={classes.navMenuItemMobile}>
          <Button
            onClick={handleDrawerOpen}
            className={classes.navButtonMobile}
          >
            Contact
          </Button>
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
            {theme.direction === "ltr" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>

        <List>
          {contactInfo.map((infoItem, index) => (
            <ListItem key={index}>
              <a
                href={infoItem.href}
                target={infoItem.target}
                rel="noopener noreferrer"
                className={classes.contactListItem}
              >
                <FontAwesomeIcon
                  icon={infoItem.icon}
                  aria-label={infoItem.ariaLabel}
                  size="2x"
                  className={classes.contactListIconLink}
                  color={infoItem.color}
                />
              </a>
              <Typography
                variant="body1"
                color="primary"
                className={classes.contactListItemText}
              >
                {infoItem.pLabel}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
