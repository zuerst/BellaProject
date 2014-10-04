#pragma strict

var mainCam : Camera;

var topWall : BoxCollider2D;
var bottomWall : BoxCollider2D;
var topBlock : BoxCollider2D;
var bottomBlock : BoxCollider2D;

var topWallLength : float = 8f;
var bottomWallLength : float = 8f;
var topWallCenter : float = 100f;
var bottomWallCenter : float = 100f;

var numberOfItem : int = 7;
var eatable : Transform;
var player : Transform;
var eatablePositionSecond : float;

function Start() {
	var eatablePosition : float = eatable.localPosition.x;
	eatablePositionSecond = eatable.localPosition.x + 6f;
	for (var i = 0; i < numberOfItem; i++) {
		eatablePosition += 6f;
		Instantiate (eatable, Vector3(eatablePosition, 0f, 0f), Quaternion.identity);
	}
}

function Update () {
	topWall.size = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(Screen.width * topWallLength, 0f, 0f)).x, 1f);
	topWall.center = new Vector2 (topWallCenter, mainCam.ScreenToWorldPoint(new Vector3(0f, Screen.height, 0f)).y + 0.5f);
	
	bottomWall.size = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(Screen.width * bottomWallLength, 0f, 0f)).x, 1f);
	bottomWall.center = new Vector2 (bottomWallCenter, mainCam.ScreenToWorldPoint(new Vector3(0f, 0f, 0f)).y - 0.8f);

	player.Translate(Vector3.forward * Time.deltaTime);
	
	Debug.Log(Screen.height);
	
	topBlock.size = new Vector2 (65 - eatablePositionSecond, 14);
	topBlock.center = new Vector2 (eatablePositionSecond + (65 - eatablePositionSecond)/2, 13);
	
	bottomBlock.size = new Vector2 (65 - eatablePositionSecond, 14);
	bottomBlock.center = new Vector2 (eatablePositionSecond + (65 - eatablePositionSecond)/2, -13);
	
	// reset();
}


function reset() {
	if (mainCam.transform.position.x >= 100) {
		mainCam.transform.position.x = 0;
	}
}
