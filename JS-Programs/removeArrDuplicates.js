function remove(nums) {
  let map = {};
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = true;
      result.push(nums[i]);
    }
  }
  return result;
}

nums = [5, 6, 3, 8, 3, 8, 9];
console.log(remove(nums));
