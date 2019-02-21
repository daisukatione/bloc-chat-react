import React, { Component } from 'react';

class MessageList extends Component {
    constructor(props) {
        super(props);
        this.messagesRef = this.props.firebase.database().ref('Messages');
        this.state = {
            messages: [],
            availableroom: []
        };
    }

componentDidMount() {
        this.messagesRef.on('child_added', snapshot => {
          const message = snapshot.val();
          message.key = snapshot.key;
          this.setState({messages: this.state.messages.concat( message )})
        });
      }

render() {
    return (
        <div>
        <h2>{this.props.activeroom}</h2>
        {
        this.state.messages.filter( message => message.roomId == this.props.activeroomkey).map( (messages) => 
        <p>{messages.content}</p>  )            
        }
        </div>
        );
    }
}

export default MessageList;