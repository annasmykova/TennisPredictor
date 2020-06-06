import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import whistleOutline from '@iconify/icons-mdi/whistle-outline';
import tennisIcon from '@iconify/icons-emojione-monotone/tennis';
import settingsIcon from '@iconify/icons-carbon/settings';
import { NavLink } from 'react-router-dom';
import { Avatar } from 'components';
import './SideBar.scss'

const SideBar = ({ user, photo = null, userType = 0, userId = 1, coachId }) => {
  return user && (
    <aside id="side-bar">
      <ul className="side-bar__list">
        <li className="side-bar__list-item"><NavLink to={user.userType ? `/player/${user.id}` : `/coach/${user.id}` } exact>
          <Avatar photo={user.photo} />
          <span>My Profile</span>
        </NavLink></li>
        <li className="side-bar__list-item"><NavLink to={
          user.userType
          ? `/coach/${user.coach.id}`
          : `/coach/${user.id}/players`
        }>
          {
            user.userType
              ? <Icon icon={whistleOutline} style={{fontSize: '30px'}} />
              : <Icon icon={tennisIcon} style={{fontSize: '30px'}} />
          }
          <span>
            {
              user.userType
              ? 'My Coach'
              : 'My Players'
            }
          </span>
        </NavLink></li>
        <li className="side-bar__list-item"><NavLink to="/settings">
          <Icon icon={settingsIcon} style={{fontSize: '30px'}} />
          <span>Settings</span>
        </NavLink></li>
      </ul>
    </aside>
  )
}

export default SideBar
