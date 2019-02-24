
import React, { Component } from 'react';

class RoomList extends Component {
    constructor(props) {
        super(props);
        this.roomsRef = this.props.firebase.database().ref('rooms');
        this.state = {
            rooms: [],
            newRoomName: '',
            changedRoom: ''
          };
    }

    handleChange(event) {
        this.setState({newRoomName: event.target.value});    
    }

    roomChange(event) {
        this.setState({changedRoom: event.target.value});    
    }

    handleSubmit(event) {
        this.roomsRef.push({
            name: this.state.newRoomName
        });
        event.preventDefault();
    }

    updateRoom(event) {
        console.log(this.state.rooms);
    }

    componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
          const room = snapshot.val();
          room.key = snapshot.key;
          this.setState({rooms: this.state.rooms.concat( room )})
        });
      }
    
    deleteRoom() {
        this.roomsRef.child(this.props.activeroomkey).remove();
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
                <input type="submit" value="Create Room" />
                </form>

                <form onSubmit={ (event) => this.updateRoom(event) }> 
                <input type="text" value={this.state.changedRoom} onChange={ (event) => this.roomChange(event)} />
                <input type="submit" value="Change room name" />
                </form>

                <button onClick={ () => this.deleteRoom() }>Delete current room</button>
                </div>
            );
        }
    }

export default RoomList;