button = document.getElementById("topbtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    button.style.opacity = "1";
    button.style.visibility = "visible";
  } else {
    button.style.opacity = "0";
    button.style.visibility = "hidden";
  }
}

function doGory() {
  document.body.scrollIntoView({behavior: "smooth"});
}