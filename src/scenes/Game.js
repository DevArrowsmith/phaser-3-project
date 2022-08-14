import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
  preload() {

  }

  create() {
    const ball = this.add.circle(400, 250, 10, 0xefefef, 1)
    this.physics.add.existing(ball)
  }
}