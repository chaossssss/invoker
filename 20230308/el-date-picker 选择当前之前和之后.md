之前
const disabledDate = v => {
  return v.getTime() >= new Date().getTime()
}
const disabledHour = v => {
  const disabledDateTime = dayjs()
  if (disabledDateTime && dayjs(form.joinTime).format('YYYY-MM-DD') == dayjs(disabledDateTime).format('YYYY-MM-DD')) {
    return Array.from({ length: 24 - disabledDateTime.$H }, (v, i) => i + 1 + disabledDateTime.$H)
  } else {
    return []
  }
}

const disabledMinute = v => {
  const disabledDateTime = dayjs()
  if (disabledDateTime && dayjs(form.joinTime).format('YYYY-MM-DD HH') == dayjs(disabledDateTime).format('YYYY-MM-DD HH')) {
    return Array.from({ length: 60 - disabledDateTime.$m }, (v, i) => disabledDateTime.$m + i + 1)
  } else {
    return []
  }
}




之后
const setDisableDate = v => {
  return v.getTime() <= new Date().getTime()
}

const disabledHour = () => {
  const disabledDateTime = dayjs()
  if (disabledDateTime && dayjs(form.serviceTime).format('YYYY-MM-DD') == dayjs(disabledDateTime).format('YYYY-MM-DD')) {
    return Array.from({ length: disabledDateTime.$H }, (v, i) => disabledDateTime.$H - i - 1)
  } else {
    return []
  }
}

const disabledMinute = v => {
  const disabledDateTime = dayjs()
  if (disabledDateTime && dayjs(form.serviceTime).format('YYYY-MM-DD HH') == dayjs(disabledDateTime).format('YYYY-MM-DD HH')) {
    return Array.from({ length: disabledDateTime.$m }, (v, i) => disabledDateTime.$m - i - 1)
  } else {
    return []
  }
}