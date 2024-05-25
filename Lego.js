// create a 3d lego block using three.js
function createLego() {
    var lego = new THREE.Object3D();
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
    var mesh = new THREE.Mesh( geometry, material );
    lego.add(mesh);
    return lego;
}