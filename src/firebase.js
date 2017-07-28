  import Firebase from 'firebase';
  var config = {
    apiKey: "AIzaSyCA0lVGbPYTNxqZDJH9rM_1X0-KdPS7gMc",
    authDomain: "matrix-9fe37.firebaseapp.com",
    databaseURL: "https://matrix-9fe37.firebaseio.com",
    projectId: "matrix-9fe37",
    storageBucket: "matrix-9fe37.appspot.com",
    messagingSenderId: "536206031808"
  };

  let app = Firebase.initializeApp(config)
  let db = app.database()
  export default db