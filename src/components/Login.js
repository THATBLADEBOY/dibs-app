import React, { Component } from 'react'
import { Button } from 'reactstrap';

export class Login extends Component {
    state = {
        password: "",
        email: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // Simplistic handler for login submit
    handleLogin = (e) => {
        e.preventDefault()

    //    Setting username in session storage. Grabbing the username from session storage and searching through "users" in the datatbase. The .find attempts to find a username that matches the username in session storage. If able to find a match, log in under that user. If not, display message that username not found.

        sessionStorage.setItem(
            "email",
            this.state.email)

        let currentUser = sessionStorage.getItem("email")
        let authenticated = this.props.users.find(user =>
            user.email === currentUser)


            // console.log(authenticated.id)

            sessionStorage.setItem(
                "userId",
                authenticated.id)
            sessionStorage.setItem(
                "trainerStatus",
            authenticated.trainerStatus)

            if (authenticated === undefined){
                alert("Whoops! We we couldn't find your account. Please re-renter a valid username and email or sign up below!")
                window.location.reload()
                // this.props.history.push("/register")
            } else {
                // Taking user to news page
                this.props.getUserClasses();
                this.props.history.push("/")
                
                
            }
    }
  render() {
    return (
        <section className="login">
        <form className="registerContainer" onSubmit={this.handleLogin}>
            <h1 className="dibs">dibs</h1>
            <label htmlFor="inputUsername">
            </label>
            <input  onChange={this.handleFieldChange} type="email"
                id="email"
                placeholder="Email"
                required autoFocus="" />
                <br></br>
            <label htmlFor="inputEmail">
            </label>
            <br></br>
            <input  onChange={this.handleFieldChange} type="password"
                id="password"
                placeholder="Password"
                required />
                <br></br>

            {/* <button type="submit" className="btn btn-primary signIn">
                Sign in
            </button> */}
            <br></br>
            <Button color="" type="submit" className="btn btn-primary signIn" >Sign in</Button>{' '}
            <Button onClick={() => this.props.history.push("/user/register")} className="registration-button">Register</Button>
        </form>
    </section>
    )
  }
}

export default Login
