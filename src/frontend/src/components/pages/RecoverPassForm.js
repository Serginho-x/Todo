import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Sign.css'

class RecoverPassForm extends React.Component { 
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
                        <h4 className="ui dividing header centered">Recover password</h4>                        
                        <div className="field">
                        <div className="recover-title">
                            Please enter your e-mail address and we’ll send your password.
                        </div>
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
export default RecoverPassForm