// question no 1 solution
function maxproductsubarray(nums){
  if(nums.lengthhhh === 0)return 0;
  let maxproduct = number[0]
  let minproduct = number[0]
  let result = number[0]

for (let i = 1; i < number.length; i++) {
  if(nums[i] < 0){
       let temp = maxproduct;
       maxproduct = minproduct;
        minproduct = temp;
  }
    maxproduct = Math.max(number[i], maxproduct * number[i]);
    minproduct = Math.min(number[i], minproduct *number[i]);
    result = Math.max(result, maxproduct);

}
return result;
}

const number = [2, 3, -2, 4]
console.log(maxproductsubarray(number));

// question no 5 solution
function amountTocoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat( amountTocoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return amountTocoins(amount, coins);
        }
    }
} 
console.log(amountTocoins(46, [25, 10, 5, 2,1]));
// question no 2
function twoSum(nums, target){
  const map = new Map();
  for (let i = 0 ; i <nums.length; i++){
    const complement = target -nums[i];
    if (map.has(complement)){
      return[map.get(complement), i];
    }
   map.set(nums[i], i)
  }
  return null;
}
 const nums = [2, 7, 11, 15];
 const target = 9 ;
 console.log(twoSum(nums, target));
 // question no 3 solution
var string = "welcome to this javascript guide";
var reverseallstrings = reverseWord(string,"");
console.log(reverseallstrings);

var output = reverseWord(reverseallstrings," ");
console.log(output);

function reverseWord(string,separator){
  return string.split(separator).reverse().join(separator);
}
//  question no 4
var library = [ 
  {
      title: 'Bill Gates',
      author: 'The Road Ahead',
      readingStatus: true
  },
  {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      readingStatus: true
  },
  {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      readingStatus: false
  }];

for (var i = 0; i < library.length; i++) 
 {
  var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
  if (library[i].readingStatus) {
    console.log("Already read " + book);
  } else
  {
   console.log("You still need to read " + book);
  }
 }