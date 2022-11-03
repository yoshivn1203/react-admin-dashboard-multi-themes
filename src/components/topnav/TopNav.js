import React from 'react';

import './topnav.css';

const TopNav = () => {
  return (
    <div className='topnav'>
      <div className='topnav__search'>
        <input type='text' placeholder='Search here...' />
        <i className='bx bx-search'></i>
      </div>
      <div className='topnav__right'>
        <div className='topnav__right-item'>
          {/* dropdown here */}
          {/* <Dropdown
                    customToggle={() => renderUserToggle(curr_user)}
                    contentData={user_menu}
                    renderItems={(item, index) => renderUserMenu(item, index)}
                /> */}
        </div>
        <div className='topnav__right-item'>
          {/* <Dropdown
                    icon='bx bx-bell'
                    badge='12'
                    contentData={notifications}
                    renderItems={(item, index) => renderNotificationItem(item, index)}
                    renderFooter={() => <Link to='/'>View All</Link>}
                /> */}
          {/* dropdown here */}
        </div>
        <div className='topnav__right-item'>{/* <ThemeMenu/> */}</div>
      </div>
    </div>
  );
};

export default TopNav;