$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $('.home-image path');
    var counterUp = $('.counter-up');
    var counterDown = $('.counter-down');
    var flatPath = $('.flats path');
    var flatLink = $('.flat-link');
    var modal = $('.modal');
    var modalCloseButton = $('.modal-close-button');
    var current, cur;
    var viewFlatsButton = $('.view-flats');
    floorPath.on(' mouseover', function () {
        floorPath.removeClass('current-floor');
        currentFloor = $(this).attr('data-floor');
        $('.counter').text(currentFloor)
    })

    flatPath.on('mouseover', function () {
        current = $(this).attr('data-flat');
        console.log(current);
        $(`[data-link=${current}]`).toggleClass('psevdo')
    })
    flatPath.mouseout(function () {
        $(`[data-link=${current}]`).toggleClass('psevdo')
    })

    flatLink.on('mouseover', function () {
        cur = $(this).attr('data-link');
        console.log(cur);
        $(`[data-flat=${cur}]`).toggleClass('psevdo-opacity')
    })
    flatLink.mouseout(function () {
        $(`[data-flat=${cur}]`).toggleClass('psevdo-opacity')
    })

    floorPath.on('click', toggleModal);

    modalCloseButton.on('click', toggleModal);
    viewFlatsButton.on('click', toggleModal)

    counterUp.on('click', function () {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor')
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor')
        }
    });

    counterDown.on('click', function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor')
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor')
        }
    })
    function toggleModal() {
        modal.toggleClass('is-open');
    }
});