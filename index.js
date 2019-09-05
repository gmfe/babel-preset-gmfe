const { declare } = require('@babel/helper-plugin-utils')

const DLL_ENV = process.env.DLL_ENV === 'true'
const plugins = [
  [
    require('@babel/plugin-proposal-decorators'),
    {
      legacy: true
    }
  ],
  require('@babel/plugin-syntax-dynamic-import'),
  [
    require('@babel/plugin-proposal-class-properties'),
    { loose: true }
  ],
  require('@babel/plugin-proposal-function-bind'),
  require('@babel/plugin-transform-runtime')
]
// 非dll的时候引入react-hot-loader/babel
if(!DLL_ENV) plugins.push('react-hot-loader/babel')

module.exports = declare((api, options) => {
  // 暂时没有提供 options 配置
  // see docs about api at https://babeljs.io/docs/en/config-files#apicache
  api.assertVersion('^7.0.0')

  return {
    sourceType: 'unambiguous', // 自动推断编译的模块类型(cjs,es6)
    presets: [
      require('@babel/preset-react'),
      [
        require('@babel/preset-env'),
        {
          modules: false
        }
      ]
    ],
    plugins
  }
})