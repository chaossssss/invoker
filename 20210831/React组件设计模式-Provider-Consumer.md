[React组件设计模式-Provider-Consumer](https://blog.csdn.net/weixin_34409822/article/details/91434759)
```
const ThemeContext = React.createContext("light")
class App extends React.Component{
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}

// 中间组件不用指明
function Toolbar(){
  return (
    <div>
      <ThemeButton />
    </div>
  )
}

class ThemeButton extends React.Component {
  static contextType = ThemeContext
  render(){
    return <Button theme={this.context} />
  }
}

function Page(props){
  const user = props.user
  const userLink = (
    <Link href={user.permalink}>
      <Avatar user={user} size={props.avatarSize}>
    </Link>
  )
  return <PageLayout userLink={userLink} />
}
<Page user={user} avatarSize={avatarSize} />
//··· 渲染 ···
<PageLayout userLink={...} />
//··· 渲染 ···
<NavigatrionBar userLink={...} />
//··· 渲染 ···
{props.userLink}
```