import React from 'react';
import Club from './Club';
import PropTypes from 'prop-types';
import './ClubList.scss';

class ClubList extends React.Component {
  render() {
    return (
      <ul className="clubs">
        {this.props.clubs.map((club, index) => {
          return (
            <li className="club" key={index}>
              <Club 
                name={club.name}
                fa={club.fa}
                members={club.members}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

ClubList.propTypes = {
  clubs: PropTypes.arrayOf(PropTypes.object)
}

export default ClubList;