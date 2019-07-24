import React from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';

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
        <form
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
        >
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
  errors.emails = validateEmails(values.emails || '');
  FIELDS.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `${name} field has been left empty`.toUpperCase();
    }
  });

  return errors;
}
export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);
