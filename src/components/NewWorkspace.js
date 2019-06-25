import React from 'react';
import PropTypes from 'prop-types';
import './start.scss';

const NewWorkspace = props => (
  <div className="container">
    <div className="content2" onClick={() => props.history.push('/enterotp')}>
      <div className="symbol">
        <i className="fas fa-plus-square" />
      </div>
      <div className="content2-body">
        <h4>Create a new workspace</h4>
        <p>Get your company/organization on slack</p>
      </div>
      <div className="symbol2">
        <i className="fas fa-chevron-right" />
      </div>
    </div>
  </div>
);
NewWorkspace.propTypes = {
  history: PropTypes.isRequired,
};
export default NewWorkspace;
