var APP_DATA = {
  scenes: [
    {
      id: "0-estancia-siciliano",
      name: "Estancia Siciliano",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },

      ],
      faceSize: 3000,
      initialViewParameters: {
        yaw: -2.6,
        pitch: 0.65,
        fov: 1.8,
      },
      linkHotspots: [
        // 1a {yaw: -0.43379722531008724, pitch: 0.9380208734047457}
        {
          yaw: -0.43379722531008724,
          pitch: 0.9380208734047457,
          rotation: 0,
          target: "37-1a",
        },
        // 1b {yaw: -0.0064166726695891185, pitch: 1.0191873489125953}
        {
          yaw: -0.0064166726695891185,
          pitch: 1.0191873489125953,
          rotation: 0,
          target: "38-1b",
        },
        // 1c {yaw: 0.4800960717801406, pitch: 1.003715811908716}
        {
          yaw: 0.4800960717801406,
          pitch: 1.003715811908716,
          rotation: 0,
          target: "39-1c",
        },
        // 1d {yaw: 0.8902579996968623, pitch: 0.8876154759139947}
        {
          yaw: 0.8902579996968623,
          pitch: 0.8876154759139947,
          rotation: 0,
          target: "40-1d",
        },
        // 7a {yaw: -1.726489830305736, pitch: 1.1276350146471632}
        {
          yaw: -1.726489830305736,
          pitch: 1.1276350146471632,
          rotation: 0,
          target: "3-7a",
        },
        // 7b {yaw: -2.237378803042697, pitch: 1.376994241449145}
        {
          yaw: -2.237378803042697,
          pitch: 1.376994241449145,
          rotation: 0,
          target: "4-7b",
        },
        // 7c {yaw: 2.431197070032473, pitch: 1.3584205635149083}
        {
          yaw: 2.431197070032473,
          pitch: 1.3584205635149083,
          rotation: 0,
          target: "5-7c",
        },
        // 7d {yaw: 1.9853781408069384, pitch: 1.0990582921688379}
        {
          yaw: 1.9853781408069384,
          pitch: 1.0990582921688379,
          rotation: 0,
          target: "6-7d",
        },
        // 2a {yaw: -0.5528103732650251, pitch: 0.9986674686465733}
        {
          yaw: -0.5528103732650251,
          pitch: 0.9986674686465733,
          rotation: 0,
          target: "34-2a",
        },

        // 2b {yaw: -0.06375439347135448, pitch: 1.1101937250298555}
        {
          yaw: -0.06375439347135448,
          pitch: 1.1101937250298555,
          rotation: 0,
          target: "35-2b",
        },
        // 2c {yaw: 0.5460885817773562, pitch: 1.0872824737563143}
        {
          yaw: 0.5460885817773562,
          pitch: 1.0872824737563143,
          rotation: 0,
          target: "36-2c",
        },
        // 2d {yaw: 0.9890956551695425, pitch: 0.9492143984736234}
        {
          yaw: 0.9890956551695425,
          pitch: 0.9492143984736234,
          rotation: 0,
          target: "1-2d",
        },
        // 4c {yaw: 0.790534187338146, pitch: 1.2772992680707063}
        {
          yaw: 0.790534187338146,
          pitch: 1.2772992680707063,
          rotation: 0,
          target: "2-4c",
        },
        // 10c {yaw: 2.8120103577764697, pitch: 0.9963358079139439}
        {
          yaw: 2.8120103577764697,
          pitch: 0.9963358079139439,
          rotation: 0,
          target: "7-10d",
        },
        // 10a {yaw: -2.3084017931791987, pitch: 0.9661989548323007}
        {
          yaw: -2.3084017931791987,
          pitch: 0.9661989548323007,
          rotation: 0,
          target: "9-4b",
        },
        // 10b {yaw: -2.90463229240064, pitch: 1.0456177472624617}
        {
          yaw: -2.937009097485019,
          pitch: 1.0633652607233905,
          rotation: 0,
          target: "10-4a",
        },

        // 9a -2.1212198182075035, pitch: 1.0041201432199411}
        {
          yaw: -2.1212198182075035,
          pitch: 1.0133568282766738,
          rotation: 0,
          target: "11-9a",
        },

        // 9b {yaw: -2.58391751969752, pitch: 1.1582000090573885}
        {
          yaw: -2.58391751969752,
          pitch: 1.1582000090573885,
          rotation: 0,
          target: "12-9b",
        },

        // 9c {yaw: 3.0742177231141223, pitch: 1.1699436091072144}
        {
          yaw: 3.0742177231141223,
          pitch: 1.1699436091072144,
          rotation: 0,
          target: "13-9c",
        },

        // 9d {yaw: 2.564106211295508, pitch: 1.0609492496443291}
        {
          yaw: 2.564106211295508,
          pitch: 1.0609492496443291,
          rotation: 0,
          target: "14-9d",
        },

        // 8a {yaw: -1.9516029929588203, pitch: 1.0692854016508164}
        {
          yaw: -1.9516029929588203,
          pitch: 1.0692854016508164,
          rotation: 0,
          target: "15-8a",
        },

        // 8b {yaw: -2.4512742300461454, pitch: 1.254174226062979}
        {
          yaw: -2.4512742300461454,
          pitch: 1.254174226062979,
          rotation: 0,
          target: "16-8b",
        },

        // 8c {yaw: 2.931351535113846, pitch: 1.2852946534880587}
        {
          yaw: 2.931351535113846,
          pitch: 1.2852946534880587,
          rotation: 0,
          target: "17-8c",
        },

        // 8d {yaw: 2.3397912589829275, pitch: 1.1366977422365405}
        {
          yaw: 2.3397912589829275,
          pitch: 1.1366977422365405,
          rotation: 0,
          target: "18-8d",
        },
        // 6a {yaw: -1.4745172195728777, pitch: 1.1521764964560788}
        {
          yaw: -1.4745172195728777,
          pitch: 1.1521764964560788,
          rotation: 0,
          target: "19-6a",
        },
        // 6b {yaw: -1.578778584349319, pitch: 1.438649026798875}
        {
          yaw: -1.578778584349319,
          pitch: 1.438649026798875,
          rotation: 0,
          target: "20-6b",
        },
        // 6c {yaw: 1.8069066804084963, pitch: 1.403353882557166}
        {
          yaw: 1.8069066804084963,
          pitch: 1.403353882557166,
          rotation: 0,
          target: "21-6c",
        },
        // 6d {yaw: 1.7351673396893261, pitch: 1.1029067230316283}
        {
          yaw: 1.7351673396893261,
          pitch: 1.1029067230316283,
          rotation: 0,
          target: "22-6d",
        },
        // 5a {yaw: -1.1704721326141012, pitch: 1.1423546509310238}
        {
          yaw: -1.1704721326141012,
          pitch: 1.1423546509310238,
          rotation: 0,
          target: "23-5a",
        },
        // 5b {yaw: -0.7388340220314014, pitch: 1.4078704358534395}
        {
          yaw: -0.7388340220314014,
          pitch: 1.4078704358534395,
          rotation: 0,
          target: "24-5b",
        },
        // 5c {yaw: 1.1625663432034674, pitch: 1.365785479654626}
        {
          yaw: 1.1625663432034674,
          pitch: 1.365785479654626,
          rotation: 0,
          target: "25-5c",
        },
        // 5d {yaw: 1.5025708404963858, pitch: 1.0900330232029773}
        {
          yaw: 1.5025708404963858,
          pitch: 1.0900330232029773,
          rotation: 0,
          target: "26-5d",
        },
        // 4a {yaw: -0.9149113420036556, pitch: 1.1143923338447213}
        {
          yaw: -0.9149113420036556,
          pitch: 1.1143923338447213,
          rotation: 0,
          target: "27-4a",
        },
        // 4b {yaw: -0.3218537806112831, pitch: 1.3126755923325835}
        {
          yaw: -0.3218537806112831,
          pitch: 1.3126755923325835,
          rotation: 0,
          target: "28-4b",
        },
        // 4d {yaw: 1.3052081471604389, pitch: 1.0558378264823851}
        {
          yaw: 1.3052081471604389,
          pitch: 1.0558378264823851,
          rotation: 0,
          target: "29-4d",
        },
        // 3a {yaw: -0.7054514174151088, pitch: 1.064350419086491}
        {
          yaw: -0.7054514174151088,
          pitch: 1.064350419086491,
          rotation: 0,
          target: "30-3a",
        },
        // 3b {yaw: -0.1422498416794138, pitch: 1.2088744765612471}
        {
          yaw: -0.1422498416794138,
          pitch: 1.2088744765612471,
          rotation: 0,
          target: "31-3b",
        },
        // 3c {yaw: 0.6295959999026852, pitch: 1.1866633892141802}
        {
          yaw: 0.6295959999026852,
          pitch: 1.1866633892141802,
          rotation: 0,
          target: "32-3c",
        },
        // 3d {yaw: 1.1325497233314188, pitch: 1.0010315677665584}
        {
          yaw: 1.1325497233314188,
          pitch: 1.005,
          rotation: 0,
          target: "33-3d",
        },
        
    


      ],
      infoHotspots: [],
      pinHotspots: [
        {
          //{yaw: -2.594309603203513, pitch: 0.06990136927404222}
          title: "Playa Punta Teatinos (15 Min)",
          icon: "img/hotspots/pin-corto.svg",
          yaw: -2.594309603203513,
          pitch: 0.06990136927404222,
        },
        //{yaw: 0.4305440564918399, pitch: 0.048278554260281936}
        {
          title: "Romeral",
          icon: "img/hotspots/pin-mediano.svg",
          yaw: 0.4305440564918399,
          pitch: 0.048278554260281936,
        },
        //{yaw: -2.4406324975054687, pitch: 0.6188201511285563}
        {
          title: "D-165",
          icon: "img/hotspots/pin-corto.svg",
          yaw: -2.4406324975054687,
          pitch: 0.6188201511285563,
        },
        //{yaw: -2.9932438325328086, pitch: 0.030116719470566267}
        {
          title: "Playa Cuatro Esquinas (22 Min)",
          icon: "img/hotspots/pin-mediano.svg",
          yaw: -2.9932438325328086,
          pitch: 0.030116719470566267,
        },
        //{yaw: 0.7803957485839561, pitch: 0.11225294263532781}
        {
          title: "Embalse El Trigo",
          icon: "img/hotspots/pin-mediano.svg",
          yaw: 0.7803957485839561,
          pitch: 0.11225294263532781,
        },
      ],
    },

    {
      id: "1-2d",
      name: "2D",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 3600,
      initialViewParameters: {
        pitch: 0.5,
        yaw: 0,
        fov: 3,
      },
      linkHotspots: [],
      infoHotspots: [],
    },
    {
      id: "2-4c",
      name: "4C",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 3600,
      initialViewParameters: {
        pitch: 0.5,
        yaw: 0,
        fov: 3,
      },
      linkHotspots: [],
      infoHotspots: [],
    },
    {
      id: "3-7a",
      name: "7A",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 3600,
      initialViewParameters: {
        pitch: 0.5,
        yaw: 0,
        fov: 3,
      },
      linkHotspots: [],
      infoHotspots: [],
    },
    {
      id: "4-7b",
      name: "7B",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 3600,
      initialViewParameters: {
        pitch: 0.5,
        yaw: 0,
        fov: 3,
      },
      linkHotspots: [],
      infoHotspots: [],
    },
    {
      id: "5-7c",
      name: "7C",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 3600,
      initialViewParameters: {
        pitch: 0.5,
        yaw: 0,
        fov: 3,
      },
      linkHotspots: [],
      infoHotspots: [],
    },
    {
      id: "6-7d",
      name: "7D",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 3600,
      initialViewParameters: {
        pitch: 0.5,
        yaw: 0,
        fov: 3,
      },
      linkHotspots: [],
      infoHotspots: [],
    },
    {
      id: "7-10d",
      name: "10C",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 3600,
      initialViewParameters: {
        pitch: 0.5,
        yaw: 0,
        fov: 3,
      },
      linkHotspots: [],
      infoHotspots: [],
    },

    // Escenas sin pano
    {
      id: "9-4b",
      name: "10A",
      disabled: true,
      levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

    // 10b
    {
      id: "10-4a",
      name: "10B",
      disabled: true,
      levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },
    // 9a
    {
      id: "11-9a",
      name: "9A",
      disabled: true,
      levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },
    // 9b
    {
      id: "12-9b",
      name: "9B",
      disabled: true,
      levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },
    // 9c
    {
      id: "13-9c",
      name: "9C",
      disabled: true,
      levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },
    // 9d
    {
      id: "14-9d", 
      name: "9D",
      disabled: true,
      levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

    //8a
    {
      id: "15-8a",
      name: "8A",
      disabled: true,
      levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

    // 8b
    {
      id: "16-8b",
      name: "8B",
      disabled: true,
      levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

    // 8c
    {
      id: "17-8c", 
      name: "8C",
      disabled: true,
      levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

    // 8d
    {
      id: "18-8d",
      name: "8D",
      disabled: true,
      levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

     // 6a
      {
      id: "19-6a",
      name: "6A",
      disabled: true,
        levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,  
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

    //6b
    {
      id: "20-6b",
      name: "6B",
      disabled: true,
      levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

    //6c
    {
      id: "21-6c",
      name: "6C",
      disabled: true,
      levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

    //6d
    {
      id: "22-6d",  
      name: "6D",
      disabled: true,
       levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

    // 5a
    {
      id: "23-5a",
      name: "5A",
      disabled: true,
        levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

    //5b
    {
      id: "24-5b",
      name: "5B",
      disabled: true,
      levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

    //5c
    {
      id: "25-5c",
      name: "5C",
      disabled: true,
      levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

    //5d
    {
      id: "26-5d",
      name: "5D",
      disabled: true,
        levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

    // 4a
    {
      id: "27-4a",
      name: "4A",
      disabled: true,
      levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

    //4b
    {
      id: "28-4b",
      name: "4B",
      disabled: true,
      levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

    // 4d
    {
      id: "29-4d",
      name: "4D",
      disabled: true,
        levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

    // 3a
    {
      id: "30-3a",
      name: "3A",
      disabled: true,
      levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

    // 3b
    {
      id: "31-3b",
      name: "3B",
      disabled: true,
      levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

    // 3c
    {
      id: "32-3c",
      name: "3C",
      disabled: true,
      levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

    // 3d
    {
      id: "33-3d",
      name: "3D",
      disabled: true,
        levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

    // 2a
    {
      id: "34-2a",
      name: "2A",
      disabled: true,
      levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

    // 2b
    {
      id: "35-2b",
      name: "2B",
      disabled: true,
      levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

    // 2c
    {
      id: "36-2c",
      name: "2C",
      disabled: true,
      levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

    // 1a
    {
      id: "37-1a",
      name: "1A",
      disabled: true,
      levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

    // 1b
    {
      id: "38-1b",
      name: "1B",
      disabled: true,
      levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

    // 1c
    {
      id: "39-1c",
      name: "1C",
      disabled: true,
      levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },
    // 1d
    {
      id: "40-1d",
      name: "1D",
      disabled: true,
        levels: [{ tileSize: 256, size: 256, fallbackOnly: true }],
      faceSize: 256,
      initialViewParameters: { pitch: 0, yaw: 0, fov: 1.5 },
      linkHotspots: [],
      infoHotspots: [],
    },

    

  ],
  name: "Estancia Siciliano",
  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: false,
    fullscreenButton: true,
    viewControlButtons: true,
  },
};
