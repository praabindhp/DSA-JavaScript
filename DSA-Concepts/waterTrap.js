function trap(height) {
    if (height === null || height.length === 0) return 0;

    let leftMax = [];
    let rightMax = [];
    let result = 0;

    leftMax[0] = height[0];
    for (let i = 1; i < height.length; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    rightMax[height.length - 1] = height[height.length - 1];
    for (let i = height.length - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    for (let i = 0; i < height.length; i++) {
        result += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return result;
}
