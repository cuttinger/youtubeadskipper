
setInterval(function () {
    if (location.href.indexOf("youtube") > 0) {
        //console.log("checking...");
        try {
            if ($(".ytp-ad-skip-button")) {
                //console.log("find button");
                $(".ytp-ad-skip-button").click();
                //console.log("click button");
            }
        }
        catch (e) {
            //console.log(e.message);
        }
    }
}, 1000);