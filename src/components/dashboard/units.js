import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});


 const Units=(unit)=> {
  const classes = useStyles();

  const list=unit.data;
  console.log(list);



  return (
    <React.Fragment>
      <Title>Unit</Title>
      <Typography component="p" variant="h4">
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        01-01
      </Typography>

    </React.Fragment>
  );
}

Units.propTypes = {
  unit: PropTypes.array.isRequired
};

export default connect(
  null
)(Units);

