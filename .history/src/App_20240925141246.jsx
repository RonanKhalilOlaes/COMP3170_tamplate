import { artists } from './best-selling-music-artists';
import Artist from './components/artist.jsx';



function App() {

  const artistList = artists.map(artist => <Artist key={artist.name} artist={artist} />);

  return (
    <div className="app">
      
      <h1>Best-selling artists</h1>

      {artistList}

    </div>
  );
}

export default App;
