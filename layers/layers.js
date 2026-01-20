ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([449762.362956, 7218445.210286, 450381.487956, 7218771.309245]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PostacionL3_2 = new ol.format.GeoJSON();
var features_PostacionL3_2 = format_PostacionL3_2.readFeatures(json_PostacionL3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionL3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionL3_2.addFeatures(features_PostacionL3_2);
var lyr_PostacionL3_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionL3_2, 
                style: style_PostacionL3_2,
                popuplayertitle: 'Postacion L3',
                interactive: true,
                title: '<img src="styles/legend/PostacionL3_2.png" /> Postacion L3'
            });
var format_POSTACIONEXISTENTE_3 = new ol.format.GeoJSON();
var features_POSTACIONEXISTENTE_3 = format_POSTACIONEXISTENTE_3.readFeatures(json_POSTACIONEXISTENTE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_POSTACIONEXISTENTE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSTACIONEXISTENTE_3.addFeatures(features_POSTACIONEXISTENTE_3);
var lyr_POSTACIONEXISTENTE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POSTACIONEXISTENTE_3, 
                style: style_POSTACIONEXISTENTE_3,
                popuplayertitle: 'POSTACION EXISTENTE',
                interactive: true,
                title: '<img src="styles/legend/POSTACIONEXISTENTE_3.png" /> POSTACION EXISTENTE'
            });
var format_ITG11_4 = new ol.format.GeoJSON();
var features_ITG11_4 = format_ITG11_4.readFeatures(json_ITG11_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_ITG11_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ITG11_4.addFeatures(features_ITG11_4);
var lyr_ITG11_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ITG11_4, 
                style: style_ITG11_4,
                popuplayertitle: 'ITG11',
                interactive: true,
                title: '<img src="styles/legend/ITG11_4.png" /> ITG11'
            });
var format_ITG2_5 = new ol.format.GeoJSON();
var features_ITG2_5 = format_ITG2_5.readFeatures(json_ITG2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_ITG2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ITG2_5.addFeatures(features_ITG2_5);
var lyr_ITG2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ITG2_5, 
                style: style_ITG2_5,
                popuplayertitle: 'ITG2',
                interactive: true,
                title: '<img src="styles/legend/ITG2_5.png" /> ITG2'
            });
var format_CAE2_6 = new ol.format.GeoJSON();
var features_CAE2_6 = format_CAE2_6.readFeatures(json_CAE2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_CAE2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAE2_6.addFeatures(features_CAE2_6);
var lyr_CAE2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAE2_6, 
                style: style_CAE2_6,
                popuplayertitle: 'CAE2',
                interactive: true,
                title: '<img src="styles/legend/CAE2_6.png" /> CAE2'
            });
var format_ALT_7 = new ol.format.GeoJSON();
var features_ALT_7 = format_ALT_7.readFeatures(json_ALT_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_ALT_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALT_7.addFeatures(features_ALT_7);
var lyr_ALT_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALT_7, 
                style: style_ALT_7,
                popuplayertitle: 'ALT',
                interactive: true,
                title: '<img src="styles/legend/ALT_7.png" /> ALT'
            });
var format_GHN1_8 = new ol.format.GeoJSON();
var features_GHN1_8 = format_GHN1_8.readFeatures(json_GHN1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_GHN1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GHN1_8.addFeatures(features_GHN1_8);
var lyr_GHN1_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GHN1_8, 
                style: style_GHN1_8,
                popuplayertitle: 'GHN1',
                interactive: true,
                title: '<img src="styles/legend/GHN1_8.png" /> GHN1'
            });
var format_PostacinExistSistema_9 = new ol.format.GeoJSON();
var features_PostacinExistSistema_9 = format_PostacinExistSistema_9.readFeatures(json_PostacinExistSistema_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacinExistSistema_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacinExistSistema_9.addFeatures(features_PostacinExistSistema_9);
var lyr_PostacinExistSistema_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacinExistSistema_9, 
                style: style_PostacinExistSistema_9,
                popuplayertitle: 'Postación Exist. Sistema',
                interactive: true,
                title: '<img src="styles/legend/PostacinExistSistema_9.png" /> Postación Exist. Sistema'
            });
