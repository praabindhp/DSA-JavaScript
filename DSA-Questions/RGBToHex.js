// rgbToHex(255, 0, 0); 
// Output: "#FF0000"

// rgbToHex(0, 255, 0); 
// Output: "#00FF00"

function rgbToHex(r, g, b) {
    let hex = (r << 16 | g << 8 | b).toString(16).toUpperCase()
    // 255 168 10 // ff a8 0a // FF A8 0A
    return "#" + hex.padStart(6, "0")
}

console.log(rgbToHex(255, 168, 10)) // FF A8 0A