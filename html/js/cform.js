$(document).ready(function () {
    $("#ajax-contact-form").submit(function () {
        var str = $(this).serialize();
        $("#spinner").show();
        $.ajax({
            type: "POST",
            url: "http://primcms.courserv.com/contact/",
            data: str,
            dataType: 'json',
            async: false,
            success: function (r) {
                $("#spinner").hide();
                if (r.isError == 0) // Message Sent? Show the 'Thank You' message and hide the form
                {
                    result = '<div class="notification_ok">Your message has been sent. Thank you!<br> <a href="#" onclick="freset();return false;">send another mail</a></div>';
                    $("#fields").hide();
                } else {
                    result = r.message;
                }
                $("#note").html(result);
            }
        });
        return false;
    });
});

function freset() {
    $("#note").html('');
    document.getElementById('ajax-contact-form').reset();
    $("#fields").show();
};