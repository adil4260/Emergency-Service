// DOM Element References
const heartCountElement = document.getElementById('heart-count');
const coinCountElement = document.getElementById('coin-count');
const copyCountElement = document.getElementById('copy-count');
const historyList = document.getElementById('history-list');
const btnClear = document.getElementById('btn-clear');

// Initial State Variables
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// 1. Heart Button Click Handler (Event Delegation)
document.addEventListener('click', function (event) {
    const heartBtn = event.target.closest('.btn-heart');
    if (heartBtn) {
        heartCount++;
        heartCountElement.innerText = heartCount;
    }
});

// 2. Call Button Functionality
document.addEventListener('click', function (event) {
    const callBtn = event.target.closest('.btn-call');
    if (callBtn) {
        // Coin Validation Check
        if (coinCount < 20) {
            alert('আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন প্রয়োজন।');
            return;
        }

        const card = callBtn.closest('.card');
        const serviceName = card.querySelector('.service-name').innerText;
        const phoneNumber = card.querySelector('.phone-number').innerText;

        // Deduct Coins
        coinCount -= 20;
        coinCountElement.innerText = coinCount;

        // Show Alert Message
        alert(`Calling ${serviceName} (${phoneNumber})...`);

        // Get Current Local Time
        const currentTime = new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });

        // Create History Item Element
        const historyItem = document.createElement('div');
        historyItem.classList.add('history-item');
        historyItem.innerHTML = `
            <div>
                <strong>${serviceName}</strong>
                <p>${phoneNumber}</p>
            </div>
            <span class="time">${currentTime}</span>
        `;

        // Add to History Container (At Top)
        historyList.prepend(historyItem);
    }
});

// 3. Copy Button Functionality (Challenge Part)
document.addEventListener('click', function (event) {
    const copyBtn = event.target.closest('.btn-copy');
    if (copyBtn) {
        const card = copyBtn.closest('.card');
        const phoneNumber = card.querySelector('.phone-number').innerText;

        // Copy to Clipboard
        navigator.clipboard.writeText(phoneNumber).then(() => {
            alert(`Helpline number ${phoneNumber} copied to clipboard!`);

            // Increment Copy Count
            copyCount++;
            copyCountElement.innerText = copyCount;
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }
});

// 4. Clear History Functionality
btnClear.addEventListener('click', function () {
    historyList.innerHTML = '';
});