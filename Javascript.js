function setFrameSize(sizeClass) {
            const frame = document.getElementById('previewFrame');
            const buttons = document.querySelectorAll('.preview-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            frame.classList.remove('size-desktop', 'size-laptop', 'size-tablet', 'size-phone-h', 'size-phone');
            frame.classList.add(sizeClass);
        }
        window.addEventListener('load', function() {
            document.getElementById('previewFrame').style.height = '100%';
        });
        window.addEventListener('resize', function() {
            document.getElementById('previewFrame').style.height = '100%';
        });
