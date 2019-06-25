import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './start.scss';

class NameOfCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
      err: false,
    };
  }
  onsubmit = (e) => {
    e.preventDefault();
    const { otp } = this.state;
    if (otp === '12345') {
      this.props.history.push('/nameofcompany');
    } else {
      this.setState({ err: true });
    }
  };

  onchange = e => this.setState({ otp: e.target.value });

  render() {
    const { err, otp } = this.state;
    const m = err ? '*incorrect OTP' : '';
    const style = otp !== '' ? 'green' : '';
    return (
      <div className="container">
        <div className="otp">
          <h3>Enter OTP</h3>
          <form onSubmit={this.onsubmit}>
            <input
              type="text"
              onChange={this.onchange}
              placeholder="Enter OTP:12345"
            />
            <p className="text-danger">{m}</p>
            <button type="submit" style={{ background: style }}>
              Verify
            </button>
          </form>
        </div>
      </div>
    );
  }
}
NameOfCompany.propTypes = {
  history: PropTypes.isRequired,
};
export default NameOfCompany;
