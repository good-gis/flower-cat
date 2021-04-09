$(".email-save").on("submit", function(){
    $.ajax({
        url: '/app/email.php',
        method: 'post',
        dataType: 'html',
        data: $(this).serialize(),
        success: function(data){
        }
    });
});
