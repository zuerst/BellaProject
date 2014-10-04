#pragma strict
import variable;

var moveUp : KeyCode;

var speed : float = 10;
var maxY : float;
var minY : float;
private var messagePopup: boolean;

function Start () {
	maxY = 0;
	minY = (-1) * (Screen.width/2);
	// rigidbody2D.AddForce (new Vector2(10000,0));
}

function Update () {
	transform.Translate(new Vector3 (xSpeed * Time.deltaTime, 0f ,0f));
	// rigidbody2D.velocity.x = xSpeed; 
	if (Input.GetKey(moveUp)) {
		//rigidbody2D.velocity.y = speed;
		//rigidbody2D.position.y = 13;
		
		var differenceMax = maxY - transform.position.y;
		
		if (differenceMax > 0) {
			//Debug.Log("POS!!!!!!!!!!!!!!");
			transform.Translate(new Vector3(0f, 0.3f, 0f));
		}
		else {
			//Debug.Log("NEG????????????????");
			transform.position.y = maxY;
		}

	} else {
		// the player is NOT pressing UP, so MOVE THE PLAYER DOWN
		var differenceMin = minY - transform.position.y;
		
		if (differenceMin < 0) {
			transform.Translate(new Vector3(0f, (-1)*0.3f, 0f));
		}
		else {
			transform.position.y = minY;
		}
	}
}

function OnCollisionEnter2D(myCol: Collision2D) {
	
	if(myCol.gameObject.tag == "enemy") {
		Destroy(myCol.gameObject);
		messagePopup = true;
		GameManager.Score();
	}
	if(myCol.gameObject.tag == "Block") {
		messagePopup = true;
		// GAMEOVER!!
	}
}

function OnGUI()
{
   if(messagePopup == true)
   {
      GUI.Label(Rect(350,20,100,50), "Success!!");
      //Debug.Log(message);
   }
}