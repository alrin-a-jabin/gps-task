import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
      height: '100vh',
  },
  image: {
    //   backgroundImage: `url('../../img/login.jpg')`,
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'blue',
      //   theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
  },
  paper: {
      margin: theme.spacing(15, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },
  avatar: {
      margin: theme.spacing(5),
      backgroundColor: theme.palette.secondary.main,
  },
  form: {
      width: '80%', // Fix IE 11 issue..
      marginTop: theme.spacing(7),
  },
  submit: {
      margin: theme.spacing(7, 0, 2),
      marginLeft: theme.spacing(13)

  },
}));


const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
    const classes = useStyles();
  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(username, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    // <Fragment>
    <section className="container">
         <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}  >
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        LOGIN
                    </Typography>
                    <form className={classes.form} onSubmit={onSubmit}>
                        <Grid container spacing={5}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    //    error ={this.state.errorText.length === 0 ? false : true }
                                    id="username"
                                    name="username"
                                    label="Enter User Name"
                                    fullWidth
                                    autoComplete="family-name"
                                    value={username}
                                    onChange={onChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    id="password"
                                    name="password"
                                    label="Enter the password"
                                    fullWidth
                                    autoComplete="family-name"
                                    value={password}
                                    onChange={onChange}

                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            // fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            LOGIN
                        </Button>
                    </form>
                    <Grid container>
                        <Grid item xs>
                            Don't have an account?
                                <Link href="#" variant="body2">
                                {" Sign Up"}
                            </Link>
                        </Grid>
                        <Grid item >
                            <Link href="#" variant="body2">
                                Forgot password?
                                </Link>
                        </Grid>

                    </Grid>

                </div>
            </Grid>
        </Grid>
        </section>
    // </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);

