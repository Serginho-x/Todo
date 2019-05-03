import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';

import ValidRecoverPass from '../validation/validRecoverPass'
import { recoverPass } from '../../store/account/account-action';
import ModalAlert from '../modals/ModalAlert'
import '../../styles/Sign.css'

class RecoverPassForm extends React.Component { 
    render(){
        return(
            <Formik
                initialValues={{ 
                        email: ''               
                }}
                validationSchema={ValidRecoverPass}
                onSubmit={email => this.props.recoverPass(email)}
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
                                    <h4 className="ui dividing header centered">Recover password</h4>                        
                                    <div className="field">
                                        <div className="recover-title">
                                            Please enter your e-mail address and we’ll send your password.
                                        </div>
                                        <div className={"field " + (errors.email && touched.email ? "error" : null)} >
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
                                    </div> 
                                    <div className="ui header centered">
                                        <button className="ui teal button">OK</button>
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
        recoverPass: (email) => dispatch(recoverPass(email)),    
    }
  }

export default connect(
    null,
    mapDispatchToProps,
)(RecoverPassForm)