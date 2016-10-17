
$(function () {
    $("#header").load("header.html", function () {
        //small debounce
        setTimeout(function () {
            //we set the right active item in the main menu
            if (window.location.pathname.indexOf("index.html") > -1)
                $("#mainMenu li.index").addClass("active");

            if (window.location.pathname.indexOf("discover.html") > -1)
                $("#mainMenu li.discover").addClass("active");

            if (window.location.pathname.indexOf("download.html") > -1)
                $("#mainMenu li.download").addClass("active");
        },
            100);
			
		//apply traduction
		$("#header").i18n();
    });

    $("#footer").load("footer.html");
});



