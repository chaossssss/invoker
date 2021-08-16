hook 不在编写class 的情况下使用state
function ExampleWithManyStates(){
  const [age, setAge] = useState(42); // [变量,方法名]  useState(初始值)
  const [fruit, setFruit] = useState('banana')
  const [todos, setTodos] = useState([{text: 'Learn Hooks'}])
}


useEffect 相当于componentDidMount、componentDidUpdate和componentWillUnmount