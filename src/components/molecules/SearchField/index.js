import React, { useState } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import './SearchField.scss'
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import { fromSearch } from 'store/selectors'
import { push } from 'connected-react-router'
import { getSearchList, getSearchListSuccess } from 'store/actions';

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


const SearchField = ({ getItemList, getItemListSuccess, itemList, push }) => {
  const classes = useStyles();
  const handleAutocompleteChange = ({ target: {value }}) => {
    if (value.length > 2) {
      getItemList(value)
    }
    setAutocompleteText(value)
  }

  const setSearchItem = item => {
    push(`/${item.type}/${item.id}`)
    setAutocompleteText(item.text)
    getItemListSuccess([])
  }

  const [autocompleteFocus, setFocus] = useState(false);

  const [autocompleteText, setAutocompleteText] = useState('');

  return (
    <div className={`${classes.search} search-field`}>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        value={autocompleteText}
        onChange={handleAutocompleteChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <div className={`${classes.searchIcon} search-field__icon`}>
        <SearchIcon />
      </div>
      {
        autocompleteFocus && autocompleteText && itemList  && (
          <Paper className={`${classes.paper} search-list`}>
            <MenuList>
              {
                itemList.map(item => (
                  <MenuItem
                    key={item.id}
                    onMouseDown={() => {
                      setSearchItem(item)
                    }}
                  ><span>{item.text}</span></MenuItem>
                ))
              }
            </MenuList>
          </Paper>
        )
      }
    </div>
  )
}

export default connect(state => ({
  itemList: fromSearch.getSearchData(state)
}), {
  getItemList: getSearchList,
  getItemListSuccess: getSearchListSuccess,
  push
})(SearchField)
