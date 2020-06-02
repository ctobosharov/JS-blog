export default {

    create(data) {
        return firebase.firestore().collection('posts').add(data)
    },
    getAll() {
        return firebase.firestore().collection('causes').get()
    }

};