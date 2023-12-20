import React, { useState } from 'react';
import './App.css';
import Playlist from './components/Playlist/Playlist'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrackToPlaylist = (track) => {
    if (!playlistTracks.some((playlistTrack) => playlistTrack.id === track.id)) {
      const newPlaylistTracks = [...playlistTracks, track];
      setPlaylistTracks(newPlaylistTracks);
    }
  };

  const removeTrackFromPlaylist = (track) => {
    const newPlaylistTracks = playlistTracks.filter((playlistTrack) => playlistTrack.id !== track.id);
    setPlaylistTracks(newPlaylistTracks);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jamming!</h1>
      </header>
      <div>
        <SearchBar />
      </div>
      <div className='columns'>
        <div>
          <h2>Track Listing</h2>
        </div>
        <div>
          <h2>Playlist</h2>
            <Playlist
              playlistName={playlistName}
              playlistTracks={playlistTracks}
              onAddTrack={addTrackToPlaylist}
              onRemoveTrack={removeTrackFromPlaylist}
            />
          <button>Save to Spotify</button>
        </div>
      </div>
    </div>
  );
}

export default App;