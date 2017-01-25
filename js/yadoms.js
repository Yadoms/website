
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

/**
   This function aims to help to have different image lodaded based on the language of the navigator
   <img class="translated-file-attribute" translated-attr="src" translated-attr-value="img/screenshots/{language}/1.png"/>
   will become
   <img class="translated-file-attribute" translated-attr="src" translated-attr-value="img/screenshots/{language}/1.png" src="img/screenshots/en/1.png"/>
**/

function updateTranlatedFileAttributes(langugageFolder) {
      var itemsToTranslate = $(".translated-file-attribute");
      $.each(itemsToTranslate, function (index, value) {
         var $value = $(value);
         //we get attr to translate
         var attrName = $value.attr("translated-attr");
         //we get the filename and replace {language} by the right value
         var realFilename = $value.attr("translated-attr-value");
         realFilename = realFilename.replace("{language}", langugageFolder);
         //we update the attr with the new value
         $value.attr(attrName, realFilename);
      });
   }


