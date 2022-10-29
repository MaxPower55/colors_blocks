const blocks = document.querySelectorAll('.color');

function setRandomColors(target) {

    if (target == undefined) {
        blocks.forEach(item => {
            const text = item.querySelector('h2');
            const lock = item.querySelector('i').classList.contains('fa-lock');
            if (!lock) {
                item.style.background = genRandomColor().toString();
                item.style.transition = 'all 0.3s ease';
                text.textContent = genRandomColor().toString();
            }
        })
    } else {
        const lock = target.querySelector('i').classList.contains('fa-lock');
        if (!lock) {
            const text = target.querySelector('h2');
            target.style.background = genRandomColor().toString();
            text.textContent = genRandomColor().toString();
        }
    }
};

function genRandomColor() {
    const hexes = '0123456789abcdef';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexes[Math.floor(Math.random() * hexes.length)];
    }
    return color;
};

document.addEventListener('keydown', function(event) {
    event.preventDefault();
    if (event.code == 'Space') {
        setRandomColors();
    }
});

document.addEventListener('click', function(event) {
    const getData = event.target.dataset.type;
    if (getData == 'lock') {
        const node = event.target.tagName.toLowerCase() == 'i' ? event.target : event.target.children[0];
        node.classList.toggle('fa-lock');
        node.classList.toggle('fa-lock-open');
    } else if (getData == 'colorblock') {
        currentBlock = event.target;
        setRandomColors(currentBlock);
    };
    
}, false);

document.addEventListener('onload', setRandomColors(), false);