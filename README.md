# Image Keyword Generator - 智能图像关键词生成器

一个基于AI技术的在线工具，能够自动识别图片内容并生成精准的关键词标签。

## 🌟 功能特性

- **智能识别**: 基于先进的AI模型，准确识别图片中的物体、场景、颜色等元素
- **关键词生成**: 自动生成相关性强、覆盖面广的关键词标签
- **灵活编辑**: 支持添加、删除、调整关键词，满足个性化需求
- **便捷导出**: 支持多种格式导出，一键复制分享
- **拖拽上传**: 支持拖拽、点击、粘贴等多种上传方式
- **响应式设计**: 完美适配PC、平板、手机等各类设备

## 🚀 快速开始

### 本地运行

1. 克隆项目到本地
```bash
git clone <repository-url>
cd image-keyword-generator
```

2. 使用本地服务器运行（推荐）
```bash
# 使用 Python 3
python -m http.server 8000

# 或使用 Node.js
npx serve .

# 或使用 PHP
php -S localhost:8000
```

3. 在浏览器中访问
```
http://localhost:8000
```

### 直接打开

由于是静态网站，你也可以直接在浏览器中打开 `index.html` 文件，但某些功能（如文件上传）可能受到浏览器安全策略限制。

## 📁 项目结构

```
image-keyword-generator/
├── index.html              # 主页面
├── styles/
│   └── main.css           # 主样式文件
├── scripts/
│   └── main.js            # 主脚本文件
├── README.md              # 项目说明
└── PRD-识图生成关键词网站.md  # 产品需求文档
```

## 🛠️ 技术栈

- **前端框架**: 原生HTML5 + CSS3 + JavaScript
- **UI组件**: Font Awesome 图标库
- **字体**: Inter 字体
- **响应式**: CSS Grid + Flexbox
- **动画**: CSS3 动画 + Intersection Observer API

## 📱 使用说明

### 上传图片
1. 点击"开始使用"按钮或直接滚动到上传区域
2. 支持以下上传方式：
   - 拖拽图片到上传区域
   - 点击"选择文件"按钮
   - 使用快捷键 Ctrl/Cmd + V 粘贴图片
3. 支持格式：JPG、PNG、GIF、WebP
4. 文件大小限制：最大10MB

### 查看结果
1. 上传成功后，系统会自动处理图片
2. 处理完成后会显示原图和生成的关键词
3. 关键词以标签云形式展示，权重越高的关键词字体越大

### 编辑关键词
- 点击关键词标签上的 × 按钮可以删除该关键词
- 可以手动添加自定义关键词（功能待实现）

### 导出关键词
- 点击"复制关键词"按钮将关键词复制到剪贴板
- 点击"导出关键词"按钮下载关键词文本文件

## 🎨 自定义配置

### 修改主题色彩
在 `styles/main.css` 中修改CSS变量：

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1d4ed8;
    --success-color: #10b981;
    --error-color: #ef4444;
}
```

### 调整关键词生成
在 `scripts/main.js` 中修改 `generateKeywords` 函数来调整关键词生成逻辑。

## 🔧 开发说明

### 添加新功能
1. 在HTML中添加相应的DOM结构
2. 在CSS中添加样式
3. 在JavaScript中添加交互逻辑

### 性能优化
- 使用防抖函数优化滚动事件
- 图片懒加载
- CSS动画使用transform和opacity
- 合理使用Intersection Observer API

### 浏览器兼容性
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 📞 联系我们

- 邮箱：support@imagekeyword.com
- 电话：400-123-4567
- 地址：北京市朝阳区科技园区

---

**注意**: 当前版本为演示版本，关键词生成功能使用模拟数据。在实际部署中，需要集成真实的AI服务API。