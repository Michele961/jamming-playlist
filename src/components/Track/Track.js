import React from "react";
import './Track.css.css';

class Track extends React.Component {
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3/>
                    <p/>
                </div>
                <button className="Track-action"/>
            </div>
        );
    }

}

const renderAction = (isRemoval) => {
    return <button className="Track-action" content={isRemoval ? "-" : "+"}/>
}

export default Track;
