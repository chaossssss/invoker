# interface作用
声明对象
```
interface af {
    name: string
    age: number
    [attr:string]:any
}
```
声明函数
```
interface ccc{
    (data:string):void
}
```

# 字面量类型
```
var a3:"name" = "name"  //a3只能是name
var u1:1|2    //u1可能是1可能是2
var u2:"aaa"|1|{a:string}   //三种类型

interface a{
    aaa:string
    ccc:string
}
interface b{
    bbb:string
    ccc:string
}
var u1:a&b  //合并两个类型

type uu = "aaa"|1|{a:string}    //type声明一个类型
var u3:uu
```

# 类型断言(对类型的判断)
```
interface af{
    name: string
    age: number
}
f1({
    name:"zhangsan",
    age:18,
    aaa: "aaa"
} as af)    //as语句，相当于人肉判断，符合条件
```

# 非空断言
```
function f1(a:string|null|undefined){
    a!  //使用!告诉ts这个变量不是null也不是undefined
}
```

# 类型保护
```
用in来判断interface类型
interface i1{
    bbb: string
    ccc: string
}
interface i2{
    ddd: string
    eee: string
}
function f1(a1: i1| i2){
    if("bbb" in a){

    }
}
```

# 泛型
```
interface User{
    name: string
    age: number
}
interface Role{
    name: string
    id: string
}
interface UserResponse{
    ret: number
    message: string
    data: User
}
interface RoleResponse{
    ret: number
    message: string
    data: Role
}

interface CommonResponse<T>{
    ret: number
    message: string
    data: T
}
//类似于函数传参数
type UserResponse = CommonResponse<User>
type RoleResponse = CommonResponse<Role>

interface T1<T,K>{
    aaa: string
    t: T
    k: K
}   //多个泛型
```

# 泛型约束
使用extends
```
interface T1<T extends string|number>{
    aaa: string
    t: T
}
```