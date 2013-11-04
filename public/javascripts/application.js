(function() {
  $(function() {
    var recordEvent;
    recordEvent = function(_eventName, _element) {
      return true;
    };
    $("*").click(e)(function() {
      return recordEvent("click", e);
    });
    $("*").hover(e)(function() {
      return recordEvent("hover", e);
    });
    $("*").mouseenter(e)(function() {
      return recordEvent("mouseenter", e);
    });
    $("*").mouseleave(e)(function() {
      return recordEvent("mouseleave", e);
    });
    $("*").mouseover(e)(function() {
      return recordEvent("mouseover", e);
    });
    $("input, textarea").change(e)(function() {
      return recordEvent("change", e);
    });
    return $(document.body).scroll(e)(function() {
      return recordEvent("scroll", e);
    });
  });

}).call(this);
