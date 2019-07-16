// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

//Assigns .headerContainer to variable
const headContainer = document.querySelector('.header-container')

function Header() {
    

    //Creates elements
    const headerWrap = document.createElement('div');
    const dateSpan = document.createElement('span');
    const h1Text = document.createElement('h1');
    const tempSpan = document.createElement('span');

    //Assigns children to parent element
    headerWrap.appendChild(dateSpan);
    headerWrap.appendChild(h1Text);
    headerWrap.appendChild(tempSpan);

    

    //Assings classes to elements
    headerWrap.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    //Assigns data to elements
    dateSpan.textContent= "SMARCH 28, 2019";
    h1Text.textContent = "Lambda Times";
    tempSpan.textContent = "98°";

    headContainer.appendChild(headerWrap);
}

Header();

