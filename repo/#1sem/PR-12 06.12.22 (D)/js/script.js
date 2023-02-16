// описание к слайдам
slide1 = 'text';
slide2 = 'text';
slide3 = 'text';
slide4 = 'text';
slide5 = 'text';
slide6 = 'text';
slide7 = 'text';
slide8 = 'text';
slide9 = 'text';
slide10 = 'text';

class Slider {
    
    constructor(slider, autoplay = true) {
        // элемент div.carousel
        this.slider = slider;
        // все кадры (слайды)
        this.allFrames = slider.querySelectorAll('.carousel-item');
        // цепочка кадров
        this.frameChain = slider.querySelector('.carousel-slides');
        // кнопка «вперед»
        this.nextButton = slider.querySelector('.carousel-next');
        // кнопка «назад»
        this.prevButton = slider.querySelector('.carousel-prev');
        // кнопка «off»
        this.ofnik = document.querySelector('.ofnik');
        // кнопка «on»
        this.onnik = document.querySelector('.onnik');

        this.index = 0; // индекс кадра, который сейчас в окне просмотра
        this.length = this.allFrames.length; // сколько всего есть кадров
        this.autoplay = autoplay; // включить автоматическую прокрутку
        this.paused = null; // чтобы можно было выключать автопрокрутк
        this.int = 3000; // интервал прокрутки

        this.init(); // инициализация слайдера

    }

    init() {
        this.dotButtons = this.dots(); // создать индикатор текущего кадра

        // все кадры должны быть одной ширины, равной ширине окна просмотра;
        // если кадров три, то ширина каждого кадра будет 100/3 = 33.33333%
        // от ширины контейнера .carousel-slides, то есть 900 пикселей
        this.allFrames.forEach(frame => frame.style.width = 100/this.length + '%');
        // ширина цепочки кадров должна равна ширине всех кадров
        this.frameChain.style.width = 100 * this.length + '%';

        this.nextButton.addEventListener('click', event => { // клик по кнопке «вперед»
            event.preventDefault();
            this.next();
        });

        this.prevButton.addEventListener('click', event => { // клик по кнопке «назад»
            event.preventDefault();
            this.prev();
        });

        // клики по кнопкам индикатора текущего кадра
        this.dotButtons.forEach(dot => {
            dot.addEventListener('click', event => {
                event.preventDefault();
                const index = this.dotButtons.indexOf(event.target);
                if (index === this.index) return;
                this.goto(index);
            });
        });

        if (this.autoplay) { // включить автоматическую прокрутку
            this.play();
            // когда мышь над слайдером — останавливаем автоматическую прокрутку
            this.slider.addEventListener('mouseenter', () => clearInterval(this.paused));
            // когда мышь покидает пределы слайдера — опять запускаем прокрутку
            this.slider.addEventListener('mouseleave', () => this.play());
            // когда нажимаем на кнопку — останавливаем автоматическую прокрутку
            this.ofnik.addEventListener('click', () => clearInterval(this.paused));
            // когда нажимаем на кнопку — опять запускаем прокрутку
            this.onnik.addEventListener('click', () => this.play());
        }
    }

    // перейти к кадру с индексом index
    goto(index) {
        // изменить текущий индекс
        if (index > this.length - 1) {
            this.index = 0;
        } else if (index < 0) {
            this.index = this.length - 1;
        } else {
            this.index = index;
        }
        // и выполнить смещение
        this.move();
    }

    // перейти к следующему кадру
    next() {
        this.goto(this.index + 1);
    }

    // перейти к предыдущему кадру
    prev() {
        this.goto(this.index - 1);
    }

