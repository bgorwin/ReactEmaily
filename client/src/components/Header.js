import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';


class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "still deciding";
      case false:
        return <li><a href="/auth/google" style={{ color: "black"}}>Login With Google</a></li>;
      default:
        return [
          <li key="1"><Payments /></li>,
          <li key="3" style={{ margin: '0 10px', color: "black" }}>Credits: {this.props.auth.credits}</li>,
          <li key="2"><a href="/api/logout" style={{ color: "black" }}>Logout</a></li>
        ];
    }
  }

  render() {
    // console.log(this.props);
    return (
      <div class="navbar-fixed">
        <nav>
          <div className="nav-wrapper grey lighten-5">
            <Link
              to={this.props.auth ? '/surveys' : '/'}
              className="left brand-logo" style={{marginLeft: '10px', color: "black"}}>
              Emaily
            </Link>
            <ul className="right">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
