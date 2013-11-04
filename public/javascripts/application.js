(function() {
  $(function() {
    var eventStore, pushToServer, recordEvent;
    eventStore = [];
    pushToServer = function() {
      var ajaxNotificationData;
      ajaxNotificationData = {
        url: "http://127.0.0.1:3000/aktable-push/uqs546vcds4E342",
        dataType: 'json',
        data: {
          eventLog: eventStore
        }
      };
      $.ajax(ajaxNotificationData);
      eventStore = [];
      return true;
    };
    recordEvent = function(_eventName, _element) {
      var eventRecord;
      eventRecord = {
        eventType: _eventName,
        elementId: $(_element).attr("id"),
        elementContent: $(_element).html(),
        eventFiredAt: new Date().getTime()
      };
      eventStore.push(eventRecord);
      if (eventStore.length === 100) {
        pushToServer();
      }
      return true;
    };
    $(".aktable-click").click(function() {
      return recordEvent("click", this);
    });
    $(".aktable-hover").hover(function() {
      return recordEvent("hover", this);
    });
    $(".aktable-mouseenter").mouseenter(function() {
      return recordEvent("mouseenter", this);
    });
    $(".aktable-mouseleave").mouseleave(function() {
      return recordEvent("mouseleave", this);
    });
    $(".aktable-mouseover").mouseover(function() {
      return recordEvent("mouseover", this);
    });
    return $(".aktable-change").change(function() {
      return recordEvent("change", this);
    });
  });

}).call(this);
