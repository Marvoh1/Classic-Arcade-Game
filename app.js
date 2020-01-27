// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    this.x += this.speed * dt;

    while (this.x > 440) {
        this.x = -100;
        this.speed = 150 + Math.floor(Math.random() * 340);
    }
// check for collision betweeb player and enemies
    while (player.x < this.x + 85 &&
        player.x + 85 > this.x &&
        player.y < this.y + 50 &&
        50 + player.y > this.y) {

    // resets player at startpoint when collides
        this.player.x = 202;
        this.player.y = 405;
    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

//player character
var Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.player = 'images/char-boy.png';
}

// checks if player reached the top and resets the game
var modal = document.getElementById('#winner');

Player.prototype.update = function (dt) {
  if(this.y < 0) {
        setTimeout(function() {
            player.x = 202;
            player.y = 405;
        }, 500);
    }
    
}
// Drawing and image
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
}
// function to handle and respond to keypress
Player.prototype.handleInput = function(keyPress) {
    if(keyPress == 'left' && this.x > 0) {
        this.x -= 102;
    }if(keyPress == 'right' && this.x < 405) {
        this.x += 102;
    }if(keyPress == 'up' && this.y > 0) {
        this.y -= 83;
    }if(keyPress == 'down' && this.y < 405) {
        this.y += 83;
    }
    
}

//renders enemies and location
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


var allEnemies = [];
var enemyLocation = [63, 147, 230];

enemyLocation.forEach(function(locationY) {
    enemy = new Enemy(0, locationY, 200);
    allEnemies.push(enemy);
   
})

var player = new Player(202, 405);




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
