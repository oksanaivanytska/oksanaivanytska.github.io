const urlParams = new URLSearchParams(window.location.search);

document.getElementById("name").innerHTML = urlParams.get("name");
document.getElementById("id-card").innerHTML = urlParams.get("id-card");
document.getElementById("faculty").innerHTML = urlParams.get("faculty");
document.getElementById("dob").innerHTML = urlParams.get("dob");
document.getElementById("address").innerHTML = urlParams.get("address");