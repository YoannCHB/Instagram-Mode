const sleep = function(time, call){
    window.setTimeout(function(){
        call();
     }, time);
 }

var article2 = document.getElementsByTagName('article');
var time = 0;
for(var n in article2){
    try{
    let textarea = article2[n].getElementsByTagName('textarea')[0];
    let form = article2[n].getElementsByTagName('form')[0];
    let button = form.getElementsByTagName('button')[0];
    time += 1000;
    sleep(time, function(){
        textarea.value = "GG";
        button.disabled = false;
        sleep(500, function(){
            form.submit();
        });
    });
    }
    catch(e){}
}