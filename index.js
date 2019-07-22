import React from 'react';
import {
  AppRegistry,
  View,
  VideoPano,
  VideoControl,
  MediaPlayerState
} from 'react-360';



export default class video360 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playerState: new MediaPlayerState({autoPlay: true, muted: true}), // init with muted, autoPlay
    };
  }

  render() {
    return (
      <View>
        
      </View>
        
        
    );
  }
};



AppRegistry.registerComponent('video360', () => video360);
