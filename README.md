# Image Keyword Generator - 智能图像关键词生成器

一个基于AI技术的在线工具，能够自动识别图片内容并生成精准的关键词标签。

## 🌟 功能特性

- **智能识别**: 基于先进的AI模型，准确识别图片中的物体、场景、颜色等元素
- **关键词生成**: 自动生成相关性强、覆盖面广的关键词标签
- **灵活编辑**: 支持添加、删除、调整关键词，满足个性化需求
- **便捷导出**: 支持多种格式导出，一键复制分享
- **拖拽上传**: 支持拖拽、点击、粘贴等多种上传方式
- **响应式设计**: 完美适配PC、平板、手机等各类设备
- **现代化UI**: 基于Tailwind CSS 4.1构建的现代化界面

## 🚀 快速开始

### 使用Vite开发服务器（推荐）

1. 安装依赖
```bash
npm install
```

2. 启动开发服务器
```bash
npm run dev
```

3. 在浏览器中访问
```
http://localhost:3000
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

### 使用Python服务器（备选方案）

```bash
npm run serve
```

然后在浏览器中访问 `http://localhost:8000`

## 📁 项目结构

```
image-keyword-generator/
├── index.html              # 主页面
├── src/
│   └── styles.css          # Tailwind CSS样式文件
├── scripts/
│   └── main.js             # 主脚本文件
├── vite.config.js          # Vite配置文件
├── package.json            # 项目配置
├── README.md               # 项目说明
└── PRD-识图生成关键词网站.md  # 产品需求文档
```

## 🛠️ 技术栈

- **前端框架**: 原生HTML5 + Tailwind CSS 4.1 + JavaScript
- **构建工具**: Vite
- **UI组件**: Font Awesome 图标库
- **字体**: Inter 字体
- **响应式**: Tailwind CSS Grid + Flexbox
- **动画**: CSS3 动画 + Intersection Observer API

## 🎨 Tailwind CSS 4.1 特性

### 设计系统
- **颜色系统**: 使用Tailwind的标准颜色调色板
- **间距系统**: 基于8px网格的间距规范
- **字体系统**: 响应式字体大小和行高
- **阴影系统**: 多层次的阴影效果
- **圆角系统**: 统一的圆角规范

### 组件样式
- **按钮**: 现代化的按钮设计，支持悬停和点击效果
- **卡片**: 优雅的卡片布局，支持悬停动画
- **导航**: 毛玻璃效果的导航栏
- **表单**: 美观的上传区域和进度条
- **通知**: Apple风格的通知提示

### 响应式设计
- **移动优先**: 从移动端开始设计，逐步增强
- **断点系统**: sm(640px), md(768px), lg(1024px), xl(1280px)
- **网格布局**: 灵活的CSS Grid和Flexbox组合

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

### 修改Tailwind配置
在 `src/styles.css` 中修改自定义样式：

```css
@layer components {
  .btn-primary {
    @apply bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5;
  }
}
```

### 调整关键词生成
在 `scripts/main.js` 中修改 `generateKeywords` 函数来调整关键词生成逻辑。

## 🔧 开发说明

### 添加新功能
1. 在HTML中添加相应的DOM结构
2. 在 `src/styles.css` 中添加Tailwind类或自定义样式
3. 在JavaScript中添加交互逻辑

### 性能优化
- Tailwind CSS的JIT编译，只生成使用的样式
- Vite的快速热重载
- 图片懒加载
- 防抖函数优化滚动事件

### 浏览器兼容性
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

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

## 🔄 版本历史

### v1.0.0 (2024-12-28)
- ✨ 初始版本发布
- 🎨 基于Tailwind CSS 4.1的现代化设计
- 📱 完全响应式布局
- 🚀 Vite构建工具集成
- 🎯 Apple风格的用户界面