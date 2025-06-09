function getQueryParams() {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    imdb_id: urlParams.get('imdb_id'),
    tmdb_id: urlParams.get('tmdb_id'),
    season: urlParams.get('season'),
    episode: urlParams.get('episode')
  };
}

function loadPlayer() {
  const { imdb_id, tmdb_id, season, episode } = getQueryParams();
  let apiUrl = '';

  if (imdb_id) {
    apiUrl = `https://playerflixapi.com/filme/${imdb_id}`;
  } else if (tmdb_id && season && episode) {
    apiUrl = `https://playerflixapi.com/serie/${tmdb_id}/${season}/${episode}`;
  } else {
    document.getElementById('player-container').innerHTML = '<p style="color: white;">Parâmetros inválidos.</p>';
    return;
  }

  const iframe = document.createElement('iframe');
  iframe.src = apiUrl;
  iframe.allow = "autoplay; encrypted-media";
  iframe.allowFullscreen = true;

  const wrapper = document.getElementById('player-container');
  wrapper.innerHTML = '';
  wrapper.appendChild(iframe);
}

window.onload = loadPlayer;
