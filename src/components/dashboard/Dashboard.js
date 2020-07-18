import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { mainListItems } from './listItems';
import Deposits from './Deposits';
import Orders from './Orders';
import Units from './units';

import jwt_decode from 'jwt-decode';

import { logout } from '../../actions/auth';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(1),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 400,
  },
  fixedHeights: {
    height: 150,
    padding: theme.spacing(1),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));


const Dashboard = ({

  auth: { authtoken }, logout,
  auth: user
}) => {
  const decoded = jwt_decode(authtoken);

  const unit = user.user;
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
              </Typography>

          <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <Typography component="h3" variant="h6" color="inherit" noWrap className={classes.title}>
              {decoded.sub}
            </Typography><Avatar />
          </Button>

          <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={logout}>
            <Typography >
              logout
              </Typography>          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <Avatar onClick={handleDrawerClose} />
          {/* <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton> */}
        </div>
        <Divider />
        <List>{mainListItems}</List>

      </Drawer>

      <main className={classes.content}>

        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Typography component="h1" variant="h5">
            Dashboard
              </Typography>
          <Grid container spacing={5}>

            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <img src={require('./login.jpg')} alt="asd" width="100%" height="100%" />
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
          </Grid>

          <Typography component="h1" variant="h5" className={classes.container}>
            Dashboard
              </Typography>

          <Grid container spacing={5}>
            {/* Recent Orders */}
            <Grid item xs={12} lg={3}>
              <Paper className={classes.fixedHeights}>
                <Units data={unit} />
              </Paper>
            </Grid>
            <Grid item xs={12} lg={3}>
              <Paper className={classes.fixedHeights}>
                <Units />
              </Paper>
            </Grid>
            <Grid item xs={12} lg={3}>
              <Paper className={classes.fixedHeights}>
                <Units />
              </Paper>
            </Grid>
            <Grid item xs={12} lg={3}>
              <Paper className={classes.fixedHeights}>
                <Units />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>

        </Container>
      </main>
    </div>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(
  Dashboard
);


