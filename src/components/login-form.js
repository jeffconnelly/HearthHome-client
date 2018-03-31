import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty} from '../validators';
import Input from './input';
import {login} from '../actions/auth';
import {hideLoginForm} from '../actions/useractions';
import './login-form.css';


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
        <div className="form-wrapper">
        <h1>Login</h1>
        <hr className="user-hr-line"></hr>
        <form
            className="login-form"
            onSubmit={this.props.handleSubmit(values =>
              this.onSubmit(values)
          )}>
          {error}
            <label className="labelInput" htmlFor="username">Username</label>
            <Field
                component={Input}
                className="form-input"
                type="text"
                name="username"
                id="username"
                validate={[required, nonEmpty]}
            />
            <label className="labelInput" htmlFor="password">Password</label>
            <Field
                component={Input}
                className="form-input"
                type="password"
                name="password"
                id="password"
                validate={[required, nonEmpty]}
            />
            <button className="loginBtn db-mode-btn" disabled={this.props.pristine || this.props.submitting}>
                Login
            </button>
            <span className="close js-close" onClick={() => this.props.dispatch(hideLoginForm()) }> &times; </span>
            <p class="demo-text"> <span className="demo-header">To use the demo account</span><span class="demo-blurb">Username: Bruno </span> Password: themuttpup</p>
        </form>
        </div>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);