var format_PostacionSistL3Exist28082025_10 = new ol.format.GeoJSON();
var features_PostacionSistL3Exist28082025_10 = format_PostacionSistL3Exist28082025_10.readFeatures(json_PostacionSistL3Exist28082025_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionSistL3Exist28082025_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionSistL3Exist28082025_10.addFeatures(features_PostacionSistL3Exist28082025_10);
var lyr_PostacionSistL3Exist28082025_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionSistL3Exist28082025_10, 
                style: style_PostacionSistL3Exist28082025_10,
                popuplayertitle: 'Postacion Sist L3 Exist 28-08-2025',
                interactive: true,
                title: '<img src="styles/legend/PostacionSistL3Exist28082025_10.png" /> Postacion Sist L3 Exist 28-08-2025'
            });
var format_PostacionSistL3Nuevo28082025_11 = new ol.format.GeoJSON();
var features_PostacionSistL3Nuevo28082025_11 = format_PostacionSistL3Nuevo28082025_11.readFeatures(json_PostacionSistL3Nuevo28082025_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionSistL3Nuevo28082025_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionSistL3Nuevo28082025_11.addFeatures(features_PostacionSistL3Nuevo28082025_11);
var lyr_PostacionSistL3Nuevo28082025_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionSistL3Nuevo28082025_11, 
                style: style_PostacionSistL3Nuevo28082025_11,
                popuplayertitle: 'Postacion Sist L3 Nuevo 28-08-2025',
                interactive: true,
                title: '<img src="styles/legend/PostacionSistL3Nuevo28082025_11.png" /> Postacion Sist L3 Nuevo 28-08-2025'
            });
var format_PostacionL3Exist30122025_12 = new ol.format.GeoJSON();
var features_PostacionL3Exist30122025_12 = format_PostacionL3Exist30122025_12.readFeatures(json_PostacionL3Exist30122025_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionL3Exist30122025_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionL3Exist30122025_12.addFeatures(features_PostacionL3Exist30122025_12);
var lyr_PostacionL3Exist30122025_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionL3Exist30122025_12, 
                style: style_PostacionL3Exist30122025_12,
                popuplayertitle: 'Postacion L3 Exist 30-12-2025',
                interactive: true,
                title: '<img src="styles/legend/PostacionL3Exist30122025_12.png" /> Postacion L3 Exist 30-12-2025'
            });
var format_PostacionL3Nuevo30122025_13 = new ol.format.GeoJSON();
var features_PostacionL3Nuevo30122025_13 = format_PostacionL3Nuevo30122025_13.readFeatures(json_PostacionL3Nuevo30122025_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionL3Nuevo30122025_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionL3Nuevo30122025_13.addFeatures(features_PostacionL3Nuevo30122025_13);
var lyr_PostacionL3Nuevo30122025_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionL3Nuevo30122025_13, 
                style: style_PostacionL3Nuevo30122025_13,
                popuplayertitle: 'Postacion L3 Nuevo 30-12-2025',
                interactive: true,
                title: '<img src="styles/legend/PostacionL3Nuevo30122025_13.png" /> Postacion L3 Nuevo 30-12-2025'
            });
var format_APL3_14 = new ol.format.GeoJSON();
var features_APL3_14 = format_APL3_14.readFeatures(json_APL3_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_APL3_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APL3_14.addFeatures(features_APL3_14);
var lyr_APL3_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APL3_14, 
                style: style_APL3_14,
                popuplayertitle: 'AP L3',
                interactive: true,
                title: '<img src="styles/legend/APL3_14.png" /> AP L3'
            });
var format_APL304032025_15 = new ol.format.GeoJSON();
var features_APL304032025_15 = format_APL304032025_15.readFeatures(json_APL304032025_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_APL304032025_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APL304032025_15.addFeatures(features_APL304032025_15);
var lyr_APL304032025_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APL304032025_15, 
                style: style_APL304032025_15,
                popuplayertitle: 'AP L3 04-03-2025',
                interactive: true,
                title: '<img src="styles/legend/APL304032025_15.png" /> AP L3 04-03-2025'
            });
