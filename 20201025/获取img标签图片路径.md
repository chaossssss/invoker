从富文本中获取图片地址

var reg = /<img [^>]*src=['"]([^'"]+)[^>]*>/gi;
let picSrc = res.data.list[index].content.replace(reg, "$1");
