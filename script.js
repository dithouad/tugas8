function validateForm() {
  var name = document.getElementById("name").value;
  var nim = document.getElementById("nim").value;
  var dob = document.getElementById("dob").value;
  var address = document.getElementById("address").value;
  var gender = document.getElementById("gender").value;
  var religion = document.getElementById("religion").value;
  var maritalStatus = document.getElementById("maritalStatus").value;

  var errorMessage = "";

  if (name.trim() === "") {
    errorMessage += "Nama harus diisi.<br>";
  }

  if (nim.trim() === "") {
    errorMessage += "NIM harus diisi.<br>";
  }

  if (dob === "") {
    errorMessage += "Tanggal Lahir harus diisi.<br>";
  }

  if (address.trim() === "") {
    errorMessage += "Alamat harus diisi.<br>";
  }

  if (gender === "") {
    errorMessage += "Jenis Kelamin harus dipilih.<br>";
  }

  if (religion === "") {
    errorMessage += "Agama harus dipilih.<br>";
  }

  if (maritalStatus === "") {
    errorMessage += "Status Pernikahan harus dipilih.<br>";
  }

  if (errorMessage !== "") {
    document.getElementById("error-message").innerHTML = errorMessage;
    return false;
  }

  return true;
}
