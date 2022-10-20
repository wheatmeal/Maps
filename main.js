import Map from 'ol/Map';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import TileLayer from 'ol/layer';

const raster = new TileLayer({
  source: new XYZ({
    url: 'https://basemaps.linz.govt.nz/v1/tiles/aerial/WebMercatorQuad/{z}/{x}/{y}.webp'+'?api=c01gfqgs0gjnfeh12edb13swppm',
    tileOptions: {crossOriginKeyword: null},
  }),
});

const map = new Map({
  layers: [raster],
  target: document.getElementById('map'),
  view: new View({
    center: [0,0],
    maxZoom: 19,
    zoom: 3,
  }),
});
