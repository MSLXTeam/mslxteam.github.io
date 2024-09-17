## 使用自定义域名

参考[SakuraFrp的文档](https://doc.natfrp.com/app/mc.html#srv)

## 软件配置文件 <Badge type="warning" text="未来功能" />

> 没有模糊的为当前实现功能

```toml
[options]
auto_start = [] # 自动启动的服务器数组,内容为配置文件名
auto_start_frpc = []  # 自动启动的Frpc数组,内容为配置文件名
is_plugin_enabled = True # 是否启用插件系统 // [!code focus]
[options.aria2c]
usrname = "" # RPC服务用户名
passwd = "" # RPC服务密码
[options.online]
announcement_url = "" # 公告url
ann_mode = "json" # 解析方式,可选json或text
ann_parse_rule = { # 解析规则
    text: "text", # 显示的文本对应的键名
    url: "url", # 点击查看详情后跳转的链接对应的键名
}
hitokoto_url = "" # 一言服务url
check_update = False # 每次启动检查更新
[style] // [!code focus:14]
default_theme_mode = "system" # 可选值还有light和dark
[style.light] # 亮色主题配置
mode = "seed" # 或者"full"
seed = "#e0e1cc" # 生成主题用的种子,16进制颜色代码
[style.dark] # 暗色主题配置
mode = "full"
conf = {...}
# 当mode为seed时必须指定seed参数,当mode为full时必须指定conf参数
# conf参数配置内容参考https://flet.dev/docs/controls/page/#colorscheme-class填写
# 由于其内容会被直接传递给程序用于生成ColorScheme对象,所以填写不当可能会导致无法启动MSL-X
[font] # 字体配置
general = "绝对路径..." # 没有指定字体族时会使用此处的值
... = ... # 上文写的字体族可以在此处加入
```