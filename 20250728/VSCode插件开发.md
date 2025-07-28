# VSCode插件开发

1.  插件开发入门
    
    1.  初始化插件项目结构
        
        2.  插件manifest文件（package.json）详解
            
        3.  编写Hello World插件示例
            
        4.  插件核心概念
            
        5.  激活事件与命令注册
            
        6.  范围选择与文本处理
            
        7.  观察者模式与文件系统API
            
2.  插件功能实现
    
    1.  用户界面扩展
        
        2.  创建自定义视图与面板
            
        3.  添加菜单项与上下文菜单
            
        4.  使用Webview进行复杂UI构建
            
        5.  功能模块开发
            
        6.  语言服务与代码提示
            
        7.  代码片段与自动完成
            
        8.  Linting与错误检查机制
            
3.  插件打包与发布
    
    1.  插件测试与调试
        
        2.  使用VSCode内置的Extension Development Host
            
        3.  调试插件中的异步和事件驱动代码
            
        4.  打包插件
            
        5.  构建与压缩插件资源
            
        6.  配置VSIX发布包
            
        7.  发布与更新插件
            
        8.  在Marketplace上发布插件
            
        9.  版本管理与更新策略
            
4.  进阶主题
    
    1.  插件性能优化
        
        2.  性能瓶颈识别与优化技巧
            
        3.  使用异步编程提升响应速度
            
        4.  开源社区参与与协作
            
        5.  如何贡献他人插件
            
        6.  维护良好的开源文档与社区支持
            

# 插件开发入门

## 1.1 创建第一个插件项目(New Code Snippets、New Extension)

安装脚手架

```plaintext
npm install -g yo generator-code
```

cd 到工作目录，运行`yo code`

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/vBPlNYgaoB0XOdG8/img/6e88bf1e-f416-4992-89ad-6ec10497e9ea.png)

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/vBPlNYgaoB0XOdG8/img/03c6ddc4-4811-4c10-81ae-15e6c2c5e831.png)

package.json

