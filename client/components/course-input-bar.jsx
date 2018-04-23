import React from 'react'
import TagsInput from 'react-tagsinput'
import Autosuggest from 'react-autosuggest'

// Temporary placeholder for API call: get api/courses
function getCourses () {
  return [
    {id: 'csc148h1'},
    {id: 'csc165h1'},
    {id: 'csc240h1'},
    {id: 'cog250y1'},
    {id: 'eng110y1'},
    {id: 'eng140y1'},
    {id: 'eng150y1'}
  ];
}

class CourseInputBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tags: []
    }
  }

  handleChange (tags) {
    this.setState({tags});
    this.props.sortPrograms(tags);
  }

  render () {
    function autocompleteRenderInput ({addTag, ...props}) {
      const handleOnChange = (e, {newValue, method}) => {
        if (method === 'enter') {
          e.preventDefault()
        } else {
          props.onChange(e)
        }
      }

      const inputValue = (props.value && props.value.trim().toLowerCase()) || ''
      const inputLength = inputValue.length

      let suggestions = getCourses().filter((course) => {
        return course.id.toLowerCase().slice(0, inputLength) === inputValue
      })

      return (
        <Autosuggest
          ref={props.ref}
          suggestions={suggestions}
          shouldRenderSuggestions={(value) => value && value.trim().length > 0}
          getSuggestionValue={(suggestion) => suggestion.id}
          renderSuggestion={(suggestion) => <span>{suggestion.id}</span>}
          inputProps={{...props, onChange: handleOnChange}}
          onSuggestionSelected={(e, {suggestion}) => {
            addTag(suggestion.id)
          }}
          onSuggestionsClearRequested={() => {}}
          onSuggestionsFetchRequested={() => {}}
        />
      )
    }

    return <TagsInput renderInput={autocompleteRenderInput} value={this.state.tags} onChange={::this.handleChange} />
  }
}

export default CourseInputBar
