# Kylin 内置可调用函数

Kylin 提供了一系列内置函数，以支持各种常见的编程任务，如输出、循环、系统命令执行、异常处理等。以下是这些内置函数的简要说明和使用示例。

## 输出函数 - out 和 print

- `out` 和 `print` 函数功能相同，用于输出信息到控制台。
- 为了与 kylin-go 兼容，提供了这两种形式。

```kylin
out("hello world")
print("result: ", 1+1)
```

## 循环执行 - for

- `for` 函数用于在指定范围内重复执行某个函数。
- 支持多线程优化。

```kylin
func main() public
    print(1)
end_func

for(main(), 1000)                 // 执行 1000 次 main() 函数
for(main(), 1000, true)           // 开启多线程优化执行 1000 次 main() 函数
```

## 系统命令执行 - shell

- `shell` 函数用于执行操作系统命令。

```kylin
shell("echo hello world")         // 输出 hello world
```

## 异常处理 - exception 和 except

- `exception` 用于捕获并处理异常。
- `except` 用于定义异常处理逻辑。

```kylin
err err_code(e)
    print(e.message) // 获取错误信息
e_err

f a()
    write("1.txt", "hello world", false) // 写入文件
e_f

exception(a(), err_code())
```

## 循环执行 - while

- `while` 函数用于循环执行指定的函数。

```kylin
while(true, print(1))
```

## 文件写入 - write

- `write` 函数用于将内容写入文件。

```kylin
write("1.txt", "hello world", false)   // 覆盖写入
write("1.txt", "hello world", true)    // 追加写入
```

## 抛出异常 - throw_error

- `throw_error` 用于抛出异常。

```kylin
throw_error("异常错误")
```

## 程序退出 - exit

- `exit` 用于退出程序。

```kylin
exit(1) // 错误退出码 1
exit(0) // 正常退出
```

## 列表操作 - list_add 和 list_rm

- `list_add` 向列表添加元素。
- `list_rm` 从列表删除元素。

```kylin
var a = list(1,2,3)
list_add(a, 1)

var b = list(1,2,3,4)
list_rm(b, 0) // 删除第0个元素
```

## 内存管理 - gc

- `gc` 函数用于调用垃圾收集器，管理内存。

```kylin
gc()
```

## 模拟键盘输入 - enterKey

- `enterKey` 用于模拟键盘按键输入。

```kylin
enterKey("a") // 按下 'a' 键
```

## 程序安装检查 - is_app_install

- `is_app_install` 用于检查系统上是否安装了指定的命令行程序。

```kylin
print(is_app_install("python3")) // 检查 python3 是否安装
```
