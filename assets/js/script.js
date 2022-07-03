document.onkeydown = function (e) {
    let key = e.key
    if (key == 'a') {
        let sound = new Audio('./assets/sounds/clap.wav');
        sound.play();
        let keyElement = document.getElementById('a').parentElement;
        keyElement.id = 'liAnimation';
        setTimeout(function () {keyElement.id = '';}, 70);
    }
    else if (key == 's') {
        let sound = new Audio('./assets/sounds/hihat.wav');
        sound.play();
        let keyElement = document.getElementById('s').parentElement;
        keyElement.id = 'liAnimation';
        setTimeout(function () {keyElement.id = '';}, 70);
    }
    else if (key == 'd') {
        let sound = new Audio('./assets/sounds/kick.wav');
        sound.play();
        let keyElement = document.getElementById('d').parentElement;
        keyElement.id = 'liAnimation';
        setTimeout(function () {keyElement.id = '';}, 70);
    }
    else if (key == 'f') {
        let sound = new Audio('./assets/sounds/openhat.wav');
        sound.play();
        let keyElement = document.getElementById('f').parentElement;
        keyElement.id = 'liAnimation';
        setTimeout(function () {keyElement.id = '';}, 70);
    }
    else if (key == 'g') {
        let sound = new Audio('./assets/sounds/boom.wav');
        sound.play();
        let keyElement = document.getElementById('g').parentElement;
        keyElement.id = 'liAnimation';
        setTimeout(function () {keyElement.id = '';}, 70);
    }
    else if (key == 'h') {
        let sound = new Audio('./assets/sounds/ride.wav');
        sound.play();
        let keyElement = document.getElementById('h').parentElement;
        keyElement.id = 'liAnimation';
        setTimeout(function () {keyElement.id = '';}, 70);
    }
    else if (key == 'j') {
        let sound = new Audio('./assets/sounds/snare.wav');
        sound.play();
        let keyElement = document.getElementById('j').parentElement;
        keyElement.id = 'liAnimation';
        setTimeout(function () {keyElement.id = '';}, 70);
    }
    else if (key == 'k') {
        let sound = new Audio('./assets/sounds/tom.wav');
        sound.play();
        let keyElement = document.getElementById('k').parentElement;
        keyElement.id = 'liAnimation';
        setTimeout(function () {keyElement.id = '';}, 70);
    }
    else if (key == 'l') {
        let sound = new Audio('./assets/sounds/tink.wav');
        sound.play();
        let keyElement = document.getElementById('l').parentElement;
        keyElement.id = 'liAnimation';
        setTimeout(function () {keyElement.id = '';}, 70);
    }
}