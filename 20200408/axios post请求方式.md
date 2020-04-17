//拼接url
export function AreaList(params) {
  return request({
    url: api + '/Use/Application/Ashx/AreaList.ashx',
    method: 'POST',
    params
  })
}
//传到body
export function AreaSave(data) {
  return request({
    url: api + '/Use/Application/Ashx/AreaSave.ashx',
    method: 'POST',
    data
  })
}