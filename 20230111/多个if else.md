function getUserDescribe(name) {
const describeForNameMap = {
小刘: () => console.log("刘哥哥"),
小红: () => console.log("小红妹妹"),
陈龙: () => console.log("大师"),
李龙: () => console.log("师傅"),
大鹏: () => console.log("恶人"),
};
describeForNameMap[name] ? describeForNameMap[name]() : console.log("此人比较神秘！");
}

function getUserDescribe(name) {
const describeForNameMap = [
[
(name) => name.length > 3, // 判断条件
() => console.log("名字太长") // 执行函数
],
[
(name) => name.length < 2,
() => console.log("名字太短")
],
[
(name) => name[0] === "陈",
() => console.log("小陈")
],
[
(name) => name === "大鹏",
() => console.log("管理员")
],
[
(name) => name[0] === "李" && name !== "李鹏",
() => console.log("小李"),
],
];
// 获取符合条件的子数组
const getDescribe = describeForNameMap.find((item) => item[0](name));
// 子数组存在则运行子数组中的第二个元素（执行函数）
getDescribe ? getDescribe[1]() : console.log("此人比较神秘！");
}
