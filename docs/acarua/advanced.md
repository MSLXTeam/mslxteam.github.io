# Acarua进阶指南

## 模板的简单介绍

可以用如下方式定义模板函数:

```acarua
template<T, R> fun FoolTemplate(v: T): R {...}
```

这只是一个简单的示例.

调用模板函数:

```acarua
let r: Int = FoolTemplate<Int, Int>(1)
```

可以简写成

```acarua
let r: Int = FoolTemplate(1)
```

可以为模板参数指定默认值:

```acarua
template<T, R = T> fun FoolTemplate(v: T): R {...}
```

然后调用时若满足自动推断的条件即可继续简化调用:

```acarua
let r = FoolTemplate(1)
```

这样就看起来和一个普通函数没区别了.

## 指针

对一个变量使用```&```运算即可获得其地址.使用下面的格式来创建一个对应的指针变量:

```acarua
let a: Int = 1 
let *p: Int* = &a
```

在上面的情况下,使用```*p```即相当于使用变量```a```.

## 手动内存管理

### calloc(let num: Int, let size: Int): Any*

使用此函数可以动态地分配num个长度为size的内存空间并全部初始化为0.所以实际上是分配了num*size大小的内存空间.

### free(let addr: Any*)

使用此函数来释放addr所指向的内存空间.

### malloc(let size: Int): Any*

使用此函数在堆区分配size大小的内存空间.需要注意的是这部分内存空间将不会被初始化,它们的值是未知的.

### realloc(let addr: Any*, resize: Int): Any*

使用此函数重新分配addr指向的内存并将其拓展到resize大小.

### new和del

#### (allocator) (placement_flags) new (placement_args) (type) 

一个简单示例:

```acarua
addr = malloc(sizeOf(MyClass))
mc: MyClass = placement new addr MyClass(...) MyClass
```

相当于:

```acarua
mc: MyClass = MyClass(...)
```

最后别忘了析构和释放:

```acarua
mc.destruct
free(addr)
```

或者直接使用```del```:

```acarua
del mc
```

#### (flags) del (args) target