import { resolve } from 'path'

module.exports = {
  alias: {
    '/@/': resolve(__dirname, './src')
  },
  emitManifest: true,
  indexHtmlTransforms: [
    {
      apply: 'pre',
      transform({ code, isBuild }) {
        code = code.replace('<!--dev-tools-->', !isBuild ? '<script src="http://localhost:8098"></script>' : '')

        return code
      }
    }
  ]
}
