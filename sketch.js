var canvas, bgImg, database, form, player, game;
var playerCount, gameState = 0;

function setup() {
    canvas= createCanvas (400,400);
    database= firebase.database();
    game= new Game();
    game.getState();
    game.start();
}

function draw() {

}
