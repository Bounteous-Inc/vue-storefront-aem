<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        >
        name: {{item.name}},
        title: {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getContentFragmentList } from '@bounteous/vue-storefront-aem'

interface RenderContent {
  componentName: string
  props?: {}
}

export default Vue.extend({
  name: 'RenderContent',
  props: {
    content: {
      type: Object,
    },
  },
  computed: {
    items() {
      return getContentFragmentList(this.content)
    },
  },
})
</script>
