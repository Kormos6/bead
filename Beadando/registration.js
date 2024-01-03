/* function showAlert() {
    alert ("Sikeres regisztráció!");
  }

*/
function check_pass() {
    if (document.getElementById('psw').value == document.getElementById('psw-repeat').value) {
        document.getElementById('register').disabled = false;
    } else {
        document.getElementById('register').disabled = true;
    }
}

    

function registration(){
    var name = document.getElementById("felhasznalonev").value;
    var email = document.getElementById("email").value;
    var szuldatum = document.getElementById("szuldat").value;

    

}



