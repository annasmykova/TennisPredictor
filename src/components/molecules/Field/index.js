import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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
}));

const Field = ({
    name,
    type,
    invalid,
    value,
    meta,
    getItemList,
    itemList,
    filter,
    getItemListSuccess,
    ...props
  }) => {
  const inputProps = {
    id: name, name, type, 'aria-describedby': `${name}Error`, ...props,
  }
  const classes = useStyles();

  const handleAutocompleteChange = ({ target: {value }}) => {
    if (value.length > 2) {
      getItemList(value, filter)
    } else if (!value) {
      props.onChange(null)
    }
    setAutocompleteText(value)
  }

  const setSearchItem = item => {
    props.onChange(item.id)
    setAutocompleteText(item.text)
  }

  useEffect(() => {
    if (inputProps.defaultValue && inputProps.defaultValue.text) {
      setAutocompleteText(inputProps.defaultValue.text)
    }
  }, [])

  const [autocompleteFocus, setFocus] = useState(false);

  const [autocompleteText, setAutocompleteText] = useState(value || '');

  if (type === 'autocomplete') {
    return (
      <FormControl>
        <TextField
          className={`${classes.root} autocomplete-field`}
          {...inputProps}
          defaultValue={inputProps.defaultValue ? inputProps.defaultValue.text : ''}
          type="text"
          value={autocompleteText}
          onChange={handleAutocompleteChange}
          error={invalid ? props.error : false}
          helperText={invalid ? props.error : ''}
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

  if (type === 'file') {
    return (
      <FormControl className={classes.formControl}>
        <Button
          variant="contained"
          component="label"
          className="default-btn"
        >
          Add Photo
          <input
            type="file"
            style={{ display: "none" }}
            {...inputProps}
          />
        </Button>
        {
          value && value[0] && value[0].name &&
          <TextField
            className={classes.root}
            {...inputProps}
            error={invalid ? props.error : false}
            helperText={invalid ? props.error : ''}
            defaultValue={value && value[0] && value[0].name}
            type="text"
            disabled
          />
        }
      </FormControl>
    )
  }

  if (type === 'date') {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="dob"
          label="dob-label"
          format="MM/dd/yyyy"
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          {...inputProps}
          type="text"
          error={invalid ? props.error : false}
          helperText={invalid ? props.error : ''}
          value={value}
        />
      </MuiPickersUtilsProvider>
    )
  }

  if (type === 'select') {
    return (
      <FormControl className={classes.formControl}>
        <InputLabel
          error={invalid ? props.error : false}
          id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          {...inputProps}
          error={invalid ? props.error : false}
          helperText={invalid ? props.error : ''}
        >
          {
            Object.keys(props.values).map(key =>
              <MenuItem key={key} value={key}>{props.values[key]}</MenuItem>
            )
          }
        </Select>
        {invalid ? <FormHelperText error={invalid ? props.error : false} >{props.error}</FormHelperText> : ''}

      </FormControl>
    )
  }

  return (
    <TextField
      className={classes.root}
      {...inputProps}
      error={invalid ? props.error : false}
      helperText={invalid ? props.error : ''}
    />
  );
}

export default Field