var format_BT3x701x501x25L3_16 = new ol.format.GeoJSON();
var features_BT3x701x501x25L3_16 = format_BT3x701x501x25L3_16.readFeatures(json_BT3x701x501x25L3_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_BT3x701x501x25L3_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BT3x701x501x25L3_16.addFeatures(features_BT3x701x501x25L3_16);
var lyr_BT3x701x501x25L3_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BT3x701x501x25L3_16, 
                style: style_BT3x701x501x25L3_16,
                popuplayertitle: 'BT 3x70+1x50+1x25 L3',
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25L3_16.png" /> BT 3x70+1x50+1x25 L3'
            });
var format_MT3x35_L3_17 = new ol.format.GeoJSON();
var features_MT3x35_L3_17 = format_MT3x35_L3_17.readFeatures(json_MT3x35_L3_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x35_L3_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x35_L3_17.addFeatures(features_MT3x35_L3_17);
var lyr_MT3x35_L3_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x35_L3_17, 
                style: style_MT3x35_L3_17,
                popuplayertitle: 'MT 3x35_L3',
                interactive: true,
                title: '<img src="styles/legend/MT3x35_L3_17.png" /> MT 3x35_L3'
            });
var format_MT3x70L3_18 = new ol.format.GeoJSON();
var features_MT3x70L3_18 = format_MT3x70L3_18.readFeatures(json_MT3x70L3_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x70L3_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x70L3_18.addFeatures(features_MT3x70L3_18);
var lyr_MT3x70L3_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x70L3_18, 
                style: style_MT3x70L3_18,
                popuplayertitle: 'MT 3x70 L3',
                interactive: true,
                title: '<img src="styles/legend/MT3x70L3_18.png" /> MT 3x70 L3'
            });
var format_MT3x185L3_19 = new ol.format.GeoJSON();
var features_MT3x185L3_19 = format_MT3x185L3_19.readFeatures(json_MT3x185L3_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x185L3_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x185L3_19.addFeatures(features_MT3x185L3_19);
var lyr_MT3x185L3_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x185L3_19, 
                style: style_MT3x185L3_19,
                popuplayertitle: 'MT 3x185 L3',
                interactive: true,
                title: '<img src="styles/legend/MT3x185L3_19.png" /> MT 3x185 L3'
            });
var format_PDL3_20 = new ol.format.GeoJSON();
var features_PDL3_20 = format_PDL3_20.readFeatures(json_PDL3_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PDL3_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL3_20.addFeatures(features_PDL3_20);
var lyr_PDL3_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDL3_20, 
                style: style_PDL3_20,
                popuplayertitle: 'PD L3',
                interactive: true,
                title: '<img src="styles/legend/PDL3_20.png" /> PD L3'
            });
var format_PDL3Sist02112025_21 = new ol.format.GeoJSON();
var features_PDL3Sist02112025_21 = format_PDL3Sist02112025_21.readFeatures(json_PDL3Sist02112025_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PDL3Sist02112025_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL3Sist02112025_21.addFeatures(features_PDL3Sist02112025_21);
var lyr_PDL3Sist02112025_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDL3Sist02112025_21, 
                style: style_PDL3Sist02112025_21,
                popuplayertitle: 'PD L3 Sist 02-11-2025',
                interactive: true,
                title: '<img src="styles/legend/PDL3Sist02112025_21.png" /> PD L3 Sist 02-11-2025'
            });
var group_Lote1 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Lote 1'});
var group_Lote2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 2'});
var group_Lote3 = new ol.layer.Group({
                                layers: [lyr_APL3_14,lyr_APL304032025_15,],
                                fold: 'close',
                                title: 'Lote 3'});
