1、由于内部需要调用到小程序的setData方法，所以我们需要把this传过去。 　　

2、此方法会在page中生成一个名为wxTimer，wxTimerSecond和wxTimerList的数据，请保证这些key没有被占用 

3、请在data中添加一条属性wxTimerList:{},否则将会报错。