这是一个结合了 position:relative 和 position:fixed 两种定位功能于一体的特殊定位，适用于一些特殊场景。

position:sticky的生效是有一定的限制的，总结如下：

1.须指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。

        并且top和bottom同时设置时，top生效的优先级高，left和right同时设置时，left的优先级高。

2.设定为position:sticky元素的任意父节点的 overflow 属性必须是 visible，否则position:sticky不会生效。这里需要解释一下：

        如果position:sticky元素的任意父节点定位设置为overflow:hidden，则父容器无法进行滚动，所以position:sticky元素也不会有滚动然后固定的情况。

        如果position:sticky元素的任意父节点定位设置为position:relative | absolute | fixed，则元素相对父元素进行定位，而不会相对 viewprot 定位。

3.达到设定的阀值。也就是设定了position:sticky的元素表现为relative还是fixed是根据元素是否达到设定了的阈值决定的。

作者：animasling
链接：https://www.jianshu.com/p/aa80021b4e20
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。