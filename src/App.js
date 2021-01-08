
import './App.css';
import axios from 'axios'
import MemePage from './MemePage';

function api() {
  const res = axios.get('api.giphy.com/v1/gifs/random', {
      params: {
          api_key:'XcEYFeZJVXFwiUoyPRdn16bci6Ja4d9e'
      }
  })
  return res.url;
}
let meme = api();
console.log(meme)
function App() {
  return (
    <div className="App">
      <MemePage meme={meme}/>
    </div>
  );
}

export default App;
