const loginBtn = document.getElementById('login-btn');
const topArtistsEl = document.getElementById('top-artists');
const topTracksEl = document.getElementById('top-tracks');
const totalTimeEl = document.getElementById('total-time');

const clientId = "120f278fd893495b892c96ea0ce653da";
const redirectUri = "https://mandoquest.github.io/spotify/Spotify.html";
const scopes = "user-top-read user-read-recently-played";

loginBtn.addEventListener('click', () => {
  const authUrl = 
  `https://accounts.spotify.com/authorize` +
  `?client_id=${clientId}` +
  `&response_type=code` +   // statt token
  `&redirect_uri=${encodeURIComponent(redirectUri)}` +
  `&scope=${encodeURIComponent(scopes)}`;
  window.location.href = authUrl;
});

const hash = window.location.hash;
if (hash) {
  const token = new URLSearchParams(hash.substring(1)).get('access_token');
  if (token) {
    window.location.hash = '';
    fetchTopData(token);
  }
}

// Daten holen
async function fetchTopData(token) {
  try {
    const headers = { Authorization: `Bearer ${token}` };

    // Top Artists
    const artistsRes = await fetch('https://api.spotify.com/v1/me/top/artists?limit=5&time_range=long_term', { headers });
    const artistsData = await artistsRes.json();
    topArtistsEl.innerHTML = artistsData.items.map(a => `<li>${a.name}</li>`).join('');

    // Top Tracks
    const tracksRes = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=long_term', { headers });
    const tracksData = await tracksRes.json();
    topTracksEl.innerHTML = tracksData.items.map(t => `<li>${t.name} – ${t.artists[0].name}</li>`).join('');

    // Hörzeit (geschätzt über zuletzt gespielte Tracks)
    const recentRes = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=50', { headers });
    const recentData = await recentRes.json();

    let totalMs = 0;
    recentData.items.forEach(item => {
      totalMs += item.track.duration_ms;
    });
    const hours = (totalMs / 1000 / 60 / 60).toFixed(1);
    totalTimeEl.textContent = `${hours} Stunden (nur aus den letzten 50 Songs)`;

  } catch (err) {
    console.error(err);
    totalTimeEl.textContent = 'Fehler beim Laden der Daten.';
  }
}
