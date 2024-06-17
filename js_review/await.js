//비동기,비동기
//동기
// async function callAPI() {
//     await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(res => res.json())
//         .then(res => console.log(res.title))
//     
// }
// callAPI();

//비동기
//  function callAPI2(){
//  fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => res.json())
//     .then(res => console.log(res.title))
//     console.log("fetch 호출")
// }

//callAPI2();

async function callAPI() {
    let post = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
      console.log(post.userId);
      console.log("fetch 호출")
}
