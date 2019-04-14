//CONFIG
var config = {
    pseudo: false,
    btnLikeClass: "glyphsSpriteHeart__outline__24__grey_9 u-__7",
    btnSubscribe: "S’abonner",
    timeNavigation: 20000
}


//SLEEP
const sleep = function(time, call){
   window.setTimeout(function(){
       call();
    }, time);
}

//MENU LIKE + SUBSCRIBE
var div = document.createElement('div');
div.style.background = "#00000050";
div.style.textAlign = "left";
div.style.fontSize = "14px";
div.style.position = "fixed";
div.style.top = "0";
div.style.right = "0";
div.style.height = "auto";
div.style.width = "auto";
div.innerHTML = "<p style='color: Red' id='instaLikeBot'>Like: 0</p>"+
                "<p style='color: Green' id='instaSubBot'>Subscribe: 0</p>";
document.body.appendChild(div);


//VARIABLES
var data = {
    scroll: 0,
    time: 0,
    like: 0,
    sub: 0,
    btnExplore: false,
    btnMenu: false,
    btnProfil: false,
    navigation: false,
    a: [],
    nba: Number(sessionStorage.getItem('counterA')) ||0
}


//CONFIG MENU
var menu = {
    like: false,
    sub: false,
    loop: true,
    scroll: false,
    navigation: false,
    comment: false
}


//LOBBY
var div2 = document.createElement('div');
div2.style.background = "#00000050";
div2.style.textAlign = "left";
div2.style.fontSize = "14px";
div2.style.position = "fixed";
div2.style.top = "0";
div2.style.left = "0";
div2.style.height = "auto";
div2.style.width = "auto";
div2.innerHTML = "<p style='color: Red' id='menuLike'>Auto-like(L)</p>"+
                "<p style='color: Red' id='menuSub'>Auto-Sub(S)</p>"+
                "<p style='color: Red' id='menuScroll'>Auto-Scroll(G)</p>"+
                "<p style='color: Red' id='menuCo'>Auto-Comment(R)</p>"+
                //"<p style='color: Red' id='menuNav'>Auto-Navigation(E)</p>"+ NAVIGATION FOR EXTENSION  BOT
                "<br><p style='color: Green' id='menuLoop'>ON/OFF(B)</p>";
document.body.appendChild(div2);


//KEYDOWN
function keyPressed(e){
    let t = e.key.toLowerCase() || e;
    if(t === "r"){
        //AUTO-COMMENT
        let i = document.getElementById('menuCo');
        i.style = menu.comment? "color: Red" : "color: Green";
        menu.comment = menu.comment ? false : true;
    }
    if(t === "l"){
        //AUTO-LIKE
        let i = document.getElementById('menuLike');
        i.style = menu.like ? "color: Red" : "color: Green";
        menu.like = menu.like ? false : true;
        sessionStorage.setItem('menuLike', menu.like)
    }
    if(t === "s"){
        //AUTO-SUB
        let i = document.getElementById('menuSub');
        i.style = menu.sub ? "color: Red" : "color: Green";
        menu.sub = menu.sub ? false : true;
        sessionStorage.setItem('menuSub', menu.sub)
    }
    if(t === "g"){
        //AUTO-Scroll
        let i = document.getElementById('menuScroll');
        i.style = menu.scroll ? "color: Red" : "color: Green";
        menu.scroll = menu.scroll ? false : true;
        sessionStorage.setItem('menuScroll', menu.scroll)
    }
    if(t === "b"){
        //AUTO-Loop
        let i = document.getElementById('menuLoop');
        i.style = menu.loop ? "color: Red" : "color: Green";
        menu.loop = menu.loop ? false : true;
        sessionStorage.setItem('menuLoop', menu.loop)
        if(menuLoop){
            instaLoop();
        }
    }
    if(t === "e"){
        //AUTO-NAVIGATION
        let i = document.getElementById('menuNav');
        i.style = menu.navigation ? "color: Red" : "color: Green";
        menu.navigation = menu.navigation ? false : true;
        sessionStorage.setItem('menuNav', menu.navigation)
        if(data.navigation){
            clearInterval(data.navigation);
        }
        if(menu.navigation){
            data.navigation = window.setInterval(function(){
                if(data.nba > data.a.length-1){
                    data.nba = 0;
                    sessionStorage.setItem('counterA', data.nba);
                }
                data.a[data.nba].click();
                data.nba += 1;
                sessionStorage.setItem('counterA', data.nba);
            }, config.timeNavigation);
        } else {
            clearInterval(data.navigation);
            data.navigation = false;
        }
    }
}
document.body.onkeydown = function(e){
    keyPressed(e);
};

//BOUTON EXPLORE
var lienExp = document.getElementsByTagName('a');
for(var n in lienExp){
    try{
    let tag = lienExp[n].getAttribute('href');
    if(tag === "/explore/"){
        data.btnExplore = lienExp[n];
        data.a.push(lienExp[n]);
    }
    if(tag === "/"){
        data.btnMenu = lienExp[n];
        data.a.push(lienExp[n]);
    }
    if(tag === "/"+lienExp[n].innerHTML+"/"){
        data.btnProfil = lienExp[n];
        data.a.push(lienExp[n]);
        config.pseudo = lienExp[n].innerHTML;
    }
    }
    catch(e){}
}


//CODE
function instaLoop(){

    let instaLikeBot = document.getElementById('instaLikeBot');
    let instaSubBot = document.getElementById('instaSubBot');
    instaLikeBot.innerHTML = "Like: "+data.like;
    instaSubBot.innerHTML = "Subscribe: "+data.sub;


    data.time += 500;
    

    if(menu.comment){
    //AUTO-COMMENT
    var article2 = document.getElementsByTagName('article');
    for(var n in article2){
    try{
    let textarea = article2[n].getElementsByTagName('textarea')[0];
    let form = article2[n].getElementsByTagName('form')[0];
    let button = form.getElementsByTagName('button')[0];
    sleep(data.time*2, function(){
        textarea.value = "GG";
        button.disabled = false;
        sleep(500, function(){
            form.submit();
        });
    });
    }
    catch(e){}
    }
    }


    if(menu.like){
    //AUTO LIKE
    let article = document.getElementsByTagName('article');
    for(var n in article){
       try{
        let btn = article[n].getElementsByClassName("dCJp8 afkep _0mzm-");
        if(btn[0].getAttribute('class') == config.btnLikeClass){
        sleep(data.time, function(){
            btn[0].click();
            data.like += 1;
        });
        }
    }
    catch(e){}
    }
    }


    if(menu.sub){
    //AUTO SUBSCRIBE
    let btnSub = document.getElementsByTagName('button');
    for(var n in btnSub){
        let number = n;
        if(btnSub[n].innerHTML === config.btnSubscribe){
            sleep(data.time, function(){
                btnSub[number].click();
                data.sub += 1;
            });
        }
    }
    }


    if(menu.scroll){
        //AUTO SCROLL
        data.scroll += window.innerHeight*2;
        window.scroll(0, data.scroll);    
    }


    if(menu.loop){
        //AUTO LOOP
        sleep(1500, function(){
            data.time = 0;
            window.requestAnimationFrame(instaLoop);
        });
    }
}

instaLoop();
