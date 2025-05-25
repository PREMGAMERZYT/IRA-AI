let btn = document.querySelector(".btn");
let content = document.querySelector(".content");
let gif = document.querySelector(".gif");



function speak(talk) {
    let talk_tell = new SpeechSynthesisUtterance(talk);
    talk_tell.pitch = 1
    talk_tell.volume = 1
    talk_tell.rate = 1
    talk_tell.lang = "hi-GB"
    window.speechSynthesis.speak(talk_tell)
}

function timezone() {
    let day = new Date();
    let ho = day.getHours();
    if (ho >= 0 && ho < 12) {
        speak("Good Morning Sir");
    } else if (ho >= 12 && ho < 16) {
        speak("Good afternoon Sir");
    } else {
        speak("Good Evening Sir");
    }
}

window.addEventListener('load' , () => {
    timezone();
})

let speakrecongustion = window.SpeechRecognition || window.webkitSpeechRecognition;

let reco = new speakrecongustion();

reco.onresult = (ev) => {
    let curidx = ev.resultIndex
    let transcript = ev.results[curidx][0].transcript;
    content.innerText = transcript.toLowerCase();
    console.log(ev);
    console.log(transcript);
    takecmd(transcript.toLowerCase());
}

btn.addEventListener("click", () => {
    reco.start();
    btn.style.display = "none"
    gif.style.display = "block"
})

function takecmd(msg) {
    btn.style.display = "flex"
    gif.style.display = "none"

    if(msg.includes("hi")) {
        speak("Hello sir how can i help u")
    }else if(msg.includes("who are you")) {
        speak("I Am Virtual Assistant. My name is era. Created By Prem Kumar")
    }else if(msg.includes("how are you")) {
        speak("I Am Fine sir. what about u")
    }else if(msg.includes("how r u")) {
        speak("I Am Fine sir. what about u")
    }else if(msg.includes("open youtube")) {
        speak("opening youtube...");
        window.open("https://www.youtube.com")
    }else if(msg.includes("open google")) {
        speak("opening google...");
        window.open("https://www.google.com")
    }else if(msg.includes("open facebook")) {
        speak("opening facebook...");
        window.open("https://www.facebook.com")
    }else if(msg.includes("open instagram")) {
        speak("opening instagram...");
        window.open("https://www.instagram.com")
    }else if(msg.includes("open calculator")) {
        speak("opening calculator...");
        window.open("calculator://")
    }else if(msg.includes("open calculator")) {
        speak("opening calculator...");
        window.open("com.android.calculator");
    }else if(msg.includes("calculator")) {
        speak("opening calculator...");
        window.open("calculator://")
    }else if(msg.includes("open whatsapp")) {
        speak("opening whatsapp...");
        window.open("whatsapp://")
    }else {
        let finel  = "Here is the information about " + msg.replace("Sophia","")
        speak(finel)
        window.open(`https://www.google.com/search?q=${msg}`)
    }
}