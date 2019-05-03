import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { Formik, Field, Form } from 'formik';
import ValidSignIn from '../validation/validSignIn'
import { signIn } from '../../store/account/account-action';
import ModalAlert from '../modals/ModalAlert'
import '../../styles/Sign.css'

class SignIn extends React.Component {     
    render(){
        return(
            <Formik
                initialValues={{ 
                        email: '',
                        password: ''                 
                }}
                validationSchema={ValidSignIn}
                onSubmit={form => this.props.signIn(form)}
            >
                {({ errors, touched, handleChange, handleSubmit }) => (
                    <>
                    <ModalAlert />
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
                                <h4 className="ui dividing header centered">Authorization</h4>                        
                                <div className={"field " + (errors.email && touched.email ? "error" : null)} >
                                    <label>Email</label>
                                    <div className="field">
                                        <Field  name="email" 
                                                type="text"
                                                placeholder="Email"                                    
                                                onChange={handleChange}
                                        />
                                        {errors.email && touched.email ? ( <div>{errors.email}</div> ) : null}
                                    </div>                         
                                </div>                         
                                <div className={"field " + (errors.password && touched.password ? "error" : null)}>
                                    <label>Password</label>
                                    <div className="field">
                                        <Field name="password"
                                            type="password"
                                            placeholder="Password"                                    
                                            onChange={handleChange}
                                            maxLength={20}
                                        />
                                        {errors.password && touched.password ? ( <div>{errors.password}</div> ) : null}
                                    </div>
                                </div>                                 
                                <div className="ui header centered">
                                    <button className="ui teal button">Login</button>
                                </div>                                                                 
                            </Form>    
                            <Link to="/recover-password"> 
                                <div className="clue">Forgot Password?</div>   
                            </Link>                        
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
    signIn: (email, password) => dispatch(signIn(email, password)),    
  }
}

export default connect(
    null,
    mapDispatchToProps
)(SignIn)