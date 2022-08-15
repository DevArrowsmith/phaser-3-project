import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
  preload() {

  }

  create() {
    // Create Ball
    const ball = this.add.circle(400, 250, 10, 0xefefef, 1)

    // Create Ball Physics & Initial Velocity
    this.physics.add.existing(ball)
    ball.body.setVelocity(Math.random() > 0.5 ? -200 : 200, Math.random() > 0.5 ? Phaser.Math.Between(-200, -50) : Phaser.Math.Between (50, 200))

    // Create Ball Collisions
    ball.body.setCollideWorldBounds(true, 1, 1)
    ball.body.setBounce(1, 1)

    // Create Paddles
    this.paddleLeft = this.add.rectangle(40, 250, 16, 100, 0xefefef, 1)
    this.paddleRight = this.add.rectangle(760, 250, 16, 100, 0xefefef, 1)

    // Create paddles' physics.
    // 'true' in 'paddle.physics.add.existing' is for 'isStatic'. Entity can be moved by the player, but not by the physics engine.
    this.physics.add.existing(this.paddleLeft, true)
    this.physics.add.existing(this.paddleRight, true)    
    this.physics.add.collider(this.paddleLeft, ball)
    this.physics.add.collider(this.paddleRight, ball)

    //Create controls
    this.cursors = this.input.keyboard.createCursorKeys()
  }

  update() {
    const paddleLeftBody = this.paddleLeft.body
    const paddleRightBody = this.paddleRight.body

    // paddleLeft controls
    if (this.cursors.up.isDown) {
      this.paddleLeft.y -=10
      paddleLeftBody.updateFromGameObject()
    }
    if (this.cursors.down.isDown) {
      this.paddleLeft.y += 10
      paddleLeftBody.updateFromGameObject()
    }

    // paddleRight controls
    if (this.cursors.space.isDown) {
      this.paddleRight.y -=10
      paddleRightBody.updateFromGameObject()
    }
    if (this.cursors.shift.isDown) {
      this.paddleRight.y += 10
      paddleRightBody.updateFromGameObject()
    }
  }
}