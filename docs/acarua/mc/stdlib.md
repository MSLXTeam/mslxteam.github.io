# AcaruaMC.Std标准库介绍

## 信息显示

### ```Print()```函数

对应的命令: ```/tellraw```或```/tell```

参数:

| 键名       |               释义                |      类型 |
|----------|:-------------------------------:|--------:|
| content  |             要打印的内容              |  String |
| plain    | 是否使用```tell```指令而非```tellraw``` | Boolean |
| target   |               玩家名               |  String |


### ```Title()```函数

参数:

| 键名       |     释义      |      类型 |
|----------|:-----------:|--------:|
| content  |   要显示的内容    |  String |
| sub      |    小标题内容    |  String |
| action   | 在动作栏上方显示的文本 |  String |
| clear    |   是否清空标题    | Boolean |
| reset    |   是否清空副标题   | Boolean |
| fade_in  |   淡入时间(s)   |     Int |
| fade_out |   淡出时间(s)   |     Int |
| target   |     玩家名     |  String |

### ```Msg()```函数

对应的命令: ```/msg```

参数:

| 键名      |   释义    |      类型 |
|---------|:-------:|--------:|
| content | 要显示的内容  |  String |
| target  | 要私信的玩家名 |  String |

### ```Me()```函数

对应的命令: ```/me```

参数:

| 键名      |   释义    |      类型 |
|---------|:-------:|--------:|
| content | 要显示的内容  |  String |

### ```Say()```函数

对应的命令: ```/say```

参数:

| 键名      |   释义    |      类型 |
|---------|:-------:|--------:|
| content | 要显示的内容  |  String |