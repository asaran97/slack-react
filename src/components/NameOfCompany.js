import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './start.scss';

class NameOfCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      err: false,
    };
  }
  onsubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    if (name === 'codebrahma') {
      this.props.history.push('/teammates');
    } else {
      this.setState({ err: true });
    }
  };

  onchange = e => this.setState({ name: e.target.value });

  render() {
    const { name, err } = this.state;
    const m = err ? '*Enter Company name' : '';
    return (
      <div className="container">
        <div className="nameofcompany">
          <h1> What&apos;s the name of your company?</h1>
          <br />
          <form onSubmit={this.onsubmit}>
            <input
              type="text"
              placeholder="Ex. codebrahma"
              onChange={this.onchange}
            />
            <br />
            <p
              className="text-danger"
              style={{ display: err === false ? 'none' : 'block' }}
            >
              {m}
            </p>
            <button
              type="submit"
              style={{ background: name !== '' ? 'green' : '' }}
            >
              Next
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
