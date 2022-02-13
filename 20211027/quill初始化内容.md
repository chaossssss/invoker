[富文本插件Quill的基本使用](https://www.jianshu.com/p/01a1a7029276)
// 获取内容length
const length =  this.quills.getLength() - 1            // 注意要-1

// 获取纯文本
const temptext = this.quills.getText()                  // 获取文本
const text = temptext.trim().replace(/\s/g, '')         // 去掉多余的空格

// 获取html
const html = this.quills.root.innerHTML              // 官方不推荐直接获取html，有getContent方法

// 初始化赋值
this.quills.root.innerHTML = html