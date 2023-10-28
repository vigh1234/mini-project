$(document).ready(function(){
    var src1=$("#img").attr("src");
    var src2=$("#img1").attr("src");
    var src3=$("#img2").attr("src");
    var src4=$("#img3").attr("src");
    var src5=$("#img4").attr("src");
    $("#img1").mouseenter(function(){ 
    
    $("#img").attr('src',src2)
    $("#img").css("height","300px")
    $("#img").css("width","350px")
    });
    $("#img1").mouseleave(function(){
        $("#img").attr('src',src1)
        $("#img").css("height","300px")
        $("#img").css("width","250px")
    })
    
    $("#img2").mouseenter(function(){ 
    $("#img").attr('src',src3)
    $("#img").css("height","300px")
    $("#img").css("width","350px")
    });
    $("#img2").mouseleave(function(){
        $("#img").attr('src',src1)
        $("#img").css("height","300px")
        $("#img").css("width","250px")
    })
    
    $("#img3").mouseenter(function(){ 
    $("#img").attr('src',src4)
    $("#img").css("height","300px")
    $("#img").css("width","350px")
    });
    $("#img3").mouseleave(function(){
        $("#img").attr('src',src1)
        $("#img").css("height","300px")
        $("#img").css("width","250px")
    })

    $("#img4").mouseenter(function(){ 
        $("#img").attr('src',src5)
        $("#img").css("height","300px")
        $("#img").css("width","350px")
        });
        $("#img4").mouseleave(function(){
            $("#img").attr('src',src1)
            $("#img").css("height","300px")
            $("#img").css("width","250px")
        })
});