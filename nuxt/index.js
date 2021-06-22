import path from 'path'

/*
  AEM Nuxt.js module
*/
// eslint-disable-next-line
export default function aem (moduleOptions) {
  const { aem } = this.options
  const options = {
    ...aem,
    ...moduleOptions,
  }
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options,
  })
}
