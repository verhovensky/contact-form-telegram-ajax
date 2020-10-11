$(document).ready(function () {
    $(".form-element").submit(function () {
        var formID = $(this).attr('id');
        var formNm = $('#' + formID);
        var message = $(formNm).find(".form-control");
        var formTitle = $(formNm).find(".comment");
        $.ajax({
            type: "POST",
            url: 'js/send-message-to-telegram.php',
            data: formNm.serialize(),
            success: function (data) {
                //  Shows modal window  / Вывод модальное окно с уведомлением, об успешной отправке
                $("#exampleModalCenter").modal("show");
            },
            error: function (jqXHR, text, error) {
                // TO DO : Message on error
            }
        });
        return false;
    });
});