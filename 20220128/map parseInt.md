['1','2','3'].map(parseInt)

['1','2','3'].map((item, index) => {
  return parseInt(item, index)
})