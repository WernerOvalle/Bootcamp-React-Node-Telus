const range = (start, end, step = 1) => {
  if (start === end) {
    return [start];
  } else if (start > end) {
    return [];
  } else {
    return [start, ...range(start + step, end, step)];
  }
};

console.log(range(1, 20,3));
