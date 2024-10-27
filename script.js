let speech = null; // Declare speech variable to reuse

document.getElementById('speak-btn').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value;
    
    if (textInput === '') {
        alert('Please enter some text to speak.');
        return;
    }
    
    speech = new SpeechSynthesisUtterance(textInput);
    speech.lang = 'en-US'; // Set the language to English

    // Speak the text
    window.speechSynthesis.speak(speech);
});

document.getElementById('repeat-btn').addEventListener('click', function() {
    if (speech) {
        window.speechSynthesis.speak(speech); // Repeat the last spoken text
    } else {
        alert('Please speak some text first!');
    }
});

document.getElementById('stop-btn').addEventListener('click', function() {
    window.speechSynthesis.cancel(); // Stop speaking
});
