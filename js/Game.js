class Game {
  constructor(startMoney) {

    this.stats = new Statistics();
    this.wallet = new Wallet(startMoney);

    document.getElementById('start').addEventListener('click', this.startGame.bind(this));
    this.spanWallet = document.querySelector('.panel span.wallet');
    this.boards = [...document.querySelectorAll('div.color')];
    this.inputBid = document.getElementById('bid');
    this.spanResult = document.querySelector('.score span.result');
    this.spanGames = document.querySelector('.score span.number');
    this.spanWins = document.querySelector('.score span.win');
    this.spanLosses = document.querySelector('.score span.loss');

    this.render();
  }

  render(colors = ['gray', 'gray', 'gray', 'gray', 'gray'], money = this.wallet.getWalletValue(), result = '', winMessage = '', stats = [0, 0, 0], bid = 0, wonMoney = 0) {

    this.boards.forEach((board, index) => board.style.backgroundColor = colors[index]);
    this.spanWallet.textContent = money;
    if (result) result = `Wygrałeś ${wonMoney}: ${winMessage}`
    else if (!result && result !== "") result = `Przegrałeś ${bid}`
    this.spanResult.textContent = result;
    this.spanGames.textContent = stats[0];
    this.spanWins.textContent = stats[1];
    this.spanLosses.textContent = stats[2];
  }

  startGame() {
    if (this.inputBid.value < 1) return alert('Kwota, którą chcesz grać jest za mała!');
    const bid = Math.floor(this.inputBid.value);

    if (!this.wallet.checkCanPlay(bid)) return alert("masz za mało środków lub podana została nieprawidłowa wartość");
    this.wallet.changeWallet(bid, '-');

    this.draw = new Draw();
    const colors = this.draw.getDrawResult();
    const gameResult = new Result(colors, bid);
    const win = gameResult.gameWon();
    const wonMoney = gameResult.getWonMoney();
    const winMessage = `reguła (${gameResult.getRule().replace('various', 'różne').replace('same', 'takie same')} kolory)`;

    this.wallet.changeWallet(wonMoney, '+');
    this.stats.addGameToStatistics(win, bid);

    this.render(colors, this.wallet.getWalletValue(), win, winMessage, this.stats.showGameStatistics(), bid, wonMoney);
  }
}