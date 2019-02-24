import React, { Component } from 'react';

class MessageList extends Component {
    constructor(props) {
        super(props);
        this.messagesRef = this.props.firebase.database().ref('Messages');
        this.state = {
            messages: [],
            availableroom: [],
            newMessage: ""
        };
    }

componentDidMount() {
        this.messagesRef.on('child_added', snapshot => {
          const message = snapshot.val();
          message.key = snapshot.key;
          this.setState({messages: this.state.messages.concat( message )})
        });
      }

handleChange(event) {
        this.setState({newMessage: event.target.value});    
    }

handleSubmit(event) {
        this.messagesRef.push({
            content: this.state.newMessage,
            username: this.props.user.displayName,
            roomId: this.props.activeroomkey
        });
        event.preventDefault();
    }

render() {
    return (
        <div>
        <h2>{this.props.activeroom}</h2>
        {
        this.state.messages.filter( message => message.roomId == this.props.activeroomkey).map( (messages) => 
        <div>
        <h4>{messages.username}</h4>
        <p>{messages.content}</p>
        </div> )            
        }
        <form onSubmit={ (event) => this.handleSubmit(event) }> 
                <input type="text" value={this.state.newMessage} onChange={ (event) => this.handleChange(event)} />
                <input type="submit" value="Submit" />
                </form>
        </div>
        );
    }
}

export default MessageList;