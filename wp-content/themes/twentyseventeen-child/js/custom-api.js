// Quick Add Post AJAX
var quickAddBtn = document.querySelector('#quick-add-button');

if(quickAddBtn){
    quickAddBtn.addEventListener('click', function(){
        var title = document.querySelector('.admin-quick-add [name="title"]').value;
        var content = document.querySelector('.admin-quick-add [name="content"]').value;

        var ourPostData = {
            "title" : title,
            "content" : content,
            "status" : 'publish'
        }

        var  createPost = new XMLHttpRequest();
        
        var responseDiv = document.getElementById('response');

        createPost.open('POST', 'http://localhost/meta_demo/wp-json/wp/v2/posts');
        createPost.setRequestHeader('X-WP-Nonce', additionalaData.nonce);
        createPost.setRequestHeader('Content-Type', 'application/json;charset:utf=8');
        createPost.send(JSON.stringify(ourPostData));
        createPost.onreadystatechange = function(){
            if(createPost.readyState == 4){
                if (createPost.status == 201){
                    //Success message
                    responseDiv.innerHTML = '<br><h4 style="color:green">Submitted Successfully.</h4>';
                }
                else if(createPost.status == 401){
                    responseDiv.innerHTML = '<br><h4 style="color:red">WordPress Login Required.</h4>';
                }else{
                    //Error message
                    responseDiv.innerHTML = '<br><h4 style="color:red">Error - Try Again.</h4>';
                }
            }
        }
    });
}

// if( quickAddBtn ) {
//     quickAddBtn.addEventListener("click", function(){
//         //alert('clicked');
//         var ourPostData = {
//             "title" : document.querySelector('.admin-quick-add [name="title"]').value,
//             "content" : document.querySelector('.admin-quick-add [name="content"]').value,
//             "status": "publish"
//         }

//         var createPost = new XMLHttpRequest();

//         createPost.open("POST", additionalData.siteURL + "/wp-json/wp/v2/posts");
//         createPost.setRequestHeader('X-WP-Nonce', additionalData.nonce);
//         createPost.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//         createPost.send(JSON.stringify(ourPostData));
//         createPost.onreadystatechange = function() {
//             if(createPost.readyState == 4) {
//                 if( createPost.status == 201 ) {
//                     document.querySelector('.admin-quick-add [name="title"]').value = '';
//                     document.querySelector('.admin-quick-add [name="content"]').value = '';
//                 } else {
//                     alert('Error - Try again.');
//                 }
//             }
//         }
//     });
// }
