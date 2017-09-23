//counter code
var button = document.getElementById('counter');
button.onclick=function () {
    //make a request oject
    var request=new XMLHttpRequest();
    
    //capture the response and store it in a variable
    
    request.aonreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            // take some action
            if(request.status ===200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }    
        }
        //not yet done
    };
    //make the request 
    request.open('GET','http://anujeet98.imad.hasura-app.io/counter',true);
    request.send(null);
};
