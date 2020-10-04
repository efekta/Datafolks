$(document).ready(function(){
    // modal
    $('#saha_btn').on('click', function(e) {
        e.preventDefault();
        $('#modal_saha').addClass('is-visible');
        $('.modal-close').on('click', function (){
            $('#modal_saha').removeClass('is-visible');
        });
    });

    $('#gazprom_btn').on('click', function(e) {
        e.preventDefault();
        $('#modal_gazprom').addClass('is-visible');
        $('.modal-close').on('click', function (){
            $('#modal_gazprom').removeClass('is-visible');
        });
    });

    $('#nokia_btn').on('click', function(e) {
        e.preventDefault();
        $('#modal_nokia').addClass('is-visible');
        $('.modal-close').on('click', function (){
            $('#modal_nokia').removeClass('is-visible');
        });
    });
});
