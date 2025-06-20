const divide = (arr, n) => {
  const result = [];
  let current = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (sum + arr[i] <= n) {
      current.push(arr[i]);
      sum += arr[i];
    } else {
      if (current.length > 0) {
        result.push(current);
      }
      current = [arr[i]];
      sum = arr[i];
    }
  }

  if (current.length > 0) {
    result.push(current);
  }

  return result;
};

// Example usage:
c
