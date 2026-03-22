// 罗著个人主页 - 交互脚本

// 作品集标签切换
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // 移除所有 active 状态
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // 添加当前 active 状态
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});

// 图片模态框功能（双图）
function openModal(img1, img2) {
    const modal = document.getElementById('imageModal');
    const modalImg1 = document.getElementById('modalImg1');
    const modalImg2 = document.getElementById('modalImg2');
    
    modalImg1.src = 'assets/images/' + img1;
    modalImg2.src = 'assets/images/' + img2;
    modalImg1.style.display = 'block';
    modalImg2.style.display = 'block';
    
    // 隐藏3-8
    for (let i = 3; i <= 8; i++) {
        document.getElementById('modalImg' + i).style.display = 'none';
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 图片模态框功能（三图）
function openModal3(img1, img2, img3) {
    const modal = document.getElementById('imageModal');
    const modalImg1 = document.getElementById('modalImg1');
    const modalImg2 = document.getElementById('modalImg2');
    const modalImg3 = document.getElementById('modalImg3');
    
    modalImg1.src = 'assets/images/' + img1;
    modalImg2.src = 'assets/images/' + img2;
    modalImg3.src = 'assets/images/' + img3;
    modalImg1.style.display = 'block';
    modalImg2.style.display = 'block';
    modalImg3.style.display = 'block';
    
    // 隐藏4-8
    for (let i = 4; i <= 8; i++) {
        document.getElementById('modalImg' + i).style.display = 'none';
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 图片模态框功能（八图）
function openModal8(img1, img2, img3, img4, img5, img6, img7, img8) {
    const modal = document.getElementById('imageModal');
    const images = [img1, img2, img3, img4, img5, img6, img7, img8];
    
    for (let i = 1; i <= 8; i++) {
        const img = document.getElementById('modalImg' + i);
        img.src = 'assets/images/' + images[i-1];
        img.style.display = 'block';
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ESC 键关闭模态框
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
        closeHobbyModal();
    }
});

// 爱好图片模态框
function openHobbyModal(src) {
    const modal = document.getElementById('hobbyModal');
    const img = document.getElementById('hobbyModalImg');
    img.src = src;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeHobbyModal() {
    const modal = document.getElementById('hobbyModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// 旅游照片模态框
function openTravelModal() {
    const modal = document.getElementById('travelModal');
    const grid = document.getElementById('travelGrid');
    
    // 生成所有图片
    let html = '';
    for (let i = 1; i <= 16; i++) {
        html += `<img src="assets/images/hobby-travel-${i}.jpg" alt="旅行照片${i}" class="travel-modal-img" onclick="openHobbyModal(this.src)">`;
    }
    grid.innerHTML = html;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeTravelModal() {
    const modal = document.getElementById('travelModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}
