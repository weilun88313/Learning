// 全局变量
let currentImage = null;
let generatedKeywords = [];

// DOM 元素
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const uploadProgress = document.getElementById('uploadProgress');
const progressFill = document.getElementById('progressFill');
const resultsSection = document.getElementById('results');
const previewImage = document.getElementById('previewImage');
const keywordsCloud = document.getElementById('keywordsCloud');
const loadingOverlay = document.getElementById('loadingOverlay');
const notification = document.getElementById('notification');
const notificationMessage = document.getElementById('notificationMessage');

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// 初始化应用
function initializeApp() {
    setupEventListeners();
    setupNavigation();
    setupScrollAnimations();
}

// 设置事件监听器
function setupEventListeners() {
    // 文件输入监听
    fileInput.addEventListener('change', handleFileSelect);
    
    // 拖拽上传
    uploadArea.addEventListener('dragover', handleDragOver);
    uploadArea.addEventListener('dragleave', handleDragLeave);
    uploadArea.addEventListener('drop', handleDrop);
    
    // 点击上传区域
    uploadArea.addEventListener('click', () => fileInput.click());
}

// 设置导航
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // 导航链接点击
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            // 移动端关闭菜单
            navMenu.classList.remove('active');
        });
    });

    // 移动端菜单切换
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 滚动时更新导航状态
    window.addEventListener('scroll', updateNavigation);
}

// 设置滚动动画
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察需要动画的元素
    document.querySelectorAll('.feature-card, .use-case-card, .stat-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 处理文件选择
function handleFileSelect(event) {
    const files = event.target.files;
    if (files.length > 0) {
        processImage(files[0]);
    }
}

// 处理拖拽悬停
function handleDragOver(event) {
    event.preventDefault();
    uploadArea.classList.add('dragover');
}

// 处理拖拽离开
function handleDragLeave(event) {
    event.preventDefault();
    uploadArea.classList.remove('dragover');
}

// 处理文件拖拽
function handleDrop(event) {
    event.preventDefault();
    uploadArea.classList.remove('dragover');
    
    const files = event.dataTransfer.files;
    if (files.length > 0) {
        processImage(files[0]);
    }
}

// 处理图片
function processImage(file) {
    // 验证文件类型
    if (!file.type.startsWith('image/')) {
        showNotification('请选择有效的图片文件', 'error');
        return;
    }

    // 验证文件大小 (10MB)
    if (file.size > 10 * 1024 * 1024) {
        showNotification('图片大小不能超过10MB', 'error');
        return;
    }

    // 显示加载状态
    showLoading(true);
    showUploadProgress();

    // 模拟上传进度
    simulateUploadProgress(() => {
        // 读取图片文件
        const reader = new FileReader();
        reader.onload = function(e) {
            currentImage = e.target.result;
            previewImage.src = currentImage;
            
            // 模拟AI处理
            simulateAIProcessing(() => {
                // 生成关键词
                generateKeywords(file.name);
                
                // 隐藏加载状态
                showLoading(false);
                hideUploadProgress();
                
                // 显示结果
                showResults();
                
                // 滚动到结果区域
                scrollToSection('results');
                
                showNotification('图片处理完成！', 'success');
            });
        };
        reader.readAsDataURL(file);
    });
}

// 模拟上传进度
function simulateUploadProgress(callback) {
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(callback, 500);
        }
        updateProgress(progress);
    }, 200);
}

// 更新进度条
function updateProgress(progress) {
    progressFill.style.width = progress + '%';
}

// 模拟AI处理
function simulateAIProcessing(callback) {
    setTimeout(callback, 2000 + Math.random() * 3000);
}

// 生成关键词
function generateKeywords(filename) {
    // 模拟AI生成的关键词
    const mockKeywords = [
        { text: '自然风景', weight: 0.9, category: 'scene' },
        { text: '绿色植物', weight: 0.8, category: 'object' },
        { text: '户外环境', weight: 0.7, category: 'scene' },
        { text: '阳光明媚', weight: 0.6, category: 'weather' },
        { text: '清新空气', weight: 0.5, category: 'atmosphere' },
        { text: '生态环保', weight: 0.4, category: 'concept' },
        { text: '自然光', weight: 0.3, category: 'lighting' },
        { text: '户外摄影', weight: 0.2, category: 'style' }
    ];

    // 根据文件名调整关键词
    const filenameLower = filename.toLowerCase();
    if (filenameLower.includes('food') || filenameLower.includes('食物')) {
        mockKeywords.push(
            { text: '美食', weight: 0.9, category: 'food' },
            { text: '烹饪', weight: 0.7, category: 'food' },
            { text: '餐厅', weight: 0.5, category: 'place' }
        );
    } else if (filenameLower.includes('portrait') || filenameLower.includes('人像')) {
        mockKeywords.push(
            { text: '人像摄影', weight: 0.9, category: 'style' },
            { text: '人物', weight: 0.8, category: 'object' },
            { text: '表情', weight: 0.6, category: 'feature' }
        );
    }

    generatedKeywords = mockKeywords;
    renderKeywords();
}

