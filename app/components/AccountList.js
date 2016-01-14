import React from 'react';
import { Pane, NavGroup, NavTitle, NavGroupItem } from 'react-photonkit';
import AccountListItem from './AccountListItem';
// TODO: Make account list show actual balance rather than opening balance
// TODO: Format account balance
const AccountList = ({accounts}) => {
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
        accounts.map((acct) => <AccountListItem key={acct.id} account={acct}/> )
      }
    </nav>
  )
};

export default AccountList;
