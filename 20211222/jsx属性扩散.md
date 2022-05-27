[JSX属性扩散](https://blog.csdn.net/qq_24147051/article/details/93521176)

```
const Profile
let name = 'viking', age = 10, gender = 'Male'
let component = <Profile name={name} age={age} gender={gender} />
```

```
const Profile
let props = {
  name: 'viking',
  age: 10,
  gender: 'Male'
}
let component = <Profile {...props} />
```