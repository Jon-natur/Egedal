ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25832").setExtent([686927.583194, 6150875.326908, 693345.867576, 6154199.506334]);
var wms_layers = [];


    var projection_Ortofotoforrnyestetilgngelige_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_Ortofotoforrnyestetilgngelige_0 = projection_Ortofotoforrnyestetilgngelige_0.getExtent();
    var size_Ortofotoforrnyestetilgngelige_0 = ol.extent.getWidth(projectionExtent_Ortofotoforrnyestetilgngelige_0) / 256;
    var resolutions_Ortofotoforrnyestetilgngelige_0 = new Array(14);
    var matrixIds_Ortofotoforrnyestetilgngelige_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Ortofotoforrnyestetilgngelige_0[z] = size_Ortofotoforrnyestetilgngelige_0 / Math.pow(2, z);
        matrixIds_Ortofotoforrnyestetilgngelige_0[z] = z;
    }
    var lyr_Ortofotoforrnyestetilgngelige_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://services.datafordeler.dk/GeoDanmarkOrto/orto_foraar_wmts/1.0.0/wmts?username=STGGAEECCJ&password=een!oM8HJ7_!aCw6&SERVICE=WMTS&REQUEST=GetCapabilities",
                                attributions: ' ',
                                "layer": "orto_foraar_wmts",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_Ortofotoforrnyestetilgngelige_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Ortofotoforrnyestetilgngelige_0),
                resolutions: resolutions_Ortofotoforrnyestetilgngelige_0,
                matrixIds: matrixIds_Ortofotoforrnyestetilgngelige_0
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Ortofoto forår nyeste tilgængelige',
                            opacity: 1.0,
                            
                            
                          });
var lyr_NyesteortofotoGeodanmark_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://api.dataforsyningen.dk/orto_foraar_DAF?token%3Df303d7c1e173ebf66bec462a7a94c593",
                              attributions: ' ',
                              params: {
                                "LAYERS": "orto_foraar",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Nyeste ortofoto, Geodanmark',
                            popuplayertitle: 'Nyeste ortofoto, Geodanmark',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_NyesteortofotoGeodanmark_1, 0]);

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_2025projektomrde_3 = new ol.format.GeoJSON();
var features_2025projektomrde_3 = format_2025projektomrde_3.readFeatures(json_2025projektomrde_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_2025projektomrde_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2025projektomrde_3.addFeatures(features_2025projektomrde_3);
var lyr_2025projektomrde_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2025projektomrde_3, 
                style: style_2025projektomrde_3,
                popuplayertitle: '2025 - projektområde',
                interactive: true,
                title: '<img src="styles/legend/2025projektomrde_3.png" /> 2025 - projektområde'
            });
var format_Udpeget_opgraderet_4 = new ol.format.GeoJSON();
var features_Udpeget_opgraderet_4 = format_Udpeget_opgraderet_4.readFeatures(json_Udpeget_opgraderet_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Udpeget_opgraderet_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Udpeget_opgraderet_4.addFeatures(features_Udpeget_opgraderet_4);
var lyr_Udpeget_opgraderet_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Udpeget_opgraderet_4, 
                style: style_Udpeget_opgraderet_4,
                popuplayertitle: 'Udpeget_opgraderet',
                interactive: true,
    title: 'Udpeget_opgraderet<br />\
    <img src="styles/legend/Udpeget_opgraderet_4_0.png" /> Sø<br />\
    <img src="styles/legend/Udpeget_opgraderet_4_1.png" /> Mose<br />\
    <img src="styles/legend/Udpeget_opgraderet_4_2.png" /> Eng<br />\
    <img src="styles/legend/Udpeget_opgraderet_4_3.png" /> Overdrev<br />\
    <img src="styles/legend/Udpeget_opgraderet_4_4.png" /> Hede<br />\
    <img src="styles/legend/Udpeget_opgraderet_4_5.png" /> Potentiel ny eng<br />\
    <img src="styles/legend/Udpeget_opgraderet_4_6.png" /> Potentiel ny mose<br />\
    <img src="styles/legend/Udpeget_opgraderet_4_7.png" /> Potentiel ny sø<br />\
    <img src="styles/legend/Udpeget_opgraderet_4_8.png" /> Potentiel ny overdrev<br />' });
var group_2025 = new ol.layer.Group({
                                layers: [lyr_Udpeget_opgraderet_4,],
                                fold: 'open',
                                title: '2025'});
var group_2024 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '2024'});
var group_2023 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '2023'});
var group_2022 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '2022'});

lyr_Ortofotoforrnyestetilgngelige_0.setVisible(true);lyr_NyesteortofotoGeodanmark_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_2025projektomrde_3.setVisible(true);lyr_Udpeget_opgraderet_4.setVisible(true);
var layersList = [lyr_Ortofotoforrnyestetilgngelige_0,lyr_NyesteortofotoGeodanmark_1,lyr_GoogleSatelliteHybrid_2,lyr_2025projektomrde_3,group_2025];
lyr_2025projektomrde_3.set('fieldAliases', {'id': 'id', });
lyr_Udpeget_opgraderet_4.set('fieldAliases', {'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Polygon areal', 'Shape_leng': 'Shape_leng', 'Natyp_kode': 'Naturtype kode', 'Natyp_navn': 'Naturtype', 'Besig_dato': 'Besigtigelsesdato', 'layer': 'layer', 'path': 'path', 'Note': 'Note', 'M.O': 'Mulige overtrædelser', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Afstand': 'Afstand', 'Polygon_Na': 'Felt ID', });
lyr_2025projektomrde_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Udpeget_opgraderet_4.set('fieldImages', {'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Natyp_kode': 'TextEdit', 'Natyp_navn': 'TextEdit', 'Besig_dato': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Note': 'TextEdit', 'M.O': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Afstand': 'TextEdit', 'Polygon_Na': 'TextEdit', });
lyr_2025projektomrde_3.set('fieldLabels', {'id': 'no label', });
lyr_Udpeget_opgraderet_4.set('fieldLabels', {'Temakode': 'hidden field', 'Temanavn': 'inline label - always visible', 'Objekt_id': 'inline label - always visible', 'Version_id': 'hidden field', 'Systid_fra': 'hidden field', 'Systid_til': 'hidden field', 'Oprettet': 'inline label - always visible', 'Oprindkode': 'hidden field', 'Oprindelse': 'hidden field', 'Statuskode': 'hidden field', 'Status': 'inline label - always visible', 'Off_kode': 'hidden field', 'Offentlig': 'inline label - always visible', 'CVR_kode': 'hidden field', 'CVR_navn': 'inline label - always visible', 'Bruger_id': 'hidden field', 'Link': 'inline label - always visible', 'Shape_area': 'inline label - always visible', 'Shape_leng': 'hidden field', 'Natyp_kode': 'inline label - always visible', 'Natyp_navn': 'inline label - always visible', 'Besig_dato': 'inline label - always visible', 'layer': 'hidden field', 'path': 'hidden field', 'Note': 'no label', 'M.O': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Afstand': 'hidden field', 'Polygon_Na': 'inline label - always visible', });
lyr_Udpeget_opgraderet_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});