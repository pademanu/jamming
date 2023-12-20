import React from 'react';

const Track = ({ track, onAdd, onRemove, isRemoval }) => {
  const handleAddTrack = () => {
    onAdd(track);
  };

  const handleRemoveTrack = () => {
    onRemove(track);
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      {/* Add/remove track button */}
      {isRemoval ? (
        <button className="Track-action" onClick={handleRemoveTrack}>-</button>
      ) : (
        <button className="Track-action" onClick={handleAddTrack}>+</button>
      )}
    </div>
  );
};

export default Track;
