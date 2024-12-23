# v-screen-adaptation

# 可视化大屏自适应组件

# 支持vue3.3+版本

- [x] 支持自定义宽高
- [x] 默认自动进行宽高比计算,支持手动传参,开启手动缩放比例调整
- [ ] 后续的功能需求...
### 安装

```bash
npm install v-screen-adaptation
# or
yarn add v-screen-adaptation
```

### 使用
```vue
<template>
  <v-screen-adaptation  height="1080" mode="auto" >
    <div>
      <v-item></v-item>
      <v-card></v-card>
      <v-chart></v-chart>
      <v-img></v-img>
      <v-map></v-map>
      ...
    </div>
  </v-screen-adaptation>
</template>
<script setup>
  import 'v-screen-adaptation/dist/v-screen-adaptation.css'
  import VScreenAdaptation from 'v-screen-adaptation'
</script>
```

| 参数     | 类型                | 默认值       | 含义                                                           |
|--------|-------------------|-----------|--------------------------------------------------------------|
| width  | `number` `string` | undefined | 大屏宽度,如果不确定可以不传,不传默认获取屏幕当前宽度作为基本宽度                            |
| height | `number` `string` | 1080      | 大屏高度                                                         |
| mode   | `auto` `freedom`  | `auto`    | `auto` 自动根据宽度和高度计算当前屏幕缩放比例  <br/> `freedom` 根据缩放的比例反推当前屏幕的宽高 |
| scale  | `number`          | undefined | 当 `mode`的值为`freedom`时有效,传入需要缩放的比例,自动变更屏幕宽高.                  |
