可以参考 threejs webgl_loader_ifc

    			const highlightMaterial = new THREE.MeshPhongMaterial( { color: 0xff00ff, depthTest: false, transparent: true, opacity: 0.3 } );

    			function selectObject( event ) {

    				if ( event.button != 0 ) return;

    				const mouse = new THREE.Vector2();
    				mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    				mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    				const raycaster = new THREE.Raycaster();
    				raycaster.setFromCamera( mouse, camera );

    				const intersected = raycaster.intersectObjects( scene.children, false );
    				if ( intersected.length ) {

    					const found = intersected[ 0 ];
    					const faceIndex = found.faceIndex;
    					const geometry = found.object.geometry;
    					const id = ifcLoader.ifcManager.getExpressId( geometry, faceIndex );

    					const modelID = found.object.modelID;
    					ifcLoader.ifcManager.createSubset( { modelID, ids: [ id ], scene, removePrevious: true, material: highlightMaterial } );
    					const props = ifcLoader.ifcManager.getItemProperties( modelID, id, true );
    					console.log( props );
    					renderer.render( scene, camera );

    	}

    }
