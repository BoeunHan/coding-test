function solution(genres, plays) {
  const songs = {};
  const totalPlays = {};

  for (let i = 0; i < genres.length; i++) {
    const prevSongs = songs[genres[i]] || [];
    const prevPlays = totalPlays[genres[i]] || 0;
    songs[genres[i]] = [...prevSongs, { id: i, play: plays[i] }];
    totalPlays[genres[i]] = prevPlays + plays[i];
  }

  const orderedGenre = Object.entries(totalPlays).sort(
    ([, aPlays], [, bPlays]) => bPlays - aPlays
  );

  const answer = [];

  for (const [genre] of orderedGenre) {
    const songList = songs[genre].sort((a, b) => b.play - a.play);

    answer.push(songList[0].id);
    if (songList[1]) answer.push(songList[1].id);
  }

  return answer;
}
