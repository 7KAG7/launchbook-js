// Exercise 1): Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
document.getElementsByTagName('nav')[0];
// Exercise 2): Find the sidebar on the left by using its id and set it equal to the variable sideBar.
document.getElementById('sidebar-left');
// Exercise 3): Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
document.getElementsByClassName('pages')[0];
document.getElementsByClassName('groups')[0];
// Exercise 4): Set the text of the 'Favorites' `h5` to say "Least Favs".
document.getElementsByClassName('favorites')[0];
<div class=​"favorites">​<h5>​Least Favs​</h5>​<ul class=​"side-nav">​…​</ul>​</div>​
// Exercise 5): Find the first of the ads in the sidebar and hide it.
let hideFirstAd = document.getElementsByClassName('ad-slot')[0];
hideFirstAd.style.visibility = 'hidden';
// Exercise 6): Set the visibility on the ad that you hid in the previous exercise to make it visible again.
hideFirstAd = hideFirstAd.style.visibility = 'visible';
// Exercise 7): Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.
document.getElementById('sidebar-right').getElementsByTagName('img')[0].src = "http://placebear.com/200/300";
// Exercise 8): Find Sam's post and change its text to something incredible.
document.getElementById('list-of-posts').getElementsByTagName('p')[4].innerText = "Something Incredible"
// Exercise 9): Find the first post and add the `.post-liked` class to it, and watch it turn blue.
let adamLike = document.getElementsByClassName('inline-list post-actions')[0];
let likeLink = adamLike.getElementsByTagName('a')[0];
likeLink.className = likeLink.className + '.post-liked'
// Exercise 10: Find the second post and add the `.post-shared` class to the `li` containing the text Shared to watch it turn red.
