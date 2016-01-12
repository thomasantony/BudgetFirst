import React, { Component, PropTypes } from 'react';

// TODO: Make account list show actual balance rather than opening balance
// TODO: Format account balance
const AccountList = ({accounts}) => {
  let icons = {
    checking: 'icon-briefcase',
    creditCard: 'icon-credit-card',
    autoLoan: 'icon-rocket',  // why not? ^_^
  }
  return (
    <nav className="nav-group">
      <h5 className="nav-group-title">Accounts</h5>
      {
        accounts.map((acct) =>
          <span className="nav-group-item" key={acct.id}>
            <span className={'icon '+icons[acct.type]}></span>
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
