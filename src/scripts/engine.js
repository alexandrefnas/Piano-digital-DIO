const pianoKeys = document.querySelectorAll(".piano-keys .key");

const volumeSlider = document.querySelector(".volume-slider input");

const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];

let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
 };

    pianoKeys.forEach((key) => {
        key.addEventListener("click", () => playTune(key.dataset.key));

        mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) {
        playTune(e.key);        
    }    
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
    audio2.volume = e.target.value;
};

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
};

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys);



// Metronomo Digital (Icremento)
let metronomeInterval;
let playMetronomo = false;
let audio2 = new Audio("./src/sons/hickory.mp3")

document.getElementById("start").addEventListener("click", () => {
    if (!playMetronomo) {
        console.log(playMetronomo);
        playMetronomo = true;
        const bpm = document.getElementById("bpm").value;
        const interval = 60000 / bpm; // Calcula o intervalo em milissegundos

        metronomeInterval = setInterval(() => {
            // Toca o som da batida
            audio2.currentTime = 0;
            audio2.play();

            // Muda a cor do indicador
            document.getElementById("indicator").style.backgroundColor = "#ff0000";
            setTimeout(() => {
                document.getElementById("indicator").style.backgroundColor = "#008000";
            }, interval / 2);
        }, interval);

        document.getElementById("bpm").disabled = true;
    }
    else {
        console.log(playMetronomo);
        playMetronomo = false;
        clearInterval(metronomeInterval);
        document.getElementById("indicator").style.backgroundColor = "#008000"; 
        document.getElementById("bpm").disabled = false;
    }
});