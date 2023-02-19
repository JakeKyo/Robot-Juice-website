$(document).on("ready", function() {
    var yes = 5;
    var no = 0;

    
    $("input").change(function(){
        
        if ($("#yes").prop("checked")) {
            $(".result").append(yes + 1)
            $("form").hide()
         }

         else if ($("#no").prop("checked")) {
            $(".result").append(no + 1)
            $("form").hide()
         }
    })
});