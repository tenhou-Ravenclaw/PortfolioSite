document.addEventListener('DOMContentLoaded', function () {
    // ヘッダーのフェードイン
    document.querySelector('header').classList.add('active');

    // スクロールでセクションをスライド表示
    const slideSections = document.querySelectorAll('.slide-in');
    const showOnScroll = () => {
        slideSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', showOnScroll);
    showOnScroll();

    // カードのホバーで詳細表示
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hover');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hover');
        });
    });
});
