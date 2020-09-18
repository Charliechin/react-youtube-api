
import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

// const KEY = 'AIzaSyA6iRoO2QEarl0r_aPdmOZZNab1olXtSIM';

class App extends React.Component {

  state = { videos: [], selectedVideo: null };

  componentDidMount = () => {
    this.onTermSubmit('Nintendo 64 prototype');
  }

  onTermSubmit = async (term) => {
    // console.log(term);
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    // console.log(response.data.items);

    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })

  };

  onVideoSelect = (video) => {
    console.log('From the App!', video);
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="ui container">
        <h1>App</h1>
        <SearchBar onFormSubmit={this.onTermSubmit}>Searchhhh</SearchBar>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
        I have {this.state.videos.length} videos.
      </div>
    );
  }
}


// onTermSubmit = term => {
//   youtube.get("/search", {
//     params: {
//       q: term,
//       part: "snippet",
//       maxResults: 5,
//       key: KEY
//     }
//   });
// };

export default App;