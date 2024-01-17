## 软件相关

- 服务器相关问题请自行Bing,不是软件的问题不要在仓库提交issues（除非你有好的建议）
- 参与讨论可以提交issues
- 改好了请直接提交PR,详细描述解决的是什么问题,咋解决的

## 使用自定义域名

参考[SakuraFrp的文档](https://doc.natfrp.com/app/mc.html#srv)

## 软件配置文件 <Badge type="warning" text="未来功能" />

> 没有模糊的为当前实现功能

```toml
[option]
auto_start = [] # 自动启动的服务器数组,内容为配置文件名
auto_start_frpc = []  # 自动启动的Frpc数组,内容为配置文件名
is_plugin_enabled = True # 是否启用插件系统
[option.aria2c]
usrname = "" # RPC服务用户名
passwd = "" # RPC服务密码
[option.online]
announcement_url = "" # 公告url
ann_mode = "json" # 解析方式,可选json或text
ann_parse_rule = { # 解析规则
    text: "text", # 显示的文本对应的键名
    url: "url", # 点击查看详情后跳转的链接对应的键名
}
hitokoto_url = "" # 一言服务url
check_update = False # 每次启动检查更新
[style] // [!code focus:6]
default_theme_mode = "system"
light = {...} # 明亮主题配置
dark = {...} # 暗色主题配置
# 配置内容参考https://flet.dev/docs/controls/page/#colorscheme-class填写,
# 由于其内容会被直接传递给程序用于生成ColorScheme对象,所以填写不当可能会导致无法启动MSL-X
```