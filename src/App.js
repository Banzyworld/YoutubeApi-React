// import {useEffect} from 'react'

import SideBar from "./components/SideBar";
import RecommendedVideos from "./components/RecommendedVideos";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import {useEffect} from 'react'

function App() {
  useEffect(() => {
    const url = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=NG&key=AIzaSyCJ8IYdyJgbQqhUhoXl9gWNCRYJLJlUVqE"
    fetch(url)
    .then(response => {
      return response.json()
    })
    .then((response)=>{
      console.log(response)
    })
    .catch(error => {
      console.log(error);
    })
  }, [])
  return (
    <div className="App">
       <Router>
          <Header/>
       </Router>
    </div>
  );
}

export default App;
