export function fruit(reels: string[], spins: number[]): number {
  return new FruitMachine(reels, spins).score;
}

class FruitMachine {
  private static readonly SCORES = {
    Wild: 10,
    Star: 9,
    Bell: 8,
    Shell: 7,
    Seven: 6,
    Cherry: 5,
    Bar: 4,
    King: 3,
    Queen: 2,
    Jack: 1,
  };

  private static readonly ALL_MODIFIER = 10;
  private static readonly WILD_MODIFIER = 2;

  private _reels: string[];
  private _spins: number[];
  private _items: string[];
  private _score: number;

  constructor(reels: string[], spins: number[]) {
    this._reels = reels;
    this._spins = spins;
    this._items = this.calc_items();
    this._score = this.calc_score();
  }

  public get score(): number {
    return this._score;
  }

  private calc_score() {
    let score = 0;
    const wildCount = this.item_count("Wild");

    for (const key in FruitMachine.SCORES) {
      if (FruitMachine.SCORES.hasOwnProperty(key)) {
        switch (this.item_count(key)) {
          case 3:
            score = FruitMachine.SCORES[key] * FruitMachine.ALL_MODIFIER;
            break;
          case 2:
            score = wildCount === 1 ? FruitMachine.SCORES[key] * FruitMachine.WILD_MODIFIER : FruitMachine.SCORES[key];
            break;
        }
      }
    }

    return score;
  }

  private calc_items(): string[] {
    const items = [];
    for (let i = 0; i < this._reels.length; i++) {
      items.push(this._reels[i][this._spins[i]]);
    }
    return items;
  }

  private item_count(name: string): number {
    return this._items.filter((item) => item === name).length;
  }