import React from 'react'

const Track = ({track}) => {
  return (
    <div className="track">
      <div className="track-details">
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
    </div>
  )
}

export default Track;