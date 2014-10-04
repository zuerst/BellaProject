using UnityEngine;
using System.Collections;

public class MainCam : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		rigidbody2D.velocity = new Vector3 (variable.xSpeed, 0, 0);
		// rigidbody2D.velocity.x = variable.xSpeed;
	}
}
