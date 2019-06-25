import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './start.scss';

class GetStarted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
    };
  }
  onsubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/enterotp');
  };

  onchange = e => this.setState({ mail: e.target.value });

  render() {
    const { mail } = this.state;
    const style = mail !== '' ? 'green' : '';
    return (
      <div>
        <div className="container">
          <div className="content">
            <form onSubmit={this.onsubmit}>
              <input
                type="email"
                placeholder="Enter Email"
                onChange={this.onchange}
                required
              />
              <button type="submit" style={{ background: style }}>
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
GetStarted.propTypes = {
  history: PropTypes.isRequired,
};
export default GetStarted;
