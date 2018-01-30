## Ajax 起步
> 点击 各个按钮，浏览器 异步 请求 并取回 所请求的  文档， 而主文档不会 重新 加载， 这就是 典型的  Ajax 行为
1. 创建 新的 XMLHttpRequest 对象
2. readystatechange 事件处理器: handleReponse函数
    - 处理器 在请求 过程 会 多次 触发
3. 使用 open() 通知 XMLHttpRequest 对象，  指定HTTP方法 和  请求的URL
4. send()