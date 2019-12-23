for (var z=0;z<10000;z++){
    setTimeout(function(){
        var buttonArray = document.getElementsByClassName('cui4-button cui4-button--green'); 
        for(var a=0;a<buttonArray.length;a++){ 
            buttonArray[0].click(); 
            document.querySelectorAll('[data-test="confirm-button"]')[0].click(); 
        }
    }, 200);
}
