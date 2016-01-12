import React, { Component, PropTypes } from 'react';

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
          </span>
        )
      }
    </nav>
  )
};

export default AccountList;
