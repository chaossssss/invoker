```
<type>(<scope>): <subject>
// 换行
<body>
// 换行
<footer>
```

Header
```
feat：新功能（feature）
fix：修补bug
docs：文档（documentation）
style： 格式（不影响代码运行的变动）
refactor：重构（即不是新增功能，也不是修改bug的代码变动）
test：增加测试
chore：构建过程或辅助工具的变动
```

Body
```
.Fix small typo in docs widget (tutorial instructions)
.Fix test for scenario.Application - should remove old iframe
.docs - various doc fixes
.docs - stripping extra new lines
.Replaced double line break with single when text is fetched from Google
.Added support for properties in documentation
```

Footer
1.不兼容的改动

若本次改动与上次改动不兼容，则footer应该以BREAKING CHANGE开头，后面加上变动的理由，描述和迁移的方法。

2.关闭 Issue

若本次改动关闭了某个或多个Issue，那应该在footer中加以描述。