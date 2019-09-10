import React from 'react';
import './Club.scss';

class Club extends React.Component {
  render() {
    return (
      <div className="card-club">
        
        <div className="card-club__icon"><i className={this.props.fa}></i></div>
        <div className="card-club__content">
          <h2 className="card-club__name">{this.props.name}</h2>
          <h3 className="card-club__members-list">Criaturas:</h3>
          <ul className="card-club__members">
            {this.props.members.map((member, index) => {
              return (
                <li className="card-club__member" key={index}>{member}</li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Club;