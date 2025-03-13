const quotes = [
  "Be yourself; everyone else is already taken.",
  "In the middle of every difficulty lies opportunity.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "Act as if what you do makes a difference. It does.",
  "The only way to do great work is to love what you do.",
  "Do what you can, with what you have, where you are.",
  "You miss 100% of the shots you don't take.",
  "Don't watch the clock; do what it does. Keep going.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Keep your face always toward the sunshine—and shadows will fall behind you.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "Success usually comes to those who are too busy to be looking for it.",
  "I find that the harder I work, the more luck I seem to have.",
  "Don't be afraid to give up the good to go for the great.",
  "Opportunities don't happen. You create them.",
  "It is never too late to be what you might have been.",
  "Everything you've ever wanted is on the other side of fear.",
  "Your time is limited, so don't waste it living someone else's life.",
  "I have not failed. I've just found 10,000 ways that won't work.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "It always seems impossible until it's done.",
  "You are never too old to set another goal or to dream a new dream.",
  "If you're going through hell, keep going.",
  "Success is how high you bounce when you hit bottom.",
  "The best revenge is massive success.",
  "The secret of getting ahead is getting started.",
  "Do not wait to strike till the iron is hot, but make it hot by striking.",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "The road to success and the road to failure are almost exactly the same.",
  "Don't let yesterday take up too much of today.",
  "A person who never made a mistake never tried anything new.",
  "Dream big and dare to fail.",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  "Only those who dare to fail greatly can ever achieve greatly.",
  "If you want to achieve greatness stop asking for permission.",
  "Try not to become a man of success, but rather try to become a man of value.",
  "Do what you love and success will follow.",
  "I attribute my success to this: I never gave or took any excuse.",
  "If you can dream it, you can achieve it.",
  "Your limitation—it's only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Success doesn't just find you. You have to go out and get it.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Don't stop when you're tired. Stop when you're done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "Little things make big days."
];
const generateButton = document.getElementById('generateButton');
const quoteDisplay = document.getElementById('quoteDisplay');

// function generateQuote(){
//     const randomIndex = Math.floor(Math.random()*quotes.length);
//     const quote = quotes[randomIndex];
//     quoteDisplay.innerText=quote;
// }

// To track shown quotes
const shownQuotes = new Set();

function generateQuote() {
  // If all quotes are shown, reset the set
  if (shownQuotes.size === quotes.length) {
    shownQuotes.clear();
  }

  let quote;
  do {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quote = quotes[randomIndex];
  } while (shownQuotes.has(quote)); // Keep generating until a new quote is found

  // Add the quote to the Set
  shownQuotes.add(quote);

  // Display the quote
  quoteDisplay.innerText = quote;
}
generateButton.addEventListener('click',generateQuote);