
const main = async(num) =>{  
        let url = `https://dog.ceo/api/breeds/image/random`;
        await fetch(url)
          .then(res => res.json())
          .then(data => print(data))
          .catch(err => console.log(err))
}

const print = (data) => {
    let card = `<div class="card" style="width: 18rem;">
    <img src="${data.message}" class="card-img-top" alt="...">
    <div class="card-body">
    <p><b>Perro al azar</b></p> 
    </div>
  </div>`

  document.getElementById('cardsContainer').innerHTML +=card;
}
main()
