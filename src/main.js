import Phaser from 'phaser'

const config = {
  width: 800,
  height: 500,
  type: Phaser.AUTO
  //AUTO: If the browser supports WebGL that will be used, otherwise it will fallback to Canvas.
}

const game = new Phaser.Game(config)