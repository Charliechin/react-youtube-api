import React from 'react';
import './VideoItem.css'

class VideoList extends React.Component {
  render() {
    // console.log(this.props.video.title)
    return (
      <div onClick={() => this.props.onVideoSelect(this.props.video)} className="video-item item">
        <img className="ui image" alt={this.props.video.snippet.title} src={this.props.video.snippet.thumbnails.medium.url} />
        <div className="content">
          <div className="header"> {this.props.video.snippet.title} </div>
        </div>
      </div>
    );
  }
}

export default VideoList;