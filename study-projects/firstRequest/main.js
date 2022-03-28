const form = document.querySelector('#form');
const showsContainer = document.querySelector('.shows');

const limitShows = (data) => {
  let numberOfShows = [];
  if (data.length >= 5) {
    for (let i = 0; i < 5; i++) {
      numberOfShows.push(data[i]);
    }
  } else {
    for (let show of data) {
      numberOfShows.push(show);
    }
  }

  return numberOfShows;
};

const publishShows = (shows) => {
  for (let show of shows) {
    const img = document.createElement('img');
    const title = document.createElement('h1');
    const div = document.createElement('div');
    img.src = show.show.image.medium;
    title.textContent = show.show.name;

    div.appendChild(title);
    div.appendChild(img);
    showsContainer.appendChild(div);
  }
};

form.addEventListener('click', async (e) => {
  e.preventDefault();
  const userInput = document.querySelector('#userInput').value;
  const URL = `https://api.tvmaze.com/search/shows?q=${userInput}`;

  //make the request
  const res = await axios.get(URL);
  const shows = await limitShows(res.data);
  publishShows(shows);
});
