// Function to update quantity and calculate total
function updateQuantity(inputId, price, isIncreasing) {
    const input = document.getElementById(inputId);
    let quantity = parseInt(input.value);

    if (isIncreasing) {
        quantity++;
    } else {
        quantity = Math.max(0, quantity - 1);
    }

    input.value = quantity;
    document.getElementById("case-total" + inputId.slice(-1)).textContent = price * quantity;
    total();
}

// Function to reset quantity and calculate total
function resetQuantity(inputId) {
    const input = document.getElementById(inputId);
    input.value = 0;
    document.getElementById("case-total" + inputId.slice(-1)).textContent = 0;
    total();
}

// Function to reset an entire item
function resetItem(itemId) {
    const item = document.getElementById(itemId);
    item.remove();
    total();
}

// Function to toggle heart color
function toggleHeartColor(heart) {
    heart.classList.toggle('active');
}

// Function to calculate total
function total() {
    const quantity1 = parseInt(document.getElementById('quantite1').value);
    const quantity2 = parseInt(document.getElementById('quantite2').value);
    const price1 = 1200;
    const price2 = 900;

    const subtotal1 = price1 * quantity1;
    const subtotal2 = price2 * quantity2;

    const total = subtotal1 + subtotal2;

    document.getElementById('sub-total').innerText = total;
}

// Attach event listeners to buttons and inputs
document.getElementById('btn-success').addEventListener('click', function() {
    updateQuantity('quantite1', 1200, true);
});

document.getElementById('btn-warning').addEventListener('click', function() {
    updateQuantity('quantite1', 1200, false);
});

document.getElementById('btn-add').addEventListener('click', function() {
    updateQuantity('quantite2', 900, true);
});

document.getElementById('btn-minus').addEventListener('click', function() {
    updateQuantity('quantite2', 900, false);
});

document.getElementById('btn-danger').addEventListener('click', function() {
    resetItem('item1');
});

document.getElementById('btn-delete').addEventListener('click', function() {
    resetItem('item2');
});

// Initial total calculation
total();

