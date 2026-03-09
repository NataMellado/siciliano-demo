"use strict";

(function () {
  var data = window.APP_DATA;

  // DOM
  var panoElement        = document.querySelector("#pano");
  var sceneNameElement   = document.querySelector("#titleBar");
  var infoBar            = document.querySelector("#infoBar");
  var backButton         = document.querySelector("#backButton");

  // 1. Inicializar viewer
  var viewer = initViewer(panoElement, data);

  // 2. Inicializar switcher (necesita referencia adelantada)
  //    Se crea switchScene antes de crear escenas para poder pasarla a los hotspots
  var scenes = [];
  var switchScene = initSceneSwitcher(scenes, sceneNameElement, infoBar, backButton);

  // 3. Crear escenas pasando el array por referencia
  //    Los linkHotspots usan scenesRef en el momento del click (ya populado)
  var createdScenes = createScenes(viewer, data, switchScene, scenes);
  createdScenes.forEach(function (s) { scenes.push(s); });

  // 4. Registrar controles de navegación
  initControls(viewer);

  // 5. Botón volver a escena inicial
  backButton.addEventListener("click", function () {
    switchScene(scenes[0]);
  });

  // 6. Mostrar escena inicial
  switchScene(scenes[0]);
})();
