class Result {
  constructor(draw, bid) {
    let _multipier = this.checkMultipier(draw);
    let _rule = this.checkRule(_multipier);

    this.gameWon = () => _multipier ? true : false;
    this.getWonMoney = () => _multipier * bid;
    this.getRule = () => _rule;
  }

  checkMultipier(draw) {
    if (draw[0] === draw[1] && draw[1] === draw[2] && draw[2] === draw[3] && draw[3] === draw[4]) {
      return 10;
    } else if (draw[0] !== draw[1] && draw[0] !== draw[2] && draw[0] !== draw[3] && draw[0] !== draw[4] && draw[1] !== draw[2] && draw[1] !== draw[3] && draw[1] !== draw[4] && draw[2] !== draw[3] && draw[2] !== draw[4] && draw[3] !== draw[4]) {
      return 4;
    } else if (draw[0] === draw[1] && draw[0] === draw[2] && draw[0] === draw[3] || draw[1] === draw[2] && draw[1] === draw[3] && draw[1] === draw[4]) {
      return 3
    } else if (draw[0] === draw[1] && draw[0] === draw[2] || draw[1] === draw[2] && draw[1] === draw[3] || draw[2] === draw[3] && draw[2] === draw[4]) {
      return 2
    } else return 0;
  }

  checkRule(multipier) {
    if (multipier === 10) return '5 x same';
    else if (multipier === 4) return 'various';
    else if (multipier === 3) return '4 x same';
    else if (multipier === 2) return '3 x same';
    else return '';
  }

}