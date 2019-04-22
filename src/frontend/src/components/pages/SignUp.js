import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Formik, Field, Form } from 'formik';
import ValidSignUp from '../validation/validSignUp'
import { signUp } from '../../store/account/account-action';
import './Sign.css'

class SignUp extends React.Component {  

    render(){
        return(         
            <Formik
                initialValues={{                
                        firstName: '',
                        lastName: '',
                        nickName: '',
                        email: '',
                        password: ''                 
                }}
                validationSchema={ValidSignUp}
                onSubmit={form => this.props.signUp(form)}
            >
                {({ errors, touched, handleChange, handleSubmit }) => (
                    <>             
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
                                <Form className="ui form" onSubmit={handleSubmit}>
                                    <h4 className="ui dividing header centered">Registration</h4>
                                    <div className={"field " +
                                            ( errors.firstName && touched.firstName && errors.firstName && errors.lastName ? "error" : null)}
                                    >
                                        <label>Name</label>
                                        <div className={"field " +( errors.firstName  && touched.firstName ? "error" : null)}>
                                            <Field  name="firstName"
                                                    type="text" 
                                                    placeholder="First Name"
                                                    onChange={handleChange}   
                                            />
                                        {errors.firstName && touched.firstName ? ( <div>{errors.firstName}</div> ) : null}
                                        </div>
                                    <div className={"field " +( errors.lastName && touched.lastName ? "error" : null)}>
                                            <Field  name="lastName"
                                                    type="text"
                                                    placeholder="Last Name"
                                                    onChange={handleChange}         
                                            />
                                        {errors.lastName && touched.lastName ? ( <div>{errors.lastName}</div> ) : null}
                                        </div>                
                                    </div> 
                                    <div className={"field " +( errors.nickName && touched.nickName ? "error" : null)}>
                                        <label>Nickname</label>
                                        <div className="field">
                                            <Field  name="nickName"
                                                    type="text"
                                                    placeholder="Nickname"
                                                    onChange={handleChange}  
                                                    maxLength={20}       
                                            />
                                        {errors.nickName && touched.nickName ? ( <div>{errors.nickName}</div> ) : null}
                                        </div>
                                    </div>  
                                    <div className={"field " +(errors.email && touched.email ? "error" : null)} >
                                        <label>Email</label>
                                        <div className="ui left icon input field">
                                            <Field  name="email"
                                                    type="text"
                                                    placeholder="E-mail"
                                                    onChange={handleChange}         
                                            />                                            
                                            <i className="mail icon"></i>                                                                                  
                                        </div>
                                        {errors.email && touched.email ? ( <div>{errors.email}</div> ) : null}
                                    </div>                         
                                    <div className={"field " +( errors.password && touched.password ? "error" : null)}>
                                        <label>Password</label>
                                        <div className="field">
                                            <Field  name="password"
                                                    type="password"
                                                    placeholder="Password"
                                                    onChange={handleChange}        
                                                    maxLength={20}
                                            />
                                        {errors.password && touched.password ? ( <div>{errors.password}</div> ) : null}
                                        </div>                          
                                    </div>   
                                    <div className="ui header centered">
                                        <button className="ui teal button" type='submit'>OK</button>
                                    </div>              
                                </Form>
                            </div>                  
                        </div>
                    </>
                )}
          </Formik>            
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
    mapDispatchToProps,
)(SignUp)