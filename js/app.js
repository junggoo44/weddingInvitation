
let pos;
$(window).scroll(function(){
    pos=$(window).scrollTop();  //현재 스크롤값 알아내기
    console.log(pos);
    scr_ani(); 
})
    
function scr_ani() {
    if(pos>200) {
        $(".at1_ani1").stop().animate({"top":"70px","opacity":"1"},500,function(){
        }); 
    }
    else {
        $(".at1_ani1").stop().animate({"top":"100px","opacity":"0"},500,function(){
        }); 
    }; 
    if(pos>430) {
        $(".at1_ani2").stop().animate({"top":"200px","opacity":"1"},1000,function(){
        }); 
    }
    else {
        $(".at1_ani2").stop().animate({"top":"230px","opacity":"0"},1000,function(){
        }); 
    }; 
    if(pos>780) {
        $(".at1_ani3").stop().animate({"top":"540px","opacity":"1"},1000,function(){
        }); 
    }
    else {
        $(".at1_ani3").stop().animate({"top":"570px","opacity":"0"},1000,function(){
        }); 
    }; 



    if(pos>1400) {
        $(".at2_ani1").stop().animate({"top":"50px","opacity":"1"},500,function(){
        }); 
    }
    else {
        $(".at2_ani1").stop().animate({"top":"80px","opacity":"0"},500,function(){
        }); 
    };
    if(pos>1800) {
        $(".at2_ani2").stop().animate({"top":"140px","opacity":"1"},1000,function(){
        }); 
    }
    else {
        $(".at2_ani2").stop().animate({"top":"180px","opacity":"0"},1000,function(){
        }); 
    };
    if(pos>1600) {
        $(".at2_ani3").stop().animate({"top":"140px","opacity":"1"},1000,function(){
        }); 
    }
    else {
        $(".at2_ani3").stop().animate({"top":"180px","opacity":"0"},1000,function(){
        }); 
    };


    if(pos>2250) {
        $(".at3_ani1").stop().animate({"top":"40px","opacity":"1"},500,function(){
        }); 
    }
    else {
        $(".at3_ani1").stop().animate({"top":"70px","opacity":"0"},500,function(){
        }); 
    };

    if(pos>2390) {
        $(".at3_ani2").stop().animate({"top":"130px","opacity":"1"},700,function(){
        }); 
    }
    else {
        $(".at3_ani2").stop().animate({"top":"160px","opacity":"0"},700,function(){
        }); 
    };

    if(pos>2500) {
        $(".at3_ani3").stop().animate({"top":"320px","opacity":"1"},700,function(){
        }); 
    }
    else {
        $(".at3_ani3").stop().animate({"top":"350px","opacity":"0"},700,function(){
        }); 
    };

    if(pos>2650) {
        $(".at3_ani4").stop().animate({"top":"0","opacity":"1"},700,function(){
        }); 
    }
    else {
        $(".at3_ani4").stop().animate({"top":"30px","opacity":"0"},700,function(){
        }); 
    };

    if(pos>2750) {
        $(".at3_ani5").stop().animate({"top":"145px","opacity":"1"},700,function(){
        }); 
    }
    else {
        $(".at3_ani5").stop().animate({"top":"175px","opacity":"0"},700,function(){
        }); 
    };


    if(pos>3150) {
        $(".at4_ani1").stop().animate({"top":"50px","opacity":"1"},700,function(){
        }); 
    }
    else {
        $(".at4_ani1").stop().animate({"top":"80px","opacity":"0"},700,function(){
        }); 
    };
    if(pos>3250) {
        $(".at4_ani2").stop().animate({"top":"150px","opacity":"1"},700,function(){
        }); 
    }
    else {
        $(".at4_ani2").stop().animate({"top":"180px","opacity":"0"},700,function(){
        }); 
    };
    if(pos>3400) {
        $(".at4_ani3").stop().animate({"top":"530px","opacity":"1"},700,function(){
        }); 
    }
    else {
        $(".at4_ani3").stop().animate({"top":"560px","opacity":"0"},700,function(){
        }); 
    };


    // 갤러리 클릭시 자세히보기 팝업창
    $(".at2_pop_back").hide();
    $(".at2_pop1").hide();
    $(".at2_pop2").hide();
    $(".at2_pop_btn").hide();

    
    $(".at2_cl1").on("click",function() {
        no=$(this).index()+1;
        $(".at2_pop2").hide();
        $(".at2_pop_back").show();
        $(".at2_pop1_"+no).show();
        $(".at2_pop_btn").show();
    })
    $(".at2_cl2").on("click",function() {
        no=$(this).index()+1;
        $(".at2_pop1").hide();
        $(".at2_pop_back").show();
        $(".at2_pop2_"+no).show();
        $(".at2_pop_btn").show();
    })
    $(".at2_pop_btn").on("click",function() {
        $(".at2_pop_back").hide();
        $(".at2_pop1").hide();
        $(".at2_pop2").hide();
        $(".at2_pop_btn").hide();
    })


 }


