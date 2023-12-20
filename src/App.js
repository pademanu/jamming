import React, { useState } from 'react';
import Playlist from './components/Playlist'; // Import the Playlist component

const App = () => {
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  // Function to add a track to the playlist
  const addTrackToPlaylist = (track) => {
    // Check if the track is already in the playlist
    if (!playlistTracks.some((playlistTrack) => playlistTrack.id === track.id)) {
      const newPlaylistTracks = [...playlistTracks, track];
      setPlaylistTracks(newPlaylistTracks);
    }
  };

  // Function to remove a track from the playlist
  const removeTrackFromPlaylist = (track) => {
    const newPlaylistTracks = playlistTracks.filter((playlistTrack) => playlistTrack.id !== track.id);
    setPlaylistTracks(newPlaylistTracks);
  };

  return (
    <div className="App">
      <h1>Jammming</h1>
      <Playlist
        playlistName={playlistName}
        playlistTracks={playlistTracks}
        onAddTrack={addTrackToPlaylist}
        onRemoveTrack={removeTrackFromPlaylist}
      />
    </div>
  );
};

export default App;
