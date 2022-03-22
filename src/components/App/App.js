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
                    id: "11",
                    track: "Tiny Dancer",
                    name: "Tiny Dancer",
                    artist: "Elton John",
                    album: "Madman Across The Water",
                },
                {
                    id: "21",
                    track: "Stronger",
                    name: "Stronger",
                    artist: "Britney Spears",
                    album: "Oops!... I Did It Again",
                }
            ],

            playlistName: "My Favourite Songs",
            playlistTracks: [
                {
                    id: "321",
                    track: "Hey",
                    name: "Hey",
                    artist: "Bobby",
                    album: "Oops!... I Did It Again and now ?"
                }
            ]
        };

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
    }

    addTrack(track) {
        let tracks = this.state.playlistTracks;
        if (tracks.find(savedTrack => savedTrack.id === track.id)) {
            return;
        }

        tracks.push(track);
        this.setState({playlistTracks: tracks});
    }

    removeTrack(track) {
        let tracks = this.state.playlistTracks;
        tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

        this.setState({playlistTracks: tracks});
    }

    updatePlaylistName(name) {
        this.setState({playlistName: name})
    }

    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar/>
                    <div className="App-playlist">
                        <SearchResults onAdd={this.addTrack} results={this.state.searchResults}/>
                        <Playlist onNameChange={this.updatePlaylistName}
                                  name={this.state.playlistName}
                                  tracks={this.state.playlistTracks}
                                  onRemove={this.removeTrack}/>
                    </div>
                </div>
            </div>
        );
    }


}


export default App;
