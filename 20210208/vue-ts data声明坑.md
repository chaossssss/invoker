声明data时出现了问题
方法一：
```
data(): { times: number; text: string } {
  return {
    times: 2,
    text: '2222'
  }
}
```

方法二：
直接写
```
  ValA: string = "hello world";
  ValB: number = 222;
```
但是这样需要在.eslintrc.js里面rules配置
```
  "@typescript-eslint/no-inferrable-types": "off"
```