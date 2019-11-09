class Statistics {
  constructor() {
    this.gameResults = [];
  }

  addGameToStatistics(win, bid) {
    let gameResult = {
      win: win,
      bid: bid,
    };
    this.gameResults.push(gameResult);
  }

  showGameStatistics() {
    let games = this.gameResults.length;
    let wins = this.gameResults.filter(result => result.win).length;
    let losts = this.gameResults.filter(result => !result.win).length;
    return [games, wins, losts]
  }

}