import React, {Component} from 'react';
import Tile               from './tile.jsx';


export default class Container extends Component {

  render() {

    let imgArray = ["img/owl.png",
                  "img/baby.png",
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
                  "img/glove.png"]

  const containerStyle ={
    display: 'flex',
    // backgroundColor: 'lightYellow',
    flexWrap: 'wrap'
  }
    return (
      <div style={containerStyle}>
        {imgArray.map(function(src, index){
          return <Tile key={index} src={src} />;
        })}
      </div>
    );
  }
}
// next steps:
// - when state of tile is false, call parent function to splice from array (using key)
// - associate with houses/personalities
// - alt
