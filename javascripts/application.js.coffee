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

    return true



  recordEvent = (_eventName, _element) ->

    eventRecord = {
      eventType: _eventName
      elementId: $(_element).attr("id"),
      elementContent: $(_element).html(),
      eventFiredAt: new Date().getTime(),
    }

    eventStore.push eventRecord

    pushToServer() if eventStore.length == 100

    return true



  $(".aktable-click").click ->
    recordEvent "click", this

  $(".aktable-hover").hover ->
    recordEvent "hover", this

  $(".aktable-mouseenter").mouseenter ->
    recordEvent "mouseenter", this

  $(".aktable-mouseleave").mouseleave ->
    recordEvent "mouseleave", this

  $(".aktable-mouseover").mouseover ->
    recordEvent "mouseover", this

  $(".aktable-change").change ->
    recordEvent "change", this
  