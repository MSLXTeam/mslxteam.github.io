## 软件相关

- 服务器相关问题请自行Bing,不是软件的问题不要在仓库提交issues（除非你有好的建议）
- 参与讨论可以提交issues
- 改好了请直接提交PR,详细描述解决的是什么问题,咋解决的

### 使用自定义域名

参考[SakuraFrp的文档](https://doc.natfrp.com/app/mc.html#srv)

### 常用指令

- ``/ban <玩家名/玩家IP地址>  封禁玩家名/玩家IP地址``
- ``/kick <玩家名/玩家IP地址>  临时踢出玩家名/玩家IP地址``

### server.properties中部分常用配置翻译

``int``代表一个整数

``str``代表一串字符

`bool`代表您只能选择True(是)或者False(否)作为值

| 类型     | 名称                                  | 释义                                              |
|--------|-------------------------------------|-------------------------------------------------|
| `bool` | `sync-chunk-writes`                 | 为true时区块文件以同步模式写入(跟本地一样加载)                      |
| `bool` | `force-gamemode`                    | 强制玩家加入时为默认游戏模式                                  |
| `bool` | `allow-nether`                      | 是否允许下界                                          |
| `bool` | `enforce-whitelist`                 | 在服务器上强制使用白名单                                    |
| `bool` | `spawn-monsters`                    | 生成攻击型生物（怪物）                                     |
| `bool` | `pvp`                               | 是否允许玩家互相攻击                                      |
| `bool` | `hardcore`                          | 极限模式（死后自动封禁）                                    |
| `bool` | `enable-command-block`              | 启用命令方块                                          |
| `bool` | `spawn-npcs`                        | 是否生成村民和其他NPC                                    |
| `bool` | `allow-flight`                      | 是否允许玩家飞行                                        |
| `bool` | `generate-structures`               | 生成世界时生成结构（如村庄）禁止后地牢和地下要塞仍然生成                    |
| `bool` | `online-mode`                       | Minecraft正版验证                                   |
| `bool` | `white-list`                        | 是否开启白名单                                         |
| `bool` | `prevent-proxy-connections`         | 是否允许玩家使用网络代理进入服务器                               |
| `bool` | `use-native-transport`              | 是否使用针对Linux平台的数据包收发优化 (仅Linux)                  |
| `int`  | `spawn-protection`                  | 通过将该值进行 2x+1 的运算来决定出生点的保护半径,设置为0将只保护出生点下方那一个方块. |
| `int`  | `max-tick-time`                     | 设置每个tick花费的最大毫秒数,超时会报错”Can't keep up!“          |
| `int`  | `query.port`                        | 服务器的端口号                                         |
| `int`  | `gamemode`                          | 默认游戏模式 [0生存 1创造 2冒险 3旁观]                        |
| `int`  | `player-idle-timeout`               | 允许的挂机时间,单位为分钟,超过后自动踢出                           |
| `int`  | `difficulty`                        | 世界难度 [0和平 1简单 2普通 3困难]                          |
| `int`  | `op-permission-level`               | OP权限等级                                          |
| `int`  | `entity-broadcast-range-percentage` | 实体渲染范围百分比                                       |
| `int`  | `max-players`                       | 服务器最大玩家数限制                                      |
| `int`  | `network-compression-threshold`     | 网络压缩阈值                                          |
|        |                                     | -1 代表禁用压缩                                       |
|        |                                     | 0 代表全部压缩                                        |
|        |                                     | 数字越大越节省带宽,但同时也会加重CPU负担                          |
| `int`  | `max-world-size`                    | 最大世界大小                                          |
| `int`  | `function-permission-level`         | 设定函数的默认权限等级                                     |
| `int`  | `server-port`                       | 服务器端口                                           |
| `int`  | `server-ip`                         | 服务器ip,若不绑定请留空                                   |
| `int`  | `view-distance`                     | 服务器发送给客户端的数据量,决定玩家能设置的视野                        |
| `int`  | `level-seed`                        | 地图种子                                            |
| `str`  | `generator-settings`                | 用于自定义超平坦世界的生成                                   |
| `str`  | `level-type`                        | 地图的生成类型                                         |
| `str`  | `level-name`                        | 地图名称,不要使用中文                                     |
| `str`  | `resource-pack`                     | 统一资源标识符 (URI) 指向一个资源包.玩家可选择是否使用                 |
| `str`  | `motd`                              | 服务器信息展示 （MOTD）                                  |

- 更多详见[Minecraft Wiki](https://minecraft.fandom.com/zh/wiki/Server.properties?variant=zh)
