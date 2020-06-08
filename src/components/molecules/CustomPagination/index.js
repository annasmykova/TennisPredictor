import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const CustomPagination = ({ count , handlePageChange}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {count ? <Pagination count={count} onChange={handlePageChange} /> : ''}
    </div>
  );
}

export default CustomPagination
