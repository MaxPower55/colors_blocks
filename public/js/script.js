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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbG9yJyk7XHJcblxyXG5mdW5jdGlvbiBzZXRSYW5kb21Db2xvcnModGFyZ2V0KSB7XHJcblxyXG4gICAgaWYgKHRhcmdldCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBibG9ja3MuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignaDInKTtcclxuICAgICAgICAgICAgY29uc3QgbG9jayA9IGl0ZW0ucXVlcnlTZWxlY3RvcignaScpLmNsYXNzTGlzdC5jb250YWlucygnZmEtbG9jaycpO1xyXG4gICAgICAgICAgICBpZiAoIWxvY2spIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZCA9IGdlblJhbmRvbUNvbG9yKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgMC4zcyBlYXNlJztcclxuICAgICAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBnZW5SYW5kb21Db2xvcigpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBsb2NrID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2knKS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLWxvY2snKTtcclxuICAgICAgICBpZiAoIWxvY2spIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCdoMicpO1xyXG4gICAgICAgICAgICB0YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IGdlblJhbmRvbUNvbG9yKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IGdlblJhbmRvbUNvbG9yKCkudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZW5SYW5kb21Db2xvcigpIHtcclxuICAgIGNvbnN0IGhleGVzID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xyXG4gICAgbGV0IGNvbG9yID0gJyMnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgICBjb2xvciArPSBoZXhlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBoZXhlcy5sZW5ndGgpXTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb2xvcjtcclxufTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChldmVudC5jb2RlID09ICdTcGFjZScpIHtcclxuICAgICAgICBzZXRSYW5kb21Db2xvcnMoKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBjb25zdCBnZXREYXRhID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudHlwZTtcclxuICAgIGlmIChnZXREYXRhID09ICdsb2NrJykge1xyXG4gICAgICAgIGNvbnN0IG5vZGUgPSBldmVudC50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09ICdpJyA/IGV2ZW50LnRhcmdldCA6IGV2ZW50LnRhcmdldC5jaGlsZHJlblswXTtcclxuICAgICAgICBub2RlLmNsYXNzTGlzdC50b2dnbGUoJ2ZhLWxvY2snKTtcclxuICAgICAgICBub2RlLmNsYXNzTGlzdC50b2dnbGUoJ2ZhLWxvY2stb3BlbicpO1xyXG4gICAgfSBlbHNlIGlmIChnZXREYXRhID09ICdjb2xvcmJsb2NrJykge1xyXG4gICAgICAgIGN1cnJlbnRCbG9jayA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBzZXRSYW5kb21Db2xvcnMoY3VycmVudEJsb2NrKTtcclxuICAgIH07XHJcbiAgICBcclxufSwgZmFsc2UpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignb25sb2FkJywgc2V0UmFuZG9tQ29sb3JzKCksIGZhbHNlKTsiXSwiZmlsZSI6InNjcmlwdC5qcyJ9