<el-radio v-model="radio" label="1">备选项1</el-radio>
<el-radio v-model="radio" label="2">备选项2</el-radio>
此时label是字符串1， 而请求返回值是数字1，由于两者不匹配，于是该Radio单选框组件默认值就选不中备选项1

我们只要保证label的值和请求返回的值完全一样即可，如radio有数字有字符串，那么我们可以将请求返回值radio全转换 为字符串即可。

若radio全是数字，我们仅需在label前加: 即可, 这样label中的值会被当成js元素来执行，1就变成了数字。