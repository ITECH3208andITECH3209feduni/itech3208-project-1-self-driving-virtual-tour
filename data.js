var APP_DATA = {
  "scenes": [
    {
      "id": "0-photo360-3",
      "name": "Kingston Avenue of Honour",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.6604062818013965,
        "pitch": -0.06306874390706874,
        "fov": 1.0277438030970232
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
    /* ── ADD MORE SCENES HERE ──────────────────────────────
       When you process your other 360° photos in Marzipano Tool,
       copy each scene object from the exported data.js and paste
       it here. Example:
       ,
       {
         "id": "1-your-scene-id",
         "name": "Avenue — Looking South",
         "levels": [ ... ],
         "faceSize": 2048,
         "initialViewParameters": { "yaw": 0, "pitch": 0, "fov": 1.57 },
         "linkHotspots": [],
         "infoHotspots": []
       }
    ────────────────────────────────────────────────────── */
  ],
  "name": "Avenue of Honour Virtual Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
