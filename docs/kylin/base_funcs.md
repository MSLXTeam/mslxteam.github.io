# Kylin 基础可调用函数

Kylin 提供了一系列基础可调用函数，以支持各种常见的编程需求，如时间获取、用户输入、系统信息获取、文件操作等。以下是这些基础函数的简要说明和使用示例。

## 时间和输入

### getTime
获取当前时间，精确到秒。
```kylin
print(getTime())
```

### input
获取控制台输入的内容。
```kylin
var a = input("输入内容: ")
```

## 系统信息

### get_os
获取当前操作系统名称。
```kylin
print(get_os())
```

### get_path
获取当前脚本的执行路径（注意，这不是脚本所在路径）。
```kylin
print(get_path())
```

### long_time
获取当前的系统时间，以Java Long形式返回。
```kylin
print(long_time())
```

## 类型判断和转换

### bool
判断表达式是否为布尔类型。
```kylin
print(bool(1 > 2))                    // false
print(bool("hello" == "hello"))       // true
```

### typeof
获取一个值的类型。
```kylin
var a = 1
print(typeof(a))          // num
```

### toInt
将数字对象转换成整型数字。
```kylin
var a = "1.0"
print(toInt(a)) // 1
```

## 文件操作

### file_exists
判断文件是否存在。
```kylin
print(file_exists("1.txt"))             // 存在返回 true，不存在返回 false
```

### delete 或 rm
删除文件或文件夹。
```kylin
delete("1.txt")
rm("1.txt")
```

## 字符串和列表操作

### length
获取数组或字符串的长度。
```kylin
var a = list(1,2,3)
print(length(a))              // 3

var b = "hello"
print(length(b))              // 5
```

### pow
计算N次方。
```kylin
print(pow(2, 3))              // 8
```

### sub
截取字符串。
```kylin
var a = "hello"
print(sub(a, 0, 1))           // "h"
```

### index 和 lastindex
在字符串内索引指定字符或最后一个出现的字符。
```kylin
var a = "hello"
print(index(a, "h"))         // 0
print(lastindex(a, "h"))     // 0
```

### index_list
获取一个列表内的指定元素的位置。
```kylin
var list = list("hello", "world")
print(index_list(list, "hello")) // 0
```

## 线程和进程

### new_thread
新建线程，获取的变量是一个指针。
```kylin
func a() public
    print(1)
end_func

var t = new_thread(a()) // 获取的是一个指针
kill_thread(t)
```

### shell_output
执行系统 shell 指令并获取它们的输出。
```kylin
var a = shell_output("ls ./") // 获取输出
```

## 网络和浏览器

### start_browser
打开浏览器链接。
```kylin
start_browser("https://www.baidu.com/")
```

### http_requests
向指定网址发送一个 get 请求。
```kylin
var a = http_requests("https://www.baidu.com/")
print(a) // 输出百度首页的html代码.
```

## 数学和随机数

### randomInt
生成一个指定范围的数字。
```kylin
print(randomInt(100, 1000)) // 生成 100 - 1000 的数字
```

## 类型判断

### isnumber
确定字符串是否是数字。
```kylin
var a = "1000"
print(isnumber(a)) // 输出 true

var b = "as"
print(isnumber(b)) // 输出 false
```
