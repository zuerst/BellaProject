#pragma strict

static var playerScore : int = 0;

static function Score() {
	playerScore += 1;
	Debug.Log(playerScore);
}

function Start() {
}

function Update () {
}
