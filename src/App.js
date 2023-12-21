import React, { useState } from 'react';
import './App.css';
import Playlist from './components/Playlist/Playlist'
import SearchBar from './components/SearchBar/SearchBar'
import TrackList from './components/TrackList/TrackList'
import SearchResults from './components/SearchResults/SearchResults';
import Songs from './components/SearchResults/MusicObject';

function App() {
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [music, setMusic] = useState(SearchResults);
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

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

  const handleSearchClick = () => {
    setMusic(Songs);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jamming!</h1>
      </header>
      <div>
      <SearchBar
          searchText={searchText}
          handleSearchChange={handleSearchChange}
          handleSearchClick={handleSearchClick}
        />
      </div>
      <div className='columns'>
        <div>
          <h2>Track Listing</h2>
          <TrackList tracks={music} onAdd={addTrackToPlaylist} onRemove={removeTrackFromPlaylist}/>
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