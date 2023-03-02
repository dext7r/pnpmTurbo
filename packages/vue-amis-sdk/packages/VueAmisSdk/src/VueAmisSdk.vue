<template>
    <amis-editor
      id="editorName"
      :value="schema"
      @onChange="onChange"
      :preview="isPreview"
      :isMobile="isMobile"
      :isSubEditor="isSubEditor"
      :autoFocus="autoFocus"
      :$schemaUrl="schemaUrl"
      :schemas="schemas"
      :theme="theme"
      :appLocale="appLocale"
      :i18nEnabled="i18nEnabled"
      :showCustomRenderersPanel="showCustomRenderersPanel"
      :superEditorData="superEditorData"
      :withSuperDataSchema="withSuperDataSchema"
      @dataBindingChange="onDataBindingChange"
      :schemaFilter="schemaFilter"
      :amisEnv="amisEnv"
      :ctx="ctx"
      :data="data"
      :disableBultinPlugins="disableBultinPlugins"
      :disablePluginList="disablePluginList"
      :previewProps="previewProps"
      :iframeUrl="iframeUrl"
      :isHiddenProps="isHiddenProps"
      :actionOptions="actionOptions"
      @onUndo="onUndo"
      @onRedo="onRedo"
      :className="className"
      @onPreview="onPreview"
      @onSave="onSave"
      :plugins="plugins"
    />
</template>
<script>
import {
  Editor,
  MiniEditor,
  utils,
  mapReactElement,
  RendererEditor,
  BasicEditor,
  CodeEditor,
  VRenderer,
  RegionWrapper,
  mountInIframe,
  IFramePreview as IFrameEditor,
  SearchPanel,
  EditorNodeType,
  EditorStoreType,
  ContainerWrapper,
  AvailableRenderersPlugin,
  ShortcutKey
} from "amis-editor";
import {ReactInVue} from "vuera";
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/v4-shims.css';
import 'amis/sdk/helper.css';
import 'amis/sdk/iconfont.css';
import "amis-ui/lib/themes/cxd.css";
import "amis-editor-core/lib/style.css";

const {version, main, author, license, publishConfig, files, description} = require("../../../package.json");

export default {
  name: "VueAmisSdk",
  version, main, author, license, publishConfig, files, description,
  components: {
    AmisEditor: ReactInVue(Editor),
    MiniEditor: ReactInVue(MiniEditor),
    RendererEditor: ReactInVue(RendererEditor),
    BasicEditor: ReactInVue(BasicEditor),
    CodeEditor: ReactInVue(CodeEditor),
    VRenderer: ReactInVue(VRenderer),
    RegionWrapper: ReactInVue(RegionWrapper),
    ContainerWrapper: ReactInVue(ContainerWrapper),
    IFrameEditor: ReactInVue(IFrameEditor),
    SearchPanel: ReactInVue(SearchPanel),
    AmisShortcutKey: ReactInVue(ShortcutKey),
    AvailableRenderersPlugin: ReactInVue(AvailableRenderersPlugin),
    mapReactElement,
    mountInIframe,
    utils,
    EditorNodeType, EditorStoreType
  },
  props: {
    isPreview: {
      type: Boolean,
      default: false,
    },
    isMobile: {
      type: Boolean,
      default: false,
    },
    isSubEditor: {
      type: Boolean,
      default: false,
    },
    autoFocus: {
      type: Boolean,
      default: false,
    },
    schemaUrl: {
      type: String,
      default: '',
    },
    schemas: {
      type: Array,
      default: () => [],
    },
    appLocale: {
      type: String,
      default: "zh-CN",
    },
    i18nEnabled: {
      type: Boolean,
      default: false,
    },
    superEditorData: {
      type: Object,
      default: () => {
      },
    },
    withSuperDataSchema: {
      type: Boolean,
      default: false,
    },
    schemaFilter: {
      type: Function,
      default: () => {
      },
    },
    amisEnv: {
      type: Object,
      default: () => {
      },
    },
    ctx: {
      type: Object,
      default: () => {
      },
    },
    data: {
      type: Object,
      default: () => {
      },
    },
    disableBultinPlugins: {
      type: Boolean,
      default: false,
    },
    disablePluginList: {
      type: Array,
      default: () => [],
    },
    previewProps: {
      type: Object,
      default: () => {
      },
    },
    iframeUrl: {
      type: String,
      default: '',
    },
    isHiddenProps: {
      type: Function,
      default: () => {
      },
    },
    actionOptions: {
      type: Object,
      default: () => {
      },
    },
    showCustomRenderersPanel: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: "cxd",
    },
    className: {
      type: String,
      default: "ang",
    },
    value: {
      type: Object,
      default: () => {
      },
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      schema: {},
    };
  },
  mounted() {
    this.schema = this.value;
  },
  methods: {
    setSchema(obj) {
      this.schema = obj;
    },
    getSchema() {
      return this.schema;
    },
    onChange(e) {
      this.schema = e;
      this.$emit("change", e);
    },
    onSave(e) {
      console.log(e);
      this.$emit("onSave", e);
    },
    onPreview(e) {
      console.log(e);
      this.$emit("onPreview", e);
    },
    onUndo(e) {
      console.log(e);
      this.$emit("onUndo", e);
    },
    onRedo(e) {
      console.log(e);
      this.$emit("onRedo", e);
    },
    onDataBindingChange(e) {
      console.log(e);
      this.$emit("onDataBindingChange", e);
    },
  },
};
</script>
