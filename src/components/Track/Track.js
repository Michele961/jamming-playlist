import React from "react";
import './Track.css';

class Track extends React.Component {

    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
    }

    addTrack(event) {
        this.props.onAdd(this.props.data);
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.data.name}</h3>
                    <p>{this.props.data.artist} | {this.props.data.album}</p>
                </div>
                {this.renderAction()}
            </div>
        );
    }

    renderAction() {
        if (this.props.isRemoval) {
            return <button className="Track-action" onClick={this.removeTrack}>-</button>
        }
        return <button className="Track-action" onClick={this.addTrack}>+</button>;
    }
}




export default Track;
