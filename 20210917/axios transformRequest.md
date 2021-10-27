transformRequest 可以修改请求数据
例如formdata
transformRequest: [function (data) { // 在请求之前对data传参进行格式转换
  const formData = new FormData()
  Object.keys(data).forEach(key => {
    formData.append(key, data[key])
  })
  return formData
}],