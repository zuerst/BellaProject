using UnityEngine;
using System.Collections;
using BellaProject;
using Bindings;
	
public class PlayerControl : MonoBehaviour {

	//[SerializeField]
	//protected string
	//	pressureBinding;
	Property<float> pressureProperty = new Property<float> (0);

	public KeyCode moveUp;
	
	public float speed = 10;
	public float maxY;
	public float minY;
	
	// Use this for initialization
	void Start () {
		// rigidbody2D.velocity = transform.forward * 100;
		// transform.position += (Vector2.right * 10.0);
		//transform.Translate (new Vector3 (150, 0, 0));
		maxY = 0;
		minY = (-1) * (Screen.width/2);
		pressureProperty.AddToBinding (ParameterBindingNames.BreathStrength, Bindings.BindingDirection.BindingToProperty, Bindings.AssignmentOnAdd.TakeBindingValue);
	}

	// Update is called once per frame
	void Update () {

		Debug.Log(pressureProperty.value);
		if (pressureProperty.value == 0) {
						transform.Translate (new Vector3 (0.2f, (-12)* Time.deltaTime, 0f));
				} else {
			transform.position = new Vector3(transform.position.x, 0.3f * pressureProperty.value, 0);
			transform.Translate(new Vector3(0.2f, 0, 0f));		
		}
		// transform.position = new Vector3(transform.position.x, pressureProperty.value, 0);

		/*
		transform.Translate(new Vector3 (variable.xSpeed * Time.deltaTime, 0f ,0f));
		// rigidbody2D.velocity.x = xSpeed; 
		if (Input.GetKey(moveUp)) {
			//rigidbody2D.velocity.y = speed;
			//rigidbody2D.position.y = 13;
			
			var differenceMax = maxY - transform.position.y;
			
			if (differenceMax > 0) {
				//Debug.Log("POS!!!!!!!!!!!!!!");
				//transform.Translate(new Vector3(0f, 0.3f, 0f));
			}
			else {
				//Debug.Log("NEG????????????????");
				// transform.position.y = maxY;
				transform.position = new Vector3(0, maxY, 0);
			}
			
		} else {
			// the player is NOT pressing UP, so MOVE THE PLAYER DOWN
			var differenceMin = minY - transform.position.y;
			
			if (differenceMin < 0) {
				transform.Translate(new Vector3(0f, (-1)*0.3f, 0f));
			}
			else {
				// transform.position.y = minY;
				transform.position = new Vector3(0, maxY, 0);
			}
		}
		*/
	}

	/*
	void OnMessage (Object sender, string msgID, float num1 = 0f, float num2 = 0f, float num3 = 0f, float num4 = 0f)
	{
		animator.ResetTrigger ("Return");
		
		switch (msgID) {
		case BellaMessages.WeakBreath:
			Debug.Log("WeakBreath");
			break;
		case BellaMessages.GoodBreath:
			Debug.Log("GoodBreath");
			break;
		case BellaMessages.StrongBreath:
			Debug.Log("StrongBreath");
			break;
		case BellaMessages.ReadyForInput:
			Debug.Log("ReadyForInput");
			break;
		case BellaMessages.BreakTimeStarted:
			break;
		case BellaMessages.BreakTimeMinReached:
			break;
		}
	}

*/
	
	void OnCollisionEnter2D(Collision2D myCol) {
		
		if(myCol.gameObject.tag == "enemy") {
			Destroy(myCol.gameObject);
		}
	}
}