var group_Lote4 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 4'});
var group_Lote5 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 5'});
var group_Lote6 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 6'});
var group_PRIORITARIO = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'PRIORITARIO'});
var group_Lote7 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 7'});
var group_Lote9 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 9'});
var group_Lote8 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 8'});
var group_Puntosdetrabajo = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Puntos de trabajo'});
var group_CIASANtraSradelaAsuncin = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'CIA S.A. - Ntra. Sra. de la Asunción'});
var group_Rutasazonasdetrabajo = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Rutas a zonas de trabajo'});
var group_LOTE1 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 1'});
var group_LOTE2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 2'});
var group_FDM1 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'FDM1'});
var group_FDM2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'FDM2'});
var group_FDM5 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'FDM5'});
var group_VAU1 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'VAU1'});
var group_VAU2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU2'});
var group_VAU3 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU3'});
var group_VAU5 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU5'});
var group_VAU9 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU9'});
var group_VAU11 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU11'});
var group_VAU12 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'VAU12'});
var group_VAU13 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU13'});
var group_VAU14 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU14'});
var group_VAU24 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU24'});
var group_VAU25 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU25'});
var group_VAU28 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU28'});
var group_N2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'N2'});
var group_N3 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'N3'});
var group_LOTE3 = new ol.layer.Group({
                                layers: [lyr_PostacionL3_2,lyr_POSTACIONEXISTENTE_3,lyr_ITG11_4,lyr_ITG2_5,lyr_CAE2_6,lyr_ALT_7,lyr_GHN1_8,lyr_PostacinExistSistema_9,lyr_PostacionSistL3Exist28082025_10,lyr_PostacionSistL3Nuevo28082025_11,lyr_PostacionL3Exist30122025_12,lyr_PostacionL3Nuevo30122025_13,],
                                fold: 'close',
                                title: 'LOTE 3'});
var group_LOTE4 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 4'});
var group_LOTE5 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 5'});
var group_Baslica = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Basílica'});
var group_LOTE6 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 6'});
var group_LOTE7 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 7'});
var group_LOTE8 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 8'});
var group_LOTE9 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 9'});
var group_Lote2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote2'});
var group_lote5 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'lote 5'});
var group_OpenStreetMap = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'OpenStreetMap'});
var group_MPAADEUBICACN = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MPAA DE UBICACÓN'});

