## babel-preset-gmfe
A babel preset for gmfe

## usage
配置原因见 [这里](https://github.com/gmfe/Think/issues/67)
删除项目 `package.json` 中的 babel plugin/preset babel-core@6.x ，安装 7.x 相关 package
```shell
npm i @babel/runtime @babel/core babel-loader@^8.0.0 babel-preset-gmfe
```
项目根目录删除 `.babelrc`，新增 `babel.config`，内容如下
```javascript
module.exports = (api) => {
  api.cache(true)
  return {
    'ignore': [/@babel[/\\]runtime/], // 忽略 @babel/runtime
    'presets': [
      'gmfe'
    ]
  }
}

```

## warning
`webpack` 打包可能会输出如下 `warning`。原因是 `webpack` 不允许 `import` 与 `module.exports` 混用，统一修正为 `es6 module` 格式即可。
```shell
WARNING in ./js/product/xxx.js 157:10-27
"export 'submitCloseDialog' was not found in './util'
 @ ./js/routes.js
 @ ./js/index.js
```