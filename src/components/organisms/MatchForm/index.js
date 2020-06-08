import React, { Fragment } from 'react'
import { Field } from 'redux-form'
import Button from '@material-ui/core/Button';
import { ReduxField } from 'components';
import classNames from 'classnames';
import { PlayerEnum, SurfaceEnum, TourneyLevels } from '../../../utils/constants/constants';
import { connect } from 'react-redux';
import { fromSearch } from 'store/selectors';
import { getSearchList, getSearchListSuccess } from 'store/actions';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const {children, classes, onClose, ...other} = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon/>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

let MatchForm = props => {
  const {handleSubmit, closeModal} = props

  return (
    <Fragment>
      <DialogTitle id="customized-dialog-title" onClose={closeModal}>
        New Match
      </DialogTitle>
      <DialogContent>
        <form id="match-form" className="login-form form-default modal-form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs>
              <Grid container spacing={0} direction="column">
                <Grid item xs>
                  <Field
                    name="player1"
                    label="Player 1"
                    type="autocomplete"
                    disabled
                    component={ReduxField}
                  />
                </Grid>
                <Grid item xs>
                  <Field name="winner" label="Winner" type="select" component={ReduxField} values={PlayerEnum}/>
                </Grid>
                <Grid item xs>
                  <Field name="score" label="Score" type="text" component={ReduxField}/>
                </Grid>
                <Grid item xs>
                  <Field name="surface" label="Surface" type="select" component={ReduxField} values={SurfaceEnum}/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs>
              <Grid container spacing={0} direction="column">
                <Grid item xs>
                  <Field
                    name="player2"
                    label="Player 2"
                    type="autocomplete"
                    filter="player"
                    component={ReduxField}
                    itemList={props.itemList}
                    getItemList={props.getItemList}
                    getItemListSuccess={props.getItemListSuccess}
                  />
                </Grid>
                <Grid item xs>
                  <Field name="tournamentType" label="Tourney Level" type="select" component={ReduxField}
                         values={TourneyLevels}/>
                </Grid>
                <Grid item xs>
                  <Field name="date" label="Date" type="date" component={ReduxField}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          className={classNames('default-btn')}
          variant="outlined"
          type="submit"
          form="match-form"
          onClick={() => {
            setTimeout(closeModal, 3000)
          }}
        >Add Match</Button>
      </DialogActions>
    </Fragment>
  )
}

export default connect(state => ({
  itemList: fromSearch.getSearchData(state)
}), {
  getItemList: getSearchList,
  getItemListSuccess: getSearchListSuccess,
})(MatchForm)
