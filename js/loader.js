function initLoader(viewer) {
  var MIN_MS = 700; // Tiempo mínimo que el loader debe estar visible (en ms)
  var MAX_VAL = 360; // Valor máximo del porcentaje 
  var PHASE1 = 324; // Valor al que llegará el porcentaje en la fase 1 (90% de 360)

  var overlay = document.querySelector("#loaderOverlay");
  var percentLabel = document.querySelector("#loaderPercent");

  if (!overlay || !percentLabel) {
    console.warn("initLoader: faltan elementos del loader en el DOM.");
    return;
  }

  var startTime = Date.now();
  var dismissed = false;
  var currentVal = 0;

  function setVal(v) {
    currentVal = Math.round(v);
    percentLabel.textContent = currentVal;
  }

  // Fase 1: sube de 0 a 324 en 2 segundos
  gsap.to(
    { val: 0 },
    {
      val: PHASE1,
      duration: MIN_MS / 500,
      ease: "power1.inOut",
      onUpdate: function () {
        if (!dismissed) setVal(this.targets()[0].val);
      },
    },
  );

  function dismiss() {
    if (dismissed) return;
    dismissed = true;

    stage.removeEventListener("renderComplete", onRenderComplete);

    // Fase 2: sube de donde esté a 360
    gsap.to(
      { val: currentVal },
      {
        val: MAX_VAL,
        duration: 0.4,
        ease: "power2.out",
        onUpdate: function () {
          setVal(this.targets()[0].val);
        },
        onComplete: function () {

          // Fase 3: animacion de salida
          gsap.to(overlay, {
            delay: 0.3, 
            duration: 1,
            ease: "power1.inOut",
            filter: "blur(20px)",
            scale: 1.5,
            opacity: 0,
            onComplete: function () {
              overlay.style.display = "none";
            },
          });
        },
      },
    );
  }

  var stage = viewer.stage();

  function onRenderComplete() {
    if (dismissed) return;

    var elapsed = Date.now() - startTime;
    var remaining = MIN_MS - elapsed;

    if (remaining <= 0) {
      dismiss();
    } else {
      setTimeout(dismiss, remaining);
    }
  }

  stage.addEventListener("renderComplete", onRenderComplete);
}
