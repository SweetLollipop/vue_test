module.exports = {
    pages: {
      index: {
        // page 的入口
        entry: 'src/main.js',
        // 模板来源
        template: 'public/index.html',
        // 在 dist/index.html 的输出
        filename: 'index.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Index Page',
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
      // 当使用只有入口的字符串格式时，
      // 模板会被推导为 `public/subpage.html`
      // 并且如果找不到的话，就回退到 `public/index.html`。
      // 输出文件名会被推导为 `subpage.html`。
      subpage: 'src/main.js'
    },
    lintOnSave:true, // 关闭语法检查
    //开启代理服务器（方式一）
    /* devServer: {
      proxy: 'http://localhost:5000'
    } */
    //开启代理服务器（方式二）
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
          pathRewrite:{'^/api':''},  //路径重写：匹配/pai赋值为空字符串
          ws: true,  //用于支持websocket
          changeOrigin: true  //用于控制请求头中的host值
        },
        '/demo': {
          target: 'http://localhost:5001',
          pathRewrite:{'^/demo':''},  //路径重写：匹配/pai赋值为空字符串
          ws: true,  //用于支持websocket
          changeOrigin: true  //用于控制请求头中的host值
        }
      }
    }
  }