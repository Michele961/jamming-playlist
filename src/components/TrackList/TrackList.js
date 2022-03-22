import React from "react";
import './TrackList.css'
import Track from "../Track/Track.js";

class TrackList extends React.Component {

    render(props) {
        return (
            <div className="TrackList">
                {this.props.tracks.map((track) => {
                    return <Track data={track} key={track.id}/>
                })}
            </div>
        );
    }
}

export default TrackList;
