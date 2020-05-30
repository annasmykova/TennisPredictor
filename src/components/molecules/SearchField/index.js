import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import './SearchField.scss'

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    marginLeft: 'auto',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
    borderRadius: '25px',
    height: '48px'
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    top: 0,
  },
  inputRoot: {
    color: 'inherit',
    display: 'flex',
  },
  inputInput: {
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '60ch',
      },
    },
  },
}), { name:'search-field'});


const SearchField = () => {
  const classes = useStyles();

  return (
    <div className={`${classes.search} search-field`}>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
      <div className={`${classes.searchIcon} search-field__icon`}>
        <SearchIcon />
      </div>
    </div>
  )
}

export default SearchField;
