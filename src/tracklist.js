import React from 'react'
import Track from './track'

const Tracklist = ({tracks}) => {
  return (
    <div className="track-list">
      {tracks.map((track, index) => (
        <Track key={index} track={track} />
      ))}
    </div>
  )
}

export default Tracklist