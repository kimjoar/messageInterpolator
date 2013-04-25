(function (root, factory) {
    if (typeof exports === 'object') {
        // Node
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(factory);
    } else {
        // Browser globals
        root.messageInterpolator = factory();
  }
}(this, function () {

    var replaceTags = function(input, callback) {
        // tags are similar to Mustache tags, i.e. {{tag}}
        var tagRegex = /\{\{([^\}]+)\}\}/g;

        return input.replace(tagRegex, callback);
    };

    return function(input, data) {
        return replaceTags(input, function(match, tagName) {
            if (data.hasOwnProperty(tagName)) {
                return data[tagName];
            } else {
                return match;
            }
        });
    };

}));

