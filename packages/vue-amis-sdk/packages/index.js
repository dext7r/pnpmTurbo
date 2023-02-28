import VueAmisSdk from './VueAmisSdk/index.js';
import {Editor, ShortcutKey} from "amis-editor";
import {ReactInVue} from "vuera";

const VueAmisEditor = ReactInVue(Editor);
const VueAmisShortcutKey = ReactInVue(ShortcutKey);
let components = [
  VueAmisEditor,
  VueAmisShortcutKey,
  VueAmisSdk,
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
