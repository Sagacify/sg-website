$.get("/php/moderate_instafeed.php",function(t){}).done(function(t){$("#instafeed").append(t)}),$("body").on("click","button.refuse, button.accept",function(t){t.preventDefault();var e=$(this).data("id"),n=0,s=$(this);$(this).hasClass("accept")?n=1:$(this).hasClass("refuse")&&(n=2),$.post("/php/update_instafeed.php",{id_photo:e,state:n},function(t,e,n){1==t?s.parent().slideUp(200,function(){this.remove()}):console.log(t)})});