// Server Status (Mock Data)
const serverStatus = document.getElementById('status');
const onlinePlayers = document.getElementById('players');

// Simulate server status check
setTimeout(() => {
  serverStatus.textContent = 'Online';
  serverStatus.style.color = '#00ff00';
  onlinePlayers.textContent = '42'; // Replace with real data
}, 2000);

// Leaderboard Data (Mock Data)
const leaderboardData = [
  { rank: 1, player: 'Player1', level: 50, points: 1200 },
  { rank: 2, player: 'Player2', level: 48, points: 1150 },
  { rank: 3, player: 'Player3', level: 45, points: 1100 },
  { rank: 4, player: 'Player4', level: 43, points: 1050 },
  { rank: 5, player: 'Player5', level: 40, points: 1000 },
];

const leaderboardTable = document.querySelector('#leaderboard-table tbody');

leaderboardData.forEach((entry) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${entry.rank}</td>
    <td>${entry.player}</td>
    <td>${entry.level}</td>
    <td>${entry.points}</td>
  `;
  leaderboardTable.appendChild(row);
});

// News Feed (Mock Data)
const newsFeed = document.getElementById('news-feed');
const newsData = [
  { title: 'New Mega Structure Added!', content: 'Explore the new "Ender Citadel" and claim rare loot!' },
  { title: 'Community Event: Survival Race', content: 'Join us this weekend for a thrilling survival race!' },
];

newsData.forEach((news) => {
  const newsItem = document.createElement('div');
  newsItem.classList.add('news-item');
  newsItem.innerHTML = `
    <h3>${news.title}</h3>
    <p>${news.content}</p>
  `;
  newsFeed.appendChild(newsItem);
});
