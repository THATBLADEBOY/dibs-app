export default {
    get(id) {
      return fetch(`https://api.chucknorris.io/jokes/random`).then(e => e.json());
    }
}