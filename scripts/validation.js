
document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Basic form validation
    const name = document.getElementById("name").value;
    const cardNumber = document.getElementById("card-number").value;
    const expiryDate = document.getElementById("expiry-date").value;
    const cvv = document.getElementById("cvv").value;

    if (name && cardNumber && expiryDate && cvv) {
        // Simulated API call (mock)
        setTimeout(function() {
            document.getElementById("confirmation-message").classList.remove("hidden");
        }, 1000);
    } else {
        alert("Please fill out all fields correctly.");
    }
});
