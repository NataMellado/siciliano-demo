"use strict";

function initControls(viewer) {
  var velocity = 0.7;
  var friction = 3;

  var controls = viewer.controls();

  var register = function (id, axis, vel) {
    var el = document.querySelector(id);
    controls.registerMethod(
      id.replace("#", "") + "Element",
      new Marzipano.ElementPressControlMethod(el, axis, vel, friction),
      true
    );
  };

  register("#viewUp",    "y", -velocity);
  register("#viewDown",  "y",  velocity);
  register("#viewLeft",  "x", -velocity);
  register("#viewRight", "x",  velocity);
  register("#viewIn",    "zoom", -velocity);
  register("#viewOut",   "zoom",  velocity);
}
