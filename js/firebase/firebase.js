const firebaseConfig = {
  apiKey: "AIzaSyAOfjKm6JzRTYtDgj5MVpwLHgDLMAV5bd4",
  authDomain: "jdm-cars-c2ca1.firebaseapp.com",
  databaseURL: "https://jdm-cars-c2ca1-default-rtdb.firebaseio.com",
  projectId: "jdm-cars-c2ca1",
  storageBucket: "jdm-cars-c2ca1.appspot.com",
  messagingSenderId: "1057692670817",
  appId: "1:1057692670817:web:9497b819fb91513bcc4320"
};

  //inicializando o Firebase
  firebase.initializeApp(firebaseConfig)
  //efetuando a ligação com o database
  const database = firebase.database()