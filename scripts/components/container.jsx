import React, {Component} from 'react';

export default class Container extends Component {
  render() {
  
  
    const array = ["img/owl","img/baby.png",
                  "img/bellpepper.png",
                  "img/duck.png",
                  "img/flag.png",
                  "img/globe.png",
                  "img/lighter.png",
                  "img/pretzel.png",
                  "img/rubberduck.png",
                  "img/suitcase.png",
                  "img/teeth.png",
                  "img/tomatoes.png",
                  "img/camera.png",
                  "img/pliers.png",
                  "img/flowerpot.png",
                  "img/pig.png",
                  "img/pigeon.png",
                  "img/lemon.png",
                  "img/hammer.png",
                  "img/glove.png",
  const containerStyle ={
    display: 'flex', /* or inline-flex */
    backgroundColor: 'yellow',
  }
    return (
      // Add your component markup and other subcomponent references here.
      <div style={containerStyle}>
        <p>This is the container</p>
      </div>
    );
  }
}