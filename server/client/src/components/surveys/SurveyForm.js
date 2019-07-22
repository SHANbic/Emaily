import React from 'react';
import { reduxForm } from 'redux-form';

class SurveyForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Survey Form</h3>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
