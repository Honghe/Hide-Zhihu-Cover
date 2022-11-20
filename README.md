# 隐藏知乎文章封面
这是一个 Chrome/Edge/Firefox 小扩展 (extension)，用来隐藏知乎文章页面开头的大封面图片。

知乎文章开头大封面的问题：
- 复杂图片接近1MB，延长了页面加载时间；
- 封面图片多数情况下没有提供有用信息，却占用重要的版面。

本扩展不足: 虽然隐藏了封面图片，但封面图片仍在后台下载至完成，因为其是`"run_at": "document_end"`。


Speed: `.getElementsByClassName` vs `.querySelectorAll`

> `document.getElementsByClassName` returns a live HTMLCollection. `document.querySelectorAll` returns a static NodeList.
