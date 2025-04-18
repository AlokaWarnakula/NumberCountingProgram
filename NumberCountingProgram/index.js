
const increase = document.getElementById("increaseBtn");
const reset = document.getElementById("resetBtn");
const decrease = document.getElementById("decreaseBtn");
const countLabel = document.getElementById("countingLabel");

let count = 0;



increase.onclick = function() {
    count++;
    countLabel.textContent = count;
}
decrease.onclick = function() {
    count--;
    countLabel.textContent = count;
}

reset.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}