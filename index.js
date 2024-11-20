/*Task 02:

Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API.
 Use await to wait for the API response and then log the data.*/

async function parallelCalls(urls) {
  await Promise.all(
    urls.map((item) => {
      return new Promise((resolve, reject) => {
        fetch(item)
          .then((data) => resolve(data.json()))
          .catch((error) => reject(error));
      });
    })
  )
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

console.log(
  parallelCalls([
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
  ])
);

/*Task 01:

Iterating with Async/Await: Write an async function iterateWithAsyncAwait that 
takes an array of values and logs each value with a delay of 1 second between logs.*/
async function iterateWithAsyncAwait(params) {
  for (let x of params) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(x);
  }
  return;
}

iterateWithAsyncAwait([2, 3, 4, 5, 6]);

/*Task 03:

Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. 
If the API call fails, catch the error and log a user-friendly error message.*/

const APICall = async () => {
  try {
    const result = await fakeCall("https://jsonplaceholder.typicode.com/user");
    console.log("API call succeded", result);
  } catch (err) {
    console.log("Something went wrong with your API call", err.message);
  }
};
APICall();
