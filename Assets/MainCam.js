#pragma strict

var Scores : Transform;

function Start () {
/*
	var scorePosition : float = Scores.localPosition.x;
	Debug.Log(Scores.localPosition.y);
	for (var j = 0; j < 15; j++) {
		scorePosition += 3f;
		Instantiate (Scores, Vector3(scorePosition, 16f, 0f), Quaternion.identity);
	}
	*/
}

function Update () {
	rigidbody2D.velocity.x = xSpeed;
}
