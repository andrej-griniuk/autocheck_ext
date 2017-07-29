$(function(){
    var img = "data:image/png;base64,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";

    var $container = $('<div id="autocheck" class="autocheck-loading"><div class="autocheck-spinner"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i></div></div>');
    $container.html(
        '<h5>Full check advised</h5>' +
        '<img class="autocheck-logo" src="' + img + '" alt="AutoCheck" />' +
        '<div class="autocheck-container autocheck-clearfix">' +
            '<div class="autocheck-row">' +
                '<div class="autocheck-col">' +
                    '<h6>Popularity score</h6>' +
                    '<p id="autocheck-popularity">?</p>' +
                '</div>' +
                '<div class="autocheck-col">' +
                    '<h6>Theft factor</h6>' +
                    '<p id="autocheck-theft-factor">?</p>' +
                '</div>' +
                '<div class="autocheck-col">' +
                    '<h6>Estimated value</h6>' +
                    '<p id="autocheck-value">?</p>' +
                '</div>' +
            '</div>' +
            '<div class="autocheck-row autocheck-extended">' +
                '<div class="autocheck-col">' +
                    '<h6>Star rating</h6>' +
                    '<p id="autocheck-star-rating">?</p>' +
                '</div>' +
                '<div class="autocheck-col">' +
                    '<h6>Financial interest</h6>' +
                    '<p id="autocheck-financial-interest">?</p>' +
                '</div>' +
                '<div class="autocheck-col">' +
                    '<h6>Stolen</h6>' +
                    '<p id="autocheck-is-stolen">?</p>' +
                '</div>' +
            '</div>' +
            '<div class="autocheck-row autocheck-extended">' +
                '<div class="autocheck-col">' +
                    '<h6>Rego exp</h6>' +
                    '<p id="autocheck-is-rego-expired">?</p>' +
                '</div>' +
                '<div class="autocheck-col">' +
                    '<h6>Damaged</h6>' +
                    '<p id="autocheck-is-damaged">?</p>' +
                '</div>' +
                '<div class="autocheck-col">' +
                    '<h6>Odo rollback</h6>' +
                    '<p id="autocheck-is-rolled-back">?</p>' +
                '</div>' +
            '</div>' +
            '<a href="" class="autocheck-check">Perform check</a>' +
        '</div>'
    );

    $('.autocheck-extended', $container).hide();

    var plateNumber = '';
    var make = '';
    var model = '';
    var year = '';

    var elementFound = false;
    if ($('.details-bnc').length === 1) {
        // Carsales
        $container.insertAfter('.details-bnc');
        elementFound = true;

        plateNumber = $('th:contains("Registration Plate")').next().text();
    } else if ($('.gallery-thumbs').length === 1) {
        // Gumtree
        $container.insertAfter('.gallery-thumbs');
        $container.attr('style', 'margin: 20px');
        elementFound = true;

        plateNumber = $('dt:contains("Registration Number:")').next().text();
        make = $('dt:contains("Make:")').next().text();
        model = $('dt:contains("Model:")').next().text();
        year = $('dt:contains("Year:")').next().text();
    }

    if (!elementFound) {
        return;
    }

    $.get('https://govhack-autocheck.herokuapp.com/cars.json?plate_number=' + plateNumber + '&make=' + make + '&model=' + model + '&year=' + year, function(response) {
        var data = response.data;

        $('#autocheck-popularity', $container).text(data.popularity_score);
        $('#autocheck-theft-factor', $container).text(data.thefts_factor);
        $('#autocheck-value', $container).text(data.estimated_value);

        if (data.plate_number !== '') {
            $('.autocheck-extended', $container).show();
            $('.autocheck-check', $container).hide();

            $('#autocheck-star-rating', $container)
                .text(data.star_rating)
                .addClass(data.star_rating.length > 3 ? 'autocheck-green' : (data.star_rating.length > 1 ? 'autocheck-orange' : 'autocheck-red'));

            $('#autocheck-financial-interest', $container)
                .text(data.is_encumbered ? 'Yes' : 'No')
                .addClass(data.is_encumbered ? 'autocheck-red' : 'autocheck-green');

            $('#autocheck-is-stolen', $container)
                .text(data.is_stolen ? 'Yes' : 'No')
                .addClass(data.is_stolen ? 'autocheck-red' : 'autocheck-green');

            $('#autocheck-is-rego-expired', $container)
                .text(data.is_rego_expired ? 'Yes' : 'No')
                .addClass(data.is_rego_expired ? 'autocheck-orange' : 'autocheck-green');

            $('#autocheck-is-damaged', $container)
                .text(data.is_damaged ? 'Yes' : 'No')
                .addClass(data.is_damaged ? 'autocheck-orange' : 'autocheck-green');

            $('#autocheck-is-rolled-back', $container)
                .text(data.is_rolled_back ? 'Yes' : 'No')
                .addClass(data.is_rolled_back ? 'autocheck-red' : 'autocheck-green');

            if (!data.is_encumbered && !data.is_stolen && !data.is_rego_expired && !data.is_damaged && !data.is_rolled_back) {
                $container.addClass('autocheck-bg-green');
                $('h5', $container).text('Looks good!');
            } else if (!data.is_encumbered && !data.is_stolen && !data.is_rolled_back) {
                $container.addClass('autocheck-bg-orange');
                $('h5', $container).text('Hmm...');
            } else {
                $container.addClass('autocheck-bg-red');
                $('h5', $container).text('Don\'t do it!!!');
            }
        }

        $container.removeClass('autocheck-loading');
    })
});
