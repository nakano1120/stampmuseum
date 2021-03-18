window.onload=function(){
    for(let num=1;num<=124;num++){
        nownum = ( '0000' + num ).slice( -5 );
        let nowdiv = "<div class='lefter'><img width='150' height='150' src='stamp/nakano-"+nownum+".png'></div>"
        document.getElementById("container").innerHTML+=nowdiv
    }
}