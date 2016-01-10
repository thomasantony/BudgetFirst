import React, { Component } from 'react';
import { Link } from 'react-router';
// import styles from './Home.module.css';


export default class Home extends Component {
  render() {
    // return (
    //   <div>
    //     <div classNameName={styles.container}>
    //       <h2>Home</h2>
    //       <Link to="/categories">Categories</Link><br/>
    //       <Link to="/items">Items</Link><br/>
    //     </div>
    //   </div>
    // );
    return (
      <div className="window">

        <header className="toolbar toolbar-header">
          <h1 className="title">Budget First</h1>

            <div className="toolbar-actions">
            <div className="btn-group">
              <button className="btn btn-default">
                <span className="icon icon-home"></span>
              </button>
              <button className="btn btn-default active">
                <span className="icon icon-doc-text"></span>
              </button>
              <button className="btn btn-default">
                <span className="icon icon-chart-bar"></span>
              </button>
              <button className="btn btn-default">
                <span className="icon icon-cog"></span>
              </button>

            </div>
            </div>
        </header>
        <div className="window-content">
          <div className="pane-group">
            <div className="pane pane-sm sidebar">
              <nav className="nav-group">
                <h5 className="nav-group-title">Accounts</h5>
                <span className="nav-group-item">
                  <span className="icon icon-briefcase"></span>
                  Checking account
                </span>
                <span className="nav-group-item active">
                  <span className="icon icon-credit-card"></span>
                  Rewards VISA
                </span>
              </nav>
            </div>

            <div className="pane">
              <table className="table-striped">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Payee</th>
                    <th>Category</th>
                    <th>Memo</th>
                    <th>Outflow</th>
                    <th>Inflow</th>
                    <th>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01/09/16</td>
                    <td>T-Mobile</td>
                    <td>Phone/Internet</td>
                    <td></td>
                    <td>60.00</td>
                    <td></td>
                    <td style={{color:'red'}}>-60.00</td>
                  </tr>
                  <tr>
                    <td>01/15/16</td>
                    <td>Transfer: Checking Account</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>60.00</td>
                    <td>0.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
