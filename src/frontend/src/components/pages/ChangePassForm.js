import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';

import ValidChangePass from '../validation/validChangePass';
import { changePass } from '../../store/account/account-action';
import ModalAlert from '../modals/ModalAlert'
import '../styles/Sign.css'

class ChangePassForm extends React.Component {  
    state = {
        token: ''
    } 
    componentDidMount() {
        const token = new URLSearchParams(this.props.location.search).get('token');
        this.setState({ token: token });
    }   

    render(){
        return(
            <Formik
                enableReinitialize
                initialValues={{ 
                        password: '',
                        confirmedPassword: '' ,
                        token: this.state.token,             
                }}
                validationSchema={ValidChangePass}
                onSubmit={(password, confirmedPassword, token) => {this.props.changePass(password, confirmedPassword, token)}}
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
                                    <h4 className="ui dividing header centered">Password reset</h4>                        
                                    <div className="field">
                                        <div className="recover-title">
                                            Please enter your new password and confirm it.
                                        </div>
                                        <div className={"field " +( errors.password && touched.password ? "error" : null)}>
                                            <label>Password</label>
                                            <div className="ui left icon input field">
                                                <Field name="password"
                                                        type="password"
                                                        placeholder="Password"                                    
                                                        onChange={handleChange}
                                                        maxLength={20}
                                                />
                                                <i className="key icon"></i>                                               
                                            </div>
                                            {errors.password && touched.password ? ( <div>{errors.password}</div> ) : null}
                                        </div>         
                                        <div className={"field " +( errors.password && touched.password ? "error" : null)}>
                                            <label>Confirm Password</label>
                                            <div className="ui left icon input field">
                                                <Field name="confirmedPassword"
                                                    type="password"
                                                    placeholder="Confirm Password"                                    
                                                    onChange={handleChange}
                                                    maxLength={20}
                                                />
                                                 <i className="key icon"></i>                                            
                                            </div>
                                            {errors.password && touched.password ? ( <div>{errors.password}</div> ) : null}
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
        changePass: (password, confirmedPassword, token) => dispatch(changePass(password, confirmedPassword, token)),    
    }
  }

export default connect(
    null,
    mapDispatchToProps,
)(ChangePassForm)