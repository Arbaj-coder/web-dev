console.log("Hello world!")
let con = document.body.childNodes

document.body.firstElementChild

con[1].firstElementChild

con[1].lastElementChild

con[1].lastElementChild.style.color = "red";
con[1].lastElementChild.style.backgroundColor = "green";



document.body.firstElementChild

// <div class=​"container">​…​</div>​

document.body.firstElementChild.childNodes

//NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

document.body.firstElementChild.children

// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]

document.body.firstElementChild.children[3].nextElementSibling

// <div class=​"box" style=​"color:​ red;​ background-color:​ green;​">​box5​</div>​

document.body.firstElementChild.children[3].parentNode

// <div class=​"container">​…​</div>​