```json
{
	// 插件的名字，应全部小写，不能有空格
	"name": "vscode-plugin-demo",
	// 插件的友好显示名称，用于显示在应用市场，支持中文
	"displayName": "VSCode插件demo",
	// 描述
	"description": "VSCode插件demo集锦",
	// 关键字，用于应用市场搜索
	"keywords": ["vscode", "plugin", "demo"],
	// 版本号
	"version": "1.0.0",
	// 发布者，如果要发布到应用市场的话，这个名字必须与发布者一致
	"publisher": "",
	// 表示插件最低支持的vscode版本
	"engines": {
		"vscode": "^1.27.0"
	},
	// 插件应用市场分类，可选值： [Programming Languages, Snippets, Linters, Themes, Debuggers, Formatters, Keymaps, SCM Providers, Other, Extension Packs, Language Packs]
	"categories": [
		"Other"
	],
	// 插件图标，至少128x128像素
	"icon": "images/icon.png",
	// 扩展的激活事件数组，可以被哪些事件激活扩展，后文有详细介绍
	"activationEvents": [
		"onCommand:extension.sayHello"
	],
	// 插件的主入口
	"main": "./src/extension",
	// 贡献点，整个插件最重要最多的配置项
	"contributes": {
		// 插件配置项
		"configuration": {
			"type": "object",
			// 配置项标题，会显示在vscode的设置页
			"title": "vscode-plugin-demo",
			"properties": {
				// 这里我随便写了2个设置，配置你的昵称
				"vscodePluginDemo.yourName": {
					"type": "string",
					"default": "guest",
					"description": "你的名字"
				},
				// 是否在启动时显示提示
				"vscodePluginDemo.showTip": {
					"type": "boolean",
					"default": true,
					"description": "是否在每次启动时显示欢迎提示！"
				}
			}
		},
		// 命令
		"commands": [
			{
				"command": "extension.sayHello",
				"title": "Hello World"
			}
		],
		// 快捷键绑定
		"keybindings": [
			{
				"command": "extension.sayHello",
				"key": "ctrl+f10",
				"mac": "cmd+f10",
				"when": "editorTextFocus"
			}
		],
		// 菜单
		"menus": {
			// 编辑器右键菜单
			"editor/context": [
				{
					// 表示只有编辑器具有焦点时才会在菜单中出现
					"when": "editorFocus",
					"command": "extension.sayHello",
					// navigation是一个永远置顶的分组，后面的@6是人工进行组内排序
					"group": "navigation@6"
				},
				{
					"when": "editorFocus",
					"command": "extension.demo.getCurrentFilePath",
					"group": "navigation@5"
				},
				{
					// 只有编辑器具有焦点，并且打开的是JS文件才会出现
					"when": "editorFocus && resourceLangId == javascript",
					"command": "extension.demo.testMenuShow",
					"group": "z_commands"
				},
				{
					"command": "extension.demo.openWebview",
					"group": "navigation"
				}
			],
			// 编辑器右上角图标，不配置图片就显示文字
			"editor/title": [
				{
					"when": "editorFocus && resourceLangId == javascript",
					"command": "extension.demo.testMenuShow",
					"group": "navigation"
				}
			],
			// 编辑器标题右键菜单
			"editor/title/context": [
				{
					"when": "resourceLangId == javascript",
					"command": "extension.demo.testMenuShow",
					"group": "navigation"
				}
			],
			// 资源管理器右键菜单
			"explorer/context": [
				{
					"command": "extension.demo.getCurrentFilePath",
					"group": "navigation"
				},
				{
					"command": "extension.demo.openWebview",
					"group": "navigation"
				}
			]
		},
		// 代码片段
		"snippets": [
			{
				"language": "javascript",
				"path": "./snippets/javascript.json"
			},
			{
				"language": "html",
				"path": "./snippets/html.json"
			}
		],
		// 自定义新的activitybar图标，也就是左侧侧边栏大的图标
		"viewsContainers": {
			"activitybar": [
				{
					"id": "",
					"title": "",
					"icon": ""
				}
			]
		},
		// 自定义侧边栏内view的实现
		"views": {
			// 和 viewsContainers 的id对应
			"beautifulGirl": [
				{
					"id": "",
					"name": ""
				}
			]
		},
		// 图标主题
		"iconThemes": [
			{
				"id": "testIconTheme",
				"label": "测试图标主题",
				"path": "./theme/icon-theme.json"
			}
		]
	},
	// 同 npm scripts
	"scripts": {
		"postinstall": "node ./node_modules/vscode/bin/install",
		"test": "node ./node_modules/vscode/bin/test"
	},
	// 开发依赖
	"devDependencies": {
		"typescript": "^2.6.1",
		"vscode": "^1.1.6",
		"eslint": "^4.11.0",
		"@types/node": "^7.0.43",
		"@types/mocha": "^2.2.42"
	},
	// 后面这几个应该不用介绍了
	"license": "SEE LICENSE IN LICENSE.txt",
	"bugs": {
		"url": ""
	},
	"repository": {
		"type": "git",
		"url": ""
	},
	// 主页
	"homepage": ""
}

```

重点关注的主要有三部分内容：activationEvents、main以及contributes，其是整个文件中的重中之重。

main

指明了该插件的主入口在哪，只有找到主入口整个项目才能正常地运转

activationEvents

指明该插件在何种情况下才会被激活，因为只有激活后插件才能被正常使用，官网已经指明了激活的时机，这样我们就可以按需设置对应时机。（具体每个时机用的时候详细查看即可）

