import React from "react";
import './Playlist.css';
import TrackList from "../TrackList/TrackList";

class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    render() {
        return (
            <div className="Playlist">
                <input value={this.state.name} onChange={this.handleNameChange}/>
                <TrackList tracks={this.props.tracks} isRemoval={true} onAdd={this.props.onAdd}
                           onRemove={this.props.onRemove}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }
}

export default Playlist;
