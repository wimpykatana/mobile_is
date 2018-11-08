import firebase from 'firebase'; // 4.8.1

class Fire {
    constructor() {
        this.init();
        this.observeAuth();
    }

    init = () =>
        firebase.initializeApp({
            // apiKey: 'AIzaSyDLgW8QG1qO8O5WZLC1U8WaqCr5-CvEVmo',
            // authDomain: 'chatter-b85d7.firebaseapp.com',
            // databaseURL: 'https://chatter-b85d7.firebaseio.com',
            // projectId: 'chatter-b85d7',
            // storageBucket: '',
            // messagingSenderId: '861166145757',

            apiKey: "AIzaSyBZOP2bBiNZuIWLgbAKlu78XNdKAppxmEA",
            authDomain: "basic-chat-e2cc1.firebaseapp.com",
            databaseURL: "https://basic-chat-e2cc1.firebaseio.com",
            projectId: "basic-chat-e2cc1",
            storageBucket: "",
            messagingSenderId: "164811835064"
        });

    observeAuth = () =>
        firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

    onAuthStateChanged = user => {
        if (!user) {
            try {
                firebase.auth().signInAnonymously();
            } catch ({ message }) {
                alert(message);
            }
        }
    };

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }

    get ref() {
        return firebase.database().ref('messages');
    }

    parse = snapshot => {
        const { timestamp: numberStamp, text, user } = snapshot.val();
        const { key: _id } = snapshot;
        const timestamp = new Date(numberStamp);
        const message = {
            _id,
            timestamp,
            text,
            user,
        };
        return message;
    };

    on = callback =>
        this.ref
            .limitToLast(20)
            .on('child_added', snapshot => callback(this.parse(snapshot)));

    get timestamp() {
        return firebase.database.ServerValue.TIMESTAMP;
    }
    // send the message to the Backend
    send = messages => {
        for (let i = 0; i < messages.length; i++) {
            const { text, user } = messages[i];
            const message = {
                text,
                user,
                timestamp: this.timestamp,
            };
            this.append(message);
        }
    };

    append = message => this.ref.push(message);

    // close the connection to the Backend
    off() {
        this.ref.off();
    }
}

Fire.shared = new Fire();
export default Fire;
