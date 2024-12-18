import { defineComponent, h, PropType, CSSProperties, ref, onMounted, watch } from 'vue'
import './style/index.css'
import { debounce } from 'lodash-es'
enum MODE {
  auto = 'auto',
  freedom = 'freedom'
}
/*const debounce = (fn: any, t: any) => {
  const delay = t || 500
  let timer: any
  return function () {
    // eslint-disable-next-line prefer-rest-params
    const args: any = arguments
    if (timer) {
      clearTimeout(timer)
    }
    const context = getCurrentInstance()
    timer = setTimeout(() => {
      timer = null
      fn.apply(context, args)
    }, delay)
  }
}*/
const VScreenAdaptation = defineComponent({
  name: 'VScreenAdaptation',
  props: {
    width: {
      type: [String, Number] as PropType<string | number>
    },
    height: {
      type: [String, Number] as PropType<string | number>,
      default: 1080
    },
    mode: {
      type: [String] as PropType<string>,
      default: MODE.auto
    },
    scale: {
      type: [Number] as PropType<number>,
      default: 1
    }
  },
  setup(props, { slots }) {
    const style = ref<CSSProperties>({
      width:
        props.width === undefined
          ? (window.innerWidth / window.innerHeight) * Number(props.height) + 'px'
          : props.width + 'px',
      height: (props.height + 'px') as string,
      transform: 'scale(1) translate(-50%, -50%)'
    })
    console.log(style)

    /*
     * @desc 获取放大缩小比例
     * @author HanJiaLin
     * @time 2023/4/13 11:44
     * */
    const getScale = () => {
      const w =
        window.innerWidth /
        Number(
          props.width === ''
            ? (window.innerWidth / window.innerHeight) * Number(props.height)
            : props.width
        )
      const h = window.innerHeight / Number(props.height)
      return w < h ? w : h
    }
    const setScale = () => {
      console.log('setScale', props.mode)
      if (props.mode === 'freedom') {
        console.log('scale', props.scale)
        style.value.width = window.innerWidth * (1 / Number(props.scale)) + 'px'
        style.value.height = window.innerHeight * (1 / Number(props.scale)) + 'px'
        style.value.transform = 'scale(' + props.scale + ') translate(-50%, -50%)'
      } else {
        style.value.width =
          props.width === undefined
            ? (window.innerWidth / window.innerHeight) * Number(props.height) + 'px'
            : props.width + 'px'
        style.value.height = '1080px'
        style.value.transform = 'scale(' + getScale() + ') translate(-50%, -50%)'
      }
    }
    const debouncedFunction = debounce(setScale, 1000)
    watch(
      () => props.mode,
      (newValue) => {
        console.log(newValue)
        debouncedFunction()
        console.log(style.value)
        //获取新改变的模式
      }
    )
    watch(
      () => props.scale,
      (newValue) => {
        console.log(newValue)
        debouncedFunction()
        console.log(style.value)
      }
    )
    console.log(props)

    const el = ref<HTMLElement>()
    onMounted(() => {
      setScale()
      window.onresize = debounce(setScale, 1000)
    })
    return () => {
      return h(
        'div',
        {
          class: 'screen-adapter',
          style: { background: '#fff', color: '#333', ...style.value },
          ref: el
        },
        slots.default?.()
      )
    }
  }
})
export default VScreenAdaptation
