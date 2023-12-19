import './App.css';
import TrackList from './tracklist';

function App() {
  const tracks = [
    {
      name: 'Song 1',
      artist: 'Artist 1',
      album: 'Album 1',
      albumArt: 'URL_to_album_art_1'
    },
    {
      name: 'Song 2',
      artist: 'Artist 2',
      album: 'Album 2',
      albumArt: 'URL_to_album_art_2'
    }
  ];  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jamming!</h1>
      </header>
      <div>
        <input />
        <button>Search!</button>
      </div>
      <div>
        <h1>Track Listing</h1>
        <TrackList tracks={tracks} />
      </div>
      <div>
        <button>Save to Spotify</button>
      </div>
    </div>
  );
}

export default App;