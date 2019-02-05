const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/classes/${id}`).then(e => e.json());
  },
  getAll() {
    return fetch(`${remoteURL}/classes`).then(e => e.json());
  },
  post(newClass) {
    return fetch(`${remoteURL}/classes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newClass)
    }).then(data => data.json());
  },
  put(classId, existingClass) {
    return fetch(`${remoteURL}/classes/${classId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(existingClass)
    }).then(data => data.json());
  },
  removeAndList(id){
    return fetch(`http://localhost:5002/classes/${id}`, {
        method: "DELETE"
    })
    .then(e => e.json())
    .then(() => fetch(`http://localhost:5002/classes`))
    .then(e => e.json())
}
  
}