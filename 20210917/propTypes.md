[react的传值类型PropTypes简单说明](https://www.cnblogs.com/huangqiming/p/10238196.html)
import PropTypes from 'prop-types'

<!-- 默认值 -->
static defaultProps = {
    name: 'item',
    age:18
};
<!-- 必填 -->
static propTypes = {
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,

<!-- 特性形状参数的对象 -->
    optionalObjectWithShape: React.PropTypes.shape({
      color: React.PropTypes.string,
      fontSize: React.PropTypes.number
    })
};


