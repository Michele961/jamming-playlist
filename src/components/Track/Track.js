import React from "react";
import './Track.css';

class Track extends React.Component {
    render(props) {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.data.name}</h3>
                    <p>{this.props.data.artist} | {this.props.data.album}</p>
                </div>
                <button className="Track-action">{renderAction(true)}</button>
            </div>
        );
    }

}

const renderAction = (isRemoval) => {
    return <button className="Track-action" content={isRemoval ? "-" : "+"}/>
}

export default Track;
