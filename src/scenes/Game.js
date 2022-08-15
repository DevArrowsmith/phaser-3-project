import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
  preload() {

  }

  create() {
    // Create Ball
    const ball = this.add.circle(400, 250, 10, 0xefefef, 1)

    // Create Ball Physics & Initial Velocity
    this.physics.add.existing(ball)
    ball.body.setVelocity(-200, 5)

    // Create Ball Collisions
    ball.body.setCollideWorldBounds(true, 1, 1)
    ball.body.setBounce(1, 1)

    // Create Paddles
    const paddleLeft = this.add.rectangle(40, 250, 16, 100, 0xefefef, 1)
    const paddleRight = this.add.rectangle(760, 250, 16, 100, 0xefefef, 1)

    // Create paddles' physics.
    // 'true' in 'paddle.physics.add.existing' is for 'isStatic'. Entity can be moved by the player, but not by the physics engine.
    this.physics.add.existing(paddleLeft, true)
    this.physics.add.existing(paddleRight, true)    
    this.physics.add.collider(paddleLeft, ball)
    this.physics.add.collider(paddleRight, ball)


  }
}