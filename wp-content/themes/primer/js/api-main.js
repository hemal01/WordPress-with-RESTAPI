x
var postBtn = document.getElementById("post-btn");
var postContainer = document.getElementById("post-container");

postBtn.addEventListener("click", function(){
     var ourRequest = new XMLHttpRequest();
     ourRequest.open("GET","http://localhost/meta_demo/wp-json/wp/v2/posts");
     ourRequest.onload = function(){
          if(ourRequest.status >= 200 && ourRequest.status < 400){
               var data = JSON.parse(ourRequest.response);
               // console.log(data);
               createHTML(data);
          } else{
               console.log("We connected to the server, but server returns error.");
          }
     }  

     ourRequest.onerror = function() {
          console.log('Connection Error!');
     }

      ourRequest.send();     
});

function createHTML(postData) {
     var postHTML ='';

     for(var i=0; i<postData.length; i++){
          // console.log(postData[i].title.rendered);
          // console.log(postData[i].content.rendered);
          postHTML += '<h2>' + postData[i].title.rendered + '</h2>'
          postHTML += postData[i].content.rendered;
     }

     postContainer.innerHTML = postHTML;
}