[vue在线预览下载word，要配置服务器](https://blog.csdn.net/qq_35867802/article/details/97939811)
[Vue-纯前端导出word文档](https://www.jianshu.com/p/0de31429b12a)

handleEdit 是上图中预览按钮 参数 row 是每一行数据
if (!/.(pdf|PDF)$/.test(row.wjYsmc)) 是判断文件格式是否为pdf
不是就执行 以下代码
window.open( “https://view.officeapps.live.com/op/view.aspx?src=” + this.yuming + “/zhengCe?id=” + row.id, “_blank”);

https://view.officeapps.live.com/op/view.aspx?src= 是官网提供的方法
官方网址：https://www.microsoft.com/en-us/microsoft-365/blog/2013/04/10/office-web-viewer-view-office-documents-in-a-browser/
