import React from 'react'
import { Field } from 'redux-form'
import Button from '@material-ui/core/Button';
import { ReduxField } from 'components';
import classNames from 'classnames';
import { CountrySelectList, HandEnum, SexEnum, ProfyStatus } from '../../../utils/constants/constants';
import { fromSearch } from 'store/selectors'
import { getSearchList } from 'store/actions'
import { connect } from 'react-redux';

let PlayerForm = props => {
  const { handleSubmit } = props

  return (
    <form className="login-form form-default" onSubmit={handleSubmit}>
      <Field name="photo" label="Photo" type="file" component={ReduxField}/>
      <Field name="firstName" label="First Name" type="text" component={ReduxField}/>
      <Field name="lastName" label="Last Name" type="text" component={ReduxField}/>
      <Field name="email" label="Email" type="email" component={ReduxField}/>
      <Field name="password" label="Password" type="password" component={ReduxField}/>
      <Field name="dob" label="Date of Birth" type="date" component={ReduxField}/>
      <Field name="gender" label="Gender" type="select" component={ReduxField} values={SexEnum}/>
      <Field name="country" label="Country" type="select" component={ReduxField}
             values={CountrySelectList}
      />
      <Field
        name="coach"
        label="Coach"
        type="autocomplete"
        component={ReduxField}
        itemList={props.itemList}
        getItemList={props.getItemList}
        filter={props.filter}
      />
      <Field name="hand" label="Hand" type="select" component={ReduxField} values={HandEnum}/>
      <Field name="profyStatus" label="Professional Status" type="select" component={ReduxField} values={ProfyStatus}/>
      <Button
        className={classNames('default-btn')}
        variant="outlined"
        type="submit"
      >Sign Up</Button>
    </form>
  )
}

export default connect(state => ({
  itemList: fromSearch.getSearchData(state)
}), {
  getItemList: getSearchList
})(PlayerForm)
