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
        { cubeMapPreviewUrl: urlPrefix + "/" + sceneData.id + "/preview.jpg" },
      );
      var geometry = new Marzipano.CubeGeometry(sceneData.levels);

      var limiter = Marzipano.RectilinearView.limit.traditional(
        1040 * 10,
        (120 * Math.PI) / 180,
        (130 * Math.PI) / 180,
      );

      if (document.body.classList.contains("mobile")) {
        sceneData.initialViewParameters.fov = 1.8;
      }

      var view = new Marzipano.RectilinearView(
        sceneData.initialViewParameters,
        limiter,
      );

      var scene = viewer.createScene({
        source: source,
        geometry: geometry,
        view: view,
        pinFirstLevel: true,
      });

      // Link hotspots
      sceneData.linkHotspots.forEach(function (hotspot) {
        var element = createLinkHotspotElement(
          hotspot,
          scenesRef,
          data,
          switchScene,
        );
        scene
          .hotspotContainer()
          .createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
      });

      // Info hotspots
      sceneData.infoHotspots.forEach(function (hotspot) {
        var element = createInfoHotspotElement(hotspot);
        scene
          .hotspotContainer()
          .createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
      });

      // Pin hotspots
      if (sceneData.pinHotspots) {
        sceneData.pinHotspots.forEach(function (hotspot) {
          var element = createPinHotspotElement(hotspot);
          scene
            .hotspotContainer()
            .createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
        });
      }

      return { data: sceneData, scene: scene, view: view };
    });
}

function updateInfoCard(nombreLote) {
  var lote = getLote(nombreLote);

  if (!lote) {
    console.warn("No se encontró información para el lote:", nombreLote);
    return;
  }

  // Obtener elementos del DOM
  var precioEl = document.getElementById("lotePrecio");
  var superficieEl = document.getElementById("loteSuperficie");
  var frenteEl = document.getElementById("loteFrente");
  var tipoEl = document.getElementById("loteTipo");
  var statusEl = document.querySelector("#infoCard .status");
  var statusText = document.querySelector("#infoCard p");
  var statusText = document.getElementById("statusText");

  // Actualizar información del lote
  if (precioEl) precioEl.textContent = lote.precio || "-";
  if (superficieEl) superficieEl.textContent = lote.superficie || "-";
  if (frenteEl) frenteEl.textContent = lote.frente || "-";
  if (tipoEl) tipoEl.textContent = lote.tipo || "-";

  if (statusEl && statusText) {
    if (lote.disponible) {
      statusEl.className = "status available";
      statusText.textContent = " Disponible";
    } else {
      statusEl.className = "status sold";
      statusText.textContent = " Vendido";
    }
  }
}

function initSceneSwitcher(scenes, sceneNameElement, infoBar, backButton) {
  function updateSceneName(scene) {
    if (sceneNameElement) {
      sceneNameElement.innerHTML = sanitize(scene.data.name);
    }
  }

 function switchScene(scene) {
    var sceneIndex = scenes.indexOf(scene);
    var isMainScene = (sceneIndex === 0);
    var navbar = document.querySelector(".nav"); // Aseguramos que lo encuentre

    // 1. Ejecutar el cambio de cámara en Marzipano
    scene.view.setParameters(scene.data.initialViewParameters);
    scene.scene.switchTo();

    // 2. Limpieza total de estados (Reset)
    // Quitamos TODO antes de decidir qué poner.
    navbar.classList.remove("visible");
    infoBar.classList.remove("visible");
    backButton.classList.remove("visible");

    // Forzamos un "reflow" (un pequeño respiro para el navegador)
    void navbar.offsetWidth; 

    if (isMainScene) {
      // --- ESTAMOS EN EL MAPA PRINCIPAL ---
      updateSceneName(scene);
      
      // El navbar vuelve a aparecer
      navbar.classList.add("visible");
      
    } else {
      // --- ESTAMOS DENTRO DE UN LOTE ---
      updateInfoCard(scene.data.name);
      updateSceneName(scene);

      // El navbar se queda oculto (ya lo quitamos arriba)
      // Y activamos la información del lote
      infoBar.classList.add("visible");
      backButton.classList.add("visible");
    }
  }

  return switchScene;
}
