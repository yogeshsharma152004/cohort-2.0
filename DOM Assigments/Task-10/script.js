const keyMap = {
    // White Keys (21)
    "KeyA": 28,
    "KeyS": 29,
    "KeyD": 30,
    "KeyF": 31,
    "KeyG": 32,
    "KeyH": 33,
    "KeyJ": 34,
    "KeyK": 35,
    "KeyL": 36,
    "Semicolon": 37,
    "Quote": 38,
    "KeyZ": 39,
    "KeyX": 40,
    "KeyC": 41,
    "KeyV": 42,
    "KeyB": 43,
    "KeyN": 44,
    "KeyM": 45,
    "Comma": 46,
    "Period": 47,
    "Slash": 48,

    // Black Keys (15)
    "KeyW": 49,
    "KeyE": 50,
    "KeyT": 51,
    "KeyY": 52,
    "KeyU": 53,
    "KeyI": 54,
    "KeyO": 55,
    "KeyP": 56,
    "BracketLeft": 57,
    "BracketRight": 58,
    "KeyR": 59,
    "Digit5": 60,
    "Digit6": 61,
    "Digit7": 62,
    "Digit8": 63
};


let keys = document.querySelectorAll(".key span");

function playSound(audioNumber) {
    let sound = new Audio(`./audio/${audioNumber}.mp3`);
    sound.play();
}

function pressEffect(keyElement) {
    keyElement.style.transform = "scale(0.9)";
    keyElement.style.transition = "all 0.2s ease";
    setTimeout(() => {
        keyElement.style.transform = "scale(1)";
    }, 200);
}

// CLICK event
keys.forEach((key, index) => {
    key.addEventListener("click", () => {
        playSound(28 + index);
        pressEffect(key);
    });
});

// KEYDOWN event
document.addEventListener("keydown", (e) => {
    keys.forEach((key, index) => {
        if (key.innerText.toLowerCase() === e.key.toLowerCase()) {
            playSound(28 + index);
            pressEffect(key);
        }
    });
});

