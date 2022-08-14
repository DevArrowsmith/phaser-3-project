import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
  preload() {

  }

  create() {
    const ball = this.add.circle(400, 250, 10, 0xefefef, 1)
    this.physics.add.existing(ball)
    ball.body.setCollideWorldBounds(true, 1, 1)
    ball.body.setVelocity(-200, 200)

    const paddleLeft = this.add.rectangle(30, 250, 16, 100, 0xefefef, 1)
  }
}