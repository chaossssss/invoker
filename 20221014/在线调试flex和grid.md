[flex](https://coding.imweb.io/demo/flex/)
[grid](https://cssgrid-generator.netlify.app/)

grid
可以使用repeat
定义6列
grid-template-columns: repeat(2, 100px 20px 80px);

<!-- 自动填充直到这行放不下为止 -->
grid-template-columns: repeat(auto-fill, 100px)

fr表示比例关系
grid-template-columns: 1fr 1fr;