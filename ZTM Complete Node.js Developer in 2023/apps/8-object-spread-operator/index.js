// Object spread operator
const numbers = {
    ten: 10,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50
};

const { ...all } = numbers;
console.log('all', all);

// const { ten, ...rest } = numbers;
// console.log('ten', ten);
// console.log('rest', rest);

// const { twenty, ...rest } = numbers;
// console.log('twenty', twenty);
// console.log('rest', rest);

// const { ninety, ...rest } = numbers;
// console.log('ninety', ninety);
// console.log('rest', rest);

const { ten, twenty, thirty, ...rest } = numbers;
console.log('ten', ten);
console.log('twenty', twenty);
console.log('thirty', thirty);
console.log('rest', rest);
