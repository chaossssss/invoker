mpvue组件命名

PascalCase
个人习惯
components/
|- MyComponent.vue

kebab-case

components/
|- my-component.vue

引用
PascalCase
components: {
  FooterNavigation
},
页面中使用可以是
```
<footer-navigation></footer-navigation>
```
也可以是
```
<FooterNavigation></FooterNavigation>
```
