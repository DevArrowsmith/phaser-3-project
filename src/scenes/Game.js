import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
  preload() {

  }

  create() {
    this.physics.world.setBounds(-100, 0, 1000, 500)

    // Create Ball
    this.ball = this.add.circle(400, 250, 10, 0xefefef, 1)

    // Create Ball Physics
    this.physics.add.existing(this.ball)
    this.ball.body.setCollideWorldBounds(true, 1, 1)
    this.ball.body.setBounce(1, 1)

    // Initialise Ball Position & Velocity
    this.resetBall()

    // Create Paddles
    this.paddleLeft = this.add.rectangle(40, 250, 16, 100, 0xefefef, 1)
    this.paddleRight = this.add.rectangle(760, 250, 16, 100, 0xefefef, 1)

    // Create paddles' physics.
    // 'true' in 'paddle.physics.add.existing' is for 'isStatic'. Entity can be moved by the player, but not by the physics engine.
    this.physics.add.existing(this.paddleLeft, true)
    this.physics.add.existing(this.paddleRight, true)    
    this.physics.add.collider(this.paddleLeft, this.ball)
    this.physics.add.collider(this.paddleRight, this.ball)

    //Create controls
    this.cursors = this.input.keyboard.createCursorKeys()

    //Create score display
    this.leftScore = 0
    this.rightScore = 0

    this.leftScoreDisplay = this.add.text(200, 50, this.leftScore, {
      fontSize: 48
    }).setOrigin(0.5, 0.5)
    
    this.rightScoreDisplay = this.add.text(600, 50, this.rightScore, {
      fontSize: 48
    }).setOrigin(0.5, 0.5)
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

    if (this.ball.x > 830) {
      this.leftScore += 1
      this.leftScoreDisplay.text = this.leftScore
      this.resetBall();
    }

    if (this.ball.x < -30) {
    this.rightScore += 1
    this.rightScoreDisplay.text = this.rightScore
    this.resetBall();
  }
  }

  resetBall() {
    this.ball.setPosition(400, 250)

    this.ball.body.setVelocity(Math.random() > 0.5 ? -200 : 200, Math.random() > 0.5 ? Phaser.Math.Between(-200, -50) : Phaser.Math.Between (50, 200))

    // const angle = Phaser.Math.Between(0, 360)
    // const vector = this.physics.velocityFromAngle(angle, 200)
    // ball.body.setVelocity(vector.x, vector.y)
  }
}