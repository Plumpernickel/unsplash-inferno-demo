import { version, Component } from 'inferno';
import './registerServiceWorker';
import Logo from './logo';
import './App.css';
import Unsplash, { toJson } from 'unsplash-js';

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.unsplash = null;
  }

  componentDidMount() {
    this.unsplash = new Unsplash({
      applicationId: "451938f9d0f188efa6822b272c77db0f7773a5866ee7999ed47da3d9c9076e12",
      secret: "451938f9d0f188efa6822b272c77db0f7773a5866ee7999ed47da3d9c9076e12",
      callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
    });

    if (this.unsplash.photos) {
      this.unsplash.photos.listPhotos(1, 25, "latest")
        .then(toJson)
        // eslint-disable-next-line
        .then(response => {
          console.log(response);
        });
    }
  }

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
            <div><img src="img/normal1.jpg" alt="whatever1" /></div>
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
