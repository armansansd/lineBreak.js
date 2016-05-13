function lineBreak(obj, words) {
    // initiate counter
    var c = false;
    while (c !== true) {
        //detect and wrap each line
        $(obj).each(function() {
            lineWrap(this);
        });
        //Array of unwanted words found
        var w_find = [];
        $(".line_wrap").each(function() {
            var span_text = $(this).find('span:last-child').text();
            span_text = span_text.replace(' ', '');
            if ($.inArray(span_text, words) > -1) {
                $(this).find('span:last-child').before(
                    '<span><br/></span>');
                w_find.push($(this).find('span:last-child'));
            }
        });
        if (w_find.length === 0) {
            console.log("no more words");
            c = true;
        } else {
            console.log("still to go");
            c = false;
        }
        $(obj).each(function() {
            pWrap(this);
        });
    }

    function pWrap() {
        var array_text = [];
        $(".line_wrap span").each(function() {
            var txt_span = $(this).find("span");
            var words = txt_span.context.innerHTML;
            if (words !== "") {
                array_text.push(words);
            }
        });
        var html = array_text.join("");
        var parents = $(".line_wrap").parent();
        $(parents).html(html);
        $(".line_wrap").remove();
    }

    function lineWrap(obj) {
        var $cont = $(obj)
        var text_arr = $cont.html().split(' ');
        //put each word into a span
        for (i = 0; i < text_arr.length; i++) {
            text_arr[i] = '<span>' + text_arr[i] + ' </span>';
        }
        //put the span into the container
        $cont.html(text_arr.join(''));
        //detect the span
        $wordSpans = $cont.find('span');
        var lineArray = [],
            lineIndex = 0,
            lineStart = true,
            lineEnd = false
        $wordSpans.each(function(idx) {
            var pos = $(this).position();
            var top = pos.top;
            if (lineStart) {
                lineArray[lineIndex] = [idx];
                lineStart = false;
            } else {
                var $next = $(this).next();
                if ($next.length) {
                    if ($next.position().top > top) {
                        lineArray[lineIndex].push(idx);
                        lineIndex++;
                        lineStart = true
                    }
                } else {
                    lineArray[lineIndex].push(idx);
                }
            }
        });
        for (i = 0; i < lineArray.length; i++) {
            var start = lineArray[i][0],
                end = lineArray[i][1] + 1;
            if (!end) {
                $wordSpans.eq(start).wrap('<span class="line_wrap">')
            } else {
                $wordSpans.slice(start, end).wrapAll(
                    '<span class="line_wrap">');
            }
        }
    }
}
