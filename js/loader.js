function initLoader(viewer) {
  var MIN_MS = 2000;
  var MAX_VAL = 360;
  var PHASE1 = 324;

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
      duration: MIN_MS / 1000,
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
          gsap.delayedCall(0.6, function () {
            var tl = gsap.timeline({
              onComplete: function () {
                overlay.style.display = "none";
              },
            });

            tl.to(
              overlay,
              {
                opacity: 0,
                duration: 0.7,
                ease: "power2.in",
              },
              0.2,
            );

            tl.to(
              [
                "#lT",
                "#lE",
                "#lR1",
                "#lR2",
                "#lA",
                "#loaderLogo",
                "#loaderPercent",
              ],
              {
                opacity: 0,
                y: "30px",
                duration: 0.45,
                ease: "power3.in",
                stagger: {
                  each: 0.05,
                  from: "start",
                },
              },
              0.05,
            );

            tl.to(
              overlay,
              {
                opacity: 0,
                duration: 0.7,
                ease: "power2.in",
              },
              0.2,
            );
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
