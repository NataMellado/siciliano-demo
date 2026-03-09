"use strict";

function sanitize(s) {
  return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;");
}

function stopTouchAndScrollEventPropagation(element) {
  var eventList = [
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel",
    "wheel",
    "mousewheel",
  ];
  for (var i = 0; i < eventList.length; i++) {
    element.addEventListener(eventList[i], function (event) {
      event.stopPropagation();
    });
  }
}

function findSceneById(scenes, id) {
  for (var i = 0; i < scenes.length; i++) {
    if (scenes[i].data.id === id) return scenes[i];
  }
  return null;
}

function findSceneDataById(data, id) {
  for (var i = 0; i < data.scenes.length; i++) {
    if (data.scenes[i].id === id) return data.scenes[i];
  }
  return null;
}
