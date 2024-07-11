document.addEventListener('keydown', function(event) {
    const keyDisplay = document.getElementById('key-display');
    const initialText = document.getElementById('initial-text');

    keyDisplay.textContent = event.key;

    initialText.style.display = 'none';

    const randomColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
    document.body.style.backgroundColor = randomColor;
});
