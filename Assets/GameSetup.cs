using UnityEngine;
using System.Collections;

public class GameSetup : MonoBehaviour {

	public Camera mainCam;
	
	public BoxCollider2D topWall;
	public BoxCollider2D bottomWall;
	
	public float topWallLength = 8f;
	public float bottomWallLength = 8f;
	public float topWallCenter = 100f;
	public float bottomWallCenter = 100f;
	
	public int numberOfItem = 7;
	public Transform eatable;
	public Transform player;
	public float eatablePositionSecond;


	// Use this for initialization
	void Start () {
		float eatablePosition = eatable.localPosition.x;
		eatablePositionSecond = eatable.localPosition.x + 6f;
		for (var i = 0; i < numberOfItem; i++) {
			eatablePosition += 6f;
			Instantiate (eatable, new Vector3(eatablePosition, 0f, 0f), Quaternion.identity);
		}
	}
	
	// Update is called once per frame
	void Update () {
		topWall.size = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(Screen.width * topWallLength, 0f, 0f)).x, 1f);
		topWall.center = new Vector2 (topWallCenter, mainCam.ScreenToWorldPoint(new Vector3(0f, Screen.height, 0f)).y + 0.5f);
		
		bottomWall.size = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(Screen.width * bottomWallLength, 0f, 0f)).x, 1f);
		bottomWall.center = new Vector2 (bottomWallCenter, mainCam.ScreenToWorldPoint(new Vector3(0f, 0f, 0f)).y - 0.8f);
		
		// player.Translate(Vector3.forward * Time.deltaTime);

	}

	/*void reset() {
		if (mainCam.transform.position.x >= 100) {
			mainCam.transform.position = new Vector3(0,0,0);
			// mainCam.transform.position.x = 0;
		}
	}*/
}
