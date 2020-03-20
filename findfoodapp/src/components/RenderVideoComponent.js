import React, { Component } from 'react';
import YouTube from 'react-youtube';
 
//https://youtu.be/zZBchvH0ZH0

class RenderVideo extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    return (
      <YouTube
        videoId="zZBchvH0ZH0"
        opts={opts}
        onReady={this.videoOnReady}
      />
    );
  }
 
  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
    console.log(event.target);
  }
}
export default RenderVideo;