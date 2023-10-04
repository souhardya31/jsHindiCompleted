const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

let intervalId
const startChangingColor = function () {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000)
        function changeBgColor() {
            document.body.style.backgroundColor = randomColor()

        };
    }

};

const stopChangingColor = function () {
    clearTimeout(intervalId)
    intervalId = null;
}
//the reason we are adding resetting the value to null and then changing it, is to avoid accdidentally stopping an interval that has been already stopped. and the if ensures that the we don't start it when it's not really stopped
document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)


