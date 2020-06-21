$(document).ready(function() {
    $('.loader-wrapper').delay(2000).hide();
    $('.content').show();
    $('.header').height($(window).height());
    $("#cwis").hide();
    $("#covid").hide();
    $("#onlineStore").hide();
    $("#project1").mouseenter(function() {
        $("#cwis").show();
    });
    $("#project1").mouseleave(function() {

        $("#cwis").hide();
    });

    $("#project2").mouseenter(function() {

        $("#covid").show();
    });
    $("#project2").mouseleave(function() {

        $("#covid").hide();
    });
    $("#project3").mouseenter(function() {

        $("#onlineStore").show();
    });
    $("#project3").mouseleave(function() {

        $("#onlineStore").hide();
    });
})