import { artists } from './best-selling-music-artists';
import Artist from './components/artist';



function App() {

  // const Artist = ({ artist }) => {
  //   return (
  //     <div>
  //       <img src={artist.photo_url} alt={artist.name} style={{ width: '100px', height: 'auto' }} />
  //       <h2>{artist.name}</h2>
  //       <p>Country: {artist.country}</p>
  //       <p>Years Active: {artist.years_active}</p>
  //     </div>
  //   );
  // };

  const artistList = artists.map(artists => <Artist key={artists.name} artists={artists} />);

  return (
    <div className="app">
      
      <h1>Best-selling artists</h1>

      {artistList}

    </div>
  );
}

export default App;
