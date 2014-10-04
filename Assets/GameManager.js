#pragma strict

var mainCam : Camera;

var topWall : BoxCollider2D;
var bottomWall : BoxCollider2D;

var topWallLength : float = 8f;
var bottomWallLength : float = 8f;
var topWallCenter : float = 100f;
var bottomWallCenter : float = 100f;

var numberOfItem : int = 50;
var eatable : Transform;
var player : Transform;

function Start() {
	var eatablePosition : float = eatable.localPosition.x;
	for (var i = 0; i < 15; i++) {
		Instantiate (eatable, Vector3(eatablePosition, 0f, 0f), Quaternion.identity);
		eatablePosition += 3f;
	}
}

function Update () {
	topWall.size = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(Screen.width * topWallLength, 0f, 0f)).x, 1f);
	topWall.center = new Vector2 (topWallCenter, mainCam.ScreenToWorldPoint(new Vector3(0f, Screen.height, 0f)).y + 0.5f);
	
	bottomWall.size = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(Screen.width * bottomWallLength, 0f, 0f)).x, 1f);
	bottomWall.center = new Vector2 (bottomWallCenter, mainCam.ScreenToWorldPoint(new Vector3(0f, 0f, 0f)).y - 0.8f);

	player.Translate(Vector3.forward * Time.deltaTime);
}


