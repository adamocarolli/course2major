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

// Temporary constant placeholder for return from API call: get api/programs
const PROGRAMS = [
  {id: 'asmaj1689', name: 'Computer Science',  courses: [COURSES['csc148h1'], COURSES['csc165h1'], COURSES['csc240h1']]},
  {id: 'asmaj1446', name: 'Cognitive Science', courses: [COURSES['cog250y1']]},
  {id: 'asspe1645', name: 'English', courses: [COURSES['eng110y1'], COURSES['eng140y1'], COURSES['eng150y1']]},
  {id: 'asspe1646', name: 'English', courses: [COURSES['eng110y1'], COURSES['eng140y1'], COURSES['eng150y1']]},
  {id: 'asspe1647', name: 'English', courses: [COURSES['eng110y1'], COURSES['eng140y1'], COURSES['eng150y1']]},
  {id: 'asspe1648', name: 'English', courses: [COURSES['eng110y1'], COURSES['eng140y1'], COURSES['eng150y1']]},
  {id: 'asspe1649', name: 'English', courses: [COURSES['eng110y1'], COURSES['eng140y1'], COURSES['eng150y1']]}
];

export default PROGRAMS;
