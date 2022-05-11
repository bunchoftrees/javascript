const d4 = () => {
    let dieResult = Math.floor(Math.random() * 4) + 1;
    const roll = document.getElementById("d4-result").innerHTML = dieResult;
    return dieResult;
}

const d6 = () => {
    let dieResult = Math.floor(Math.random() * 6) + 1;
    const roll = document.getElementById("d6-result").innerHTML = dieResult;
    return dieResult;
}

const d8 = () => {
    let dieResult = Math.floor(Math.random() * 8) + 1;
    const roll = document.getElementById("d8-result").innerHTML = dieResult;
    return dieResult;
}

const d10 = () => {
    let dieResult = Math.floor(Math.random() * 10) + 1;
    const roll = document.getElementById("d10-result").innerHTML = dieResult;
    return dieResult;
}

const d12 = () => {
    let dieResult = Math.floor(Math.random() * 12) + 1;
    const roll = document.getElementById("d12-result").innerHTML = dieResult;
    return dieResult;
}

const d20 = () => {
    let dieResult = Math.floor(Math.random() * 20) + 1;
    const roll = document.getElementById("d20-result").innerHTML = dieResult;
    return dieResult;
}

const d100 = () => {
    let dieResult = (Math.floor(Math.random() * 10) + 1) * 10;
    const roll = document.getElementById("d100-result").innerHTML = dieResult;
    return dieResult;
}