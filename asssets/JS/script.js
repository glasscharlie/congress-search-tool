var homepageButton = document.querySelector("#")

console.log('sign of life')


function getApi(event) {
    var format = 'notated-music'
    var search = 'piano'

    var requestUrl = `https://www.loc.gov/${format}/?q=${search}&fo=json&sb=title_s`;
    
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.results[0].title)
        console.log(data.results[0].date)
        console.log(data.results[0].description)
        console.log(data.results[0].url)

        // for (var i = 0; i < data.length; i++) {

        //   var listItem = document.createElement('li');
  
        //   listItem.textContent = data[i].html_url;
  
        //   repoList.appendChild(listItem);
        // }
      });
  }


  
homepageButton.addEventListener('click', getApi);