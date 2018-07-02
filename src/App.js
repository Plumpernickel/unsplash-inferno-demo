import { version, Component } from 'inferno';
import './registerServiceWorker';
import Logo from './logo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <Logo width="50" height="50" />
            <span>&emsp;{`InfernoJS ${version} Unsplash Gallery`}</span>
          </h1>
        </header>
        <div class="container">
            <div><img src="img/normal1.jpg"/></div>
            <div class="vertical"><img src="img/vertical1.jpg"/></div>
            <div class="horizontal"><img src="img/horizontal1.jpg"/></div>
            <div><img src="img/normal2.jpg"/></div>
            <div><img src="img/normal3.jpg"/></div>
            <div class="big"><img src="img/big1.jpg"/></div>
            <div><img src="img/normal4.jpg"/></div>
            <div class="vertical"><img src="img/vertical2.jpg"/></div>
            <div><img src="img/normal5.jpg"/></div>
            <div class="horizontal"><img src="img/horizontal2.jpg"/></div>
            <div><img src="img/normal6.jpg"/></div>
            <div class="big"><img src="img/big2.jpg"/></div>
            <div><img src="img/normal7.jpg"/></div>
            <div class="horizontal"><img src="img/horizontal3.jpg"/></div>
            <div><img src="img/normal8.jpg"/></div>
            <div class="big"><img src="img/big3.jpg"/></div>
            <div><img src="img/normal9.jpg"/></div>
            <div class="vertical"><img src="img/vertical3.jpg"/></div>
        </div>
      </div>
    );
  }
}

export default App;
