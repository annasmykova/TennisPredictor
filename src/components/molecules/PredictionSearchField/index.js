import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { connect } from 'react-redux';
import { fromSearch } from 'store/selectors'
import { getSearchList, getPrediction, getSearchListSuccess } from 'store/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  paper: {
    marginRight: theme.spacing(2),
  },
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


const PredictionSearchField = ({ player, getPrediction, getItemList, itemList, getItemListSuccess }) => {
  const classes = useStyles();

  const handleAutocompleteChange = ({ target: {value }}) => {
    if (value.length > 2) {
      getItemList(value, 'player')
    }
    setAutocompleteText(value)
  }

  const setSearchItem = item => {
    getPrediction(player.id, item.id)
    setAutocompleteText(item.text)
    getItemListSuccess([])
  }

  const [autocompleteFocus, setFocus] = useState(false);

  const [autocompleteText, setAutocompleteText] = useState('');

  return (
    <FormControl>
      <TextField
        className={`${classes.root} autocomplete-field`}
        label="Other Player"
        type="text"
        value={autocompleteText}
        onChange={handleAutocompleteChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        autoComplete="off"
      />
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
    </FormControl>
  )
}

export default connect(state => ({
  itemList: fromSearch.getSearchData(state)
}), {
  getItemList: getSearchList,
  getItemListSuccess: getSearchListSuccess,
  getPrediction
})(PredictionSearchField)
