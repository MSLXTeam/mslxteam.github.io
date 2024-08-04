# 开始使用Acarua

## 变量和常量的定义
使用 ```mut``` 关键字定义变量,使用 ```let``` 关键字定义常量.变量和常量的定义方式和类型注解的规则如下:
```acarua
mut mutiableName: DataType = value
let constantName: DataType = value
```
示例:
```acarua
mut age: Int 25
let name: String "John"
mut demo: Float, demo2: Double = 1.14, 5.14
```
### 编译期常量

条件: 只能为基本类型
使用let const即可

## 条件判断
使用 ```if (表达式) { 语句... } else { 语句... }``` 进行条件判断.
示例:

```acarua
if (age >= 18) {
    print("You are an adult.")
} 
else {
    print("You are a minor.")
}
```

## 循环
使用 ```when (条件) { 循环体... }``` 进行循环.
示例:

```acarua
when (i < 10) {
    print(i)
    i++
}
```
或者使用 ```yield [<variable name> in] <iterable object name> {语句...}``` 实现遍历功能,其中 ```{ 语句... }``` 表示循环体.
示例:

```acarua
yield index in generate<int>(0,10) {
    print(index)
}
```

## 基本类型
主要的数据类型有整数```Int```、短整型```Short```、长整型```Long```、字符型```Char```、单精度浮点数```Float```、双精度浮点数```Double```、布尔型```Boolean```和字符串```String```.
对于Int, Short, Long, Float, Double,在其类型名前加上`Signed`或`Unsigned`可以代表其有符号或无符号变体.如未指定,则默认为有符号.

## 更多类型

### 函数

用下面的类型来描述一个函数:

```acarua
(Type1, Type2, ...) -> ResultType
```

就像这样:

```acarua
(Int, Float) -> Float
```

如果只有一个参数,则括号可以省去:

```acarua
Int -> Int
```

嵌套的函数调用:
```acarua
fun F1(v: Int): Int {...}
fun F2(v: Int): Int {...}
let r = F1(1) |> F2
```
则r的类型被推断为`Int`, 调用过程的类型是```Int -> Int -> Int```


## 四则运算
四则运算符为 ```+```、```-```、```*```、```/```,还有 ```**``` 表示平方,```//``` 表示开平方,```%``` 表示取余.
示例:
```acarua
mut sum = 1 + 2
mut difference = 5 - 3
mut product = 4 * 6
mut quotient = 12 / 3
mut remainder = 10 % 3
mut square = 2 ** 3
mut squareRoot = 9 // 3
```

## 逻辑运算符
逻辑运算符有逻辑非```!```、逻辑与```&&```和逻辑或```||```.
示例:
```acarua
mut isTrue true
mut isFalse false
mut notTrue !isTrue
mut trueAndFalse isTrue && isFalse
mut trueOrFalse isTrue || isFalse
```

## 位运算符
位运算符有按位与```&```、按位或```|```、按位非```-```、按位异或```^```、左移```<<```和右移```>>```.
示例:
```acarua
let a 5
let b 3
let bitwiseAnd = a & b
let bitwiseOr = a | b
let bitwiseNot = -a
let bitwiseXor = a ^ b
let leftShift = a << 2
let rightShift = a >> 1
```

## 函数定义
使用 ```fun``` 关键字定义函数,后接函数名,参数定义在小括号中,可选的返回值类型在大括号之前.
示例:
```acarua
fun functionName(parameter1: DataType, parameter2: DataType): ReturnType {
    // function body
    return value
}

fun printName(name: String) {
    printf("Name: $name")
}
```

### 简写函数定义

#### 匿名函数

一个匿名函数可以以如下的方式定义:

```acaura
fun (arg: type) {...}
```

如果不需要接收参数,甚至可以进一步简化到下面的样子:

```acarua
{
	//这里是函数体...
}
```

还能使用let定义:

```acarua
let name = (argslist...) = {...}
```

#### 无参数的函数

可以这么写:

```acarua
fun Fool {...}
```

### 小技巧

#### 管道运算符

你可以不用大量嵌套函数调用:

```acarua
f1(f2(f3(a)))
```

而是这样:

```acarua
f3(a) 
|> f2() 
|> f1()
```

舒服多了,不是吗?

这种情况下(一个函数全部由这种形式组成,没有其他中间项),你就可以这么写一个函数:

```acarua
let testFun = (x, y)
|> f1()
|> f2()
```

#### 调用无参函数

其实对于一个无参函数,调用它时只需要保证在当前命名空间中其标识符唯一,就可以省去调用时的小括号,例如,上面的例子可以改成这样:

```acaura
let testFun = (x, y)
|> f1
|> f2
```

可能有人觉得这样可读性会变低,毕竟这种东西挺见仁见智的

## 定义类
使用 ```class``` 关键字定义类,后接类名,继承关系在类名后的使用冒号指定.
如果你写过kotlin,那么acarua的类应当让你感觉回家了一样:
示例:
```acarua
class Parent([let/mut][&] <arg>: <type>) {
    //...
}

class Children: Parent { ... }
```

### 覆盖构造函数和析构函数

通常情况下,acarua会为你自动创建构造和析构函数.不过如果你想手动控制这一过程,仍可以通过`constructor`和`destructor`关键字指定.

```acarua
class Fool constructor(arg: Int) {
	//主构造函数体...
	destructor {
		//析构函数体...
	}
}
```

与kotlin不同,acarua允许在主构造函数中编写语句和表达式:

```acarua
class Example(arg: Int) {
	let private a
	//更多...
}
```

## 定义协议

使用`protocol`关键字定义一个协议,后接协议名:

```acarua
protocol ExampleProtocol {
	fun Example: Int {...}
	let attr: Int
}
```

类可以通过继承类似的方式指明实现了某个协议:

```acarua
class ImplClass: ExampleProtocol {
	let attr: Int
	fun Example: Int {
		//...
	}
}
```