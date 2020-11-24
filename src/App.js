import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Results from './Results';
import requests from './requests';
// 1062caf7a565cc063091894493ac2d1e
// https://api.themoviedb.org/3/movie/550?api_key=1062caf7a565cc063091894493ac2d1e
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDYyY2FmN2E1NjVjYzA2MzA5MTg5NDQ5M2FjMmQxZSIsInN1YiI6IjVmOTMwNWIwOTAyMDEyMDAzNmZjOGNjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s_FHdblFp3dsYcxDaypNsIJif-6dnqtZg3iohJFnONo
// npm i react-text-truncate
// npm i react-leaflet
//npm i axios
// npm react-flip-toolkit for animation
//npm react-flip-move

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)
  return ( 
    <div className="app">
   {/*Header*/ }
   <Header/>
   {/*Nav*/}
   <Nav setSelectedOption={setSelectedOption}/>
   {/*Results*/}
   <Results selectedOption={selectedOption}/>
    </div>
  );
}

export default App;
