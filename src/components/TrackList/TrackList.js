import React from "react";
import './TrackList.css'
import Track from "../Track/Track.js";

class TrackList extends React.Component {

    render() {
        let tracks = Array.from(this.props.tracks);
        return (
            <div className="TrackList">
                {
                    tracks.map(track => {
                    return <Track isRemoval={this.props.isRemoval} data={track} key={track.id}
                                  onAdd={this.props.onAdd}/>
                })}
            </div>
        );
    }
}

export default TrackList;
