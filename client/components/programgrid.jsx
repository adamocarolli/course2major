import React from 'react'
import SearchBar from './searchbar.jsx'


class ProgramGridItem extends React.Component {
  render() {
    const program = this.props.program;

    return (
      <div class='program-grid-item'>
        <div class='program-name'>{program.name}</div>
      </div>
    );
  }
}

class ProgramGridContainer extends React.Component {
  render() {
    const items = [];

    this.props.programs.forEach((program) => {
      items.push(
        <ProgramGridItem
          program={program}
          key={program.id} />
      );
    });

    return (
      <div class='program-grid-container'>{items}</div>
    );
  }
}

class FilterableProgramGridContainer extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProgramGridContainer programs={this.props.programs} />
      </div>
    );
  }
}

export default FilterableProgramGridContainer
