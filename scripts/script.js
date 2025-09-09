document.querySelectorAll(".call-btn").forEach(Button =>
    Button.addEventListener("click", function () {
        const card = Button.closest(".parent")
        const serviceName = card.querySelector(".service").innerText;
        const number = card.querySelector(".call-no").innerText
        alert(`calling at ${serviceName} ${number}`)
        const money = document.getElementById("money");
        let currentBalance = parseInt(money.innerText);
        if (currentBalance >= 20) {
            currentBalance -= 20;
            money.innerText = currentBalance;
        } else {
            alert("Insufficient balance");
        }
        updateHistory(serviceName, number);
    })
)

document.querySelectorAll(".cpy-btn").forEach(button =>
    button.addEventListener("click", function () {
        const cpy = document.getElementById("copy")
        let cpyText = parseInt(cpy.innerText);
        cpyText += 1;
        cpy.innerText = cpyText;

        const card = button.closest(".parent")
        const hotline = card.querySelector(".call-no").innerText.trim();
        navigator.clipboard.writeText(hotline);
        alert(`Copied the number: ${hotline}`);
    })
)

document.querySelectorAll(".mark").forEach(button =>
    button.addEventListener("click", function () {
        const heart = document.getElementById("heart-mark");
        let heartText = parseInt(heart.innerText)
        heartText += 1;
        heart.innerText = heartText;
        console.log(heart)

    })
)

function updateHistory(serviceName, number) {
    const historyList = document.getElementById("history");
    const newEntry = document.createElement("li");
    newEntry.classList.add('history-item', 'bg-gray-200', 'text-black', 'p-2', 'rounded');

    const currentDate = new Date();
    const timeString = currentDate.toLocaleTimeString('en-GB', { timeZone: 'Asia/Dhaka', hour12: true });

    newEntry.innerHTML = `
        ${serviceName}<br>
        <div class='flex justify-between'>
        <p>${number}</p>
        <p>${timeString}</p>
        </div>
    `;
    historyList.appendChild(newEntry);
}

const clearButton = document.getElementById("clear-btn");
clearButton.addEventListener("click", function(){
    const historyList = document.getElementById("history");
    historyList.innerHTML = '';
})