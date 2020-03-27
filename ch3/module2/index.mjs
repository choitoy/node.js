import { odd, even } from './var';
import checkNumber from './func';

function checkStringOddOrEven(str) {
    if (str.length % 2) {
        return odd;
    }
    return even;
}
console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));

export default checkStringOddOrEven;