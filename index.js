const main = document.querySelector('#news');

const news = [
  {src: './img1.jpeg', title: 'Отличная погода!', text: 'Синоптики обещают отличную погоду в течение всего сезона', button: 'Подробнее'},
  {src: './img1.jpeg', title: 'Отличная погода!', text: 'Синоптики обещают отличную погоду в течение всего сезона', button: 'Подробнее'},
  {src: './img1.jpeg', title: 'Отличная погода!', text: 'Синоптики обещают отличную погоду в течение всего сезона', button: 'Подробнее'},
]

news.forEach((value) => {
  let article = document.createElement('article');
  article.classList.add("new");
  let img = document.createElement('img');
  img.src = `${value.src}`;
  let h3 = document.createElement('h3');
  h3.innerHTML = value.title;
  let p = document.createElement('p');
  p.innerHTML = value.text;
  let button = document.createElement('button');
  button.innerHTML = value.button;

  article.append(img, h3, p, button);
  main.append(article);
})
