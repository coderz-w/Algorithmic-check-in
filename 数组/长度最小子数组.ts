function minSubArrayLen(target: number, nums: number[]): number {
  let length = Infinity;
  let start = 0;
  let end = 0;
  let sum = 0;
  while (end < nums.length) {
    sum += nums[end];
    while (sum >= target && start <= end) {
      length = Math.min(length, end - start + 1);
      sum = sum - nums[start];
      start++;
    }
    end++;
  }
  return length == Infinity ? 0 : length;
}
