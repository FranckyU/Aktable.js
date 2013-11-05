$ ->
  eventStore = []

  pushToServer = () ->

    ajaxNotificationData = {
      url: "http://127.0.0.1:3000/aktable-push/uqs546vcds4E342"
      dataType: 'json'
      data: {eventLog: eventStore}
    }

    $.ajax ajaxNotificationData

    eventStore = []



  recordEvent = (_eventName, _element) ->

    eventRecord = {
      eventType: _eventName
      elementId: $(_element).attr("id"),
      elementContent: $(_element).html(),
      eventFiredAt: new Date().getTime(),
    }

    eventStore.push eventRecord

    pushToServer() if eventStore.length == 100



  $(".aktable-click").click ->
    recordEvent "click", this
    return false

  $(".aktable-hover").hover ->
    recordEvent "hover", this
    return false

  $(".aktable-mouseenter").mouseenter ->
    recordEvent "mouseenter", this
    return false

  $(".aktable-mouseleave").mouseleave ->
    recordEvent "mouseleave", this
    return false

  $(".aktable-mouseover").mouseover ->
    recordEvent "mouseover", this
    return false

  $(".aktable-change").change ->
    recordEvent "change", this
    return false
  