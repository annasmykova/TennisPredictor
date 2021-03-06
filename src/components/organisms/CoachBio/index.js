import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import { EditCoachFormContainer } from 'containers';
import { CoachBioDefault } from 'components';
import classNames from 'classnames';

const CoachBio = props => {
  const { user, match, getCoach, coach } = props;
  const [isForm, setForm] = useState(false)
  const [currentCoach, setCoach] = useState(null)

  useEffect(() => {
    if (user && +user.id === +match.params.coachId) {
      setCoach(user)
    } else if (!coach) {
      getCoach(+match.params.coachId)
    } else if (coach) {
      setCoach(coach)
    }
  }, [user, coach, match])

  return (<div className="coach-bio bio">
    {
      currentCoach &&
      <div className="coach-bio__wrapper bio__wrapper">
        {
          isForm
          ? <EditCoachFormContainer closeForm={() => setForm(false)} />
          : <CoachBioDefault coach={currentCoach}/>
        }
      </div>
    }
    {
      user && +user.id === +match.params.coachId &&
      <Button
        className={classNames('default-btn toggle-bio-btn', {red: isForm})}
        variant="outlined"
        type="submit"
        onClick={() => setForm(!isForm)}
      >{isForm ? 'Cancel' : 'Edit'}</Button>
    }
  </div>)
}

export default withRouter(CoachBio)
