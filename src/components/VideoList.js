import React from 'react'
import VideoItem from './VideoItem';
class VideoList extends React.Component {


  render() {
    // console.log('VideoList', this.props.onVideoSelect);
    const renderedList = this.props.videos.map((video) => {
      return <VideoItem onVideoSelect={this.props.onVideoSelect} video={video} key={video.id.videoId} />;
    });

    return (
      <div className="ui relaxed divided list">{renderedList} </div>)
  }
};

export default VideoList;