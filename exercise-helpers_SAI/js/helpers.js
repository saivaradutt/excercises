'use strict';

const numbers = [45,33,9,67,22];
console.log('Numbers are', numbers)
console.log('Get First Number:' , getFirst(numbers));
console.log('Get Last Number:' , getLast(numbers));
console.log('Average is' , getAverage(numbers));
console.log('Minimum is' , getMinimum(numbers));
console.log('Maximum is' , getMaximum(numbers));
console.log('Total is' , getTotal(numbers));

function getFirst(numbers){
for(let i=0; i<numbers.length;i++)
{
return numbers[0]
}
}
function getLast(numbers){
    for(let i=0; i<numbers.length;i++)
    {
    return numbers[4]
    }
    }
    function getAverage(numbers){
        let sum =0;
        for(let i=0; i<numbers.length;i++)
        {
          sum = sum+numbers[i]
        }
        return sum/5
        }
        function getTotal(numbers){
            let total =0;
            for(let i=0; i<numbers.length;i++)
            {
              total = total+numbers[i]
            }
            return total
            }
            function getMinimum(numbers){
                let min = numbers[0];
                for(let i=0; i<numbers.length;i++)
                {
                  if(min > numbers[i])
                  min = numbers[i]
            }
                return min
                }
                function getMaximum(numbers){
                    let max = numbers[0];
                    for(let i=0; i<numbers.length;i++)
                    {
                      if(max < numbers[i])
                      max = numbers[i]
                }
                    return max
                    }