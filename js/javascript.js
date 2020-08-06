(function ($) {
    "use strict"

    $(document).ready(function () {

        $('.hexagon, button, a, .carousel-indicators').click(function () {
            try {
                window.navigator.vibrate(25)
            } catch (error) {
                console.log("Error: " + error.message);
            }
        });

        $("#signIn").click(function () {
            $("#loginForm").show()
            $('.united_sections').hide();
            $('.united_elements').addClass('disappear');
            $('.background').addClass('disappear');
            $("#myBar").css('background', 'linear-gradient(to bottom, #f9c719 0, #fff 0)');
        });
        $("#signClose").click(function () {
            $("#loginForm").hide()
            $('.united_sections').show();
            $('.united_elements').removeClass('disappear');
            $('.background').removeClass('disappear');
        });

        $(window).scroll(function () {
            alterIndicator();
        });

        function alterIndicator() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.getElementById("myBar").style.background = "linear-gradient(to bottom, #f9c719 " + scrolled + "%, #fff 0)";
        }
        alterIndicator();
        $('.scroller').scroll(function () {

            $('.footer').each(function () {

                var bottom_of_object = $('.scroller').prop('scrollHeight') - $(window).outerHeight() - $('.footer').outerHeight()
                var bottom_of_window = $('.scroller').scrollTop()

                if (bottom_of_window > bottom_of_object) {
                    $('.wrapper').addClass('scrollEnd');
                } else {
                    if ($('.wrapper').hasClass('scrollEnd')) {
                        $('.wrapper').removeClass('scrollEnd');
                    }
                }
            });
        });
    });
})(jQuery);