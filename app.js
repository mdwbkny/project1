console.log("Is this thing on?");

// var currentBet = {

// 	currentBetDefault: 1000,
// 	player: 1000 
// 	currentBet: 100,
// }

// window.onload = function() {

var cards = ["H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10", "HJ", "HQ", "HK", "HA", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "CJ", "CQ", "CK", "CA", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "DJ", "DQ", "DK", "DA", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10", "SJ", "SQ", "SK", "SA"];


// var turnArray = [];

var dcard1 = document.getElementById("dcard1");
var dcard2 = document.getElementById("dcard2");
var pcard1 = document.getElementById("pcard1");
var pcard2 = document.getElementById("pcard2");
var dealButton = document.getElementById("deal-button");

// }

// MVP 
// • 52 cards - storage for 52 cards
// • Cards have value
// • Cards cant be dealt twice
// • Ace is an 11 unless you bust, then its a 1;
// • Cards are dealt at random
// • Hands calculate the value of each card 
// • Hit means get another card
// • Stand/stay means ur basically done with ur turn
// • Bust is over 21
// • 21 is blackjack
// • Turns dont alternate
// • Buttons and on clicks (barebones html and dom manipulation)

// Bonus
// - Betting
// - Animations
// - Images


// - Pseudo code each of these game logic requirements
// - If the pseudo code involves more than one step, break it down into another pseudo code objective
// - Once it is one step, code it (DRY: 1 function does 1 thing and does it well)