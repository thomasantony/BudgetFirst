import React from 'react';
import { Pane, NavGroup, NavTitle, NavGroupItem } from 'react-photonkit';
import AccountListItem from './AccountListItem';
import { connect } from 'react-redux';
import {accountSelector} from '../selectors/accountSelectors';

// TODO: Make account list show actual balance rather than opening balance
// TODO: Format account balance
// note: accounts is loaded by redux based on whether onBudget is true or false
const AccountList = ({accounts, title, activeItem, onSelect}) => {
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
      <h5 className="nav-group-title">{title}</h5>
      {
        accounts.map((acct) => <AccountListItem key={acct.id} account={acct} onSelect={onSelect} active={activeItem == acct.id}/> )
      }
    </nav>
  )
};
// Load account list from redux
export default connect(accountSelector)(AccountList);

// export default AccountList;
