    import { HttpClientModule, HttpClient } from '@angular/common/http';
    import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'assets/data/alphabet.json', name: 'Alphabet' },
      { id: 'assets/data/numbers.json', name: 'Numbers' },
      { id: 'assets/data/Phrases.json', name: 'Phrases' }
    ];
  }

}
