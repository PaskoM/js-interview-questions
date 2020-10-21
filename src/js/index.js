import users from '../data/users.json';
import posts from '../data/posts.json';
import comments from '../data/comments.json';

const $app = document.getElementById('app');

function renderPost(post) {
  // TODO display the list of posts with their authors and commenters - focus on performance and efficiency!
  return '';
}

$app.innerHTML = `<ul>${posts.data.map(renderPost).join('')}</ul>`;
