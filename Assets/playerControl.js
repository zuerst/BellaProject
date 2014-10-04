#pragma strict
import variable;

var moveUp : KeyCode;

var speed : float = 10;
var maxY : float;

function Start () {
	maxY = 0;
	// rigidbody2D.AddForce (new Vector2(10000,0));
}

function Update () {
	rigidbody2D.velocity.x = xSpeed; 
	if (Input.GetKey(moveUp)) {
		//rigidbody2D.velocity.y = speed;
		//rigidbody2D.position.y = 13;
		
		var difference = maxY - transform.position.y;
		
		if (difference > 0) {
			Debug.Log(difference);
			transform.Translate(new Vector3(0f, 0.3f, 0f));
		}

	}
}

function OnCollisionEnter2D(myCol: Collision2D) {
	
	if(myCol.gameObject.tag == "enemy") {
		Destroy(myCol.gameObject);
	}
}