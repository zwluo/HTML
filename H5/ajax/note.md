## Ajax 起步
> 点击 各个按钮，浏览器 异步 请求 并取回 所请求的  文档， 而主文档不会 重新 加载， 这就是 典型的  Ajax 行为
1. 创建 新的 XMLHttpRequest 对象
2. readystatechange 事件处理器: handleReponse函数
    - 处理器 在请求 过程 会 多次 触发
3. 使用 open() 通知 XMLHttpRequest 对象，  指定HTTP方法 和  请求的URL
4. send()

## Ajax 事件
1. 常见事件
    - abort                 请求中止时触发
    - error                 请求失败时触发
    - load                  请求成功时触发
    - loadend               请求完成时触发(不论成功还是错误)
    - loadstart             请求开始时触发
    - progress              提示请求的进度
    - readystatechange      请求的生命周期的不同阶段触发
    - timeout               请求超时时触发
> 这些事件大多数在某个时间点触发, readystatechange 和 progress 例外 ， 他们多次 触发以 提供进度更新

2. readystatechange 使用常规Event对象，其他的使用ProgressEvent对象