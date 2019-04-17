import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ModalRoot from './ModalRoot';

import { signUp } from '../store/users/users-action';
import '../styles/Sign.css'

class SignUp extends React.Component {  

    constructor(props) {
      super(props);
      this.state = {
          form: {
            firstName: '',
            lastName: '',
            nickName: '',
            email: '',
            password: ''
          },
          formErrors: {
            firstName: 'Enter First name',
            lastName: 'Enter Last name',
            nickName: 'Enter Nickname',
            email: 'Enter Email',
            password: 'Enter Password'
          },
          formValid: false,
          firstNameValid: false,
          lastNameValid: false,
          nickNameValid: false,
          emailValid: false,
          passwordValid: false,
          showErrors: false
          
      };    
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let {firstNameValid, lastNameValid, nickNameValid, emailValid, passwordValid} = this.state;
    
        switch(fieldName) {
          case 'firstName':
            firstNameValid = value.length > 0;
            fieldValidationErrors.firstName = firstNameValid ? '': ' Please enter your First name';
            break;
          case 'lastName':
            lastNameValid = value.length > 0;
            fieldValidationErrors.lastName = lastNameValid ? '': ' Please enter your Last name';
            break;
          case 'nickName':
            nickNameValid = value.length > 0;
            fieldValidationErrors.nickName = nickNameValid ? '': ' Please enter your Nickname';
            break;
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '': 'Email is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6 && value.length <= 20;
            fieldValidationErrors.password = passwordValid ? '': ' Password lenght must be 6-20 symbols';
            break;
          default:
            break;
        }
        this.setState({ formErrors: fieldValidationErrors,
                        firstNameValid: firstNameValid,
                        lastNameValid: lastNameValid,
                        nickNameValid: nickNameValid,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }

      validateForm = () => {
        this.setState({
            formValid:  this.state.firstNameValid &&
                        this.state.lastNameValid &&
                        this.state.nickNameValid &&
                        this.state.emailValid && 
                        this.state.passwordValid
        });
      }

    handleInputChange = (event) => {
        const {name, value} = event.target  
        this.setState({...this.state, form: {...this.state.form, [name]: value}},    () => { this.validateField(name, value) });
    };    

    handleSubmit = (event) => {
        event.preventDefault();        
        const {signUp} = this.props;
        const {form, formValid} = this.state;  
        this.setState({showErrors: true});             
        if (formValid) {
            signUp(form);
            this.setState({
                form: { 
                    firstName: '',
                    lastName: '',
                    nickName: '',
                    email: '',
                    password: '' 
                } 
            })
        } else {
            return
        }       
    }

    render(){
        const { form, 
                formErrors,
                formValid,
                firstNameValid,
                lastNameValid,
                nickNameValid,
                emailValid,
                passwordValid,
                showErrors } = this.state;
        return(
            <React.Fragment>             
            <div className="header-box">
                <Link to="/sign-in"> 
                    <div className="header-box-sign" type="button">Sign in</div>
                </Link>
                <Link to="/sign-up"> 
                    <div className="header-box-sign" type="button">Sign up</div>
                </Link>
            </div>            
         
            <div className="ui grid">           
                <div className="ui card six wide column centered stackable page ">                              
                    <form className="ui form" onSubmit={this.handleSubmit}>
                        <h4 className="ui dividing header centered">Registration</h4>
                        <div className={"field " +(!firstNameValid && showErrors ? "error" : null)}>
                            <label>Name</label>
                            <div className="field">
                                <input  name="firstName"
                                        type="text" 
                                        placeholder="First Name"
                                        value={form.firstName}
                                        onChange={this.handleInputChange}   
                                />
                            </div>
                        <div className={"field " +(!lastNameValid && showErrors ? "error" : null)}>
                                <input  name="lastName"
                                        type="text"
                                        placeholder="Last Name"
                                        value={form.lastName}
                                        onChange={this.handleInputChange}         
                                />
                            </div>                
                        </div> 
                        <div className={"field " +(!nickNameValid && showErrors ? "error" : null)}>
                            <label>Nickname</label>
                            <div className="field">
                                <input  name="nickName"
                                        type="text"
                                        placeholder="Nickname"
                                        value={form.nickName}
                                        onChange={this.handleInputChange}  
                                        maxLength={20}       
                                />
                            </div>
                        </div>  
                        <div className={"field " +(!emailValid && showErrors ? "error" : null)} >
                            <label>Email</label>
                            <div className="ui left icon input field">
                                <input  name="email"
                                        type="text"
                                        placeholder="E-mail"
                                        value={form.email}
                                        onChange={this.handleInputChange}         
                                />
                                <i className="mail icon"></i>
                            </div>
                        </div>                         
                        <div className={"field " +(!passwordValid && showErrors ? "error" : null)}>
                            <label>Password</label>
                            <div className="field">
                                <input  name="password"
                                        type="password"
                                        placeholder="Password"
                                        value={form.password}
                                        onChange={this.handleInputChange}        
                                        maxLength={20}
                                />
                            </div>
                        </div>                       
                        
                        <div className="ui header centered">
                            <button className="ui teal button" type='submit'>OK</button>
                        </div>      

                        {!formValid && showErrors &&
                            <div className="ui message">
                                <div className="header">We had some issues</div>
                                <ul className="list">
                                    {!firstNameValid && <li>{formErrors.firstName}</li>}
                                    {!lastNameValid && <li>{formErrors.lastName}</li>}
                                    {!nickNameValid && <li>{formErrors.nickName}</li>}
                                    {!emailValid && <li>{formErrors.email}</li>}
                                    {!passwordValid && <li>{formErrors.password}</li>}
                                </ul>
                            </div>
                        }                                    
                    </form>
                </div>    
                <ModalRoot />          
            </div>
        </React.Fragment>
        )
    } 
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: (form) => dispatch(signUp(form)),    
  }
}

export default connect(
    null,
    mapDispatchToProps
)(SignUp)