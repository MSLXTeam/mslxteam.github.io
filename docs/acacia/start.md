[[toc]]

## 变量与常量

> 定义一个整数类型的变量x，并将其初始化为10

```Acacia
x: int = 10
```

> 定义常量

```Acacia
c -> 1145
```

> 可以省略初始值，后续使用“=”来赋值

```Acacia
x = 20
```

> 可以使用短变量声明来定义带有初始值的变量

```Acacia
number := 20  # 等同于 number: int = 20
```

> 使用运算符来对变量进行操作

```Acacia
x += 20  # 等同于 x = x + 20
```

# 控制语句

> if语句

```Acacia
if x > 5:
    x *= 2
# 只有当x大于5时，x才会乘以2
```

> while语句

```Acacia
sum := 0
while x > 0:
    sum += x
    x -= 1
# 计算1到x之间的数的总和
```

## 数据结构

### 列表

```Acacia
numbers -> {1, 2, 3}  # 使用大括号来创建一个列表
for i in numbers:
    x += i
```

上面的语句等同于

```Acacia
x += 1
x += 2
x += 3
```

### 图

> 定义图

```Acacia
phonebook -> {"Alice": 123456, "Bob": 789012, "Charlie": 345678}
```

> 对图使用下标(```[]```)运算来访问/修改图中的值

```Acacia
bob_number = phonebook["Bob"]
phonebook["Bob"] = 114514
```

### 结构体

> 定义结构体

```Acacia
struct Person:
    name: str
    age: int
```

> 实例化&修改值

```Acacia
person := Person(name="Alice", age=25)
person.age += 1
```