// константы и инициализации
const slides = document.querySelectorAll('.slide');
//  добавление аудио констант
//Тома
    const toma = new Howl({
        src: ['src/audio/toma.mp3'],
        volume: 0.5,
        onend: function () {
        alert('Finished!');
        }});
    toma.play()
    toma.pause()
//Кэ Цинь
    const ke = new Howl({
        src: ['src/audio/ke.mp3'],
        volume: 0.5,
        onend: function () {
        alert('Finished!');
        }});
    ke.play()
    ke.pause()
//Ху Тао
    const hu = new Howl({
        src: ['src/audio/hu.mp3'],
        volume: 0.5,
        onend: function () {
        alert('Finished!');
        }});
    hu.play()
    hu.pause()

// константы и инициализации


for (const slide of slides) {
    slide.addEventListener('click', () => {
        if(slide.classList.contains('active') && !(slide.classList.contains('on_active'))) {
            slide.classList.add('on_active');
            play(slide);
        }
        else if (slide.classList.contains('on_active')) {
            slide.classList.remove("on_active")
            stop_play(slide);
        }
        else {
            for (const slide of slides) {
                slide.classList.remove("active");
                slide.classList.remove("on_active");
                toma.pause();
            }
        }
        
        slide.classList.add('active');
    }
    );
}


//функция для активации музыки
function play(_sides) {
    if(_sides.classList.contains('toma')) {
        toma.play();
    } 
    else if(_sides.classList.contains('ke')) {
        ke.play();
    } else if(_sides.classList.contains('hu')) {
        hu.play();
    }
    else if(_sides.classList.contains('toma')) {
        toma.play();
    }
}
//функция для выключения музыки
function stop_play(_sides) {
    if(_sides.classList.contains('toma')) {
        toma.pause();
    }else if(_sides.classList.contains('ke')) {
        ke.pause();
    } else if(_sides.classList.contains('hu')) {
        hu.pause();
    } 
}