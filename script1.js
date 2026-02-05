function detectDevice() {
    const deviceType = document.getElementById("deviceType");
    const featureList = document.getElementById("featureList");

    if (window.innerWidth < 768) {
        deviceType.textContent = "You are using a mobile device.";
        featureList.innerHTML = `
            <div class="bg-white p-4 rounded shadow">Mobile Feature 1</div>
            <div class="bg-white p-4 rounded shadow">Mobile Feature 2</div>
        `;
    } else if (window.innerWidth < 1024) {
        deviceType.textContent = "You are using a tablet device.";
        featureList.innerHTML = `
            <div class="bg-white p-4 rounded shadow">Tablet Feature 1</div>
            <div class="bg-white p-4 rounded shadow">Tablet Feature 2</div>
            <div class="bg-white p-4 rounded shadow">Tablet Feature 3</div>
        `;
    } else {
        deviceType.textContent = "You are using a desktop device.";
        featureList.innerHTML = `
            <div class="bg-white p-4 rounded shadow">Desktop Feature 1</div>
            <div class="bg-white p-4 rounded shadow">Desktop Feature 2</div>
            <div class="bg-white p-4 rounded shadow">Desktop Feature 3</div>
            <div class="bg-white p-4 rounded shadow">Desktop Feature 4</div>
        `;
    }
}

window.onload = detectDevice;
window.onresize = detectDevice;
