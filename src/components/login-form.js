import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty} from '../validators';
import {connect} from 'react-redux';
import Input from './input';


export class LoginForm extends React.Component {
 
  render() {
    let error;
    if (this.props.error) {
        error = (
            <div className="form-error" aria-live="polite">
                {this.props.error}
            </div>
        );
    }

    return (
        <form
            className="login-form"
            onSubmit={console.log('submitted!')}
            >
            {error}
            <label htmlFor="username">Username</label>
            <Field
                component={Input}
                type="text"
                name="username"
                id="username"
                validate={[required, nonEmpty]}
            />
            <label htmlFor="password">Password</label>
            <Field
                component={Input}
                type="password"
                name="password"
                id="password"
                validate={[required, nonEmpty]}
            />
            <button disabled={this.props.pristine || this.props.submitting}>
                Log in
            </button>
        </form>
    );
  }
}

export default reduxForm({
  form: 'login',
})(LoginForm);

