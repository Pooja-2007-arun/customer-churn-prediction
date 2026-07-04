//// script.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        let valid = true;
        let messages = [];

        // Age validation
        const age = document.querySelector("input[name='Age']").value;
        if (age <= 0) {
            valid = false;
            messages.push("⚠️ Age must be greater than 0.");
        }

        // Satisfaction Score validation
        const satisfaction = document.querySelector("input[name='SatisfactionScore']").value;
        if (satisfaction < 1 || satisfaction > 10) {
            valid = false;
            messages.push("⚠️ Satisfaction Score must be between 1 and 10.");
        }

        // Monthly Charges validation
        const charges = document.querySelector("input[name='MonthlyCharges']").value;
        if (charges <= 0) {
            valid = false;
            messages.push("⚠️ Monthly Charges must be greater than 0.");
        }

        // If invalid, show a colorful popup instead of alert
        if (!valid) {
            event.preventDefault();

            // Remove old popup if exists
            const oldPopup = document.querySelector(".popup-message");
            if (oldPopup) oldPopup.remove();

            // Create popup
            const popup = document.createElement("div");
            popup.className = "popup-message";
            popup.innerHTML = messages.join("<br>");

            document.body.appendChild(popup);

            // Auto-hide after 3 seconds
            setTimeout(() => {
                popup.remove();
            }, 3000);
        } else {
            // Show success popup
            const success = document.createElement("div");
            success.className = "popup-success";
            success.innerHTML = "✅ All inputs look good!";
            document.body.appendChild(success);

            setTimeout(() => {
                success.remove();
            }, 2000);
        }
    });
});
