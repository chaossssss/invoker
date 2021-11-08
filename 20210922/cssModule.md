css
.module {
  font-size: 50px;
}

jsx
import reduxStyle from './reduxStyle.module.css'
<div className={reduxStyle.module}>CSSMODULE</div>

全局定义
:global(.test1) {
  color: red;
}