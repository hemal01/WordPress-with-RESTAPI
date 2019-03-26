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
                    responseDiv.innerHTML = '<br><h4 style="color:red">Error - Please Fill Details.</h4>';
                }
            }
        }
    });
}