*   [`onLanguage`](https://link.segmentfault.com/?enc=50rnAlqjggTBsBq4vWps1g%3D%3D.kUXbd%2FU5zAQ31zxome4I%2Fg9DAPVqX8WovoJ6EMCnRLsNS%2FoMch2zphTYNZ418oxRCfgcVkFYqrIYg5K6WdAPvD1m3V6k%2BGaf7igEdCz8Rew%3D) 打开解析为特定语言文件时被激活，例如"onLanguage:python"
    
*   [`onCommand`](https://link.segmentfault.com/?enc=f2gEqoiO1nIvFkWJqYou4Q%3D%3D.eQNW%2FIuh%2FoRUAnIpIs%2BMuSFvubSC4GCB%2FkbzsA0BBucz6U%2FjFIxR5QsVOwtCvVhhzb0WSYZJpmiHBoZ7BF152YmIutAFZpvqISJ4l7xmF7A%3D) 在调用命令时被激活
    
*   `onDebug` 在启动调试会话之前被激活
    
    *   [`onDebugInitialConfigurations`](https://link.segmentfault.com/?enc=6BqHhfDfx672QoBURBKBkg%3D%3D.albZ5w4rX%2F4yL7cT%2F%2FMDsApQDN%2FvFMbFSM9vHtto70gB7%2FPL8bOBWyfSYMvQr2xSHJCB7kkn2qaa4DxFnHIBM7sHe0vvSK7kV0BI9GE3YgYBBBenQzpz6vV3hxOFlVjB)
        
    *   [`onDebugResolve`](https://link.segmentfault.com/?enc=VnYp7zDUWdNusFT1rw5KEQ%3D%3D.3JLYSw%2F%2FA%2F0wEfYB9AcMBJjbfKBguRbb9udjezCnL3cZUx3pIk2mhh6WT9S86zAP4D3wIXJRVXki1ZK9CoS59pIz04zV2aEiynhLFs61SpA%3D)
        
*   [`workspaceContains`](https://link.segmentfault.com/?enc=0oLA2wPQ%2FGfZK4k6VKzmWA%3D%3D.iEpWYVn6IeFNzPehv%2BLmIDsuidHT96nUWl7zXlHpZjkKMEf%2FnqcZKkyZzP6KSH7RvSjq6i4cduXoUEQ7F3pHwyeeIwvGCiMN12rI1KWaZ2t54EHErW7WODM0rGO2jHjT) 每当打开文件夹并且该文件夹包含至少一个与 glob 模式匹配的文件时
    
*   [`onFileSystem`](https://link.segmentfault.com/?enc=0AjGkCHR20jF8poXhbWRAg%3D%3D.MxBDsVVI16xJW%2FJoVB4A2NXQVlzbIC%2FTvfjRgoPQat3tUpyC9vMr5z2zBl%2BYpcv1TusBDuwJ0g9jMf68g4DOvjx8VBYb%2F%2BJ7b9ZHuUU5RKw%3D) 每当读取来自特定_方案_的文件或文件夹时
    
*   [`onView`](https://link.segmentfault.com/?enc=%2BwHj97Bf4JU9y1NSLIjwMQ%3D%3D.N6bsKbPly61kfnvvL2MffuTPXG3VWpPaIuuIIUxFzggLN1ztN4zSMusNNI3OeAWWFZCRjgau7SBxkiWifqGZRWb2US%2F701V4sHDYpDcEIDg%3D) 每当在 VS Code 侧栏中展开指定 id 的视图
    
*   [`onUri`](https://link.segmentfault.com/?enc=x3DNaOF6RUqP89vZvfR3sw%3D%3D.DitVsChzej%2FWfG37TkSS3ryTGbeI2ipMsVCOKQ5JLPCwMWRvRtfRihrGi9OprDnuhg6rDIKU8mmT9UVB6KlkJuiJQh3%2BACa%2Fgr8VXTxf5OM%3D) 每当打开该扩展的系统范围的 Uri 时
    
*   [`onWebviewPanel`](https://link.segmentfault.com/?enc=DmaoE%2Fmse0sZNk0VjZCoeQ%3D%3D.49mZpS5dNR87h2gPf5qrZNWqOWDnad5SmOESf7zNOEZPRggAwXVk8Fn4LGqVLwYs0uf5WbdsIwhaFDN54OpT4fff0iUXeyw9Bi94aPYh9NI%3D)
    
*   [`onCustomEditor`](https://link.segmentfault.com/?enc=BJkfCRkII31sppocwz5F5w%3D%3D.j%2BI8uGQPwrTM3R%2FUTQDkB3gyN36XeVQ4TCtAjM%2Fv7OUv%2B0KJ14AwPsd%2B5IwFKwKH0e3iQ3i6B1FNcVpgOnTLxN1fxf5cPYizeXMB41cUG0I%3D)
    
*   [`onAuthenticationRequest`](https://link.segmentfault.com/?enc=fRBeYGCKV%2FYGF8l%2BEYs55Q%3D%3D.aszTnuE2gXPnIysD85QfaRIOQ2o5Lzf%2BIdHc1zEZp40KtnECX3FYZooe6DQdVyHJ%2BaO8nuaUXFoVW3qQSFGovNGDvLbY98V0CgaBTq1hKcCiGtVM5pe4Kx6S5%2FJME0Zn)
    
*   [`*`](https://link.segmentfault.com/?enc=%2Ba0JU9uPvxpihup6PYJT4g%3D%3D.K02nLbOJHOeq1AVoOVFLrF4NTAA%2FxGnJ%2F70weM6b5maD4ZgahDfkFtraGCJfDyqKERQ4HApgwgSYMywwRlBRtYl2kHT%2BkQZNyqTovKsCRvY%3D) 只要一启动vscode，插件就会被激活
    
*   [`onStartupFinished`](https://link.segmentfault.com/?enc=uxzd5iO4sqgo6mo0Gj%2BCUQ%3D%3D.r57BdjMKGgQrcENnCwJu007xfGoAnp%2B1wj7Wrfxr4biHzH4cKN9RUy3gqSpgmp668tUym2PP2x%2BDrwNaVVmk4i3NdtCEApuFS%2FYo41VSmqlKyUEBxuOr5MWZQvm34kms)
    

contributes

通过扩展注册contributes用来扩展Visual Studio Code中的各项技能，其有多个配置，如下所示：

*   [`breakpoints`](https://link.segmentfault.com/?enc=2e0K1nH9ftdvrKC7gv75cA%3D%3D.goza4zU4ObhlJCn2VlU3XTiZT%2FAKQoa%2Bd%2BVpAQ6AkFsPaBmQ6v9a4xo9hOPDacSH4jCBKe6s2LHBsfUqZ0llNJicRohF2s5xY0Oj3labm4Jx9rpJ1eHX8S7xw2Gk5UbL) 断点
    
*   [`colors`](https://link.segmentfault.com/?enc=4QhO0CxeVKE9RJyUQe0xKw%3D%3D.mkP1uAmua5hlndUsVlbmv47MCzW2SDD2JDFh3V79DtAzTfcuFWfkXG1lGHkZDixcoT%2F2dGakV7%2B2Ez9u608m2%2BUt52xNbtOiVlfGs7AbhIbNl%2FYHG5IyeT6rtoScJVGQ) 主题颜色
    
*   [`commands`](https://link.segmentfault.com/?enc=BxYoDJkLV7txR8RRD6s4Xg%3D%3D.gHZnhn9hx7eQ0E%2FkXCKwNmf%2BD8P23X64O%2Fz773n7X7T7nHxsw28V8qGrI%2BGNwd%2Bq1PbOxVeov%2BA4er43827wjsPGrsLgrUsWmErIy4UxrmZDMtoiN45VcVcRMs%2BkPcFX) 命令
    
*   [`configuration`](https://link.segmentfault.com/?enc=0ZB62tHQRL4rB0bfU1rZdg%3D%3D.mBGAxD3%2BTwDFvtDyVv9%2FcO32wip1KJkBqCr7UcU4tlbZJ6GyghHwxLsMuGMQ7Yd8HcqGfV4PFhR00beXQAyj7kPrhqv5AiuuCBkL%2B0JiHFI0i5UWmk57nIK%2FAacu8rGj) 配置
    
*   [`configurationDefaults`](https://link.segmentfault.com/?enc=0DhqILaogVGEi4kistBV%2Bg%3D%3D.YZ5kVlaDH4rdARfoZZsQkGZQyAMy2ydn3bSX%2Bea07q%2BDpp7NpMzyAiGWTbUAwofS6yjbzFBhl%2B1vi44RV88lrg1OI8IjxtlAXJTL7Vhz%2FLUGuRD1s5daVSNjEie%2FRMFSII6VVQD%2F4CPjnwoMQowS1g%3D%3D) 默认的特定于语言的编辑器配置
    
*   [`customEditors`](https://link.segmentfault.com/?enc=UpSXzXFOqSOr9HP8takhWA%3D%3D.8uP2tYxJAqVvjT%2BVOBOBs7f4AWstJkVZsD%2BPzM2iVnCsJn1btvvABRklIkm3vBCi19T7DI1uVfBmsWhX5aXIResVrzwgAbPsYH02WQMb5NSmmSXo45D6cVGby7BHkrjO) 自定义编辑器
    
*   [`debuggers`](https://link.segmentfault.com/?enc=qvKDxMOLng1ZdwXVWUBMUA%3D%3D.n4%2BegiYuaFznXc%2Bn0CzV38XCRjyTYpdL8yZZanrOjjFhT6EptsetdNDhlwiw01b3ujru0sUjChr2NPqMem%2BQuK1p37dRnVyt7mKkxi%2Bvm7SxUL70Ji%2F0OWQJBLiyPIjF)
    
*   [`grammars`](https://link.segmentfault.com/?enc=s4Yb1QoSyXqmbyyBwi7E3g%3D%3D.kre91PZtuM%2FVVCir4dj8lonNyDRNLBuYpc60nKV%2BDWvu2ccdYXxY7WG7SLGktWrt9CNwvkaHJzupq9gGVH4ZAERSn%2B7%2FCFZ2olfCd7bsOgiM19VFRtYBaeunaXAsKJT8)
    
*   [`iconThemes`](https://link.segmentfault.com/?enc=jzIaIkj2PendORdnR5vCrQ%3D%3D.frGtywRYuK47ld%2FT4TjU%2FPr3a6yicU%2BRlb3CKaw798HUYPjRCLU4LGpl65MGbkF0f29YEFicD4OJ1EWh9JfQ7bmDgQHaRlhET6nSmQ7ecRcFFVbbajmQm%2BXSSeG%2FlLnJ)
    
*   [`jsonValidation`](https://link.segmentfault.com/?enc=K4XL3nTbRTVJFloQ%2FnNK5A%3D%3D.qTyb1UjEZZXoTTp2s7Rlx5%2B1Y%2Bl2vecnwFauhhfrb38%2BF08CLqq76PUPfB%2Fc2enUkVP8Rv0oetQDfP5friYOcG4Sht5e4ue6wsKqviHAlfImPEi%2FFK799cbH%2Bw9QgXPJ)
    
*   [`keybindings`](https://link.segmentfault.com/?enc=WiqTYcRl3L0cHDCsNP7lJw%3D%3D.mmnb7k4enPN57f17RJ%2F3UrdzbfE2cyShG%2Bz4wKhIQZUZlRuFhzQfyzFFW3kfP56c%2FhpS1Bs5HczGx5nXg6nZ99h%2FcNVOWNHJGzqxT5DwNuZHXvf%2BeuhBSzoFHySfAVJV) 快捷键绑定
    
*   [`languages`](https://link.segmentfault.com/?enc=tVdVRUS23emK0nMnihZ0xg%3D%3D.Ctex0FCNzEMloWac4850vOLXYTcaDq6xMtNNFwm381R6dsgGrxqtE8N%2FGGy9mu0gRv32FcpDzRD8BwhRCuE0a0j73Jz9Jq%2B7r5eJEXW53fFI0P3Wc8qKP0LSrgYmC9Rd)
    
*   [`menus`](https://link.segmentfault.com/?enc=0reGWVBPi0XmWfwi4zpKlw%3D%3D.nLMDYMweZaqZLUbS69rGvdg3WKOkthTTJbXdWTQYNyRJvXEhmE3dGxwjxSfD0Xv7wYh2mm5P%2BUCoM6kYK6%2Fbh4t7bwXUwPEXB2xx8j8%2BS7rFbsaQwSb2qjKd3TITwgCp)
    
*   [`problemMatchers`](https://link.segmentfault.com/?enc=3voXJK6V%2FEOa4PlYzVXJlQ%3D%3D.dExm55di5%2BUX1qwkz5iLenyn0K%2FcjRBhuTO5mLWZO9EwVyWoFLcS2YilJLCwyFj3nDWA36cqmHJijoPKGEBP3YjQMnsKk55wUWjtl0IOdPmb%2F8SXPE5ieGZuHcNaznYO)
    
*   [`problemPatterns`](https://link.segmentfault.com/?enc=TE6tzT8ewycmHoLPFYcguQ%3D%3D.UQ4MXEBP%2B8yckhV4Q7DpUjzfzvDVDlqCeqER1y%2FZ5uWv299YmFPDOJNH%2FtKbwe34MVTj8U7f%2BrGVEmNF0GclFv5EHVuVVi3lqMUx40zNEHkNJNYDKOstRsleR7cLLRFJ)
    
*   [`productIconThemes`](https://link.segmentfault.com/?enc=SyMjWeCAC%2B45YMgRmDL%2Bxw%3D%3D.8%2FJ7J%2BSJnznuYYdXeFi8QgWCtxNbOTWB74ZzyA4S4JKlQM24%2FtmQyh%2BNTh504PBfJtOV9UjaVgls9Ud9nU%2Fn6u9AJIdMd4nIhuakJng3t6KrQx%2BJlrw%2BES4rxZSw6Bb%2F)
    
*   [`resourceLabelFormatters`](https://link.segmentfault.com/?enc=re3IGLzAt7yGAr%2FBzRYUmw%3D%3D.X7xbah5Bx0H3HYwhDuuBPFgCkiGSDQOtuv%2FMAEyyyc8KwS1Du2TERusb8cbw2gYlVqZieqGl%2Fy%2Byus2w1udOx4WYChs9mPjSJPt5rGbfR%2BBZZmhLjR0uTMEHZRHman8In2JHBjOq3SMi0lRSX%2Bnjsw%3D%3D)
    
*   [`snippets`](https://link.segmentfault.com/?enc=llLwRgCHbZSiv9fAlaeifA%3D%3D.r%2BXj7UOlK9%2B2xqg4vyaWbhaRqBr%2FMt65KsK3fW8g7YjChIv7FkN9fPN8zAvJ6IQX6q9irAk6p1XT%2BQpguMyxtnv7O3X3Zohq9smiqxATfFpRJF6%2FTp72tGxFtWAKwUm9) 特定语言的片段
    
*   [`submenus`](https://link.segmentfault.com/?enc=s6fqF919Jcsw0A6kX6lJwg%3D%3D.MKYv2JSmJTRC8TGG3Wphqy6GIgUUejSPZuScKBtgfN8oJ6rGUDFbEBr6%2FkITB814%2BfHMfyLdVqMXjZuEtLKP7a5AAbwsAahpP0lUKl2Ne3tJ%2FuO8aRTlyPWS36pWlguy)
    
*   [`taskDefinitions`](https://link.segmentfault.com/?enc=99Y1KsZCvvAF%2B9LihJ7rsA%3D%3D.CQ6dLAtxnFZUF%2BvNCzk5kteza%2F7HD1%2Bh2558wDrnXXpg0n0R82M5qyzMMUMZTpaLQ4DxsjYV1ntBbXceDr%2Feh7WISMgCkZLQPeN9Lu9rz6AysK67Im4XCpzRItY%2BYcR3)
    
*   [`themes`](https://link.segmentfault.com/?enc=7orkES241zkeJ5sbFkp7lw%3D%3D.x4gc985EkxS1PteK6D%2FOIzLKooAh5Ufk3XO90Wca2kSwgML6updzXKd1rq%2FZdMlQ1hSTuRNSmGNsHkIMh6eJrT2D7OWsIH4FwqJHzG7kwipi03UQq2T4WtbTN3z0Mb2g) 颜色主题
    
*   [`typescriptServerPlugins`](https://link.segmentfault.com/?enc=fGok2kthZ1cOS3Xn%2FWh%2BAQ%3D%3D.iRdq6RrpZUptTyaXus1wTY3B0%2BqEtj9RpHgcEEcPPMpb7ENXV%2BUT5SsOTWqZEWFiZHUapoaWiU0o5mfqJitzrl3fBKanhN7Vde7WOiMxP0hFCIkQdzp5bOY3x9U0RCHFobOgyUgLfK0%2FZSy%2BZP74jA%3D%3D)
    
*   [`views`](https://link.segmentfault.com/?enc=ZxDgDLTyDSOtJSkpsrwZNw%3D%3D.VCPSOb94SEL%2F9Gg0aSkhAeFxK6Bm%2BxM4GfERZZt12Ak98p%2F8YxyAHb1uo7MZ1wlFA53YKKVBLiZ58JeDpBHnfSJw6NTXv%2BCq1sYUTynWQIgwHrAXHu6Is6NJ7D3EW%2F7c)
    
*   [`viewsContainers`](https://link.segmentfault.com/?enc=nsq4hv%2FY57eh8RcYF99xRQ%3D%3D.c8t0qO0J%2FWHU7VpgPErSsTy204b0Zb%2BucyWgI5bWQVQwy4K0h8SS6TwOe8caD0PLsyXP%2F3IKmg4ln83hJshp8R3wYM9VUS6t4g%2Ft4qk7hgPh58cr%2Fod2INPK1e2ODD70)
    
*   [`viewsWelcome`](https://link.segmentfault.com/?enc=iXO7Ir5fpj4iN%2F0Ne8lx%2Fg%3D%3D.M6HjjmvlNAYeRfLUdJwDEMtYxJTXTl%2FJJJ2pd6n%2FZw2%2FHwzdhTPZOIyJ5MtlngA8TB8xgmqPu07Kk6wJUHuMZbtPgwjOhD1R1j%2FqWlo1GIwBYlVQYDjflia1QlYSVLq9)
    
*   [`walkthroughs`](https://link.segmentfault.com/?enc=lAWvZcu1dWNkTqqT%2FGdGPQ%3D%3D.4h9v2jFxGkts%2FBaPr%2FQVQqnn5JHaJ3TauXcqTMMOdPKiNmViKK55vyrEiW%2BkXNii3CDXQR1iQbmzUDFA9gAUgjqpLm3mp%2F%2BiDR4B2Ki9k0AcdvlQycCIEG2d3Sr8FZQP)
    

extension.js 文件

该文件为入口文件，即package.json中main字段对应的文件，该文件中将导出两个方法：activate和deactivate

activate 插件激活时执行的函数

deactivate 插件被销毁时调用的函数

## 1.2 代码片段插件介绍

snippet由三部分组成：

prefix：前缀，定义了snippets 从IntelliSense中呼出的关键字;

body： 主体，即模板的主体内容;

description：说明，会在IntelliSense候选栏中出现。未定义的情况下显示对象名。

[https://snippet-generator.app/?description=&tabtrigger=&snippet=&mode=vscode: https://snippet-generator.app/?description=&tabtrigger=&snippet=&mode=vscode](https://snippet-generator.app/?description=&tabtrigger=&snippet=&mode=vscode)

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/vBPlNYgaoB0XOdG8/img/83c8d93e-6864-48ab-8451-f8beac2e618f.png)

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/vBPlNYgaoB0XOdG8/img/b4391ddc-379f-429b-81a6-d3c983aaec60.png)

#### 占位符

使用 `$` 符号作为占位符，当输入代码片段的 prefix 后按 tab 键可以生成代码片段，然后再按 tab 键可以调到下一个占位符。占位符一般从 `$1` 开始，依次增加。

`$0` 用于设置最终光标的位置，设置了 `$0`之后，再往后设置其他占位符则不会生效， `$0` 终止了 TAB键 的光标跳转操作。

设置占位内容的可选项，写法为`${1|a,b,c}`，括号中的`1`对应的是按tab之后的光标落点顺序，`abc`为可选的项，用逗号隔开。

#### 变量

##### 1. 文档相关：

`TM_SELECTED_TEXT` 当前选中的文本或空字符串

`TM_CURRENT_LINE` 当前行的内容

`TM_CURRENT_WORD` 光标下单词的内容或空字符串

`TM_LINE_INDEX` 基于零索引的行号

`TM_LINE_NUMBER` 基于一个索引的行号

`TM_FILENAME` 当前文档的文件名

`TM_FILENAME_BASE` 当前文档的文件名，不带扩展名

`TM_DIRECTORY` 当前文档的目录

`TM_FILEPATH` 当前文档的完整文件路径

`RELATIVE_FILEPATH` 当前文档的相对（相对于打开的工作区或文件夹）文件路径

`CLIPBOARD` 剪贴板的内容

`WORKSPACE_NAME` 打开的工作区或文件夹的名称

`WORKSPACE_FOLDER` 打开的工作区或文件夹的路径

##### 2. 日期和时间相关：

`CURRENT_YEAR` 本年度

`CURRENT_YEAR_SHORT` 当前年份的最后两位数字

`CURRENT_MONTH` 月份为两位数（例如“02”）

`CURRENT_MONTH_NAME` 月份的全名（例如“七月”）

`CURRENT_MONTH_NAME_SHORT` 月份的简称（例如“Jul”）

`CURRENT_DATE` 一个月中的哪一天

`CURRENT_DAY_NAME` 日期名称（例如“星期一”）

`CURRENT_DAY_NAME_SHORT` 一天的简称（例如“星期一”）

`CURRENT_HOUR` 24 小时制的当前小时

`CURRENT_MINUTE` 当前分钟

`CURRENT_SECOND` 当前秒

`CURRENT_SECONDS_UNIX` 自 Unix 纪元以来的秒数

##### 3. 插入随机值：

`RANDOM` 6 位随机 Base-10 数字

`RANDOM_HEX` 6 位随机 Base-16 数字

`UUID` 版本 4 UUID

##### 4. 插入注释相关：

`BLOCK_COMMENT_START`示例输出：PHP/\*或 HTML<!--

`BLOCK_COMMENT_END`示例输出：PHP\*/或 HTML-->

`LINE_COMMENT` 示例输出：在 PHP 中 //

## 1.3 js插件介绍

进入工程项目，按下F5，可以看到插件开发主机窗口

# 插件打包预发布

## 安装 vsce 工具

依赖`npm install -g vsce`

## 生成 .vsix 文件

编辑 README.MD 文件后执行`vsce package`

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/vBPlNYgaoB0XOdG8/img/acd37c0d-87fd-49af-8a10-2e9e36c5d616.png)

## 注册账号

Visual Studio Code的应用市场基于微软自己的`Azure DevOps`，插件的身份验证、托管和管理都是在这里。

*   要发布到应用市场首先得有应用市场的`publisher`账号；
    
*   而要有发布账号首先得有`Azure DevOps`组织；
    
*   而创建组织之前，首先得创建`Azure`账号；
    
*   创建`Azure`账号首先得有`Microsoft`账号；
    

[https://login.live.com/](https://login.live.com/)

[https://aka.ms/SignupAzureDevOps](https://aka.ms/SignupAzureDevOps)

[https://marketplace.visualstudio.com/manage: https://marketplace.visualstudio.com/manage](https://marketplace.visualstudio.com/manage)

*   一个Microsoft账号可以创建多个`Azure`组织；
    
*   一个组织可以创建多个`publisher`账号；
    
*   同时一个组织可以创建多个`PAT`（`Personal Access Token`，个人访问令牌）；
    

## 创建组织获取token

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/vBPlNYgaoB0XOdG8/img/9d5f5b89-3640-494b-8239-6ee7b2b646b0.png)

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/vBPlNYgaoB0XOdG8/img/3a5ff7f0-5fbe-4142-b681-1c7887e7fac0.png)

package.json文件添加publisher字段

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/vBPlNYgaoB0XOdG8/img/10513b93-ae94-49a2-a059-aacbe5cea41b.png)

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/vBPlNYgaoB0XOdG8/img/84cf93e3-3bd9-44d2-b549-f3ed6fef9577.png)

## 发行方登录

如果你已经有发行方账号了：

`vsce login (publisher name)`，`vsce`会要求输入你的 Personal Access Token。

你也可以用命令参数`-p <token>`直接登录然后立即发布插件`vsce publish -p <token>`

## 增量更新插件版本

~~用 SemVer 语义标识符：~~`~~major~~`~~，~~`~~minor~~`~~，~~`~~patch~~`~~增量更新插件版本号。~~

~~例如，你想把插件从1.0.0更新到1.1.0，那么加上~~`~~minor~~`~~：~~

`~~vsce publish minor~~`

也可以直接修改`package.json`的`version`，更新版本。

# 可能会出现的问题：

发布提示Failed request:(401)

token授权失败，重新授权

执行`vsce login {your_publisher_name}`，重新提交token