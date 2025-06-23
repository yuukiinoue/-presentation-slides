// スライド要素とインジケーターを取得
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;

function showSlide(index) {
    if (index < 0 || index >= slides.length) return;
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
    currentSlide = index;
    // ボタンの有効/無効制御（オプション）
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    if (prevBtn && nextBtn) {
        prevBtn.disabled = (index === 0);
        nextBtn.disabled = (index === slides.length - 1);
    }
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
    }
}

function previousSlide() {
    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    }
}

function goToSlide(index) {
    showSlide(index - 1); // インジケーターは1始まり
}

// インジケータークリックイベント
indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        showSlide(i);
    });
});

// 初期表示
showSlide(0);

// グローバル関数としてwindowに登録（HTMLのonclick用）
window.nextSlide = nextSlide;
window.previousSlide = previousSlide;
window.goToSlide = goToSlide; 