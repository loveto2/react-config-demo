# 主要解决两个问题

1. 修改`public path`
2. 修改路由的`basename`

## 修改`public path`

1. 方法一（直接写死）
   修改`public path`比较简单，直接修改`ndk.config.js`里的`staticUrl`字段即可
2. 方法二（改成可以配置的）
   使用dotenv，下面会讲

## 修改`basename`

1. 方法一（直接写死）
   直接在`Router`的`basename`属性写死
2. 方法二（使用DefinePlugin）
   在`ndk.confi.js`文件的`define`字段里面添加要自定义的全局变量，在`webpack`处理代码的时候会将这些自定义的全局变量替换为对应的值，通过`process.argv`可以拿到当前命令的参数，获取参数后将此参数用于`public path`和`basename`或者通过此参数去读取对预防配置即可。

      1. 首先在`package.json`里的`scripts`字段里新增一行命令`"build:nst": "ndk-builder build --mode nst"`，获取的`process.argv`是个数组：

         ```
           [
            node的路径,
            被执行的js文件的路径，此处是ndk里的ndk-builder.js',
            'build',
            '--mode',
            'nst'
           ]
         ```

        第一个参数固定是`node`的路径，第二个是被执行js文件的路径后面的参数是命令行里输入的，我们可以判断参数里有`--mode`并且其后一位有值，则将此值设置为对应的`public path`和`basename`即可。运行`yarn build:nst`查看打包后的文件，或者运行`yarn dev:nst`查看路由跳转是否正常，按`F12`后`head`和`body`标签里面的静态文件是否有加上`nst`前缀。

3. 方法三（使用dotenv）
  `yarn add dotenv`安装`dotenv`这个库，然后配置`path`，它会读取对应的文件将变量挂载到`process.env`上
