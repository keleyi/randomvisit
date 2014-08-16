/*!
* randomvisit
* version: 0.1.0
* Copyright (c) 2014 KeLeyi
* http://keleyi.com
* http://keleyi.com/jq/randomvisit/
*/
(function ($) {

    $.fn.randomvisit = function (options) {
        var settings = $.extend({
            urls: ['http://keleyi.com', 'http://keleyi.com/jq/randomvisit/']
            , ajaxpages: ["/", ""]
        }, options);

        var keleyirandomvisit = $(this);


        keleyirandomvisit.on("click", function (event) {

            var pagesNum = settings.ajaxpages.length;

            var RandomNum = pagesNum;
            if (settings.urls.length > 0)
                RandomNum = RandomNum + 1;
            if (RandomNum == 0) {
                window.open("http://kel" + "eyi.com/jq/randomvisit/");
                return;
            }
            var randomIndex = Math.floor(Math.random() * RandomNum);

            event.preventDefault();

            var urlindex, randomurl;
            if (randomIndex == RandomNum - 1 && settings.urls.length > 0) {
                urlindex = Math.floor(Math.random() * settings.urls.length);
                randomurl = settings.urls[urlindex];
            }
            else {
                $.ajax({
                    type: "Get"
                , url: settings.ajaxpages[randomIndex]
                , async: false
                , dataType: "html",
                    success: function (data) {
                        var alllink = $(data).find("a");
                        urlindex = Math.floor(Math.random() * alllink.length);
                        randomurl = alllink.eq(urlindex).attr("href");
                    }
                }
            )
            }
            if (randomurl != null)
                window.open(randomurl);
            else
                window.open("http://kel" + "eyi.com/jq/randomvisit/");

        });

    }

} (jQuery));
