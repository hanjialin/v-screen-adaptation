/*
import { reactive } from 'vue'
import { DisplayAspectRatio } from './interface.ts'
/!**
 * @desc 获取默认的宽高比
 * @author HanJiaLin
 * @time 2024/12/17 22:45
 **!/
export const getDefaultDisplayState = () => {
  return reactive<DisplayAspectRatio>({
    windowWidth: 1920,
    windowHeight: 1080,
    aspectRatio: 1.78
  })
}

// 获取缩放倍数（1*系统缩放倍数*浏览器缩放倍数）
function getZoom() {
  let zoom = 1
  const screen = window.screen,
    ua = navigator.userAgent.toLowerCase()

  if (window.devicePixelRatio !== undefined) {
    zoom = window.devicePixelRatio
  } else if (~ua.indexOf('msie')) {
    if (screen.deviceXDPI && screen.logicalXDPI) {
      zoom = screen.deviceXDPI / screen.logicalXDPI
    }
  } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
    zoom = window.outerWidth / window.innerWidth
  }
  return getDecimal(zoom)
}

const getDecimal = (num) => {
  return Math.round(num * 100) / 100
}

export function getAllZoom() {
  // 总缩放倍数
  const zoom = getZoom()
  // 屏幕分辨率
  const screenResolution = window.screen.width
  // 获取浏览器内部宽度
  const browserWidth =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  // 浏览器缩放倍数
  // 浏览器外部宽度不受浏览器缩放影响，浏览器内部宽度受影响,所以根据这个可以计算出浏览器缩放倍数（F12调试工具的占位会影响该值）
  const browserZoom = getDecimal(window.outerWidth / browserWidth)
  // 系统缩放倍数
  const systemZoom = getDecimal(zoom / browserZoom)
  // 系统分辨率
  const systemResolution = Math.round(screenResolution * systemZoom)

  console.log(
    '系统分辨率',
    systemResolution,
    '屏幕分辨率',
    screenResolution,
    '浏览器外部宽度',
    window.outerWidth,
    '浏览器内部宽度',
    browserWidth,
    '总缩放倍数',
    zoom,
    '浏览器缩放倍数',
    browserZoom,
    '系统缩放倍数',
    systemZoom
  )

  return {
    zoom,
    browserZoom,
    systemZoom,
    systemResolution
  }
}
*/
