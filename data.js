// Helpers ---------------------------------------------------------------------
const LEVELS_PANO = [
  { tileSize: 256, size: 256, fallbackOnly: true },
  { tileSize: 512, size: 512 },
  { tileSize: 512, size: 1024 },
  { tileSize: 512, size: 2048 },
  { tileSize: 512, size: 4096 },
]

const LEVELS_DISABLED = [
  { tileSize: 256, size: 256, fallbackOnly: true }
]

function sceneDisabled(id, name) {
  return {
    id,
    name,
    disabled: true,
    levels: LEVELS_DISABLED,
    faceSize: 256,
    initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
    linkHotspots: [],
    infoHotspots: [],
  }
}

function link(yaw, pitch, target) {
  return { yaw, pitch, rotation: 0, target }
}


// Escenas con pano ------------------------------------------------------------
const SCENE_ESTANCIA = {
  id: "0-estancia-siciliano",
  name: "Estancia Siciliano",
  levels: LEVELS_PANO,
  faceSize: 3000,
  initialViewParameters: {
    yaw: -2.6,
    pitch: 0.65,
    fov: 1.8,
  },
  linkHotspots: [
    link(-0.43379722531008724,  0.9380208734047457,  "37-1a"),
    link(-0.0064166726695891185, 1.0191873489125953, "38-1b"),
    link( 0.4800960717801406,   1.003715811908716,   "39-1c"),
    link( 0.8902579996968623,   0.8876154759139947,  "40-1d"),

    link(-1.726489830305736,    1.1276350146471632,  "3-7a"),
    link(-2.237378803042697,    1.376994241449145,   "4-7b"),
    link( 2.431197070032473,    1.3584205635149083,  "5-7c"),
    link( 1.9853781408069384,   1.0990582921688379,  "6-7d"),

    link(-0.5528103732650251,   0.9986674686465733,  "34-2a"),
    link(-0.06375439347135448,  1.1101937250298555,  "35-2b"),
    link( 0.5460885817773562,   1.0872824737563143,  "36-2c"),
    link( 0.9890956551695425,   0.9492143984736234,  "1-2d"),

    link( 0.790534187338146,    1.2772992680707063,  "2-4c"),

    link( 2.8120103577764697,   0.9963358079139439,  "7-10d"),
    link(-2.3084017931791987,   0.9661989548323007,  "9-4b"),
    link(-2.937009097485019,    1.0633652607233905,  "10-4a"),

    link(-2.1212198182075035,   1.0133568282766738,  "11-9a"),
    link(-2.58391751969752,     1.1582000090573885,  "12-9b"),
    link( 3.0742177231141223,   1.1699436091072144,  "13-9c"),
    link( 2.564106211295508,    1.0609492496443291,  "14-9d"),

    link(-1.9516029929588203,   1.0692854016508164,  "15-8a"),
    link(-2.4512742300461454,   1.254174226062979,   "16-8b"),
    link( 2.931351535113846,    1.2852946534880587,  "17-8c"),
    link( 2.3397912589829275,   1.1366977422365405,  "18-8d"),

    link(-1.4745172195728777,   1.1521764964560788,  "19-6a"),
    link(-1.578778584349319,    1.438649026798875,   "20-6b"),
    link( 1.8069066804084963,   1.403353882557166,   "21-6c"),
    link( 1.7351673396893261,   1.1029067230316283,  "22-6d"),

    link(-1.1704721326141012,   1.1423546509310238,  "23-5a"),
    link(-0.7388340220314014,   1.4078704358534395,  "24-5b"),
    link( 1.1625663432034674,   1.365785479654626,   "25-5c"),
    link( 1.5025708404963858,   1.0900330232029773,  "26-5d"),

    link(-0.9149113420036556,   1.1143923338447213,  "27-4a"),
    link(-0.3218537806112831,   1.3126755923325835,  "28-4b"),
    link( 1.3052081471604389,   1.0558378264823851,  "29-4d"),

    link(-0.7054514174151088,   1.064350419086491,   "30-3a"),
    link(-0.1422498416794138,   1.2088744765612471,  "31-3b"),
    link( 0.6295959999026852,   1.1866633892141802,  "32-3c"),
    link( 1.1325497233314188,   1.005,               "33-3d"),
  ],
  infoHotspots: [],
  pinHotspots: [
    { title: "Playa Punta Teatinos (15 Min)", icon: "img/hotspots/pin-corto.svg",   yaw: -2.594309603203513,  pitch: 0.06990136927404222  },
    { title: "Romeral",                       icon: "img/hotspots/pin-mediano.svg",  yaw:  0.4305440564918399,  pitch: 0.048278554260281936  },
    { title: "D-165",                         icon: "img/hotspots/pin-corto.svg",   yaw: -2.4406324975054687, pitch: 0.6188201511285563   },
    { title: "Playa Cuatro Esquinas (22 Min)",icon: "img/hotspots/pin-mediano.svg",  yaw: -2.9932438325328086, pitch: 0.030116719470566267  },
    { title: "Embalse El Trigo",              icon: "img/hotspots/pin-mediano.svg",  yaw:  0.7803957485839561,  pitch: 0.11225294263532781  },
  ],
}

