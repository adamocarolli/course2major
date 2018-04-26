import React from 'react';
import SortableProgramGridContainer from './program-grid.jsx'
import PROGRAMS from '../data/programs.js'


export class App extends React.Component {
  render() {
    return (
      <div>
        <header></header>
        <SortableProgramGridContainer programs={PROGRAMS} />
        <footer></footer>
      </div>
    );
  }
}
