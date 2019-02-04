const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/classes/${id}`).then(e => e.json());
  },
  getAll() {
    return fetch(`${remoteURL}/classes`).then(e => e.json());
  }
}