lyr_GoogleHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_PostacionL3_2.setVisible(true);lyr_POSTACIONEXISTENTE_3.setVisible(true);lyr_ITG11_4.setVisible(true);lyr_ITG2_5.setVisible(true);lyr_CAE2_6.setVisible(true);lyr_ALT_7.setVisible(true);lyr_GHN1_8.setVisible(true);lyr_PostacinExistSistema_9.setVisible(true);lyr_PostacionSistL3Exist28082025_10.setVisible(true);lyr_PostacionSistL3Nuevo28082025_11.setVisible(true);lyr_PostacionL3Exist30122025_12.setVisible(true);lyr_PostacionL3Nuevo30122025_13.setVisible(true);lyr_APL3_14.setVisible(true);lyr_APL304032025_15.setVisible(true);lyr_BT3x701x501x25L3_16.setVisible(true);lyr_MT3x35_L3_17.setVisible(true);lyr_MT3x70L3_18.setVisible(true);lyr_MT3x185L3_19.setVisible(true);lyr_PDL3_20.setVisible(true);lyr_PDL3Sist02112025_21.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OpenStreetMap_1,group_LOTE3,group_Lote3,lyr_BT3x701x501x25L3_16,lyr_MT3x35_L3_17,lyr_MT3x70L3_18,lyr_MT3x185L3_19,lyr_PDL3_20,lyr_PDL3Sist02112025_21];
lyr_PostacionL3_2.set('fieldAliases', {'sosten': 'sosten', 'tipo': 'tipo', });
lyr_POSTACIONEXISTENTE_3.set('fieldAliases', {'sosten': 'sosten', 'tipo': 'tipo', });
lyr_ITG11_4.set('fieldAliases', {'LOTE': 'LOTE', 'CONTRATIST': 'CONTRATIST', 'ALIMENTADO': 'ALIMENTADO', 'N° DE SOS': 'N° DE SOS', 'TIPO DE PO': 'TIPO DE PO', 'N° DE FÁ': 'N° DE FÁ', 'COORDENADA': 'COORDENADA', 'COORDENA_1': 'COORDENA_1', });
lyr_ITG2_5.set('fieldAliases', {'FECHA': 'FECHA', 'LOTE': 'LOTE', 'CONTRATIST': 'CONTRATIST', 'ALIMENTADO': 'ALIMENTADO', 'N° DE SOS': 'N° DE SOS', 'TIPO DE PO': 'TIPO DE PO', 'N° DE FÁ': 'N° DE FÁ', 'COORD. X': 'COORD. X', 'COORD. Y': 'COORD. Y', });
lyr_CAE2_6.set('fieldAliases', {'FECHA': 'FECHA', 'LOTE': 'LOTE', 'CONTRATIST': 'CONTRATIST', 'ALIMENTADO': 'ALIMENTADO', 'N° DE SOS': 'N° DE SOS', 'TIPO DE PO': 'TIPO DE PO', 'N° DE FÁ': 'N° DE FÁ', 'COORDENADA': 'COORDENADA', 'COORDENA_1': 'COORDENA_1', });
lyr_ALT_7.set('fieldAliases', {'field_1': 'field_1', 'LOTE': 'LOTE', 'CONTRATIST': 'CONTRATIST', 'ALIMENTADO': 'ALIMENTADO', 'N° DE SOS': 'N° DE SOS', 'TIPO DE PO': 'TIPO DE PO', 'N° DE FÁ': 'N° DE FÁ', 'X': 'X', 'Y': 'Y', });
lyr_GHN1_8.set('fieldAliases', {'fecha': 'fecha', 'LOTE': 'LOTE', 'cuadrilla': 'cuadrilla', 'ALIMENT.': 'ALIMENT.', 'Sostén': 'Sostén', 'TIPO/POSTE': 'TIPO/POSTE', 'Nro de fá': 'Nro de fá', 'X': 'X', 'y': 'y', });
lyr_PostacinExistSistema_9.set('fieldAliases', {'#': '#', 'Tipo': 'Tipo', 'Numero de Sosten': 'Numero de Sosten', 'Alimentadores Lote 3': 'Alimentadores Lote 3', 'Cuadrilla 3': 'Cuadrilla 3', 'Marca': 'Marca', 'N�mero de F�brica': 'N�mero de F�brica', 'Poste': 'Poste', 'Tipo de Poste': 'Tipo de Poste', 'Motivo': 'Motivo', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Fecha de Postaci�n': 'Fecha de Postaci�n', 'Creado': 'Creado', });
lyr_PostacionSistL3Exist28082025_10.set('fieldAliases', {'#': '#', 'Alimentadores Lote 3': 'Alimentadores Lote 3', 'Numero de Sosten': 'Numero de Sosten', 'Tipo de Poste': 'Tipo de Poste', 'N�mero de F�brica del Poste': 'N�mero de F�brica del Poste', 'Longitud': 'Longitud', 'Latitud': 'Latitud', });
lyr_PostacionSistL3Nuevo28082025_11.set('fieldAliases', {'#': '#', 'Alimentadores Lote 3': 'Alimentadores Lote 3', 'Numero de Sosten': 'Numero de Sosten', 'Tipo de Poste': 'Tipo de Poste', 'N�mero de F�brica del Poste': 'N�mero de F�brica del Poste', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Grupo ': 'Grupo ', });
lyr_PostacionL3Exist30122025_12.set('fieldAliases', {'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALIMENTADOR': 'ALIMENTADOR', 'NRO_SOSTEN': 'NRO_SOSTEN', 'TIPO_POSTE': 'TIPO_POSTE', });
lyr_PostacionL3Nuevo30122025_13.set('fieldAliases', {'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALIMENTADOR': 'ALIMENTADOR', 'NRO_SOSTEN': 'NRO_SOSTEN', 'TIPO_POSTE': 'TIPO_POSTE', 'Grupo': 'Grupo', });
lyr_APL3_14.set('fieldAliases', {'LOTE': 'LOTE', 'CONTRATIST': 'CONTRATIST', 'ALIMENTADO': 'ALIMENTADO', 'N° DE SOS': 'N° DE SOS', 'TIPO DE PO': 'TIPO DE PO', 'TIPO AP': 'TIPO AP', 'x': 'x', 'y': 'y', });
lyr_APL304032025_15.set('fieldAliases', {'Alimentadores Lote 3': 'Alimentadores Lote 3', 'Numero de Sosten': 'Numero de Sosten', 'Tipo de Poste': 'Tipo de Poste', 'Longitud': 'Longitud', 'Latitud': 'Latitud', });
lyr_BT3x701x501x25L3_16.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'Alimenta': 'Alimenta', 'ítem': 'ítem', 'corte': 'corte', });
lyr_MT3x35_L3_17.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO/FIN': 'INICIO/FIN', 'LONGITUD': 'LONGITUD', 'Alimentad': 'Alimentad', 'ítem': 'ítem', 'corte': 'corte', });
lyr_MT3x70L3_18.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'Aliment.': 'Aliment.', 'ítem': 'ítem', 'corte': 'corte', });
lyr_MT3x185L3_19.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'Alimenta.': 'Alimenta.', 'ítem': 'ítem', 'corte': 'corte', });
lyr_PDL3_20.set('fieldAliases', {'ALIMENTADOR': 'ALIMENTADOR', 'TIPO COLUMNA': 'TIPO COLUMNA', 'N° DE SOSTEN': 'N° DE SOSTEN', 'N° DE FÁBRICA': 'N° DE FÁBRICA', 'NRO ANDE': 'NRO ANDE', 'COORDENADA X': 'COORDENADA X', 'COORDENADA Y': 'COORDENADA Y', });
lyr_PDL3Sist02112025_21.set('fieldAliases', {'Sigla PD': 'Sigla PD', 'Numero': 'Numero', 'Alimentador': 'Alimentador', 'Nro de Sosten': 'Nro de Sosten', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'N° Ande': 'N° Ande', });
lyr_PostacionL3_2.set('fieldImages', {'sosten': 'TextEdit', 'tipo': 'TextEdit', });
lyr_POSTACIONEXISTENTE_3.set('fieldImages', {'sosten': 'TextEdit', 'tipo': 'TextEdit', });
lyr_ITG11_4.set('fieldImages', {'LOTE': 'TextEdit', 'CONTRATIST': 'TextEdit', 'ALIMENTADO': 'TextEdit', 'N° DE SOS': 'TextEdit', 'TIPO DE PO': 'TextEdit', 'N° DE FÁ': 'TextEdit', 'COORDENADA': 'TextEdit', 'COORDENA_1': 'TextEdit', });
lyr_ITG2_5.set('fieldImages', {'FECHA': 'TextEdit', 'LOTE': 'TextEdit', 'CONTRATIST': 'TextEdit', 'ALIMENTADO': 'TextEdit', 'N° DE SOS': 'TextEdit', 'TIPO DE PO': 'TextEdit', 'N° DE FÁ': 'TextEdit', 'COORD. X': 'TextEdit', 'COORD. Y': 'TextEdit', });
lyr_CAE2_6.set('fieldImages', {'FECHA': 'TextEdit', 'LOTE': 'TextEdit', 'CONTRATIST': 'TextEdit', 'ALIMENTADO': 'TextEdit', 'N° DE SOS': 'TextEdit', 'TIPO DE PO': 'TextEdit', 'N° DE FÁ': 'TextEdit', 'COORDENADA': 'TextEdit', 'COORDENA_1': 'TextEdit', });
lyr_ALT_7.set('fieldImages', {'field_1': 'TextEdit', 'LOTE': 'TextEdit', 'CONTRATIST': 'TextEdit', 'ALIMENTADO': 'TextEdit', 'N° DE SOS': 'TextEdit', 'TIPO DE PO': 'TextEdit', 'N° DE FÁ': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_GHN1_8.set('fieldImages', {'fecha': 'TextEdit', 'LOTE': 'TextEdit', 'cuadrilla': 'TextEdit', 'ALIMENT.': 'TextEdit', 'Sostén': 'TextEdit', 'TIPO/POSTE': 'TextEdit', 'Nro de fá': 'TextEdit', 'X': 'TextEdit', 'y': 'TextEdit', });
lyr_PostacinExistSistema_9.set('fieldImages', {'#': 'Range', 'Tipo': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Alimentadores Lote 3': 'TextEdit', 'Cuadrilla 3': 'TextEdit', 'Marca': 'TextEdit', 'N�mero de F�brica': 'Range', 'Poste': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'Motivo': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Fecha de Postaci�n': 'TextEdit', 'Creado': 'TextEdit', });
lyr_PostacionSistL3Exist28082025_10.set('fieldImages', {'#': 'Range', 'Alimentadores Lote 3': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'N�mero de F�brica del Poste': 'Range', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', });
lyr_PostacionSistL3Nuevo28082025_11.set('fieldImages', {'#': 'Range', 'Alimentadores Lote 3': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'N�mero de F�brica del Poste': 'Range', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Grupo ': '', });
lyr_PostacionL3Exist30122025_12.set('fieldImages', {'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALIMENTADOR': 'TextEdit', 'NRO_SOSTEN': 'TextEdit', 'TIPO_POSTE': 'TextEdit', });
lyr_PostacionL3Nuevo30122025_13.set('fieldImages', {'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALIMENTADOR': 'TextEdit', 'NRO_SOSTEN': 'TextEdit', 'TIPO_POSTE': 'TextEdit', 'Grupo': '', });
lyr_APL3_14.set('fieldImages', {'LOTE': 'TextEdit', 'CONTRATIST': 'TextEdit', 'ALIMENTADO': 'TextEdit', 'N° DE SOS': 'TextEdit', 'TIPO DE PO': 'TextEdit', 'TIPO AP': 'Range', 'x': 'Range', 'y': 'Range', });
lyr_APL304032025_15.set('fieldImages', {'Alimentadores Lote 3': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', });
lyr_BT3x701x501x25L3_16.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Alimenta': 'TextEdit', 'ítem': 'TextEdit', 'corte': 'TextEdit', });
lyr_MT3x35_L3_17.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO/FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Alimentad': 'TextEdit', 'ítem': 'TextEdit', 'corte': 'TextEdit', });
lyr_MT3x70L3_18.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Aliment.': 'TextEdit', 'ítem': 'TextEdit', 'corte': 'TextEdit', });
lyr_MT3x185L3_19.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Alimenta.': 'TextEdit', 'ítem': 'TextEdit', 'corte': 'TextEdit', });
lyr_PDL3_20.set('fieldImages', {'ALIMENTADOR': 'TextEdit', 'TIPO COLUMNA': 'TextEdit', 'N° DE SOSTEN': 'TextEdit', 'N° DE FÁBRICA': 'Range', 'NRO ANDE': 'Range', 'COORDENADA X': 'TextEdit', 'COORDENADA Y': 'TextEdit', });
lyr_PDL3Sist02112025_21.set('fieldImages', {'Sigla PD': 'TextEdit', 'Numero': 'Range', 'Alimentador': 'TextEdit', 'Nro de Sosten': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'N° Ande': 'Range', });
lyr_PostacionL3_2.set('fieldLabels', {'sosten': 'no label', 'tipo': 'no label', });
lyr_POSTACIONEXISTENTE_3.set('fieldLabels', {'sosten': 'no label', 'tipo': 'no label', });
lyr_ITG11_4.set('fieldLabels', {'LOTE': 'no label', 'CONTRATIST': 'no label', 'ALIMENTADO': 'no label', 'N° DE SOS': 'no label', 'TIPO DE PO': 'no label', 'N° DE FÁ': 'no label', 'COORDENADA': 'no label', 'COORDENA_1': 'no label', });
lyr_ITG2_5.set('fieldLabels', {'FECHA': 'no label', 'LOTE': 'no label', 'CONTRATIST': 'no label', 'ALIMENTADO': 'no label', 'N° DE SOS': 'no label', 'TIPO DE PO': 'no label', 'N° DE FÁ': 'no label', 'COORD. X': 'no label', 'COORD. Y': 'no label', });
lyr_CAE2_6.set('fieldLabels', {'FECHA': 'no label', 'LOTE': 'no label', 'CONTRATIST': 'no label', 'ALIMENTADO': 'no label', 'N° DE SOS': 'no label', 'TIPO DE PO': 'no label', 'N° DE FÁ': 'no label', 'COORDENADA': 'no label', 'COORDENA_1': 'no label', });
lyr_ALT_7.set('fieldLabels', {'field_1': 'no label', 'LOTE': 'no label', 'CONTRATIST': 'no label', 'ALIMENTADO': 'no label', 'N° DE SOS': 'no label', 'TIPO DE PO': 'no label', 'N° DE FÁ': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_GHN1_8.set('fieldLabels', {'fecha': 'no label', 'LOTE': 'no label', 'cuadrilla': 'no label', 'ALIMENT.': 'no label', 'Sostén': 'no label', 'TIPO/POSTE': 'no label', 'Nro de fá': 'no label', 'X': 'no label', 'y': 'no label', });
lyr_PostacinExistSistema_9.set('fieldLabels', {'#': 'no label', 'Tipo': 'no label', 'Numero de Sosten': 'no label', 'Alimentadores Lote 3': 'no label', 'Cuadrilla 3': 'no label', 'Marca': 'no label', 'N�mero de F�brica': 'no label', 'Poste': 'no label', 'Tipo de Poste': 'no label', 'Motivo': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Fecha de Postaci�n': 'no label', 'Creado': 'no label', });
lyr_PostacionSistL3Exist28082025_10.set('fieldLabels', {'#': 'no label', 'Alimentadores Lote 3': 'no label', 'Numero de Sosten': 'no label', 'Tipo de Poste': 'no label', 'N�mero de F�brica del Poste': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', });
lyr_PostacionSistL3Nuevo28082025_11.set('fieldLabels', {'#': 'no label', 'Alimentadores Lote 3': 'no label', 'Numero de Sosten': 'no label', 'Tipo de Poste': 'no label', 'N�mero de F�brica del Poste': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', 'Grupo ': 'no label', });
lyr_PostacionL3Exist30122025_12.set('fieldLabels', {'LATITUD': 'no label', 'LONGITUD': 'no label', 'ALIMENTADOR': 'no label', 'NRO_SOSTEN': 'no label', 'TIPO_POSTE': 'no label', });
lyr_PostacionL3Nuevo30122025_13.set('fieldLabels', {'LATITUD': 'no label', 'LONGITUD': 'no label', 'ALIMENTADOR': 'no label', 'NRO_SOSTEN': 'no label', 'TIPO_POSTE': 'no label', 'Grupo': 'no label', });
lyr_APL3_14.set('fieldLabels', {'LOTE': 'no label', 'CONTRATIST': 'no label', 'ALIMENTADO': 'no label', 'N° DE SOS': 'no label', 'TIPO DE PO': 'no label', 'TIPO AP': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_APL304032025_15.set('fieldLabels', {'Alimentadores Lote 3': 'no label', 'Numero de Sosten': 'no label', 'Tipo de Poste': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', });
lyr_BT3x701x501x25L3_16.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', 'Alimenta': 'no label', 'ítem': 'no label', 'corte': 'no label', });
lyr_MT3x35_L3_17.set('fieldLabels', {'FECHA': 'no label', 'INICIO/FIN': 'no label', 'LONGITUD': 'no label', 'Alimentad': 'no label', 'ítem': 'no label', 'corte': 'no label', });
lyr_MT3x70L3_18.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', 'Aliment.': 'no label', 'ítem': 'no label', 'corte': 'no label', });
lyr_MT3x185L3_19.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', 'Alimenta.': 'no label', 'ítem': 'no label', 'corte': 'no label', });
lyr_PDL3_20.set('fieldLabels', {'ALIMENTADOR': 'no label', 'TIPO COLUMNA': 'no label', 'N° DE SOSTEN': 'no label', 'N° DE FÁBRICA': 'no label', 'NRO ANDE': 'no label', 'COORDENADA X': 'no label', 'COORDENADA Y': 'no label', });
lyr_PDL3Sist02112025_21.set('fieldLabels', {'Sigla PD': 'no label', 'Numero': 'no label', 'Alimentador': 'no label', 'Nro de Sosten': 'no label', 'LATITUD': 'no label', 'LONGITUD': 'no label', 'N° Ande': 'no label', });
lyr_PDL3Sist02112025_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});