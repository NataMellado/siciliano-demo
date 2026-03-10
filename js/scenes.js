"use strict";

function createScenes(viewer, data, switchScene, scenesRef) {
  return data.scenes
    .filter(function (sceneData) {
      return !sceneData.disabled;
    })
    .map(function (sceneData) {
      var urlPrefix = "tiles";
      var source = Marzipano.ImageUrlSource.fromString(
        urlPrefix + "/" + sceneData.id + "/{z}/{f}/{y}/{x}.jpg",
        { cubeMapPreviewUrl: urlPrefix + "/" + sceneData.id + "/preview.jpg" }
      );
      var geometry = new Marzipano.CubeGeometry(sceneData.levels);

      var limiter = Marzipano.RectilinearView.limit.traditional(
        1040 * 10,
        (120 * Math.PI) / 180,
        (130 * Math.PI) / 180
      );

      if (document.body.classList.contains("mobile")) {
        sceneData.initialViewParameters.fov = 1.8;
      }

      var view = new Marzipano.RectilinearView(sceneData.initialViewParameters, limiter);

      var scene = viewer.createScene({
        source: source,
        geometry: geometry,
        view: view,
        pinFirstLevel: true,
      });

      // Link hotspots
      sceneData.linkHotspots.forEach(function (hotspot) {
        var element = createLinkHotspotElement(hotspot, scenesRef, data, switchScene);
        scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
      });

      // Info hotspots
      sceneData.infoHotspots.forEach(function (hotspot) {
        var element = createInfoHotspotElement(hotspot);
        scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
      });

      // Pin hotspots
      if (sceneData.pinHotspots) {
        sceneData.pinHotspots.forEach(function (hotspot) {
          var element = createPinHotspotElement(hotspot);
          scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
        });
      }

      return { data: sceneData, scene: scene, view: view };
    });
}

function initSceneSwitcher(scenes, sceneNameElement, infoBar, backButton) {
  function updateSceneName(scene) {
    if (sceneNameElement) {
      sceneNameElement.innerHTML = sanitize(scene.data.name);
    }
  }

  function switchScene(scene) {
    var sceneIndex = scenes.indexOf(scene);

    scene.view.setParameters(scene.data.initialViewParameters);
    scene.scene.switchTo();

    var navbar = document.querySelector('.nav'); 

    if (sceneIndex === 0) {
      infoBar.classList.remove("visible");
      navbar.classList.add("visible");
      setTimeout(function () {
        updateSceneName(scene);
      }, 350);
      backButton.classList.remove("visible");
    } else {
      updateSceneName(scene);
      infoBar.classList.add("visible");
      backButton.classList.add("visible");
      navbar.classList.remove("visible");  
    }
  }

  return switchScene;
}
