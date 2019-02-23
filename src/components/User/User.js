import React, { Component } from 'react';

class Name extends Component {
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
            if (user) {
                this.props.setUser(user);
            }
          });
    }

    render() {
        return (
                <div>
                    <button onClick={ () => this.signIn()}>Sign-in</button>  
                    <button onClick={ () => this.signOut()}>Sign-out</button>  
                    <h2>
                    {this.props.user.displayName}
                    </h2>
                </div>
                );
            }
        }     

export default Name;