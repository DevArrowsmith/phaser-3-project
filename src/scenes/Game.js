import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
  preload() {

  }

  create() {
    this.add.circle(400, 250, 10, 0xefefef, 1)
  }
}