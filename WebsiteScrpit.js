const readMoreButton = document.getElementById('read-more');
const articleContent = document.querySelector('article p');

readMoreButton.addEventListener('click', () => {
	articleContent.classList.toggle('show-more');
	if (readMoreButton.innerText === 'Read More') {
		readMoreButton.innerText = 'Read Less';
	} else {
		readMoreButton.innerText = 'Read More';
	}
});