"use strict";
jQuery(function(e) {
    function s(e) {
        var s = 1 === e.data,
            a = 2 === e.data,
            o = 0 === e.data;
        s && (i.removeClass("is-paused"), i.toggleClass("is-playing")), a && (i.removeClass("is-playing"), i.toggleClass("is-paused")), o && i.removeClass("is-playing", "is-paused")
    }
    var a, o = e(window),
        t = e("#featured-media"),
        i = e("#featured-video"),
        n = t.offset().top,
        l = Math.floor(n + t.outerHeight() / 2);
    window.onYouTubeIframeAPIReady = function() {
        a = new YT.Player("featured-video", {
            events: {
                onStateChange: s
            }
        })
    }, o.on("resize", function() {
        n = t.offset().top, l = Math.floor(n + t.outerHeight() / 2)
    }).on("scroll", function() {
        i.toggleClass("is-sticky", o.scrollTop() > l && i.hasClass("is-playing"))
    })
});