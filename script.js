$(document).ready(function() {
  $("i").hover(function() {
      $(this).css("font-size" , "40px" );    
  }, function(){
      $(this).css("font-size" , "30px" );
  });
});

function loadRepo(){
let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
  results = JSON.parse(this.responseText);
  document.getElementById("gitRepo").innerHTML = results[0].name;
}
};
gitHubRequest.open("GET", "https://api.github.com/users/ezj5101/repos", true);
gitHubRequest.send();
}