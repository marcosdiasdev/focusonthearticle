var article = document.querySelector('article');
var body = document.querySelector('body');
var backup = body.innerHTML;

if(!article) {
    alert('No article found in this page.');
} else {
    body.innerHTML = article.innerHTML;
}
