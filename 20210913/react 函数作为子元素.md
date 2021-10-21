props.children 和其他 prop 一样，可以传递任意类型的数据，而不仅仅是 React 已知的可渲染类型。
```
function Reapet(props) {
  let items = [];
  for(let i = 0; i < props.numTimes; i++){
    items.push(props.children(i))
  }
  return <div>{items}</div>
}

function ListOfTenThings(){
  return (
    <Rpeate numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  )
}
```