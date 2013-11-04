$ ->
  recordEvent = (_eventName, _element) ->
    return true

  $("*").click(e) ->
    recordEvent "click", e

  $("*").hover(e) ->
    recordEvent "hover", e

  $("*").mouseenter(e) ->
    recordEvent "mouseenter", e

  $("*").mouseleave(e) ->
    recordEvent "mouseleave", e

  $("*").mouseover(e) ->
    recordEvent "mouseover", e

  $("input, textarea").change(e) ->
    recordEvent "change", e

  $(document.body).scroll(e) ->
    recordEvent "scroll", e
  