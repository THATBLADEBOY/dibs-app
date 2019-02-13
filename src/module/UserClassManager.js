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
    },

   getUsersInSpecificClass(classId){
       return fetch(`${remoteURL}/userClasses?classId=${classId}&_expand=user`)
       .then(e => e.json());
   } ,

post(newClass) {
    let sessionId = sessionStorage.getItem("userId")
    return fetch(`${remoteURL}/userClasses?userId=${sessionId}&_expand=class`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(newClass)
    }).then(data => data.json());
    },
removeAndList(id){
    let sessionId = sessionStorage.getItem("userId")

    return fetch(`http://localhost:5002/userClasses/${id}`, {
        method: "DELETE"
    })
    .then(e => e.json())
    .then(() => this.getUserSpecificClasses(sessionId))
}
}