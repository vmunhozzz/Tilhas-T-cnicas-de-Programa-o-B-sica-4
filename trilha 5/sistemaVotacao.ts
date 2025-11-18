abstract class VoteSystem {
  abstract voteFor(candidate: string): void;
  abstract getResults(): object;
}

class Election extends VoteSystem {
  protected votes: Record<string, number> = {};

  voteFor(candidate: string): void {
    this.votes[candidate] = (this.votes[candidate] || 0) + 1;
  }

  getResults(): object {
    return this.votes;
  }
}

class Poll extends VoteSystem {
  protected votes: Record<string, number> = {};

  voteFor(candidate: string): void {
    this.votes[candidate] = (this.votes[candidate] || 0) + 1;
  }

  getResults(): object {
    const sorted = Object.entries(this.votes).sort((a, b) => b[1] - a[1]);
    return sorted.map(([candidate, votos]) => ({ candidate, votos }));
  }
}
