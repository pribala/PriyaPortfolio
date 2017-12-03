 $("#skillList").click(function(e){
    e.preventDefault();
            $(".cardBox").toggleClass("changePosition");
            $("#card1").animate({
                'left' : "0",
             
            })
            $("#card2").animate({
                'left' : "12rem",
         
            })
            $("#card3").animate({
                'left' : "36rem",
        
            })
            $("#card4").animate({
                'left' : "48rem",
        
            })
            $("#card5").animate({
                'left' : "24rem",
        
            })
        });