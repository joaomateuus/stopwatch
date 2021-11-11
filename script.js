//Those lines are setting the values
//To be zero when the countdown starts 
let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;

//Here is the function for the start button
document.getElementById('button-start').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});

////Here is the function for the start button
document.getElementById('button-stop').addEventListener('click', ()=>{
    clearInterval(int);
});

////Here is the function for the start button
document.getElementById('button-restart').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
});

//This is the function that is behind the stopwatch logic
function displayTimer(){
    milliseconds+=10;
//When the value of milliseconds is equal to 1000, we will see
//zero in the millisecond cell and the number of seconds will increase by one.
//Because we all know 1000 milliseconds equals 1 second.
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
//when the value of the second is 60, we will see zero in the second cell and one increment in the minute cell.
        if(seconds == 60){
            seconds = 0;
            minutes++;
//When the minute time reaches 60, you will see 0 in the minute cell and 1 in the hour cell.
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
//Here when the value of the countdown time is less than ten, we add a zero.
 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
// And we sent it to html as a output with the "innerHTML"
 timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}