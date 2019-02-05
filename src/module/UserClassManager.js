const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/userClasses/${id}`).then(e => e.json());
  },
  getAll() {
    return fetch(`${remoteURL}/userClasses`).then(e => e.json());
  },
  getUserSpecificClasses(sessionId) {
    return fetch(`${remoteURL}/userClasses?userId=${sessionId}&_expand=class`)
    .then(e => e.json());
    }
}