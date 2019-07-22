import React from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';

const FIELDS = [
  { name: 'title', label: 'Survey Title' },
  { name: 'body', label: 'Email Body' },
  { name: 'subject', label: 'Subject Line' },
  { name: 'emails', label: 'Recipient List' }
];

class SurveyForm extends React.Component {
  renderFields() {
    return FIELDS.map(({ name, label }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          name={name}
          label={label}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text" type="submit">
            Cancel
          </Link>
          <button className="teal btn-flat right white-text" type="submit">
            Next <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'You must provide a title';
  }

  return errors;
}
export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);
