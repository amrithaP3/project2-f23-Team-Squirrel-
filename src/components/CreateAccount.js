import React from 'react';
import styles from '../styles/style.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';  


class CreateAccount extends React.Component {

    state = {
        fullname: "",
        email: "",
        password: "",
        confirmpass: "",
        error: "",
        isAdmin: false
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

    handleAdmin = () => {
        this.setState((prevState) => ({
          isAdmin: !prevState.isAdmin,
        }));
        console.log(this.state.isAdmin);
    };

    render() {
        return (
            <div className={styles.container}>
                <div className={styles['page-header']}>
                    <div className={styles['header-content']}>
                        <Image src="/applogo.png" alt="App Logo" width={100} height={100} className={styles.appLogo} />
                        <div className={styles.heading1}>Progress</div>
                    </div>
                </div>
            <div className={styles['gray-line']}></div>
            <div className={styles['red-quarter-circle']}></div>
            <form onSubmit={this.handleSubmit} className={styles.container}>

                <div className={styles.heading}>Create Account</div>

                <div className={styles['input-container']}>
                    <input type="text"
                        name="fullname"
                        placeholder="Full Name"
                        onChange={this.handleChange}
                        value={this.state.fullname}
                        className={styles.input}
                    />
                    <div className={styles['input-line']}></div>
                </div>

                <div className={styles['input-container']}>
                    <input type="email"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        className={styles.input}

                    />
                    <div className={styles['input-line']}></div>
                </div>
                <div className={styles['input-container']}>
                    <input type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        className={styles.input}

                    />
                    <div className={styles['input-line']}></div>
                </div>
                <div className={styles['input-container']}>
                    <input type="password"
                        name="confirmpass"
                        placeholder="Confirm Password"
                        onChange={this.handleChange}
                        value={this.state.confirmpass}
                        className={styles.input}

                    />
                    <div className={styles['input-line']}></div>
                </div>
                <div className={styles['input-container']}>
                    <label>
                    <input
                        type="checkbox"
                        name="isAdmin"
                        checked={this.state.isAdmin}
                        onChange={this.handleAdmin}
                    />
                    Are you an admin?
                    </label>
                </div>
                {this.state.error && <div style={{ color: 'red' }}>{this.state.error}</div>}
                <button type="submit" className={styles['signup-button']}>Sign Up</button>
         </form>
            <div className={styles['have-account']}>
            Already have an account?{' '}
            <Link href="/login">
                Sign in
            </Link>
            </div>
         </div>

        )
    }
}

export default CreateAccount;
