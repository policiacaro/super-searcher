
const keyword = document.querySelector("#search");
const submit = document.querySelector("#submit");
const results = document.querySelector("#results");

document.addEventListener("keyup", (event) => {
  event.preventDefault();
  const url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${keyword.value}?key=bfb2a07b-30c2-4947-8014-512e620ae801`;

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      //console.log(data);
      results.innerHTML = "";
      data.forEach((word) => {
        //console.log(word);
        //console.log(word.hwi);
        results.insertAdjacentHTML("beforeend",
          `<li>
            <p>${word.hwi.hw}    <i>(${word.fl})</i></p>
            <p>${word.shortdef[0]}</p>
            <a href=https://www.merriam-webster.com/dictionary/${keyword.value}><img src="https://dictionaryapi.com/images/MWLogo_120x120.png" border="0" alt="Merriam-Webster Dictionary" width="50" height="50"></a>
            <a href=https://www.dictionary.com/browse/${keyword.value}><img src="https://www.dictionary.com/e/wp-content/uploads/2020/09/App-Icon-9.23.2020.png" border="0" alt="Dictionary.com Dictionary" width="50" height="50"></a>
            <a href=https://en.wikipedia.org/wiki/${keyword.value}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wikipedia-logo-v2-en.svg/1920px-Wikipedia-logo-v2-en.svg.png" border="0" alt="Wikipedia" width="50" height="50"></a>
          </li>`
        );
      });
      /*
      if (data.words != null) {
        console.log(data);
        const words = data.words;

        words.forEach((word) => {
          results.insertAdjacentHTML("beforeend",
            `<li>
              <p>${word}</p>
              <a href=https://www.merriam-webster.com/dictionary/${word}><img border="0" src="https://dictionaryapi.com/images/MWLogo_120x120.png" alt="Merriam-Webster Dictionary" width="50" height="50"></a>
              <a href=https://www.dictionary.com/browse/${word}><img border="0" src="https://www.dictionary.com/e/wp-content/uploads/2020/09/App-Icon-9.23.2020.png" alt="Dictionary.com Dictionary" width="50" height="50"></a>
            </li>`);
        });
      }*/
    });
});
/*
submit.addEventListener("click", (event) => {
  event.preventDefault();

  const url = "https://wagon-dictionary.herokuapp.com/autocomplete/".concat(keyword.value);

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      results.innerHTML = "";
      const words = data.words;

      words.forEach((word) => {
        const wordTag = `<li>${word}</li>`;
        results.insertAdjacentHTML("beforeend", wordTag);
      });
    });
});

*/
