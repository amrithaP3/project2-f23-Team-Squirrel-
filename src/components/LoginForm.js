import React from 'react';

class LoginForm extends React.Component {

    state = {
        fullname: "",
        email: "",
        password: "",
        confirmpass: "",
        error: ""
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value, error: "" });
    }

    handleSubmit = event => {
        event.preventDefault();

        const { password, confirmpass } = this.state;

        if (password !== confirmpass) {
            this.setState({ error: "Passwords do not match" });
        } else {
            console.log(this.state);
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text"
                        name="fullname"
                        placeholder="Full Name"
                        onChange={this.handleChange}
                        value={this.state.fullname}
                    />
                </div>
                <div>
                    <input type="email"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                </div>
                <div>
                    <input type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                </div>
                <div>
                    <input type="password"
                        name="confirmpass"
                        placeholder="Confirm Password"
                        onChange={this.handleChange}
                        value={this.state.confirmpass}
                    />
                </div>
                {this.state.error && <div style={{ color: 'red' }}>{this.state.error}</div>}
                <button type="submit">Sign Up</button>
            </form>
        )
    }
}

export default LoginForm;
