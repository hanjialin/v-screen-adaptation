/**
 * @desc 显示宽高比
 * @param windowWidth 屏幕宽
 * @param windowHeight 屏幕高
 * @param aspectRatio 宽高比
 * @author HanJiaLin
 * @time 2024/12/17 22:37
 **/
export interface DisplayAspectRatio {
  windowWidth: number
  windowHeight: number
  aspectRatio: number
}
/**
 * @desc 显示状态
 * @param display 显示模式 auto-自动模式,自动根据宽高设置缩放倍率 freedom-自由模式,控制缩放倍率,计算出合适的宽高
 * @param scale 缩放比
 * @author HanJiaLin
 * @time 2024/12/17 22:40
 **/
export interface DisplayTypes {
  display?: 'auto' | 'freedom'
  scale: number
}
/**
 * @desc 组件的props
 * @param width 宽度
 * @param height 高度
 * @param display 显示模式 auto-自动模式,自动根据宽高设置缩放倍率 freedom-自由模式,控制缩放倍率,计算出合适的宽高
 * @author HanJiaLin
 * @time 2024/12/18 10:54
 **/
export interface ScreenAdaptationProps {
  width?: number
  height?: number
  display?: 'auto' | 'freedom'
}
