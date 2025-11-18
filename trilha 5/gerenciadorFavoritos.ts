abstract class FavoriteManager {
  abstract addFavorite(item: string): void;
  abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
  private movies: string[] = [];

  addFavorite(item: string): void {
    if (!this.movies.includes(item)) {
      this.movies.push(item);
      this.movies.sort(); 
    }
  }

  getFavorites(): string[] {
    return this.movies;
  }
}

class BooksFavoriteManager extends FavoriteManager {
  private books: string[] = [];

  addFavorite(item: string): void {
    this.books.unshift(item); 
  }

  getFavorites(): string[] {
    return this.books;
  }
}
