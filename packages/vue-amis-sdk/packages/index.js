import VueAmisSdk from './VueAmisSdk/index.js';
import {
  Editor,
  MiniEditor,
  RendererEditor,
  BasicEditor,
  CodeEditor,
  VRenderer,
  RegionWrapper,
  IFramePreview as IFrameEditor,
  SearchPanel,
  ContainerWrapper,
  AvailableRenderersPlugin,
  ShortcutKey
} from "amis-editor";
import {ReactInVue} from "vuera";

const VueAmisEditor = ReactInVue(Editor);
const VueAmisShortcutKey = ReactInVue(ShortcutKey);
let components = [
  VueAmisEditor,
  VueAmisShortcutKey,
  VueAmisSdk,
  MiniEditor,
  RendererEditor,
  BasicEditor,
  CodeEditor,
  VRenderer,
  RegionWrapper,
  IFrameEditor,
  SearchPanel,
  ContainerWrapper,
  AvailableRenderersPlugin,
]

const install = function (Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component))
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  VueAmisEditor,
  VueAmisShortcutKey,
}
