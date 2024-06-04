// hexToRgb("#FF0000"); 
// Output: {r: 255, g: 0, b: 0}

// hexToRgb("#00FF00"); 
// Output: {r: 0, g: 255, b: 0}

function hexToRgb(hex) {
    let r = parseInt(hex.substring(1, 3), 16)
    let g = parseInt(hex.substring(3, 5), 16)
    let b = parseInt(hex.substring(5, 7), 16)
    return { r, g, b }
}

console.log(hexToRgb("#FFA80A")) // { r: 255, g: 0, b: 0 }
console.log(hexToRgb("#00FF00")) // { r: 0, g: 255, b: 0 }