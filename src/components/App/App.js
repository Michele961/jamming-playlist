import './App.css';
import React from "react";
import SearchResults from "../SearchResults/SearchResults";
import SearchBar from "../SearchBar/SearchBar";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [
                {
                    id: "1",
                    track: "Tiny Dancer",
                    name: "Tiny Dancer",
                    artist: "Elton John",
                    album: "Madman Across The Water",
                },
                {
                    id: "2",
                    track: "Stronger",
                    name: "Stronger",
                    artist: "Britney Spears",
                    album: "Oops!... I Did It Again",
                }
            ],

            playlistName: "My Favourite Songs",
            playlistTracks: [
                {
                    id: "3",
                    track: "Hey",
                    name: "Hey",
                    artist: "Bobby",
                    album: "Oops!... I Did It Again and now ?",

                }
            ]
        }
        ;
    }

    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar/>
                    <div className="App-playlist">
                        <SearchResults results={this.state.searchResults}/>
                        <Playlist name={this.state.playlistName} tracks={this.state.playlistTracks}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