const SCENE_2D = {
  id: "1-2d",
  name: "2D",
  levels: LEVELS_PANO,
  faceSize: 3600,
  initialViewParameters: { pitch: 0.5, yaw: 0, fov: 3 },
  linkHotspots: [],
  infoHotspots: [],
}

const SCENE_4C = {
  id: "2-4c",
  name: "4C",
  levels: LEVELS_PANO,
  faceSize: 3600,
  initialViewParameters: { pitch: 0.5, yaw: 0, fov: 3 },
  linkHotspots: [],
  infoHotspots: [],
}

const SCENE_7A = {
  id: "3-7a",
  name: "7A",
  levels: LEVELS_PANO,
  faceSize: 3600,
  initialViewParameters: { pitch: 0.5, yaw: 0, fov: 3 },
  linkHotspots: [],
  infoHotspots: [],
}

const SCENE_7B = {
  id: "4-7b",
  name: "7B",
  levels: LEVELS_PANO,
  faceSize: 3600,
  initialViewParameters: { pitch: 0.5, yaw: 0, fov: 3 },
  linkHotspots: [],
  infoHotspots: [],
}

const SCENE_7C = {
  id: "5-7c",
  name: "7C",
  levels: LEVELS_PANO,
  faceSize: 3600,
  initialViewParameters: { pitch: 0.5, yaw: 0, fov: 3 },
  linkHotspots: [],
  infoHotspots: [],
}

const SCENE_7D = {
  id: "6-7d",
  name: "7D",
  levels: LEVELS_PANO,
  faceSize: 3600,
  initialViewParameters: { pitch: 0.5, yaw: 0, fov: 3 },
  linkHotspots: [],
  infoHotspots: [],
}

const SCENE_10C = {
  id: "7-10d",
  name: "10C",
  levels: LEVELS_PANO,
  faceSize: 3600,
  initialViewParameters: { pitch: 0.5, yaw: 0, fov: 3 },
  linkHotspots: [],
  infoHotspots: [],
}


// Escenas deshabilitadas (sin pano) ------------------------------------------------------------

const SCENES_DISABLED = [
  sceneDisabled("9-4b",  "10A"),
  sceneDisabled("10-4a", "10B"),
  sceneDisabled("11-9a", "9A"),
  sceneDisabled("12-9b", "9B"),
  sceneDisabled("13-9c", "9C"),
  sceneDisabled("14-9d", "9D"),
  sceneDisabled("15-8a", "8A"),
  sceneDisabled("16-8b", "8B"),
  sceneDisabled("17-8c", "8C"),
  sceneDisabled("18-8d", "8D"),
  sceneDisabled("19-6a", "6A"),
  sceneDisabled("20-6b", "6B"),
  sceneDisabled("21-6c", "6C"),
  sceneDisabled("22-6d", "6D"),
  sceneDisabled("23-5a", "5A"),
  sceneDisabled("24-5b", "5B"),
  sceneDisabled("25-5c", "5C"),
  sceneDisabled("26-5d", "5D"),
  sceneDisabled("27-4a", "4A"),
  sceneDisabled("28-4b", "4B"),
  sceneDisabled("29-4d", "4D"),
  sceneDisabled("30-3a", "3A"),
  sceneDisabled("31-3b", "3B"),
  sceneDisabled("32-3c", "3C"),
  sceneDisabled("33-3d", "3D"),
  sceneDisabled("34-2a", "2A"),
  sceneDisabled("35-2b", "2B"),
  sceneDisabled("36-2c", "2C"),
  sceneDisabled("37-1a", "1A"),
  sceneDisabled("38-1b", "1B"),
  sceneDisabled("39-1c", "1C"),
  sceneDisabled("40-1d", "1D"),
]


// App data ---------------------------------------------------------------------

var APP_DATA = {
  name: "Estancia Siciliano",
  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: false,
    fullscreenButton: true,
    viewControlButtons: true,
  },
  scenes: [
    SCENE_ESTANCIA,
    SCENE_2D,
    SCENE_4C,
    SCENE_7A,
    SCENE_7B,
    SCENE_7C,
    SCENE_7D,
    SCENE_10C,
    ...SCENES_DISABLED,
  ],
}