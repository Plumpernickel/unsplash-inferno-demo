import { version, Component } from 'inferno';
import './registerServiceWorker';
import Logo from './logo';
import './App.css';
import Unsplash, { toJson } from 'unsplash-js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      photos: [],
      currentPage: 1,
      loading: false
    };

    this.unsplash = null;
    this.resolveOrientationClass = this.resolveOrientationClass.bind(this);
    this.fetchPhotos = this.fetchPhotos.bind(this);
  }

  componentDidMount() {
    this.setState({loading: true});

    this.unsplash = new Unsplash({
      applicationId: "451938f9d0f188efa6822b272c77db0f7773a5866ee7999ed47da3d9c9076e12",
      secret: "451938f9d0f188efa6822b272c77db0f7773a5866ee7999ed47da3d9c9076e12",
      callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
    });

    if (this.unsplash.photos) {
      this.fetchPhotos();
    }
  }

  fetchPhotos() {
    if (!this.state.loading) {
      this.setState({loading: true});
    }

    this.unsplash.photos.listPhotos(this.state.currentPage, 25, "latest")
      .then(toJson)
      // eslint-disable-next-line
      .then(apiPhotos => {
        const formattedPhotos = [];
        apiPhotos.forEach(apiPhoto => {
          const formattedPhotoObj = {
            listUrl: apiPhoto.urls.small,
            fullUrl: apiPhoto.urls.raw,
            fullHeight: apiPhoto.height,
            fullWidth: apiPhoto.width,
            downloadLink: apiPhoto.links.download,
            userData: apiPhoto.user,
            creationDate: apiPhoto.created_at
          }

          formattedPhotos.push(formattedPhotoObj);
        });

        this.setState((prevState, props) => ({
          photos: prevState.photos.concat(formattedPhotos),
          currentPage: prevState.currentPage + 1,
          loading: false
        }));
      });
  }

  resolveOrientationClass(width, height, idx) {
    let resolvedClass = '';

    if (width / height > 1.75 && height / width < 1) {
      resolvedClass = 'horizontal';
    } else if (height / width > 1.25 && width / height < 1) {
      resolvedClass = 'vertical';
    } else {
      if (width >= 3840 && height >= 3840) {
        resolvedClass = 'big';
      }
    }

    return resolvedClass;
  }

  render() {
    let photosToRender = this.state.photos ? this.state.photos.map((photo, idx) => (
      <div className={this.resolveOrientationClass(photo.fullWidth, photo.fullHeight, idx)}>
        <img src={photo.listUrl} alt={'unsplash latest photo ' + idx} />
      </div>
    )) : 'Oops, this shouldn\'t be happening! Please contact the genius in charge here....';

    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <Logo width="50" height="50" />
            <span>&emsp;{`InfernoJS ${version} Unsplash Gallery`}</span>
          </h1>
        </header>
        <div class="container">
            {this.state.loading ? 'Fetching photos...' : photosToRender}
        </div>
      </div>
    );
  }
}

export default App;
