//Modal 1
var modal = document.getElementById('myModal');
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

//Modal 2
var modal2 = document.getElementById('myModal2');
var img2 = document.getElementById('myImg2');
var modalImg2 = document.getElementById("img02");

img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText.innerHTML = this.alt;
}

var span2 = document.getElementsByClassName("close2")[0];

span2.onclick = function() { 
  modal2.style.display = "none";
}