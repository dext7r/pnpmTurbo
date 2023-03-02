<template>
  <div id="app">
    <vue-amis-sdk
      id='editorName'
      theme='cxd'
      className='is-fixed'
      :preview='isPreview'
      :isMobile='isMobile'
      @Change='onChange'
      :value='schema'
    />
  </div>
</template>

<script>
import VueAmisSdk from "../packages/VueAmisSdk";

export default {
  name: 'App',
  data() {
    return {
      isPreview: false,
      isMobile: false,
      schema: {
        "type": "page",
        "title": "23232",
        "body": [
          {
            "type": "form",
            "title": "表单",
            "body": [
              {
                "label": "文本框文本框文本框文本框",
                "type": "input-text",
                "name": "text",
                "id": "u:05a2a8b17444"
              }
            ],
            "id": "u:977658ae7520",
            "rules": [],
            "submitText": "提交",
            "actions": [
              {
                "type": "button-group",
                "id": "u:85beb2f89589"
              }
            ],
            "mode": "horizontal"
          }
        ],
        "id": "u:2ee616f71890",
        "aside": [],
        "regions": [
          "body"
        ],
        "pullRefresh": {
          "disabled": true
        },
        "asideResizor": false,
        "asideSticky": true
      }
    }
  },
  components: {
    VueAmisSdk
  },
  methods: {
    onChange(e) {
      console.log(e)
    }
  }
}
</script>
