import React from 'react';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Title from './Title';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';

// function preventDefault(event) {
//   event.preventDefault();
// }

const useStyles = makeStyles({
  depositContext: {
    // flex: 1,
  },
  paper: {
    // padding: theme.spacing(1),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
});

export default function Deposits() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <React.Fragment>
      <div>
      <Paper className={fixedHeightPaper}>
        <img src={require('./side.png')} alt="asd" width="100%" />
        <img src={require('./login.jpg')} alt="asd" width="100%" />
        <img src={require('./side.png')} alt="asd" width="100%" />
        </Paper>
      </div>
    </React.Fragment>
  );
}