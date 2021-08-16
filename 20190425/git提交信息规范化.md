Commit message 的作用
提供更多的历史信息，方便快速浏览。
比如，下面的命令显示上次发布后的变动，每个commit占据一行。你只看行首，就知道某次 commit 的目的。
$ git log <last tag> HEAD --pretty=format:%s


可以过滤某些commit（比如文档改动），便于快速查找信息
$ git log <last release> HEAD --grep feature

可以直接从commit生成Change log。
Change Log 是发布新版本时，用来说明与上一个版本差异的文档，详见后文。



其他优点

可读性好，清晰，不必深入看代码即可了解当前commit的作用。
为 Code Reviewing做准备
方便跟踪工程历史
让其他的开发者在运行 git blame 的时候想跪谢
提高项目的整体质量，提高个人工程素质

Commit message 的格式
每次提交，Commit message 都包括三个部分：header，body 和 footer。

<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>

其中，header 是必需的，body 和 footer 可以省略。
不管是哪一个部分，任何一行都不得超过72个字符（或100个字符）。这是为了避免自动换行影响美观。
Header
Header部分只有一行，包括三个字段：type（必需）、scope（可选）和subject（必需）。
type
用于说明 commit 的类别，只允许使用下面7个标识。

feat：新功能（feature）
fix：修补bug
docs：文档（documentation）
style： 格式（不影响代码运行的变动）
refactor：重构（即不是新增功能，也不是修改bug的代码变动）
test：增加测试
chore：构建过程或辅助工具的变动

如果type为feat和fix，则该 commit 将肯定出现在 Change log 之中。其他情况（docs、chore、style、refactor、test）由你决定，要不要放入 Change log，建议是不要。
scope
scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。
例如在Angular，可以是$location, $browser, $compile, $rootScope, ngHref, ngClick, ngView等。
如果你的修改影响了不止一个scope，你可以使用*代替。
subject
subject是 commit 目的的简短描述，不超过50个字符。
其他注意事项：

以动词开头，使用第一人称现在时，比如change，而不是changed或changes
第一个字母小写
结尾不加句号（.）

Body
Body 部分是对本次 commit 的详细描述，可以分成多行。下面是一个范例。
More detailed explanatory text, if necessary.  Wrap it to 
about 72 characters or so. 

Further paragraphs come after blank lines.

- Bullet points are okay, too
- Use a hanging indent

有两个注意点:

使用第一人称现在时，比如使用change而不是changed或changes。
永远别忘了第2行是空行
应该说明代码变动的动机，以及与以前行为的对比。

Footer
Footer 部分只用于以下两种情况：
不兼容变动
如果当前代码与上一个版本不兼容，则 Footer 部分以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法。
BREAKING CHANGE: isolate scope bindings definition has changed.

    To migrate the code follow the example below:

    Before:

    scope: {
      myAttr: 'attribute',
    }

    After:

    scope: {
      myAttr: '@',
    }

    The removed `inject` wasn't generaly useful for directives so there should be no code using it.

关闭 Issue
如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue 。
Closes #234

Revert
还有一种特殊情况，如果当前 commit 用于撤销以前的 commit，则必须以revert:开头，后面跟着被撤销 Commit 的 Header。
revert: feat(pencil): add 'graphiteWidth' option

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.

Body部分的格式是固定的，必须写成This reverts commit &lt;hash>.，其中的hash是被撤销 commit 的 SHA 标识符。
如果当前 commit 与被撤销的 commit，在同一个发布（release）里面，那么它们都不会出现在 Change log 里面。如果两者在不同的发布，那么当前 commit，会出现在 Change log 的Reverts小标题下面。

作者：琯琯
链接：https://www.jianshu.com/p/201bd81e7dc9
来源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。