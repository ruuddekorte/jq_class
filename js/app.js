(function main() {

    $(".circle").click(function() { $(this).toggleClass("filled"); });

    $(".square").click(function() {
        if ($(this).hasClass("row1")) {
            if ($(this).hasClass("filled")) {
                $(".row1").removeClass("filled");
            } else {
                $(".row1").addClass("filled");
            };
        };
        if ($(this).hasClass("row2")) {
            if ($(this).hasClass("filled")) {
                $(".row2").removeClass("filled");
            } else {
                $(".row2").addClass("filled");
            };
        };
        if ($(this).hasClass("row4")) {
            if ($(this).hasClass("filled")) {
                $(".row4").removeClass("filled");
            } else {
                $(".row4").addClass("filled");
            };
        };
        if ($(this).hasClass("row5")) {
            if ($(this).hasClass("filled")) {
                $(".row5").removeClass("filled");
            } else {
                $(".row5").addClass("filled");
            };
        };
    });

    $(".diamond").click(function() {
        if ($(this).hasClass("filled")) {
            $(".row3").removeClass("filled");
            $(".col3").removeClass("filled");
        } else {
            $(".row3").addClass("filled");
            $(".col3").addClass("filled");
        };
    });

    $("#btnonoff").click(function() {
        if ($(this).hasClass("filled")) {
            $(".icon").addClass("filled");
            $(".onoff").removeClass("filled");
        } else {
            $(".icon").removeClass("filled");
            $(".onoff").addClass("filled");
        };
    });

    $("#btnon").click(function() { $(".icon").addClass("filled"); });
    $("#btnoff").click(function() { $(".icon").removeClass("filled"); });
    $("#btnswitch").click(function() { $(".icon").toggleClass("filled"); });
})();