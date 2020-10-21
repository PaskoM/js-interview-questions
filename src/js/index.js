import users from '../data/users.json';
import posts from '../data/posts.json';
import comments from '../data/comments.json';

const $app = document.getElementById('app');

function renderPost(post) {
  return '';
}

$app.innerHTML = `<ul>${posts.data.map(renderPost).join('')}</ul>`;
