console.log(process.argv);
module.exports = {
  type: 'web',
  framework: 'react',
  // 是否将 404 响应替换为 index.html ，一般用于非根目录存放的项目
  // 注意： staticUrl 值如果不为 '/' 时，此配置项无效，系统会自动设置为 true
  historyApiFallback: false,
  // 是否使用 https 协议头
  // 注意：设为 true 时，默认使用自签名证书，如需指定证书，请传入指定证书内容
  // 比如： { key: fs.readFileSync('/path/to/server.key'), cert: fs.readFileSync('/path/to/server.cer') }
  https: false,
  // 应用域名或本机 IP
  // 注意：使用应用域名时，请配置 hosts 将域名指向本机 IP ，并配置数据接口转发代理
  hostname: '127.0.0.1',
  // 端口
  port: 80,
  // 默认入口页面
  // 注意：这里用于配置开发时访问的默认入口页面，无 / 开头并去除 staticUrl 中的路径
  // 比如： 'list.html'
  index: '',
  // 代理
  // 比如： { '/': { target: '[DevOrTestServer]', changeOrigin: true, secure: false } }
  proxy: {},
  // 模块别名
  alias: {},
  // 额外的静态资源，在引用时应添加并同步更新时间戳参数来防止缓存，如："css/ie9.css?t=1566812078188"
  // 注意：这里只应配置代码中没有引用的静态资源，像微信安全校验文件 MP_verify_*.txt 或特定的静态资源
  // 比如： { from: 'src/*.txt' } 或 [{ from: 'src/ie9.css', to: 'css' }, { flatten: false, from: 'static/**/*' }]
  copy: {},
  // 定义
  // 注意：这些内容会直接用于文本替换，当值为字符串时需要额外增加引号
  // 比如： { PRODUCTION: '"production"'} 或 { PRODUCTION: JSON.stringify('production')}
  define: {},
  // 外部引用
  // 注意：这些依赖包不会被打包，请确保页面中已引入依赖包的 umd 或 cdn 资源
  // 比如： { jquery: 'jQuery', react: 'React', 'react-dom': 'ReactDOM' }
  externals: {},
  // 入口
  // 注意：多入口请设为键值对象, 值可以是字符串或包含 entry, [favicon], [filename], [template] 的对象
  // 比如： { index: 'src/index.js', list: { entry: 'src/list.js', filename: 'list.html' } }
  entry: 'src/index.jsx',
  // 网站图标，没有图标可设为 false
  favicon: 'public/favicon.ico',
  // 入口页面模板
  template: 'public/index.html',
  // 打包结果存放路径
  outputPath: 'dist',
  // 线上静态资源的根路径，默认为 '/'
  // 比如： '/static/'
  staticUrl: '/candy',
  // 自定义主题或主题文件路径
  theme: {},
  // 是否使用 CSS Modules
  // 注意：使用时可自定义是否使用 React CSS Modules 及排除规则（ [name].module.[css|less] 文件除外）
  // 比如： 'react' 或 { exclude: /assets|components/, useReactCSSModules: true }
  useCSSModules: false,
  // 是否删除旧的打包结果
  // 注意：如无特殊需求，请保持此配置项为 true ，以免打包结果包含太多无用文件。
  useCleanPlugin: true,
  // 是否使用 CommonJS
  // 注意：此配置仅供使用 NUI 的老项目兼容旧代码中的 module.exports 语法。
  useCommonJS: false,
  // 是否使用 ES Lint
  useESLint: true,
  // 是否使用 Gzip 压缩
  // 注意：使用时默认压缩 ['css', 'html', 'js', 'svg'] 等文件，可自定义配置
  // 比如： ['css', 'htm', 'js']
  useGzip: false,
  // 是否按需加载 antd 、 feui 、 vant 、 vux 等组件库
  // 注意：如果是外部引用 antd ，除了在 externals 中设置外，还需关闭按需加载
  useImport: true,
  // 是否使用 nui
  useNUI: false,
  // 是否使用 px2rem
  // 注意：一般用于移动端，默认为 { remUnit: 37.5, remPrecision: 6 } ，可传值修改
  usePx2rem: false,
  // 是否使用 runtimeChunk 文件
  // 注意：使用动态导入的应用，请开启此项以便缓存无更新的静态资源。
  useRuntimeChunk: false,
  // 是否使用 Source Map
  useSourceMap: false,
  // 是否使用 VUX
  useVUX: false,
};
