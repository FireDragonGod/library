const helloWorld = 'Hello, World!';

let myLibrary = [];

const Book = function bookInfo(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
};

const toMyLibrary = function addToMyLibrary(title, author, page, read) {
  let userInput = new Book(title, author, page, read);
  return myLibrary.push(userInput);
};

const card = function displayElementInTheDom() {
  let index = 0;
  for (let j = 0; j < myLibrary.length; j++) {
    index = j;
  }
  let lastBook = myLibrary.slice(-1);
  for (let i = 0; i < lastBook.length; i++) {
    const mainWrapperCards = document.querySelector('.main_wrapper_cards');
    const mainCard = document.createElement('div');
    const page = document.createElement('p');
    const title = document.createElement('h2');
    const author = document.createElement('p');
    const div = document.createElement('div');
    const readButton = document.createElement('button');    
    const removeButton = document.createElement('button');
    
    page.textContent = lastBook[i].page;
    title.textContent = lastBook[i].title;
    author.textContent = lastBook[i].author;
    readButton.textContent = lastBook[i].displayReadStatusOnCheckbox();
    removeButton.textContent = 'remove';

    mainCard.classList.add('main_card');
    readButton.classList.add('read');
    removeButton.classList.add('remove');

    mainCard.setAttribute('data-index', `${index}`);
    removeButton.setAttribute('data-index', `${index}`);
    readButton.setAttribute('data-index', `${index}`);
    
    mainWrapperCards.appendChild(mainCard);
    mainCard.appendChild(page);
    mainCard.appendChild(title);
    mainCard.appendChild(author);
    mainCard.appendChild(div);
    div.appendChild(readButton);
    div.appendChild(removeButton);

    if (readButton.textContent === 'not read') {
      readButton.classList.add('not-yet-read');
    }
    if (readButton.textContent === 'read') {
      readButton.classList.remove('not-yet-read');
    }
  }
  title.value = '';
  author.value = '';
  page.value = '';
  read.checked = false;
};

const newBook = document.querySelector('.new_book');
const aside = document.querySelector('aside');
const closeForm = document.querySelector('.close');

newBook.addEventListener('click', function showsForm() {
  aside.classList.add('aside_form_scale_to_one')
});

closeForm.addEventListener('click', function closeForm() {
  aside.classList.remove('aside_form_scale_to_one')
});


const cardRemover = function enableRemovingCard() {
  const remove = document.querySelectorAll('.remove');
  const mainCard = document.querySelectorAll(`.main_card`);

  let index = 0;
  for (let i = 0; i < myLibrary.length; i++) {
    index = i;
  }

  remove.forEach((button) => {

    button.addEventListener('click', (event) => {

      for (const card of Array.from(mainCard)) {
        if (event.target.getAttribute('data-index') === `${index}` && card.getAttribute('data-index') === `${index}`) {
          card.remove();
        }
      }
    });
  });
};



const submitForm = function submitFormWhenCertainValuesAreTrueORNotEqualToUndefined(event) {
  if (title.value !== '' && author.value !== '' && page.value !== '' && read.value !== '') {
    event.preventDefault();
    aside.classList.remove('aside_form_scale_to_one');
    toMyLibrary(title.value, author.value, page.value, read.checked);
    card();
    cardRemover();
    readStatus();
  }
};