// 渲染关键词
function renderKeywords() {
    keywordsCloud.innerHTML = '';
    
    generatedKeywords.forEach((keyword, index) => {
        const tag = document.createElement('div');
        tag.className = 'keyword-tag';
        tag.style.fontSize = `${0.8 + keyword.weight * 0.4}rem`;
        tag.style.opacity = 0.6 + keyword.weight * 0.4;
        
        tag.innerHTML = `
            <span>${keyword.text}</span>
            <button class="remove-btn" onclick="removeKeyword(${index})">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        keywordsCloud.appendChild(tag);
    });
}

// 删除关键词
function removeKeyword(index) {
    generatedKeywords.splice(index, 1);
    renderKeywords();
}

// 添加自定义关键词
function addCustomKeyword() {
    const keyword = prompt('请输入自定义关键词：');
    if (keyword && keyword.trim()) {
        generatedKeywords.push({
            text: keyword.trim(),
            weight: 0.5,
            category: 'custom'
        });
        renderKeywords();
        showNotification('关键词添加成功！', 'success');
    }
}

// 导出关键词
function exportKeywords() {
    const keywords = generatedKeywords.map(k => k.text).join(', ');
    
    // 创建下载链接
    const blob = new Blob([keywords], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'keywords.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('关键词导出成功！', 'success');
}

// 复制关键词
function copyKeywords() {
    const keywords = generatedKeywords.map(k => k.text).join(', ');
    
    navigator.clipboard.writeText(keywords).then(() => {
        showNotification('关键词已复制到剪贴板！', 'success');
    }).catch(() => {
        // 降级方案
        const textArea = document.createElement('textarea');
        textArea.value = keywords;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('关键词已复制到剪贴板！', 'success');
    });
}

// 显示结果
function showResults() {
    resultsSection.style.display = 'block';
}

// 显示上传进度
function showUploadProgress() {
    uploadProgress.style.display = 'block';
}

// 隐藏上传进度
function hideUploadProgress() {
    uploadProgress.style.display = 'none';
    updateProgress(0);
}

// 显示加载状态
function showLoading(show) {
    loadingOverlay.style.display = show ? 'flex' : 'none';
}

// 显示通知
function showNotification(message, type = 'success') {
    notificationMessage.textContent = message;
    notification.className = `notification ${type}`;
    notification.style.display = 'flex';
    
    // 3秒后自动隐藏
    setTimeout(() => {
        hideNotification();
    }, 3000);
}

// 隐藏通知
function hideNotification() {
    notification.style.display = 'none';
}

// 滚动到指定区域
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 滚动到上传区域
function scrollToUpload() {
    scrollToSection('upload');
}

// 滚动到功能区域
function scrollToFeatures() {
    scrollToSection('features');
}

// 更新导航状态
function updateNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// 键盘快捷键
document.addEventListener('keydown', function(event) {
    // Ctrl/Cmd + V 粘贴图片
    if ((event.ctrlKey || event.metaKey) && event.key === 'v') {
        navigator.clipboard.read().then(data => {
            for (let item of data) {
                if (item.types.includes('image/png') || item.types.includes('image/jpeg')) {
                    item.getType('image/png').then(blob => {
                        const file = new File([blob], 'pasted-image.png', { type: 'image/png' });
                        processImage(file);
                    });
                }
            }
        }).catch(() => {
            // 降级处理
        });
    }
    
    // Escape 键隐藏通知
    if (event.key === 'Escape') {
        hideNotification();
    }
});

// 性能优化：防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 优化滚动事件
const debouncedUpdateNavigation = debounce(updateNavigation, 10);
window.addEventListener('scroll', debouncedUpdateNavigation);

// 错误处理
window.addEventListener('error', function(event) {
    console.error('应用错误:', event.error);
    showNotification('发生未知错误，请刷新页面重试', 'error');
});

// 页面可见性变化处理
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // 页面隐藏时的处理
        console.log('页面已隐藏');
    } else {
        // 页面显示时的处理
        console.log('页面已显示');
    }
}); 