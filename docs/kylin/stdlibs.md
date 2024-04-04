# Kylin 基础类库

在 Kylin 中，有几个基础的类库提供了文件操作、网络服务、数学计算以及Java集成的功能。以下是这些类库的简要介绍和如何使用它们。

## 文件操作 - io.file 或 file

这个类库提供了基本的文件操作方法，包括设置路径、检查存在性、读取内容、创建文件和目录。

### 使用方法：

1. 导入文件操作类库：

```kylin
import "file"
```

2. 实例化并设置操作路径：

```kylin
var f = new(file)
f.set_path("./")
```

3. 使用提供的方法进行文件操作：

```kylin
print(f.exists())            // 检查文件或目录是否存在
print(f.get_file_content())  // 获取文件内容
f.create_f()                 // 创建文件
f.create_d()                 // 创建目录
```

## 网络服务 - net.http.linwinshs.httpserver 或 httpserver

提供了简易的Web服务器功能，包括设置端口、IP、路径和启动服务器。

### 使用方法：

1. 导入网络服务类库：

```kylin
import "httpserver"
```

2. 实例化并配置服务器：

```kylin
var hs = new(Httpserver)
hs.set_port(8080)
hs.set_ip("0.0.0.0")
hs.set_path("/")
```

3. 启动服务器：

```kylin
hs.start()
```

## 数学计算 - util.math 或 math

这个类库提供了基本的数学计算功能，包括加法、乘法、减法和除法。

### 使用方法：

1. 导入数学计算类库：

```kylin
import "math"
```

2. 使用提供的方法进行计算：

```kylin
print(math.add(1,1))         // 输出 2
print(math.multiply(2,2))    // 输出 4
print(math.subtract(2,2))    // 输出 0
print(math.division(2,2))    // 输出 1
```

## Java 集成

Kylin 提供了两种与Java集成的方式：运行Jar包和执行Java源代码。

### 运行 Java Jar 包：

1. 导入运行Jar包的类库：

```kylin
import "util.java.load_class"
```

2. 运行Jar包：

```kylin
load_class.run_jar("./1.jar", "1 2 3")  // 运行 1.jar，命令行参数为 1 2 3
```

### 执行 Java 源代码：

1. 导入执行Java代码的类库：

```kylin
import "java"
```

2. 执行Java源代码文件：

```kylin
java.exec_java("./HelloWorld.java")  // 运行 HelloWorld.java 文件
```
