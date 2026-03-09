"use strict";

function createLinkHotspotElement(hotspot, scenes, data, switchScene) {
  var wrapper = document.createElement("div");
  wrapper.classList.add("hotspot");
  wrapper.classList.add("link-hotspot");

  var targetData = findSceneDataById(data, hotspot.target);
  var sceneName = targetData ? targetData.name : "";
  var isDisabled = targetData && targetData.disabled === true;

  var icon = document.createElement("div");
  icon.classList.add("link-hotspot-icon");
  icon.innerHTML = sceneName;

  if (isDisabled) {
    wrapper.classList.add("no-pano");
    icon.style.cursor = "default";
  } else {
    wrapper.addEventListener("click", function () {
      switchScene(findSceneById(scenes, hotspot.target));
    });
  }

  stopTouchAndScrollEventPropagation(wrapper);

  var tooltip = document.createElement("div");
  tooltip.classList.add("hotspot-tooltip");
  tooltip.classList.add("link-hotspot-tooltip");
  tooltip.innerHTML = sceneName;

  wrapper.appendChild(icon);
  wrapper.appendChild(tooltip);

  return wrapper;
}

function createInfoHotspotElement(hotspot) {
  var wrapper = document.createElement("div");
  wrapper.classList.add("hotspot");
  wrapper.classList.add("info-hotspot");

  var header = document.createElement("div");
  header.classList.add("info-hotspot-header");

  var iconWrapper = document.createElement("div");
  iconWrapper.classList.add("info-hotspot-icon-wrapper");
  var icon = document.createElement("img");
  icon.src = "img/info.png";
  icon.classList.add("info-hotspot-icon");
  iconWrapper.appendChild(icon);

  var titleWrapper = document.createElement("div");
  titleWrapper.classList.add("info-hotspot-title-wrapper");
  var title = document.createElement("div");
  title.classList.add("info-hotspot-title");
  title.innerHTML = hotspot.title;
  titleWrapper.appendChild(title);

  var closeWrapper = document.createElement("div");
  closeWrapper.classList.add("info-hotspot-close-wrapper");
  var closeIcon = document.createElement("img");
  closeIcon.src = "img/close.png";
  closeIcon.classList.add("info-hotspot-close-icon");
  closeWrapper.appendChild(closeIcon);

  header.appendChild(iconWrapper);
  header.appendChild(titleWrapper);
  header.appendChild(closeWrapper);

  var text = document.createElement("div");
  text.classList.add("info-hotspot-text");
  text.innerHTML = hotspot.text;

  wrapper.appendChild(header);
  wrapper.appendChild(text);

  var modal = document.createElement("div");
  modal.innerHTML = wrapper.innerHTML;
  modal.classList.add("info-hotspot-modal");
  document.body.appendChild(modal);

  var toggle = function () {
    wrapper.classList.toggle("visible");
    modal.classList.toggle("visible");
  };

  wrapper.querySelector(".info-hotspot-header").addEventListener("click", toggle);
  modal.querySelector(".info-hotspot-close-wrapper").addEventListener("click", toggle);

  stopTouchAndScrollEventPropagation(wrapper);

  return wrapper;
}

function createPinHotspotElement(hotspot) {
  var wrapper = document.createElement("div");
  wrapper.classList.add("hotspot");
  wrapper.classList.add("pin-hotspot");

  var label = document.createElement("div");
  label.classList.add("pin-label");
  label.innerHTML = hotspot.title;
  wrapper.appendChild(label);

  var icon = document.createElement("img");
  icon.src = hotspot.icon;
  icon.classList.add("pin-icon");
  wrapper.appendChild(icon);

  if (hotspot.tag) {
    label.classList.add(hotspot.tag);
    icon.classList.add(hotspot.tag);
  }

  stopTouchAndScrollEventPropagation(wrapper);
  return wrapper;
}
