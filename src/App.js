import logo from './logo.svg';
import './App.css';
import og from "./images/og2.jpg";
import sah from "./audios/saho.mp3";
import kalki from "./videos/kalkitrailer.mp4";


function App() {
  return (
    <div className="App">
      <div>
        <video className="videos" src='https://services.brninfotech.com/tws/media2/trailers/zoyaFactor.mp4' controls autoPlay muted></video>
        <video className="videos" src="./videos/kalkitrailer.mp4" controls autoPlay muted></video>
        <video className="videos" src={kalki} controls autoPlay muted></video>
      
      </div>
      <hr></hr>
       <div>
       <audio src="https://services.brninfotech.com/tws/media2/songs/Saaho/01 - Pyscho Saiyaan.mp3" controls></audio>
        <audio src="./audios/headline.mp3" controls></audio>
        <audio src={sah} controls></audio>
        
      </div>
      <hr></hr>
      <div>
        <img src='https://m.media-amazon.com/images/I/71s8uODB6AL._AC_UF1000,1000_QL80_.jpg'></img>
        <img src='./images/og1.jpg'></img>
        <img src={og}></img>
      </div>
      
    </div>
  
  );
}

export default App;
