$(document).on("ready", function() {
    

    var cont = $.ajax("https://student.computing.edgehill.ac.uk/~walshd/cis1110api/product-reviews/bikeoil")

    $(".loadReviews").click(function() {
        cont.done(function(data) {
            
            for (var i = 0; i < data.length; i++) {
                var star = ""
                var blackstar = ""
                var num = parseInt(data[i].rating)
                for (var t = 5; t > num; t--) {
                    blackstar += "*"
                }

                for(num; num > 0; num--) {
                    star += "*"
                }
               
                $(".reviews").append("<article>" + "<img src='e:\\web design\\cw2\\images\\robot-juice-images\\reviewicon1.jpg' alt='Review image'>" + "<p class='ratings'>" + star + "</p>" + "<p class='blackstar'>" + blackstar + "</p>" + "<p class='grease'>Great Greace!!</p>" + "<p>" + data[i].review + "</p>" + "</article>")
                
            }
        })
    })
});