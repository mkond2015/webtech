// Fizzbuzz Assignment
//logs numbers 1 to 100, logs "Fizz" for multiple of 3 instead of the number, "Buzz" for multiples of 5 instead 
// of the number and "FizzBuzz if the numbers is a multiple of both 3 and 5"

for (var x = 1; x <= 100 ; x++)
{
  if (x % 3 == 0 && x % 5 == 0)
  {
    console.log("Fizzbuzz")
    continue
  }
  if (x % 5 == 0)
  {
    console.log("Buzz")
    continue
  }
  if (x % 3 == 0)
  {
    console.log("Fizz")
    continue
  }
  else
  {
    console.log(x)
  }
}