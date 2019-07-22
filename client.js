// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance } from 'react-360-web';
import {Environment, asset} from 'react-360';




function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('video360', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  


  

  // const player = r360.compositor.createVideoPlayer('myplayer');
  // player.setSource(r360.getAssetURL('video.mp4'), '2D', 'mp4');
  // player.play();
  // player.setLoop(true);
  // r360.compositor.setBackgroundVideo('myplayer');


  
  r360.compositor.setBackground(r360.getAssetURL('image360.jpg', {
    // format: '2D',
  }));


}

window.React360 = {init};
