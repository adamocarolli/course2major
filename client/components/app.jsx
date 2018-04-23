import React from 'react';
import SortableProgramGridContainer from './program-grid.jsx'
import PROGRAMS from '../data/programs.js'


export class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Welcome to the course2major application!</h1>
        </header>
        <SortableProgramGridContainer programs={PROGRAMS} />
        <footer>
        </footer>
      </div>
    );
  }
}
