document.addEventListener('DOMContentLoaded', function() {
    function createHeart() {
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.animationDuration = `${5 + Math.random() * 5}s`;
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);
    }

    setInterval(createHeart, 300);
});
