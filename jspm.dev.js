SystemJS.config({
  map: {
    "plugin-typescript": "github:frankwallis/plugin-typescript@6.0.0",
    "net": "npm:jspm-nodelibs-net@0.2.0",
    "module": "npm:jspm-nodelibs-module@0.2.0",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0"
  },
  packages: {
    "github:frankwallis/plugin-typescript@6.0.0": {
      "map": {
        "typescript": "npm:typescript@2.1.5"
      }
    },
    "npm:typescript@2.1.5": {
      "map": {
        "source-map-support": "npm:source-map-support@0.4.10"
      }
    },
    "npm:source-map-support@0.4.10": {
      "map": {
        "source-map": "npm:source-map@0.5.6"
      }
    }
  }
});
