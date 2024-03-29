import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from './config/Fire';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: '' ,
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }
  showLoginBox() {
    this.setState({isLoginOpen: true, isRegisterOpen: false});
  }

  showRegisterBox() {
    this.setState({isRegisterOpen: true, isLoginOpen: false});
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <div className="col-md-6">
      <h3>                        Login                      </h3>
        <form>
          <div class="input-group">
            <label for="exampleInputEmail1">Email address  </label>
            <input  value={this.state.email} onChange={this.handleChange} type="email" name="email" className="login-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="input-group">
            <label for="exampleInputPassword1" >Password  </label>
            <input  value={this.state.password} onChange={this.handleChange} type="password" name="password" className="login-input" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" onClick={this.login} className="login-btn">Login</button>
          <button onClick={this.signup} style={{marginLeft: '25px'}} className="login-btn">Signup</button>
        </form>
      
      </div>
    );
  }
}
export default Login;
