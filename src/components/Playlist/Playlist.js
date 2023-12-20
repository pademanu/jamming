import React from 'react';
import TrackList from './TrackList'; // Import the TrackList component

const Playlist = ({ playlistName, playlistTracks, onAddTrack, onRemoveTrack }) => {
  return (
    <div className="Playlist">
      <input value={playlistName} onChange={(e) => setPlaylistName(e.target.value)} />
      <TrackList tracks={playlistTracks} onAdd={onAddTrack} onRemove={onRemoveTrack} isRemoval={true} />
    </div>
  );
};

export default Playlist;
