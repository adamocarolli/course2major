import React from 'react';
import Autosuggest from 'react-autosuggest';


// Temporary constant to fill programs
const COURSES = {
  'csc148h1': {id: 'csc148h1'},
  'csc165h1': {id: 'csc165h1'},
  'csc240h1': {id: 'csc240h1'},
  'cog250y1': {id: 'cog250y1'},
  'eng110y1': {id: 'eng110y1'},
  'eng140y1': {id: 'eng140y1'},
  'eng150y1': {id: 'eng150y1'}
}

// Temporary constant placeholder for return from API call: get api/courses
const COURSES_API = [
  {id: 'csc148h1'},
  {id: 'csc165h1'},
  {id: 'csc240h1'},
  {id: 'cog250y1'},
  {id: 'eng110y1'},
  {id: 'eng140y1'},
  {id: 'eng150y1'}
]

// Temporary constant placeholder for return from API call: get api/programs
const PROGRAMS = [
  {id: 'asmaj1689', name: 'Computer Science',  courses: [COURSES['csc148h1'], COURSES['csc165h1'], COURSES['csc240h1']]},
  {id: 'asmaj1446', name: 'Cognitive Science', courses: [COURSES['cog250y1']]},
  {id: 'asspe1645', name: 'English', courses: [COURSES['eng110y1'], COURSES['eng140y1'], COURSES['eng150y1']]},
  {id: 'asspe1645', name: 'English', courses: [COURSES['eng110y1'], COURSES['eng140y1'], COURSES['eng150y1']]},
  {id: 'asspe1645', name: 'English', courses: [COURSES['eng110y1'], COURSES['eng140y1'], COURSES['eng150y1']]},
  {id: 'asspe1645', name: 'English', courses: [COURSES['eng110y1'], COURSES['eng140y1'], COURSES['eng150y1']]},
  {id: 'asspe1645', name: 'English', courses: [COURSES['eng110y1'], COURSES['eng140y1'], COURSES['eng150y1']]}
];


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

// Get suggestions given an input value.
const getCourseIDSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : COURSES_API.filter(course =>
    course.id.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, provide Autosuggest with course id.
const getSuggestionCourseID = suggestion => suggestion.id;

const renderSuggestion = suggestion => (
  <div>
    {suggestion.id}
  </div>
);

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest calls this function to update suggestions when search query is changed.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getCourseIDSuggestions(value)
    });
  };

  // Autosuggest calls this function to clear previous suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type a programming language',
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionCourseID}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
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

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the course2major application!</h1>
        <FilterableProgramGridContainer programs={PROGRAMS}/>
      </div>
    );
  }
}
