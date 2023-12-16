var quotes = ['“A kind word is charity.”',
    '“Do not get angry.”',
    '“There are two blessings that many people are deceived into losing: health and free time.”', 
    '“A man shall be with whom ever he loves, and you shall be with whomever you love.”',
    '“Be in this world as if you were a stranger or a traveler.”', 
    '“If you survive till the evening, do not expect to be alive in the morning, and if you survive till the morning, do not expect to be alive in the evening, and take from your health for your sickness, and (take) from your life for your death.”'];


var speakers = ['--The Messenger of Allah (Peace Be Upon Him)', '--The Messenger of Allah (Peace Be Upon Him)', '--The Messenger of Allah (Peace Be Upon Him)', '--The Messenger of Allah (Peace Be Upon Him)', '--The Messenger of Allah (Peace Be Upon Him)' , '--Ibn `Umar'];


var quoteMessage = document.getElementById('quoteMessage');
var quoteSpeaker = document.getElementById('quoteSpeaker');


var curr;
var prev;


function randomIntFromInterval(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    
function veiwQuote() {
    curr= randomIntFromInterval(0,5);
    if(curr!==prev){
        quoteMessage.innerHTML= quotes[curr];
        quoteSpeaker.innerHTML= speakers[curr];
        prev=curr;
    }
    else{
    veiwQuote();
    }
}