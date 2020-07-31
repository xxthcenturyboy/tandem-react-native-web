class Maths {
  constructor(arr: number[]) {
    this.arr = arr;
  }

  arr: number[];

  mean = (): number => this.arr.reduce((acc, val) => acc + val, 0) / this.arr.length;

  median = (): number => {
    const mid = Math.floor(this.arr.length / 2);
    const nums = [...this.arr].sort((a, b) => a - b);
    return this.arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  }

  mode = (): number[] => {
    let modes = [];
    let count: number[] = [];
    let i = 0;
    let number;
    let maxIndex = 0;

    for (i = 0; i < this.arr.length; i += 1) {
        number = this.arr[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }

    for (const i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }

    return modes;
  }

  stdDev = (): number => {
    const mean = this.mean();
    return Math.sqrt(this.arr.reduce((sq, n) => sq + Math.pow(n - mean, 2), 0) / (this.arr.length - 1));
  };
}

export { Maths }
