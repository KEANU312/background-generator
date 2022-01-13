var css = document.querySelector('h3');
var color1 = document.getElementsByClassName('color1')[0];
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');

function colorChanger() {
    body.style.background = `linear-gradient(to right, 
        ${color1.value}, ${color2.value}
        )`
    
    // "linear-gradient(to right, " +
    //     color1.value + "," + color2.value + ")"

        
    // css.innerText = "rgba (" +color1.value+ "," + color2.value + ")"
    css.textContent = body.style.background + ";";
}

color1.addEventListener('input', colorChanger)

color2.addEventListener('input', colorChanger)

function moveCommand(direction) {
    var whatHappends;
    switch (direction) {
        case "forward":
            whatHappends = 'you encountered a monster';
            break;
        case "forward":
            whatHappends = 'you encountered a monster';
            break;
        case "right":
            whatHappends = 'you found a river';
            break;
        case 'left':
            whatHappends = 'you run into a troll';
            break;
        default:
            whatHappends = 'plese enter a valid direction';
    }
        return whatHappends;

        }


const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}




let {player, experience, wizardLevel} = obj;



function runIt() {
    if (10> 1) {

    let player = 10;
    console.log(player);
}
}

runIt();
console.log(player)

const a = () => {
    return "This worked"
}

const b = (a, b) => a + b;