import React, { Component } from 'react'

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


            console.log(authenticated.id)

            sessionStorage.setItem(
                "userId",
                authenticated.id)

            if (authenticated === undefined){
                alert("Whoops! We we couldn't find your account. Please re-renter a valid username and email or sign up below!")
                window.location.reload()
                // this.props.history.push("/register")
            } else {
                // UPDATING THE COMPONENT WITHOUT REFRESHING THE PAGE
                this.props.updateComponent()
                // Taking user to news page
                this.props.history.push("/")
            }
    }
  render() {
    return (
        <section className="login">
        <form className="registerContainer" onSubmit={this.handleLogin}>
            <h2>Please sign in</h2>
            <label htmlFor="inputUsername">
            </label> <br></br>
            <input onChange={this.handleFieldChange} type="email"
                id="email"
                placeholder="Email"
                required autoFocus="" />
                <br></br>
            <label htmlFor="inputEmail">
            </label>
            <br></br>
            <input onChange={this.handleFieldChange} type="password"
                id="password"
                placeholder="Password"
                required />
                <br></br>

            {/* <button type="submit" className="btn btn-primary signIn">
                Sign in
            </button> */}
            <button type="submit" className="btn btn-primary signIn" >Sign in</button>

            <p className="signUp">Don't have an account?</p>
        </form>
    </section>
    )
  }
}

export default Login
