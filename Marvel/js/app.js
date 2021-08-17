const marvel = {
  render: () => {
    
    const urlAPI = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=a9352d39c652e164050c2b250d05bda6&hash=a911235d7f28e280b420a54c5a7a686a';
    const container = document.querySelector('#marvel-row');
    let contentHTML = '';

    fetch(urlAPI)
      .then(res => res.json())
      .then((json) => {
        for (const hero of json.data.results) {
          let urlHero = hero.urls[0].url;
          contentHTML += `
            <div class="col-md-4">
                <a href="${urlHero}" target="_blank">
                  <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                </a>
                <h3 class="title">${hero.name}</h3>
            </div>`;
        }
        container.innerHTML = contentHTML;
      })
  }
};
marvel.render();