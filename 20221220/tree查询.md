const searchTree = (searchKey, nodes) => {
for (let i = 0; i < nodes.length; i++) {
if (nodes[i].value === searchKey) {
return nodes[i].label
} else {
if (nodes[i].children && nodes[i].children.length > 0) {
let res = searchTree(searchKey, nodes[i].children)
if (res) {
return res
}
}
}
}
return null
}
