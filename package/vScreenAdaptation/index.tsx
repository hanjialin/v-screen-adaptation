import { defineComponent, h, PropType, CSSProperties, ref, onMounted, watch } from 'vue'
import './style/index.css'
import { debounce } from 'lodash-es'
enum MODE {
  auto = 'auto',
  freedom = 'freedom'
}
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
      type: [String] as PropType<'auto' | 'freedom'>,
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
      if (props.mode.toLocaleLowerCase() === 'freedom') {
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
      () => {
        debouncedFunction()
      }
    )
    watch(
      () => props.scale,
      () => {
        debouncedFunction()
      }
    )

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
          style: { ...style.value },
          ref: el
        },
        slots.default?.()
      )
    }
  }
})
export default VScreenAdaptation
