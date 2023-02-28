<template>
  <amis-editor
    id="editorName"
    :theme="theme"
    :className="className"
    :preview="isPreview"
    :isMobile="isMobile"
    @onChange="onChange"
    @onPreview="onPreview"
    @onSave="onSave"
    :value="schema"
    :plugins="plugins"
    :showCustomRenderersPanel="showCustomRenderersPanel"
  />
</template>
<script>
import {Editor, ShortcutKey} from "amis-editor";
import {ReactInVue} from "vuera";

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/v4-shims.css';
import 'amis-ui/lib/themes/default.css';
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
    AmisShortcutKey: ReactInVue(ShortcutKey),
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
  },
};
</script>
