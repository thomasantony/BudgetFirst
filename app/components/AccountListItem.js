import React from 'react';
const AccountListItem = ({account, active, onSelect}) => {
  let {name, type, openingBalance} = account;
  let icons = {
    checking: 'briefcase',
    creditCard: 'credit-card',
    autoLoan: 'rocket',  // why not? ^_^
  }
  return (
    <span className={'nav-group-item '+(active ? 'active': '')} onClick={onSelect.bind(null,account.id)}>
      <span className={'icon icon-'+icons[type]}></span>
      {name}
      <span className='pull-right' style={{color: openingBalance < 0? 'red':'inherit', fontWeight: 'bold'}}>
        {openingBalance}
      </span>
    </span>
  )
}


export default AccountListItem;
