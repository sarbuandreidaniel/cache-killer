(function ($) {
    var cacheKillerCookie, cacheKillerQuery;

    function GetUrlValue(VarSearch) {
        var SearchString = window.location.search.substring(1);
        var VariableArray = SearchString.split('&');
        for (var i = 0; i < VariableArray.length; i++) {
            var KeyValuePair = VariableArray[i].split('=');
            if (KeyValuePair[0] == VarSearch) {
                return KeyValuePair[1];
            }
        }
    }

    function randString(x) {
        var s = "";
        while (s.length < x && x > 0) {
            var r = Math.random();
            s += (r < 0.1 ? Math.floor(r * 100) : String.fromCharCode(Math.floor(r * 26) + (r > 0.5 ? 97 : 65)));
        }
        return s;
    }

    function deleteCookie(cname) {
        document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    }

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }

    function checkCookie() {
        cacheKillerCookie = getCookie("cacheKiller");
    }
    $.cacheKiller = function (options) {
        var settings = $.extend({
            // These are the defaults.
            css: true,
            images: true,
            scripts: true
        }, options);
        cacheKillerQuery = GetUrlValue('cacheKiller');
        if (cacheKillerQuery) {
            (cacheKillerQuery == 'true') ? setCookie('cacheKiller', true, 365): deleteCookie('cacheKiller');
        }
        checkCookie('cacheKiller');
        if (cacheKillerCookie || cacheKillerQuery == 'true') {
            if (settings.css) {
                $('html link').each(function (index, value) {
                    var link = $(value),
                        linkHref = link.attr('href');
                    if (linkHref) link.attr('href', linkHref + "?cacheKiller=" + randString(5));
                })
            }
            if (settings.images) {
                $('html img').each(function (index, value) {
                    var image = $(value),
                        imageSrc = image.attr('src');
                    if (imageSrc) image.attr('src', imageSrc + "?cacheKiller=" + randString(5));
                })
            }
            if (settings.scripts) {
                $('html script').each(function (index, value) {
                    var script = $(value),
                        scriptSrc = script.attr('src');
                    if (scriptSrc) script.attr('src', scriptSrc + "?cacheKiller=" + randString(5));
                })
            }
        }
    };
}(jQuery));
