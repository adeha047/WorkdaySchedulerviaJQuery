$(document).ready(function () {
    rightNow = new Date();
    $("#currentDay").html(rightNow)

    setTimeClass(rightNow)

    $('.saveBtn').on("click", function () {
        //console.log(this)

        $(".description").each(function (i) {
            var text = $(this).val()
            var time = $(this).attr("id")
            //console.log(time, text)

            localStorage.setItem(time, text)
        });





    });

    $("#hour8.description").val(localStorage.getItem("hour8"));
    $("#hour9.description").val(localStorage.getItem("hour9"));
    $("#hour10.description").val(localStorage.getItem("hour10"));
    $("#hour11.description").val(localStorage.getItem("hour11"));
    $("#hour12.description").val(localStorage.getItem("hour12"));
    $("#hour13.description").val(localStorage.getItem("hour13"));
    $("#hour14.description").val(localStorage.getItem("hour14"));
    $("#hour15.description").val(localStorage.getItem("hour15"));
    $("#hour16.description").val(localStorage.getItem("hour16"));
    $("#hour17.description").val(localStorage.getItem("hour17"));

    function setTimeClass(time) {
        //console.log(rightNow)
        var currentHour = rightNow.getHours();
        //currentHour = 15
        console.log("currentHour =" + currentHour)
        $(".description").each(function (i) {
            var timeBlock = parseInt($(this).attr("value"))
            console.log("timeblock =" + timeBlock)

            if (timeBlock < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }

            else if (timeBlock === currentHour) {
                $(this).removeClass("past")
                $(this).removeClass("future");
                $(this).addClass("present");
            }

            else {
                $(this).removeClass("past");
                $(this).addClass("future");
                $(this).removeClass("present");

            }




        });
    }












});

