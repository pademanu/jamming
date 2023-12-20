import React, { useState } from 'react'
import TrackList from '../TrackList/TrackList'

const Playlist = ({ playlistName, playlistTracks, onAddTrack, onRemoveTrack }) => {
  const [name, setName] = useState(playlistName);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="Playlist">
      <input value={name} onChange={handleNameChange} />
      <TrackList tracks={playlistTracks} onAdd={onAddTrack} onRemove={onRemoveTrack} isRemoval={true} />
    </div>
  );
};

export default Playlist;
