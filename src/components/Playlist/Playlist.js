import React from "react";
import './Playlist.css';
import TrackList from "../TrackList/TrackList";

class Playlist extends React.Component {
    render(props) {
        return (
            <div className="Playlist">
                <input value={this.props.name}/>
                <TrackList tracks={this.props.tracks}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }

}

export default Playlist;
