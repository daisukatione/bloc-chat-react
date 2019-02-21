
import React, { Component } from 'react';

class RoomList extends Component {
    constructor(props) {
        super(props);
        this.roomsRef = this.props.firebase.database().ref('rooms');
        this.state = {
            rooms: [],
            newRoomName: ''
          };
    }

    handleChange(event) {
        this.setState({newRoomName: event.target.value});    
    }

    handleSubmit(event) {
        alert('New room added:' + this.state.newRoomName);
        this.roomsRef.push({
            name: this.state.newRoomName
        });
        event.preventDefault();
    }

    componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
          const room = snapshot.val();
          room.key = snapshot.key;
          this.setState({rooms: this.state.rooms.concat( room )})
        });
      }

    render() {
        return (
            <div>
                <h1>Bloc Chat</h1>
                {
                this.state.rooms.map( (rooms) => 
                <button onClick={ () => this.props.handleClickroom(rooms.name, rooms.key)}>{rooms.name}</button>  )             
                }
                <form onSubmit={ (event) => this.handleSubmit(event) }> 
                <input type="text" value={this.state.newRoomName} onChange={ (event) => this.handleChange(event)} />
                <input type="submit" value="Submit" />
                </form>
                
                </div>
            );
        }
    }

export default RoomList;