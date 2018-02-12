import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty} from '../validators';
import {connect} from 'react-redux';
import Input from './input';
import {login} from '../actions/auth';



export class LoginForm extends React.Component {

  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
}
 
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
            onSubmit={this.props.handleSubmit(values =>
              this.onSubmit(values)
          )}>
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
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);

