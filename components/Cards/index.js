// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector('.cards-container');

axios.get(' https://lambda-times-backend.herokuapp.com/articles')
    .then(data => {
        console.log('Server request to /articles successful.')
        console.log(typeof data.data.articles, data.data.articles)

        Object.entries(data.data.articles).forEach(article => {

            const trimmedArticle = article[1]

            trimmedArticle.forEach(item => {
            
            
            
            function createCard (param) {
            //Creates elements
            const cardContainer = document.createElement('div');
            const headline = document.createElement('div');
            const author = document.createElement('div');
            const imgContainer = document.createElement('div');
            const image = document.createElement('img');
            const authorCredit = document.createElement('span');
    

            //Assigns children to parents
            cardContainer.appendChild(headline);
            cardContainer.appendChild(author);
            cardContainer.appendChild(authorCredit);
            author.appendChild(imgContainer);
            imgContainer.appendChild(image);
    
            //Gives elements data from paramenter passed through
            headline.textContent = param.headline;
            image.src = param.authorPhoto;
            authorCredit.textContent = param.authorName

            //Gives Elements Classes
            cardContainer.classList.add('card');
            headline.classList.add('headline');
            author.classList.add('author');
            imgContainer.classList.add('img-container');
            
            cardsContainer.appendChild(cardContainer);
            }
            createCard(item);

            })
            
        });
    
})

//console.log('Path guide -->', data.data.articles.bootstrap[1].headline);
