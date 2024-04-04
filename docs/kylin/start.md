# Kylin 基础语法

## 快速开始

- 运行 Kylin 程序：使用命令 `kylin [源代码路径]`。
- 注意：Kylin 语言不支持相同关键字的嵌套使用。

## 基础概念

### 变量定义

在 Kylin 中定义变量的方法如下：

```kylin
var a = 1                        // 输出 “1”
var b = "hello world"            // 输出 “hello world”
var c = 1 + 1                    // 输出 “2”
var d = "hello", "world"         // 输出 “helloworld”
var e = "result: ", 1 + 1        // 输出 “result: 2”
var f = "result: ", a + a        // 输出 “result: 2”
```

### 数据类型

Kylin 支持以下数据类型：

- `num`：数字类型，用于数学运算。
- `string`：字符串类型。
- `obj`：基础对象类型，用于表示各种对象。
- `bool`：布尔类型，表示真 (`true`) 或假 (`false`)。
- `list`：列表类型，用于存储元素序列。

### 修改变量

修改变量的值可以直接重新使用 `var` 关键字或者直接赋值：

```kylin
var a = 2  // 或者
a = 2
```

### 关键字和函数定义

- 在 Kylin 3.0 版本中，部分旧有标准已被废除。
- 定义函数和修改函数访问权限（`public` 或 `private`）：

```kylin
func a() public
    print("hello world")
end_func

f b()
    out("这是else语句")
e_f

if (true) a()  
else b()
```

### 函数定义示例

```kylin
func a(test) public
    out(test)
end_func

f b()
    out("这也是函数定义方法")
e_f

a("hello world") // 调用函数 a，传入 "hello world"

func c()
    return "hello world"
end_func

out(c()) // 输出 "hello world"
```

### 异常处理

```kylin
f a() 
    write("1.txt", "hello kylin", false)
e_f

err b(e)
    out(e.message)
e_err

exception(a(), b()) // 当 a() 出现错误时，运行 b()
```

### 列表对象与操作

```kylin
var a = list(1, 2, 3, 4)
print(a[0])          // 获取并输出 1
list_rm(a, 0)        // 移除列表中的第0个元素
list_add(a, 5)       // 向列表添加元素 5
```

注意：列表操作仅支持字符串和数字类型。

### 共享变量指针

```kylin
var a = 1000
ref b = a

print(b) // 输出 1000

val b = 1
print(a) // 输出 1000，展示了如何共享变量指针
```

### 删除变量

```kylin
var a = 100
del(get_pointer(a)) // 删除变量 a 及其指针
```
