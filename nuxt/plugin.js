import { integrationPlugin } from '@vue-storefront/core'

/*
  AEM Nuxt.js integration plugin
*/
export default integrationPlugin(({ integration }) => {
  integration.configure('aem', { ...<%= serialize(options) %> })
})
