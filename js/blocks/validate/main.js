export let checkValid = function (obj) {

    let $input = obj.$el;
    let rules = $input.data('obj').validation;
    let isValid = true;
    let objRule = {};

    $input.on('input', function () {
        for (let i in rules) {
            objRule = rules[i];
            if (objRule.type === 'regex') {
                isValid = checkValidByRegEx($input, objRule);
                if (!isValid) break;
            } else if (objRule.type === 'length') {
                isValid = checkValidByMinMax($input, objRule);
                if (!isValid) break;
            }
        }
        drawErrorInput($input, objRule);
    });

};

function checkValidByMinMax($input, objRule) {
    $input.attr({maxlength: objRule.max});
    let min = objRule.min || 0;
    let max = objRule.max || Infinity;
    let length = $input.val().length;
    let isValid = min <= length && length <= max;
    objRule.isValid = isValid;
    return isValid;
}

function checkValidByRegEx($input, objRule) {
    let regEx = new RegExp(objRule.value);
    let isValid = regEx.test($input.val());
    objRule.isValid = isValid;
    return isValid;
}

function drawErrorInput($input, objRule) {
    let isValid = objRule.isValid;
    if (isValid) {
        $input.removeClass('is-invalid');
    } else {
        $input.addClass('is-invalid');
        console.log(objRule.message);
    }

}