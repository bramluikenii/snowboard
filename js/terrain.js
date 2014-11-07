function Field2(tileSize) {
	this.tileSize = tileSize;

	this.transformVector = function(x, y) {

	};
	this.getNodeValue = function(node) {

	};
	this.getVectorValue = function(x, y) {
		var transVector = this.transformVector(x, y);
		//  A--B
		//  |*/|
		//  |/*|
		//  C--D
		var nodeA = new THREE.Vector2(Math.floor(transVector.x / this.tileSize), Math.floor(transVector.y / this.tileSize));
		var nodeB = new THREE.Vector2(nodeA.x, nodeA.y + 1);
		var nodeC = new THREE.Vector2(nodeA.x + 1, nodeA.y);
		var nodeD = new THREE.Vector2(nodeA.x + 1, nodeA.y + 1);
		if (transVector.x / this.tileSize - nodeA.x + transVector.y / this.tileSize - nodeA.y < 1) {
			// use ABC    interpolate triangle

		} else {
			// use BDC
		}
	};
}

function Terrain() {
	this.mesh = new THREE.Mesh();
	this.detailFields = [];

	this.detailFields[1] = new Field2(10);

	this.generateMesh = function(center) {
		geometry.vertices.push(
			new THREE.Vector3(-10, 10, 0),
			new THREE.Vector3(-10, -10, 0),
			new THREE.Vector3(10, -10, 0)
		);
	};
}