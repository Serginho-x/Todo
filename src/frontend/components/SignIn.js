import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { login } from '../store/users/users-action';
import '../styles/Sign.css'

class SignIn extends React.Component {  
    
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
        };    
      }

    handleInputChange = (event) => {
        if(event.target.value){
            const email = event.target.value;
            this.setState({ email: email })
        };
        if(event.target.value){
            const password = event.target.value;
            this.setState({ password: password })
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {login} = this.props;
        const {email, password} = this.state;                           
        if (email && password ) { 
            login(this.state.email, this.state.password);
        }
        this.setState({ email: '', password: '' })
      }

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
                    <form className="ui form" onSubmit={this.handleSubmit}>
                        <h4 className="ui dividing header centered">Authorization</h4>                        
                        <div className="field">
                            <label>Email</label>
                            <div className="field">
                                <input  type="text"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                />
                            </div>
                        </div>                         
                        <div className="field">
                            <label>Password</label>
                            <div className="field">
                                <input type="text"
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
    login: (email, password) => dispatch(login(email, password)),    
  }
}
export default connect(
    null,
    mapDispatchToProps
)(SignIn)