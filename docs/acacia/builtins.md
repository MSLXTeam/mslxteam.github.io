## 发送信息

```Acacia
import print  # 导入print模块
print.tell("Hello world!")  # 向所有玩家发送消息
```

## 和世界交互

> 使用world模块与Minecraft世界进行交互

```Acacia
import world
world.setblock(Pos(10, 10, 10), "stone")  # 在指定位置放置一块方块
entity_group := Engroup[Entity]()  # 选择符合条件的实体
entity_group.select(Enfilter().is_type("player"))
```