import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { signIn } from '../store/users/users-action';
import '../styles/Sign.css'

class SignIn extends React.Component {  
    
    constructor(props) {
      super(props);
      this.state = {
          form: {
            email: '',
            password: ''
          }
      };    
    }

    handleInputChange = (event) => {
        const {name, value} = event.target
        this.setState(state => ({...state, form: {...state.form, [name]: value}}))
    };    

    handleSubmit = (event) => {
        event.preventDefault();
        const {signIn} = this.props;
        const {email, password} = this.state.form;                           
        if (email && password ) { 
            signIn(email, password);
        }
        this.setState({form: { email: '', password: '' }})
      }

    render(){
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
                        <h4 className="ui dividing header centered">Authorization</h4>                        
                        <div className="field">
                            <label>Email</label>
                            <div className="field">
                                <input  name="email" 
                                        type="text"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                />
                            </div>
                        </div>                         
                        <div className="field">
                            <label>Password</label>
                            <div className="field">
                                <input name="password"
                                       type="password"
                                       placeholder="Password"
                                       value={this.state.password}
                                       onChange={this.handleInputChange}
                                />
                            </div>
                        </div>                                 
                        <div className="ui header centered">
                            <button className="ui teal button">Login</button>
                        </div>                                                                 
                    </form>    
                    <Link to="/recover-password"> 
                        <div className="clue">Forgot Password?</div>   
                    </Link>                        
                </div>    
              
            </div>
        </React.Fragment>
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