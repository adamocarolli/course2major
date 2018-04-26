import React from 'react';
import _ from 'lodash';
import FlipMove from 'react-flip-move';

import CourseInputBar from './course-input-bar.jsx'


class ProgramGridItem extends React.Component {
  render() {
    return (
      <li id={this.props.id} className='program-grid-item'>
        <b>{this.props.name}</b>
        <div>{this.props.degreeOfSpecialization}</div>
        <div>Type: {this.props.type}</div>
        <div>Bachelor of {this.props.bachelorOf}</div>
        <a href={this.props.link}>More</a>
      </li>
    );
  }
}

class SortableProgramGridContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'grid',
      order: 'asc',
      enterLeaveAnimation: 'elevator',
      programs: this.props.programs
    };

    this.sortPrograms = this.sortPrograms.bind(this);
  }

  sortPrograms(query) {
    this.setState({
      programs: _.orderBy(this.state.programs, [function(program) { 
        const courseIDs = _.map(program.courses, (course) => { return course.id } );
        return _.intersection(query, courseIDs).length; 
      }], 
      ['desc'])
    });
  }

  moveprogram(source, dest, id) {
    const sourceprograms = this.state[source].slice();
    let destprograms = this.state[dest].slice();

    if ( !sourceprograms.length ) return;

    // Find the index of the program clicked.
    // If no ID is provided, the index is 0
    const i = id ? sourceprograms.findIndex(program => program.id === id) : 0;

    // If the program is already removed, do nothing.
    if ( i === -1 ) return;

    destprograms = [].concat( sourceprograms.splice(i, 1), destprograms );

    this.setState({
      [source]: sourceprograms,
      [dest]: destprograms,
    });
  }

  renderprograms() {
    return this.state.programs.map( (program, i) => {
      return (
        <ProgramGridItem
          key={program.id}
          view={this.state.view}
          index={i}
          {...program}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <header className="query-input-form">
          <CourseInputBar sortPrograms={this.sortPrograms}/>
        </header>
        <FlipMove
          staggerDurationBy="30"
          duration={500}
          enterAnimation={this.state.enterLeaveAnimation}
          leaveAnimation={this.state.enterLeaveAnimation}
          typeName="ul"
          className="program-grid-container"
        >
          { this.renderprograms() }
        </FlipMove>
        <footer>
        </footer>
      </div>
    );
  }
};

export default SortableProgramGridContainer;
