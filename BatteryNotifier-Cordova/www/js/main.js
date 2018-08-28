
// Add listener for when device is ready
document.addEventListener("deviceready", onDeviceReady, false)

// Device is ready
function onDeviceReady()
{
    console.log("Device ready!")

    // Enable background mode
    window.cordova.plugins.backgroundMode.enable()

    // Handle pause and resume events
    document.addEventListener("pause", onPause, false)
    document.addEventListener("resume", onResume, false)

    // Handle battery events
    window.addEventListener("batterystatus", onBatteryStatus, false)
}

function onPause()
{
    // TODO
}

function onResume()
{
    // TODO
}

function onBatteryStatus(status)
{
    /*
     * Battery level: status.level
     * Charging:      status.isPlugged
     */
    
    window.currentBattery.src = `img/${Math.round(status.level / 10) * 10}.svg`
    window.currentBatteryLevel.textContent = `${status.level}%`
}

// Vars
const storage = window.localStorage

// Update values when changing slider
highBatteryLevel.addEventListener("input", () => {
    window.highBatteryLabel.textContent = `${window.highBatteryLevel.value}%`
})

lowBatteryLevel.addEventListener("input", () => {
    window.lowBatteryLabel.textContent = `${window.lowBatteryLevel.value}%`
})