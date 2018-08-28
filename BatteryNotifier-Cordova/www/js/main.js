
// Add listener for when device is ready
document.addEventListener("deviceready", onDeviceReady, false)

// Device is ready
function onDeviceReady()
{
    console.log("Device ready!")

    // Handle pause and resume events
    document.addEventListener("pause", onPause, false)
    document.addEventListener("resume", onResume, false)
}

function onPause()
{
    // TODO
}

function onResume()
{
    // TODO
}

// Vars
const storage = window.localStorage