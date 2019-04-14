    /*AUTO-LIKE
    let article = document.getElementsByTagName('article');
    for(var n in article){
       try{
	    let btn = article[n].getElementsByTagName("button");
	    for(var i in btn){
            let label = btn[i].getElementsByTagName('span')[0].getAttribute('class');
		    if(label === config.btnLikeClass){
                sleep(data.time, function(){
                    btn[i].click();
                    data.like += 1;
                });
            }
        }
    }
    catch(e){}
    }
    */


    
/*RELANCER
if(sessionStorage.getItem('menuLoop')){
    let e = {
        key: "b"
    }
    keyPressed(e)
}
if(sessionStorage.getItem('menuLike')){
    let e = {
        key: "l"
    }
    keyPressed(e);
}
if(sessionStorage.getItem('menuSub')){
    let e = {
        key: "s"
    }
    keyPressed(e);
}
if(sessionStorage.getItem('menuScroll')){
    let e = {
        key: "g"
    }
    keyPressed(e);
}
if(sessionStorage.getItem('menuNav')){
    let e = {
        key: "e"
    }
    keyPressed(e);
}
*/

//sessionStorage.getItem('instaUsername') || prompt('Pseudonyme: ')
//sessionStorage.setItem('instaUsername', config.pseudo);