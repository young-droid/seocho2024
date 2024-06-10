//Rewrite the code below to use array destructuring instead of assigning each value to a variable.
{
  console.log('EXERCISE 1');

  let item = ['Egg', 0.25, 12];

  let name = item[0];
  let price = item[1];
  let quantity = item[2];

  console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
  console.log();
}

{
  console.log('EXERCISE 1 practice');
  let item = ['Egg', 0.25, 12];
  let [name, quantity, price] = ['Egg', 0.25, 12];
  console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
}

/**
  Exercise 2
  Rewrite the code below to assign each number to the right variable.
  */
{
  console.log('EXERCISE 2');

  let numbers = [3, 5, 4, 2, 6, 1];

  let [one, two, three, four, five, six] = numbers;

  console.log(
    `One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`
  );
  console.log();
}
{
  console.log('EXERCISE 2 practice');

  let numbers = [3, 5, 4, 2, 6, 1];

  let [three, five, four, two, six, one] = numbers;

  console.log(
    `One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`
  );
  console.log();
}
