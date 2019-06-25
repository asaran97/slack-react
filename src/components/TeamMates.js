import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './start.scss';

class TeamMates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamMembers: [{ name: '' }, { name: '' }],
      err: false,
    };
  }

  onsubmit = (e) => {
    e.preventDefault();
    const firstMember = this.state.teamMembers[0].name;
    if (firstMember === '') {
      this.setState({ err: true });
    } else {
      this.props.history.push('/finish');
    }
  };

  onAddMember = () => {
    this.setState({
      teamMembers: this.state.teamMembers.concat([{ name: '' }]),
    });
  };

  onDeletMember = (id) => {
    this.setState({
      teamMembers: this.state.teamMembers.filter((s, idx) => id !== idx),
    });
  };

  teamMemberNameChange = id => (e) => {
    const newMembers = this.state.teamMembers.map((member, idx) => {
      if (id !== idx) {
        return member;
      }
      return { name: e.target.value };
    });
    this.setState({ teamMembers: newMembers });
  };

  render() {
    const { teamMembers, err } = this.state;
    return (
      <div className="container">
        <div className="teammates">
          <h1>Who else is working on this Project?</h1>
          <form onSubmit={this.onsubmit}>
            {teamMembers.map((teamMember, id) => (
              <div key={id} className="wrap-team">
                <input
                  type="email"
                  name={teamMember.name}
                  placeholder="name@Example.com"
                  onChange={this.teamMemberNameChange(id)}
                />
                <span
                  className="remove-icon"
                  onClick={this.onDeletMember.bind(this, id)}
                >
                  <i className="fas fa-user-minus" />
                </span>
              </div>
            ))}
            <p className="add-member" onClick={this.onAddMember}>
              Add Another ?
            </p>
            <p
              className="text-danger"
              style={{ display: err ? 'block' : 'none' }}
            >
              *Enter atleast one team member
            </p>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    );
  }
}
TeamMates.propTypes = {
  history: PropTypes.isRequired,
};
export default TeamMates;
