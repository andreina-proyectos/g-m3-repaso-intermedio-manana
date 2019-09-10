import React from 'react';
import Club from './Club';
import PropTypes from 'prop-types';
import './ClubList.scss';

class ClubList extends React.Component {
  render() {
    return (
      <ul className="clubs">
        {this.props.clubs
          .filter(item => item.name.toLowerCase().includes(this.props.paquery))
          .map(club => {
          return (
            <li className="club" key={club.id}>
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