const quotes = [
    "Believe you can and you're halfway there", "Remember to look up at the stars and not down at your feet. Try to make sense of what you see and wonder about what makes the universe exist. Be curious", 
    "The most important step a man can take. It's not the first one, is it? It's the next one. Always the next step", "Do one thing every day that scares you",
    "Be yourself; everyone else is already taken", "There is nothing impossible to they who will try.", "The only thing we have to fear is fear itself"
];
const days= ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const greetings = ["Hello", "Hi there", "Good day", "Greetings", "What's Up", "Howdy", "Yo", "Hola" ];

function getQuote(){
    return quotes[Math.floor(Math.random() * quotes.length)];
}
//console.log(getQuote());

function getDay(){
    return days[Math.floor(Math.random() * days.length)];
}
//console.log(getDay());

function getGreeting(){
    return greetings[Math.floor(Math.random() * greetings.length)];
}
//console.log(getGreeting());

let createMessage = `${getGreeting()}, \nYour inspirational message for ${getDay()} is: \n${getQuote()}`;

console.log(createMessage);