// Temporary constant to fill programs
const COURSES = {
  'csc148h1': {id: 'csc148h1'},
  'csc165h1': {id: 'csc165h1'},
  'csc240h1': {id: 'csc240h1'},
  'cog250y1': {id: 'cog250y1'},
  'eng110y1': {id: 'eng110y1'},
  'eng140y1': {id: 'eng140y1'},
  'eng150y1': {id: 'eng150y1'},
  'bio130h1': {id: 'bio130h1'},
  'bio150y1': {id: 'bio150y1'},
  'chm138h1': {id: 'chm138h1'},
  'chm139h1': {id: 'chm139h1'},
  'phl100y1': {id: 'phl100y1'},
  'new232y1': {id: 'new232y1'}
}

// Temporary constant placeholder for return from API call: get api/programs
const PROGRAMS = [
  {
    id: 'asmaj1689',
    name: 'Computer Science',
    type: "2L",
    requirements: 'CSC108H1, CSC148H1, CSC165H1/​ CSC240H1; MAT137Y1/​ MAT157Y1/​( MAT135H1, MAT136H1)',
    degreeOfSpecialization: 'Major',
    bachelorOf: 'Science',
    courses: [COURSES['csc148h1'], COURSES['csc165h1'], COURSES['csc240h1']],
    link: 'https://fas.calendar.utoronto.ca/computer-science-major-science-program-asmaj1689-0'
  },
  {
    id: 'asspe1868',
    name: 'Bioinformatics and Computational Biology',
    type: "1",
    requirements: 'CSC108H1, CSC148H1, CSC165H1/​ CSC240H1; MAT137Y1/​ MAT157Y1/​( MAT135H1, MAT136H1)',
    degreeOfSpecialization: 'Specialist',
    bachelorOf: 'Science',
    courses: [COURSES['csc148h1'], COURSES['csc165h1'], COURSES['csc240h1'], COURSES['bio130h1'], COURSES['bio150y1']],
    link: 'https://fas.calendar.utoronto.ca/computer-science-major-science-program-asmaj1689-0'
  },
  {
    id: 'asmaj1446',
    name: 'Cognitive Science',
    type: '2',
    requirements: 'COG250Y1 or a combination of 1.5 FCE in CSC, LIN, PHL, PSY (no more than 1 FCE from a single department)',
    degreeOfSpecialization: 'Major',
    bachelorOf: 'Science',
    courses: [COURSES['cog250y1']],
    link: 'https://fas.calendar.utoronto.ca/cognitive-science-major-science-science-program-asmaj1446-0'
  },
  {
    id: 'asspe1645',
    name: 'English',
    type: '2',
    requirements: 'Enrolment in the English Specialist program requires a final grade of at least 73% in ENG110Y1, ENG140Y1, or ENG150Y1; or a final grade of at least 73% in 2.0 ENG 200-series FCE. Students are responsible for completing all the requirements of an English program from the Calendar of the year in which they enrolled in the program.',
    degreeOfSpecialization: 'Specialist',
    bachelorOf: 'Arts',
    courses: [COURSES['eng110y1'], COURSES['eng140y1'], COURSES['eng150y1']],
    link: 'https://fas.calendar.utoronto.ca/english-specialist-arts-program-asspe1645-0'
  },
  {
    id: 'asmin1645',
    name: 'English',
    type: '1',
    requirements: 'None',
    degreeOfSpecialization: 'Minor',
    bachelorOf: 'Arts',
    courses: [COURSES['eng110y1'], COURSES['eng140y1'], COURSES['eng150y1']],
    link: 'https://fas.calendar.utoronto.ca/english-specialist-arts-program-asspe1645-0'
  },
  {
    id: 'asmin1017',
    name: 'Buddhism, Psychology and Mental Health',
    type: '1',
    requirements: 'None',
    degreeOfSpecialization: 'Minor',
    bachelorOf: 'Arts',
    courses: [COURSES['new232y1']],
    link: 'https://fas.calendar.utoronto.ca/english-specialist-arts-program-asspe1645-0'
  },
  {
    id: 'asmaj1001',
    name: 'Bioethics',
    type: '1',
    requirements: 'None',
    degreeOfSpecialization: 'Major',
    bachelorOf: 'Arts',
    courses: [COURSES['bio130h1'], COURSES['bio150y1'], COURSES['phl100y1']],
    link: 'https://fas.calendar.utoronto.ca/bioethics-major-arts-program-asmaj1001'
  },
  {
    id: 'asmaj1538',
    name: 'Animal Physiology',
    type: '1',
    requirements: 'None',
    degreeOfSpecialization: 'Major',
    bachelorOf: 'Science',
    courses: [COURSES['bio130h1'], COURSES['bio150y1'], COURSES['chm138h1'], COURSES['chm139h1']],
    link: 'https://fas.calendar.utoronto.ca/animal-physiology-major-science-program-asmaj1538-0'
  }
];

export default PROGRAMS;
