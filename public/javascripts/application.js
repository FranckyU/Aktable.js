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
      return eventStore = [];
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
        return pushToServer();
      }
    };
    $(".aktable-click").click(function() {
      recordEvent("click", this);
      return false;
    });
    $(".aktable-hover").hover(function() {
      recordEvent("hover", this);
      return false;
    });
    $(".aktable-mouseenter").mouseenter(function() {
      recordEvent("mouseenter", this);
      return false;
    });
    $(".aktable-mouseleave").mouseleave(function() {
      recordEvent("mouseleave", this);
      return false;
    });
    $(".aktable-mouseover").mouseover(function() {
      recordEvent("mouseover", this);
      return false;
    });
    return $(".aktable-change").change(function() {
      recordEvent("change", this);
      return false;
    });
  });

}).call(this);
