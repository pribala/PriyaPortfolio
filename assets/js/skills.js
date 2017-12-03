 // $("#skillList").click(function(e){
 //    e.preventDefault();
 //            $(".cardBox").toggleClass("changePosition");
 //            $("#card-1").animate({
 //                'left' : "0",
             
 //            })
 //            $("#card-2").animate({
 //                'left' : "12rem",
         
 //            })
 //            $("#card-3").animate({
 //                'left' : "36rem",
        
 //            })
 //            $("#card-4").animate({
 //                'left' : "48rem",
        
 //            })
 //            $("#card-5").animate({
 //                'left' : "24rem",
        
 //            })
 //        });

 $("li").hover(function(){
    var cardId = $(this).attr("id");
    switch(cardId) {
        case "card-1":
            $("#card-2").toggleClass("blurCard");
            $("#card-3").toggleClass("blurCard");
            $("#card-4").toggleClass("blurCard");
            break;
        case "card-2":
            $("#card-1").toggleClass("blurCard");
            $("#card-3").toggleClass("blurCard");
            $("#card-4").toggleClass("blurCard");    
            break;
        case "card-3":
            $("#card-2").toggleClass("blurCard");
            $("#card-1").toggleClass("blurCard");
            $("#card-4").toggleClass("blurCard"); 
            break;
        case "card-4":
            $("#card-2").toggleClass("blurCard");
            $("#card-1").toggleClass("blurCard");
            $("#card-3").toggleClass("blurCard");   
            break;     
    }
 });