(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    answer.innerHTML = "Processing...";
    setTimeout(function () {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: "Tytuł nieskomplikowany",
          body: "Treść drogocenna",
          userId: 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(post => {
          answer.innerHTML =
            `Nowy post o ID = ${post.id} oraz treści ${post.body}`;
        })
    }, 2000);
  })
  
  cw2.addEventListener("click", function () {
    //TODO
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();