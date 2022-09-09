
const keyword = document.querySelector("#search");
const submit = document.querySelector("#submit");
const results = document.querySelector("#results");
let no_dict_results = false;
const dict_api_call = [];
//const wiki_api_call = [];

function dictionaryAPI () {
  results.innerHTML = "";
  const url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${keyword.value}?key=bfb2a07b-30c2-4947-8014-512e620ae801`;

  fetch(url)
    .then(response => response.json())
    .then ((data) => {  
      console.log("data response:");
      console.log(data);
      data.forEach((word) => {
        //console.log(word);
        results.insertAdjacentHTML("beforeend",
        //dict_api_call.push(
          `<li>
            <p>${word.hwi.hw}    <i>(${word.fl})</i></p>
            <p>${word.shortdef[0]}</p>
            <a href=https://www.merriam-webster.com/dictionary/${word.hwi}><img src="https://dictionaryapi.com/images/MWLogo_120x120.png" border="0" alt="Merriam-Webster Dictionary" width="50" height="50"></a>
            <a href=https://www.dictionary.com/browse/${word.hwi.hw}><img src="https://www.dictionary.com/e/wp-content/uploads/2020/09/App-Icon-9.23.2020.png" border="0" alt="Dictionary.com Dictionary" width="50" height="50"></a>
          </li>`
          );
        });
    });
}
// <a href=https://en.wikipedia.org/wiki/${word.hwi}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wikipedia-logo-v2-en.svg/1920px-Wikipedia-logo-v2-en.svg.png" border="0" alt="Wikipedia" width="50" height="50"></a>
function wikipediaAPI () {
  results.innerHTML = "";
  const api_url_keyword = (keyword.value).replaceAll(' ', '%20');
  const wiki_url_keyword = (keyword.value).replaceAll(' ', '_');
  const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=${api_url_keyword}&format=json`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.query.search.forEach((entry) => {
        results.insertAdjacentHTML("beforeend", 
          `<li>
            <p>${entry.title}</p>
            <p>${entry.snippet}</p>
            <a href=https://en.wikipedia.org/wiki/${(entry.title).replaceAll(' ', '%20')}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wikipedia-logo-v2-en.svg/1920px-Wikipedia-logo-v2-en.svg.png" border="0" alt="Wikipedia" width="50" height="50"></a>
          </li>`
        );
        /*wiki_api_call.push(
          `<li>
            <p>${definition.title}</p>
            <p><strong>${definition.snippet}</strong></p>
            <a href=https://en.wikipedia.org/wiki/${wiki_url_keyword}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wikipedia-logo-v2-en.svg/1920px-Wikipedia-logo-v2-en.svg.png" border="0" alt="Wikipedia" width="50" height="50"></a>
          </li>`
        );*/
      });
    });
}

function dict_display_results() {
  console.log("results being called");
  if ( dict_api_call.length > 0 ) {
    console.log("inside results if loop");
    dict_api_call.forEach((definition) => {
      results.insertAdjacentHTML("beforeend", definition);
    });
  }
  dict_api_call.length = 0;
}

document.addEventListener("submit", (event) => {
  event.preventDefault();

  if (event.submitter.id === "dict-search-button") {
    dictionaryAPI();
    /*dict_display_results();
    let i = 0;
    while (i < results.length) {
      results.insertAdjacentHTML("beforeend", dict_api_call[i]);
      console.log(`the results are being called ${i} times`);
      i++;
    }*/
    //console.log(dict_api_call);
  } else{
    wikipediaAPI();
  }
});

/*document.addEventListener("keyup", (event) => {
  event.preventDefault();

  if (keyword.value === "") {
    results.innerHTML = "";
  } else {
    dictionaryAPI();
    dict_display_results();
  } 
});*/


  //const url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${keyword.value}?key=bfb2a07b-30c2-4947-8014-512e620ae801`;
  
/*   fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data, "loggin' the data");
      results.innerHTML = "";
      if (data[0] === undefined) {

        results.insertAdjacentHTML("beforeend", );
      }
      data.forEach((word) => {
        console.log(word, "after json parse");
        console.log(word.hwi);
        results.insertAdjacentHTML("beforeend",
          `<li>
            <p>${word.hwi.hw}    <i>(${word.fl})</i></p>
            <p>${word.shortdef[0]}</p>
            <a href=https://www.merriam-webster.com/dictionary/${word.hwi}><img src="https://dictionaryapi.com/images/MWLogo_120x120.png" border="0" alt="Merriam-Webster Dictionary" width="50" height="50"></a>
            <a href=https://www.dictionary.com/browse/${word.hwi}><img src="https://www.dictionary.com/e/wp-content/uploads/2020/09/App-Icon-9.23.2020.png" border="0" alt="Dictionary.com Dictionary" width="50" height="50"></a>
            <a href=https://en.wikipedia.org/wiki/${word.hwi}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wikipedia-logo-v2-en.svg/1920px-Wikipedia-logo-v2-en.svg.png" border="0" alt="Wikipedia" width="50" height="50"></a>
          </li>`
        );
      });
    }); */
