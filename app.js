

const myButton = document.getElementById('changeButton');

const mainColor = document.getElementById('mainColor');

const input1 = document.getElementById('user-input');

const textArea = document.getElementById('text-area')

const greeting = document.getElementById('bigText')

const greeting2 = document.getElementById('mediumText')

const name2 = document.getElementById('name2' )

const preferredPronouns = document.getElementById('preferred-pronouns')

const input2 = document.getElementById('pronoun-input');

const pronounButton = document.getElementById('pronoun-Button');

const pronounArea = document.getElementById('pronouns-area')

myButton.addEventListener('click', () => {
    
    mainColor.style.backgroundColor = '#a1c181';
    textArea.textContent = input1.value;
    textArea.style.color = '#fe7f2d';
    greeting.style.color = '#fcca46';
    greeting2.style.color = '#fcca46';
    name2.style.backgroundColor = '#619b8a';
    myButton.style.opacity = '0.2';
    input1.style.opacity = '0.1';
    preferredPronouns.textContent = input2.value;
    pronounArea.style.color = '#fcca46';
    preferredPronouns.style.color = '#fe7f2d';
});                                                                      

pronounButton.addEventListener('click', () => {
    preferredPronouns.textContent = input2.value;
    pronounButton.style.opacity = '0.2';
    input2.style.opacity = '0.1';
    preferredPronouns.textContent = input2.value;

});   