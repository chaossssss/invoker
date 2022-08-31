object.traverse( function ( child ) {
		if ( child instanceof THREE.Mesh ) {
			selectedObjects.push( child );
		}
}