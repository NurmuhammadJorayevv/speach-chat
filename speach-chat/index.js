const startBtn=document.querySelector("#start-btn")

const recognation = new webkitSpeechRecognition()
recognation.continuous=false;
recognation.lang="en-us"
recognation.interimResults=false;
recognation.maxAlternatives=1;
const synth=window.speechSynthesis
startBtn.addEventListener("click",()=>{
    recognation.start();
})
let utter = new SpeechSynthesisUtterance("Hi,how are you");
utter.onend=()=>{
    recognation.start()
}
recognation.onresult=(e)=>{
    const transcript=e.results[e.results.length-1][0].transcript.trim();
    if(transcript==="hello"){
        recognation.stop()
     utter.text="Hello,boy Where you from"
   recognation.stop()
      synth.speak(utter)
    }else if(transcript==="start"){

        recognation.stop()
        utter.text="Wow that uzbekistan , but i dont now this country you know that isnt it"
        synth.speak(utter)

    }else if(transcript==="football"){

        recognation.stop()
        utter.text="Wow i have a lot of thing in our home do you know that , but i am not use them much"
        synth.speak(utter)

    }else if(transcript==="basketbool"){

        recognation.stop()
        utter.text="why you say me what  or maybe you not understand me thats right now"
        synth.speak(utter)

    }else if(transcript==="table"){

        recognation.stop()
        utter.text="good bye brother , i like you and always hope see you seen and me all sentences"
        synth.speak(utter)

    }

}







