# Todo List

## 前言
Todo List为待办事情清单，实现的功能为：
- 输入后显示在下方
- 点击关闭按钮，事情会删除
- 点击事情时，会显示完成，再次点击，会恢复之前状态

## HTML结构
分为两部分，第一部分为`input`和`button`组成的输入部分，第二部分为`ul`组成的显示部分

## CSS样式

- 使用了`display:table`让第一部分和第二部分形成动态垂直居中对齐
- 偶数行`li:nth-child(odd)`的背景色
- 每一行之前的勾号是使用`border-width`和`rotate(45deg)`实现

## JavaScript
基本逻辑如下：
- 页面初始时，给每一行创建关闭符号。
- 创建关闭符号动作
- 运用事件委托，点击每一行时，切换类名
- 输入时，调用`newElement`方法，方法首先判断输入是否为空，不为空，则添加到`ul`中，并为之添加关闭符号和逻辑