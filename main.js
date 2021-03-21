window.onload=function(){
    for(let num=1;num<=147;num++){
        nownum = ( '0000' + num ).slice( -5 );
        let nowdiv = "<div class='lefter'><img src='stamp/nakano-"+nownum+".png'></div>"
        document.getElementById("container").innerHTML+=nowdiv
    }
}