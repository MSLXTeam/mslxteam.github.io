# 开始使用Acarua

## 变量和常量的定义
使用 ```mut``` 关键字定义变量,使用 ```let``` 关键字定义常量.变量和常量的定义方式和类型注解的规则如下:
```
mut mutiableName: DataType = value;
let constantName: DataType = value;
```
示例:
```
mut age: Int 25;
let name: String "John";
mut demo: Float, demo2: Double = 1.14, 5.14
```
### 编译期常量

条件: 只能为基本类型
使用let const即可

## 条件判断
使用 ```if (表达式) { 语句... } else { 语句... }``` 进行条件判断.
示例:
```
if (age >= 18) {
    println("You are an adult.")
} 
else {
    println("You are a minor.")
}
```

## 循环
使用 ```when (条件) { 循环体... }``` 进行循环.
示例:
```
when (i < 10) {
    println(i)
    i++
}
```
或者使用 ```yield index in generate<int>(0,10) {语句...}``` 实现遍历功能,其中 ```{ 语句... }``` 表示循环体.
示例:
```
yield index in generate<int>(0,10) {
    println(index)
}
```

## 数据类型
主要的数据类型有结构体```Struct```、图```Map```、数组```Array```、元组```Tuple```、枚举```Enum```、整数```Int```、单精度浮点数```Float```、双精度浮点数```Double```、布尔型```Boolean```和字符串```String```.
示例:
```
struct Person {
    mut age: Int;
    mut name: String;
}
let employee Map<String, String>();
mut numbers Array<Int>(5);
let numbers Tuple<Int>(5);
Enum Types {
    let del "DELETE";
    let new "NEW";
    ...
}   
```
除此之外还有下面这些类型:```UnsignedInt```,```UnsignedLongInt```,```UnsignedShortInt```,```LongInt```,```ShortInt```,```LongDouble```

## 自定义类型
自定义类型主要是类```Class```.
示例:
```
class ClassName {
    // class body
}
```

## 四则运算
四则运算符为 ```+```、```-```、```*```、```/```,还有 ```**``` 表示平方,```//``` 表示开平方,```%``` 表示取余.
示例:
```
mut sum = 1 + 2;
mut difference = 5 - 3;
mut product = 4 * 6;
mut quotient = 12 / 3;
mut remainder = 10 % 3;
mut square = 2 ** 3;
mut squareRoot = 9 // 3;
```

## 逻辑运算符
逻辑运算符有逻辑非```!```、逻辑与```&&```和逻辑或```||```.
示例:
```
mut isTrue true;
mut isFalse false;
mut notTrue !isTrue;
mut trueAndFalse isTrue && isFalse;
mut trueOrFalse isTrue || isFalse;
```

## 位运算符
位运算符有按位与```&```、按位或```|```、按位非```-```、按位异或```^```、左移```<<```和右移```>>```.
示例:
```
let a 5;
let b 3;
let bitwiseAnd = a & b;
let bitwiseOr = a | b;
let bitwiseNot = -a;
let bitwiseXor = a ^ b;
let leftShift = a << 2;
let rightShift = a >> 1;
```

## 函数定义
使用 ```fun``` 关键字定义函数,后接函数名,参数定义在小括号中,可选的返回值类型在大括号之前.
示例:
```
fun functionName(parameter1: DataType, parameter2: DataType): ReturnType {
    // function body
    return value;
}

fun printName(name: String) {
    printf("Name: $name")
}
```

## 类定义
使用 ```class``` 关键字定义类,后接类名,继承关系在类名后的小括号中指定,构造函数名为```类名```,析构函数名为```~类名```.
示例:
```
class ClassName {
    // class body
    ClassName() {
        // constructor body
    }
    
    ~ClassName() {
        // destructor body
    }
}

class Children(Parent) { ... }
```
