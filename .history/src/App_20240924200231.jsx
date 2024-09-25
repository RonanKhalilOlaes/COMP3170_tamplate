import { artists } from './best-selling-music-artists';
import Artist from './components/artist';

function App() {

  return (
    <div className="app">
      
      <h1>Best-selling artists</h1>

      {artists}

    </div>
  );
}

export default App;
