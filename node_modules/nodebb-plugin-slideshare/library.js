(function(module) {
    "use strict";

    var Slideshare = {},
        embed = '<iframe src="http://www.slideshare.net/slideshow/embed_code/$1" width="427" height="356" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>'


    Slideshare.parse = function(postContent, callback) {
        postContent = postContent.replace(/\[slideshare id=([\s\S]*?)&[\s\S]*?\]/g, embed);
        callback(null, postContent);
    };

    module.exports = Slideshare;
}(module));
