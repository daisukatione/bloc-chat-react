import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
    }

    signIn() {
        const provider = new this.props.firebase.auth.GoogleAuthProvider();
        this.props.firebase.auth().signInWithRedirect( provider );
    }

    signOut() {
        this.props.firebase.auth().signOut();
    }

    componentDidMount() {
        this.props.firebase.auth().onAuthStateChanged( (user) => {
                this.props.setUser(user);

            
          });
    }

    render() {
        return (
                <div>
                    <button onClick={ () => this.signIn()}>Sign-in</button>  
                    <button onClick={ () => this.signOut()}>Sign-out</button>  
                    <p>
                    Signed in as <b>{this.props.user ? this.props.user.displayName : "Guest"}</b>
                    </p>
                </div>
                );
            }
        }     

export default User;    