function treeIterator(tree, func) {
	tree.forEach((node) => {
		func(node)
		node.children && treeIterator(node.children, func)
	})
}

treeIterator(tree,(node) => {
	console.log(node.name)
})