import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import whistleOutline from '@iconify/icons-mdi/whistle-outline';
import tennisIcon from '@iconify/icons-emojione-monotone/tennis';
import settingsIcon from '@iconify/icons-carbon/settings';
import { NavLink } from 'react-router-dom';
import { Avatar } from 'components';
import './SideBar.scss'

const SideBar = ({ user = true, photo = null, userType = 0, userId = 1, coachId }) => {
  return user && (
    <aside id="side-bar">
      <ul className="side-bar__list">
        <li className="side-bar__list-item"><NavLink to={userType ? `/player/${userId}` : `/coach/${userId}` } exact>
          <Avatar photo={photo} />
          <span>My Profile</span>
        </NavLink></li>
        <li className="side-bar__list-item"><NavLink to={userType ? `/coach/${coachId}` : `/coach/${userId}/players` }>
          {
            userType
              ? <Icon icon={whistleOutline} style={{fontSize: '30px'}} />
              : <Icon icon={tennisIcon} style={{fontSize: '30px'}} />
          }
          <span>
            {
              userType
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
