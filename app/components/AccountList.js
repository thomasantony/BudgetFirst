import React, { Component, PropTypes } from 'react';
import { Pane, NavGroup, NavTitle, NavGroupItem } from 'react-photonkit';

// TODO: Make account list show actual balance rather than opening balance
// TODO: Format account balance
const AccountList = ({accounts}) => {
  let icons = {
    checking: 'briefcase',
    creditCard: 'credit-card',
    autoLoan: 'rocket',  // why not? ^_^
  }
  // <NavGroup activeKey={1}>
  //     <NavTitle>Accounts</NavTitle>
  //     {
  //       accounts.map((acct) =>
  //           <NavGroupItem eventKey={acct.id}
  //                     glyph={icons[a]} text="home" />
  //     }
  //
  // </NavGroup>
  return (
    <nav className="nav-group">
      <h5 className="nav-group-title">Accounts</h5>
      {
        accounts.map((acct) =>
          <span className="nav-group-item active" key={acct.id}>
            <span className={'icon icon-'+icons[acct.type]}></span>
            {acct.name}
            <span className='pull-right' style={{color: acct.openingBalance < 0? 'red':'inherit', fontWeight: 'bold'}}>
              {acct.openingBalance}
            </span>
          </span>
        )
      }
    </nav>
  )
};

export default AccountList;
