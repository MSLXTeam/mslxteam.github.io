# AcaruaMC特有数据类型/预定义结构体介绍

## Position

原型

```
Struct Position {
    mut x: Int;
    mut y: Int;
    mut z: Int;
}    
```

构造和使用Position对象

```
let start Position(x=0,y=0,z=0)
mut end Position(x=5,y=5,z=5)
end.x = 0
fill(block, start, end)
```

> 通过ConstPosition可以引用Position的不可变版本,即属性全部定义为常量

## VolumeArea

原型

```
Struct VolumeArea {
    mut dx: Int;
    mut dy: Int;
    mut dz: Int;
}   
```

> 通过ConstVolumeArea可以引用VolumeArea的不可变版本,即属性全部定义为常量

## RotateArea

原型

```
Struct RotateArea {
    mut x: Tuple<Int>;
    mut y: Tuple<Int>;
}   
```

> 通过ConstVolumeArea可以引用VolumeArea的不可变版本,即属性全部定义为常量

## EntitySelectorArea

原型

```
Enum EntitySelectorArea {
    let p "@p";
    let a "@a";
    let r "@r";
    let e "@e";
    let s "@s";
}    
```

## Advancements

原型
```
Enum Advancements {
    let root "story/root";
    let stone "story/mine_stone";
    let upgrade_tools "story/upgrade_tools";
    let iron "story/smelt_iron";
    let obtain "story/obtain_armor";
    let lava "story/lava_bucket";
    let irontool "story/iron_tools";
    let deflect_arrow "story/deflect_arrow";
    let obsidian "story/form_obsidian";
    let diamond "story/mine_diamond";
    let nether "story/enter_the_nether";
    let shiny_gear "story/shiny_gear";
    let enchante "story/enchant_item";
    let capitalist "story/cure_zombie_villager";
    let endeye "follow_ender_eye";
    let end "enter_the_end";
```


## EntitySelector

表示实体选择器

原型

```
struct EntitySelector {
    let r: Int;
    let rm: Int;
    let limit: Int;
    let nbt: String;
    let tags: String;
    let team: String;
    let name: String;
    let type: String;
    let gamemode: String;
    let predicate: String;
    let distence: Tuple<Int>;
    let scores: Tuple<Int>;
    let level: Tuple<Int>;
    let advancements: Map<Advancements, Boolean>
    let pos: Position;
    let va: VolumeArea;
    let rotate: RotateArea;
    let area: EntitySelectorArea;
```

> 通过MutableEntitySelector可以引用EntitySelector的可变版本,即属性全部定义为变量