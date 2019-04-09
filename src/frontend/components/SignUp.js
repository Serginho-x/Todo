import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import '../styles/Sign.css'

class SignUp extends React.Component {  

    render(){
        return(
            <React.Fragment>             
            <div className="header-box">
                <Link to="/sign-in"> 
                    <div className="header-box-sign" type="button">Sign in</div>
                </Link>
                <Link to="/"> 
                    <div className="header-box-sign" type="button">Sign up</div>
                </Link>
            </div>            
         
            <div className="ui grid">           
                <div className="ui card six wide column centered stackable page ">                              
                    <form className="ui form" >
                        <h4 className="ui dividing header centered">Registration</h4>
                        <div className="field">
                            <label>Name</label>
                            <div className="field">
                                <input type="text" placeholder="First Name"/>
                            </div>
                            <div className="field">
                                <input type="text" placeholder="Last Name"/>
                            </div>                
                        </div> 
                        <div className="field">
                            <label>Nickname</label>
                            <div className="field">
                                <input type="text" placeholder="Nickname"/>
                            </div>
                        </div>                         
                        <div className="field">
                            <label>Password</label>
                            <div className="field">
                                <input type="text" placeholder="Password"/>
                            </div>
                        </div>                       
                        <div className="field">
                            <label>Email</label>
                            <div className="ui left icon input field">
                                <input type="text" placeholder="Email"/>
                                <i className="mail icon"></i>
                            </div>
                        </div>  
                        <div className="ui header centered">
                            <button className="ui teal button">OK</button>
                        </div>      
                                                                  
                    </form>
                </div>              
            </div>
        </React.Fragment>
        )
    } 
}
export default SignUp