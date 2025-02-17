// 遍历树形结构 把locationName相同的节点添加isActive属性
function addIsActive(list, locationName) {
  for (let i in list) {
    list[i].isActive = false
    if (list[i].locationName.includes(locationName)) {
      list[i].isActive = true
    }
    if (list[i].childList) {
      addIsActive(list[i].childList, locationName)
    }
  }
  return list
}