import './App.css';
import React from "react";
import SearchResults from "../SearchResults/SearchResults";
import SearchBar from "../SearchBar/SearchBar";
import Playlist from "../Playlist/Playlist";
import Spotify from "../util/SpotifyApi/Spotify";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            playlistName: "New Playlist",
            playlistTracks: []
        };

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        this.search = this.search.bind(this);
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

    savePlaylist() {
        const trackUris = this.state.playlistTracks.map(track => track.uri);

        Spotify.savePlaylist(this.state.playlistName, trackUris).then(() =>
            this.setState({playlistName: "New Playlist", playlistTracks: []}));

        alert("Playlist Saved!")
    }

    search(term) {
        Spotify.search(term).then(trackFound => {
            this.setState({searchResults: trackFound})
        });
    }

    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar onSearch={this.search}/>
                    <div className="App-playlist">
                        <SearchResults onAdd={this.addTrack} results={this.state.searchResults}/>
                        <Playlist onNameChange={this.updatePlaylistName}
                                  name={this.state.playlistName}
                                  tracks={this.state.playlistTracks}
                                  onRemove={this.removeTrack}
                                  onSave={this.savePlaylist}
                        />
                    </div>
                </div>
            </div>
        );
    }


}


export default App;
