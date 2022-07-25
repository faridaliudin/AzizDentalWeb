function adminRef() {
    const database = firebase.database();
    return database.ref("login");
  }
  
  $("#loginBtn").click(function (e) {
    e.preventDefault();
  
    const username = $("#username").val();
    const password = $("#password").val();

    console.log(username);
    console.log(password);
    console.log(adminRef());
  
    if (username !== "" || password !== "") {
      adminRef().once("value", snapshot => {
        console.log(snapshot.val());
        for (const admin of snapshot.val()) {
          console.log(admin)
          if (admin === undefined) {
            continue;
          }
            if (username === admin.username && password === admin.password) {
              window.location.href = "admin.html";
            } 
        }
      })
    } else {
      alert("Maaf anda belum mengisi username atau password!");
    }
  
  });

