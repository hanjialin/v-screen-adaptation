import { reactive } from 'vue'
import { DisplayAspectRatio } from './interface'
/**
 * @desc 获取默认的宽高比
 * @author HanJiaLin
 * @time 2024/12/17 22:45
 **/
export const getDefaultDisplayState = () => {
  return reactive<DisplayAspectRatio>({
    windowWidth: 1920,
    windowHeight: 1080,
    aspectRatio: 1.78
  })
}
