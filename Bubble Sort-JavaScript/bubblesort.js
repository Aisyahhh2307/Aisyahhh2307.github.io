function bubbleSort() {
    let input = prompt("Input array without any space: ");
    if (!input) return;
    let array = input.split(",").map(Number).filter(num => !isNaN(num));
    let message = "";
    let stepCount = 1;

    for (let i = 0; i < array.length; i++) {
        let swap = false;
        for (let j = 0; j < (array.length - 1 - i); j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                
                swap = true;

                message += "Step " + (stepCount) + ": " + array + "<br>";
                stepCount++;
            } 
        }
        if (!swap) break;
    }
    if (message == "") {
        message = "Array was already sorted";
    }

    document.getElementById("hasil").innerHTML = message;
}