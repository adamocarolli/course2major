import React from 'react';


const COURSES = {
  'csc148h1': {id: 'csc148h1'},
  'csc165h1': {id: 'csc165h1'},
  'csc240h1': {id: 'csc240h1'},
  'cog250y1': {id: 'cog250y1'},
  'eng110y1': {id: 'eng110y1'},
  'eng140y1': {id: 'eng140y1'},
  'eng150y1': {id: 'eng150y1'}
}

const PROGRAMS = [
  {id: 'asmaj1689', name: 'Computer Science',  courses: [COURSES['csc148h1'], COURSES['csc165h1'], COURSES['csc240h1']]},
  {id: 'asmaj1446', name: 'Cognitive Science', courses: [COURSES['cog250y1']]},
  {id: 'asspe1645', name: 'English', courses: [COURSES['eng110y1'], COURSES['eng140y1'], COURSES['eng150y1']]}
];


class ProgramRow extends React.Component {
  render() {
    const program = this.props.program;

    return (
      <tr>
        <td>{program.id}</td>
        <td>{program.name}</td>
      </tr>
    );
  }
}

class ProgramTable extends React.Component {
  render() {
    const rows = [];

    this.props.programs.forEach((program) => {
      rows.push(
        <ProgramRow
          program={program}
          key={program.id} />
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>PID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
      </form>
    );
  }
}

class FilterableProgramTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProgramTable programs={this.props.programs} />
      </div>
    );
  }
}

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the course2major application!</h1>
        <FilterableProgramTable programs={PROGRAMS}/>
      </div>
    )
  }
}
