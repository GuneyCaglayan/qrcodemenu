$(document).ready(function () {
    $(document).on("click", ".image-wrapper", function () {
        $(this).closest(".item-wrapper").addClass("opened");
    });

    $(document).on("click", ".return-menu", function (e) {
        e.preventDefault();
        $(this).closest(".item-wrapper").removeClass("opened");
    })
});