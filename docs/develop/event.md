# 事件部分

## 配置EventHandlerInfo

### 使用

```python
from tools.InfoClasses import EventHandlerInfo
info = EventHandlerInfo(...) # 按照下文的参数说明填写
```

### 参数说明

- ```on``` 表示要注册的事件,可以使用```MSLXEvents```的枚举值

### 后续操作

- 使用```@EventTools.EventHandler```来注册插件的入口点

## 注册事件侦听器

假设你有以下代码:

```python
def event_foo():
    print("A piece of shit!")
```

则首先按照上面的说明配置EventHandlerInfo，然后使用```@EventTools.EventHandler```来注册这个函数为事件侦听器.

至此,你的函数应该可以被正确注册为一个事件监听器了.