    // рассчитать и выполнить смещение
    move() {
        // на сколько нужно сместить, чтобы нужный кадр попал в окно
        const offset = 100/this.length * this.index;
        this.frameChain.style.transform = `translateX(-${offset}%)`;
        this.dotButtons.forEach(dot => dot.classList.remove('active'));
        this.dotButtons[this.index].classList.add('active');
        // определяет индекс активного слайда { // добавляет описание к нему; // считает процент слайдера; }
          if (this.dotButtons[this.index].classList.contains("in0") && this.dotButtons[this.index].classList.contains("active")) {
            document.getElementById('output').innerHTML = slide1; document.getElementById('ind').innerHTML = `${this.index * 10}%`;
        } if (this.dotButtons[this.index].classList.contains("in1") && this.dotButtons[this.index].classList.contains("active")) {
            document.getElementById('output').innerHTML = slide2; document.getElementById('ind').innerHTML = `${this.index * 10}%`;
        } if (this.dotButtons[this.index].classList.contains("in2") && this.dotButtons[this.index].classList.contains("active")) {
            document.getElementById('output').innerHTML = slide3; document.getElementById('ind').innerHTML = `${this.index * 10}%`;
        } if (this.dotButtons[this.index].classList.contains("in3") && this.dotButtons[this.index].classList.contains("active")) {
            document.getElementById('output').innerHTML = slide4; document.getElementById('ind').innerHTML = `${this.index * 10}%`;
        } if (this.dotButtons[this.index].classList.contains("in4") && this.dotButtons[this.index].classList.contains("active")) {
            document.getElementById('output').innerHTML = slide5; document.getElementById('ind').innerHTML = `${this.index * 10}%`;
        } if (this.dotButtons[this.index].classList.contains("in5") && this.dotButtons[this.index].classList.contains("active")) {
            document.getElementById('output').innerHTML = slide6; document.getElementById('ind').innerHTML = `${this.index * 10}%`;
        } if (this.dotButtons[this.index].classList.contains("in6") && this.dotButtons[this.index].classList.contains("active")) {
            document.getElementById('output').innerHTML = slide7; document.getElementById('ind').innerHTML = `${this.index * 10}%`;
        } if (this.dotButtons[this.index].classList.contains("in7") && this.dotButtons[this.index].classList.contains("active")) {
            document.getElementById('output').innerHTML = slide8; document.getElementById('ind').innerHTML = `${this.index * 10}%`;
        } if (this.dotButtons[this.index].classList.contains("in8") && this.dotButtons[this.index].classList.contains("active")) {
            document.getElementById('output').innerHTML = slide9; document.getElementById('ind').innerHTML = `${this.index * 10}%`;
        } if (this.dotButtons[this.index].classList.contains("in9") && this.dotButtons[this.index].classList.contains("active")) {
            document.getElementById('output').innerHTML = slide10; document.getElementById('ind').innerHTML = `${this.index * 10}%`;
        }
    }

    // запустить автоматическую прокрутку
    play() {
        this.int = document.querySelector('.input-int').value;
        this.paused = setInterval(() => this.next(), this.int);
    }

    // создать индикатор текущего слайда
    dots() {
        const ol = document.createElement('jpg');
        ol.classList.add('carousel-indicators');
        const children = [];
        for (let i = 0; i < this.length; i++) {
            let li = document.createElement('li');
            if (i === 0) li.classList.add('active', `in${i}`);
            if (i === 1) li.classList.add('active', `in${i}`);
            if (i === 2) li.classList.add('active', `in${i}`);
            if (i === 3) li.classList.add('active', `in${i}`);
            if (i === 4) li.classList.add('active', `in${i}`);
            if (i === 5) li.classList.add('active', `in${i}`);
            if (i === 6) li.classList.add('active', `in${i}`);
            if (i === 7) li.classList.add('active', `in${i}`);
            if (i === 8) li.classList.add('active', `in${i}`);
            if (i === 9) li.classList.add('active', `in${i}`);
            ol.append(li);
            children.push(li);
        }
        this.slider.prepend(ol);
        return children;
    }
}
function darkmode() {
    var element = document.body; element.classList.toggle("dark-mode");
}
