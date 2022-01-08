// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const landing = document.getElementById("landing");
    const takeOffBtn = document.getElementById("takeoff");
     const missionAbort = document.getElementById("missionAbort");


     let flightStatus = document.getElementById("flightStatus");
     let shuttleBackground = document.getElementById("shuttleBackground");
     let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

     takeOffBtn.addEventListener('click', () => {
        let hasConfirm = confirm("Confirm that the shuttle is ready for takeoff.");

        if(hasConfirm) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = 10000;
            
        }
    });
    
    landing.addEventListener('click', () => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = 0;

     }); 

     missionAbort.addEventListener('click', () => {
        let confirmation = confirm("Confirm that you want to abort the mission.");

        if(confirmation) {
            flightStatus.innerHTML = "Mission aborted..";
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = 0;
        }
    });
    
    let allButtons = shuttleBackground.nextElementSibling;
    const image = document.querySelector('img');
    image.style.position = 'absolute';
    image.style.left = 0;
    image.style.bottom = 0;

    const divHeight = shuttleBackground.clientHeight;
    const imageHeight = image.clientHeight;
    let count = 1;
  
  
    allButtons.addEventListener('click', function(event) {
        let target = event.target;
        let text = target.innerText.toLowerCase();
        let isMax = (count * 10) + imageHeight < divHeight;
        let currentMargin;
        

        if(text === 'up' && isMax) {
            count++
            currentMargin = count * 10;
            isMax = currentMargin < divHeight
            image.style.bottom = `${currentMargin}px`;

        } else if(text === 'down' && count > 0) {
            count--;   
            currentMargin = count * 10; 
            if(currentMargin > 0) {
                image.style.bottom = `${currentMargin}px`; 
            }       

        } else if(text === 'left') {           
            currentMargin = parseInt(image.style.left) - 10;
            image.style.left = `${currentMargin}px`;

        } else if (text === 'right') {        
            currentMargin = parseInt(image.style.left) + 10;    
            image.style.left = `${currentMargin}px`;

        }
    });  

};

window.addEventListener('load', init);
