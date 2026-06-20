// JavaScript 動態過濾邏輯
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 1. 移除所有按鈕的 active 狀態，並為點擊的按鈕加上 active
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // 2. 取得按鈕的 data-filter 值
        const filterValue = btn.getAttribute('data-filter');

        // 3. 遍歷所有卡片，判斷是否顯示
        cards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filterValue === 'all' || filterValue === category) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});
// =========================================
// 語言切換功能邏輯
// =========================================

// 抓取語言切換按鈕
const langToggleBtn = document.getElementById('lang-toggle');

// 監聽點擊事件
langToggleBtn.addEventListener('click', () => {
    // 讓 body 在沒有 english-mode 時加上它，有時則移除它 (Toggle)
    document.body.classList.toggle('english-mode');
    
    // 檢查目前是否為英文模式，動態更改按鈕上的文字
    if (document.body.classList.contains('english-mode')) {
        langToggleBtn.textContent = '中文'; // 處於英文版時，按鈕顯示「切換回中文」
    } else {
        langToggleBtn.textContent = 'English'; // 處於中文版時，按鈕顯示「切換至英文」
    }
});