ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([481710.130534, 7189459.770508, 492642.713867, 7194677.353841]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ESTAQUEOSISTEMA230724_1 = new ol.format.GeoJSON();
var features_ESTAQUEOSISTEMA230724_1 = format_ESTAQUEOSISTEMA230724_1.readFeatures(json_ESTAQUEOSISTEMA230724_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_ESTAQUEOSISTEMA230724_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTAQUEOSISTEMA230724_1.addFeatures(features_ESTAQUEOSISTEMA230724_1);
var lyr_ESTAQUEOSISTEMA230724_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTAQUEOSISTEMA230724_1, 
                style: style_ESTAQUEOSISTEMA230724_1,
                popuplayertitle: "ESTAQUEO SISTEMA 23-07-24",
                interactive: true,
                title: '<img src="styles/legend/ESTAQUEOSISTEMA230724_1.png" /> ESTAQUEO SISTEMA 23-07-24'
            });
var format_ESTAQUEOSL5_2 = new ol.format.GeoJSON();
var features_ESTAQUEOSL5_2 = format_ESTAQUEOSL5_2.readFeatures(json_ESTAQUEOSL5_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_ESTAQUEOSL5_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTAQUEOSL5_2.addFeatures(features_ESTAQUEOSL5_2);
var lyr_ESTAQUEOSL5_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTAQUEOSL5_2, 
                style: style_ESTAQUEOSL5_2,
                popuplayertitle: "ESTAQUEOS L5",
                interactive: true,
                title: '<img src="styles/legend/ESTAQUEOSL5_2.png" /> ESTAQUEOS L5'
            });
var format_PostacionExistenteL5_3 = new ol.format.GeoJSON();
var features_PostacionExistenteL5_3 = format_PostacionExistenteL5_3.readFeatures(json_PostacionExistenteL5_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionExistenteL5_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionExistenteL5_3.addFeatures(features_PostacionExistenteL5_3);
var lyr_PostacionExistenteL5_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionExistenteL5_3, 
                style: style_PostacionExistenteL5_3,
                popuplayertitle: "Postacion Existente L5",
                interactive: true,
                title: '<img src="styles/legend/PostacionExistenteL5_3.png" /> Postacion Existente L5'
            });
var format_POSTACINSISTEMA_4 = new ol.format.GeoJSON();
var features_POSTACINSISTEMA_4 = format_POSTACINSISTEMA_4.readFeatures(json_POSTACINSISTEMA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_POSTACINSISTEMA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSTACINSISTEMA_4.addFeatures(features_POSTACINSISTEMA_4);
var lyr_POSTACINSISTEMA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POSTACINSISTEMA_4, 
                style: style_POSTACINSISTEMA_4,
                popuplayertitle: "POSTACIÓN SISTEMA",
                interactive: true,
                title: '<img src="styles/legend/POSTACINSISTEMA_4.png" /> POSTACIÓN SISTEMA'
            });
var format_PostacinLote52009_5 = new ol.format.GeoJSON();
var features_PostacinLote52009_5 = format_PostacinLote52009_5.readFeatures(json_PostacinLote52009_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacinLote52009_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacinLote52009_5.addFeatures(features_PostacinLote52009_5);
var lyr_PostacinLote52009_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacinLote52009_5, 
                style: style_PostacinLote52009_5,
                popuplayertitle: "Postación Lote 5 20-09",
                interactive: true,
                title: '<img src="styles/legend/PostacinLote52009_5.png" /> Postación Lote 5 20-09'
            });
var format_MT3x185_L5_6 = new ol.format.GeoJSON();
var features_MT3x185_L5_6 = format_MT3x185_L5_6.readFeatures(json_MT3x185_L5_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x185_L5_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x185_L5_6.addFeatures(features_MT3x185_L5_6);
var lyr_MT3x185_L5_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x185_L5_6, 
                style: style_MT3x185_L5_6,
                popuplayertitle: "MT 3x185_L5",
                interactive: true,
                title: '<img src="styles/legend/MT3x185_L5_6.png" /> MT 3x185_L5'
            });
var format_MT3x35_L5_7 = new ol.format.GeoJSON();
var features_MT3x35_L5_7 = format_MT3x35_L5_7.readFeatures(json_MT3x35_L5_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x35_L5_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x35_L5_7.addFeatures(features_MT3x35_L5_7);
var lyr_MT3x35_L5_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x35_L5_7, 
                style: style_MT3x35_L5_7,
                popuplayertitle: "MT 3x35_L5",
                interactive: true,
                title: '<img src="styles/legend/MT3x35_L5_7.png" /> MT 3x35_L5'
            });
var format_MT3x70L5_8 = new ol.format.GeoJSON();
var features_MT3x70L5_8 = format_MT3x70L5_8.readFeatures(json_MT3x70L5_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x70L5_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x70L5_8.addFeatures(features_MT3x70L5_8);
var lyr_MT3x70L5_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x70L5_8, 
                style: style_MT3x70L5_8,
                popuplayertitle: "MT 3x70 L5",
                interactive: true,
                title: '<img src="styles/legend/MT3x70L5_8.png" /> MT 3x70 L5'
            });
var format_BT3x701x501x25L5_9 = new ol.format.GeoJSON();
var features_BT3x701x501x25L5_9 = format_BT3x701x501x25L5_9.readFeatures(json_BT3x701x501x25L5_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_BT3x701x501x25L5_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BT3x701x501x25L5_9.addFeatures(features_BT3x701x501x25L5_9);
var lyr_BT3x701x501x25L5_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BT3x701x501x25L5_9, 
                style: style_BT3x701x501x25L5_9,
                popuplayertitle: "BT 3x70+1x50+1x25 L5",
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25L5_9.png" /> BT 3x70+1x50+1x25 L5'
            });
var format_FALTANTES_10 = new ol.format.GeoJSON();
var features_FALTANTES_10 = format_FALTANTES_10.readFeatures(json_FALTANTES_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_FALTANTES_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FALTANTES_10.addFeatures(features_FALTANTES_10);
var lyr_FALTANTES_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FALTANTES_10, 
                style: style_FALTANTES_10,
                popuplayertitle: "FALTANTES",
                interactive: true,
                title: '<img src="styles/legend/FALTANTES_10.png" /> FALTANTES'
            });
var format_TEMPORAL_11 = new ol.format.GeoJSON();
var features_TEMPORAL_11 = format_TEMPORAL_11.readFeatures(json_TEMPORAL_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_TEMPORAL_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEMPORAL_11.addFeatures(features_TEMPORAL_11);
var lyr_TEMPORAL_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TEMPORAL_11, 
                style: style_TEMPORAL_11,
                popuplayertitle: "TEMPORAL",
                interactive: true,
                title: '<img src="styles/legend/TEMPORAL_11.png" /> TEMPORAL'
            });
var group_LOTE1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 1"});
var group_LOTE2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 2"});
var group_LOTE3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 3"});
var group_LOTE4 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 4"});
var group_LOTE5 = new ol.layer.Group({
                                layers: [lyr_PostacionExistenteL5_3,lyr_POSTACINSISTEMA_4,lyr_PostacinLote52009_5,],
                                fold: "open",
                                title: "LOTE 5"});
var group_LOTE6 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 6"});
var group_Lote1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 1"});
var group_Lote2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 2"});
var group_Lote3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 3"});
var group_Lote4 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 4"});
var group_Lote5 = new ol.layer.Group({
                                layers: [lyr_ESTAQUEOSISTEMA230724_1,lyr_ESTAQUEOSL5_2,],
                                fold: "open",
                                title: "Lote 5"});
var group_Lote6 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 6"});
var group_OpenStreetMap = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "OpenStreetMap"});

lyr_OpenStreetMap_0.setVisible(true);lyr_ESTAQUEOSISTEMA230724_1.setVisible(true);lyr_ESTAQUEOSL5_2.setVisible(true);lyr_PostacionExistenteL5_3.setVisible(true);lyr_POSTACINSISTEMA_4.setVisible(true);lyr_PostacinLote52009_5.setVisible(true);lyr_MT3x185_L5_6.setVisible(true);lyr_MT3x35_L5_7.setVisible(true);lyr_MT3x70L5_8.setVisible(true);lyr_BT3x701x501x25L5_9.setVisible(true);lyr_FALTANTES_10.setVisible(true);lyr_TEMPORAL_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Lote5,group_LOTE5,lyr_MT3x185_L5_6,lyr_MT3x35_L5_7,lyr_MT3x70L5_8,lyr_BT3x701x501x25L5_9,lyr_FALTANTES_10,lyr_TEMPORAL_11];
lyr_ESTAQUEOSISTEMA230724_1.set('fieldAliases', {'Fecha de Estaqueo': 'Fecha de Estaqueo', 'Numero de Sosten': 'Numero de Sosten', 'Alimentadores Lote 5': 'Alimentadores Lote 5', 'Tramo': 'Tramo', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Poste': 'Poste', 'Tipo de Poste': 'Tipo de Poste', 'Cambio Sosten': 'Cambio Sosten', 'Motivo': 'Motivo', 'Número de Fábrica': 'Número de Fábrica', 'Marca': 'Marca', });
lyr_ESTAQUEOSL5_2.set('fieldAliases', {'Sostén': 'Sostén', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', });
lyr_PostacionExistenteL5_3.set('fieldAliases', {'Nro de Sos': 'Nro de Sos', 'Coord. X': 'Coord. X', 'Coord. Y': 'Coord. Y', 'Sosten': 'Sosten', 'Poste': 'Poste', });
lyr_POSTACINSISTEMA_4.set('fieldAliases', {'#': '#', 'Tipo': 'Tipo', 'Numero de Sosten': 'Numero de Sosten', 'Alimentadores Lote 5': 'Alimentadores Lote 5', 'Cuadrilla 5': 'Cuadrilla 5', 'Marca': 'Marca', 'Número de Fábrica': 'Número de Fábrica', 'Poste': 'Poste', 'Tipo de Poste': 'Tipo de Poste', 'Cambio Sosten': 'Cambio Sosten', 'Motivo': 'Motivo', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Fecha de Postación': 'Fecha de Postación', 'Creado': 'Creado', });
lyr_PostacinLote52009_5.set('fieldAliases', {'ALIMENT.': 'ALIMENT.', 'Sosten': 'Sosten', 'TIPO/POSTE': 'TIPO/POSTE', 'Coord. X': 'Coord. X', 'Coord. Y': 'Coord. Y', 'Fábrica': 'Fábrica', });
lyr_MT3x185_L5_6.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'ÍTEM': 'ÍTEM', 'ALIMENT.': 'ALIMENT.', });
lyr_MT3x35_L5_7.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'ALIMENT.': 'ALIMENT.', 'ÍTEM': 'ÍTEM', });
lyr_MT3x70L5_8.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'ALIMEN.': 'ALIMEN.', 'ÍTEM': 'ÍTEM', });
lyr_BT3x701x501x25L5_9.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'ALIMENT.': 'ALIMENT.', 'ÍTEM': 'ÍTEM', });
lyr_FALTANTES_10.set('fieldAliases', {'INICIO-FIN': 'INICIO-FIN', });
lyr_TEMPORAL_11.set('fieldAliases', {'ALIMENTADO': 'ALIMENTADO', 'DR/DOC': 'DR/DOC', 'LONGITUD': 'LONGITUD', 'INICIO-FIN': 'INICIO-FIN', });
lyr_ESTAQUEOSISTEMA230724_1.set('fieldImages', {'Fecha de Estaqueo': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Alimentadores Lote 5': 'TextEdit', 'Tramo': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Poste': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'Cambio Sosten': 'TextEdit', 'Motivo': 'TextEdit', 'Número de Fábrica': 'TextEdit', 'Marca': 'TextEdit', });
lyr_ESTAQUEOSL5_2.set('fieldImages', {'Sostén': 'TextEdit', 'ESTE': 'TextEdit', 'NORTE': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_PostacionExistenteL5_3.set('fieldImages', {'Nro de Sos': 'TextEdit', 'Coord. X': 'TextEdit', 'Coord. Y': 'TextEdit', 'Sosten': 'TextEdit', 'Poste': 'TextEdit', });
lyr_POSTACINSISTEMA_4.set('fieldImages', {'#': 'Range', 'Tipo': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Alimentadores Lote 5': 'TextEdit', 'Cuadrilla 5': 'TextEdit', 'Marca': 'TextEdit', 'Número de Fábrica': 'Range', 'Poste': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'Cambio Sosten': 'TextEdit', 'Motivo': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Fecha de Postación': 'TextEdit', 'Creado': 'TextEdit', });
lyr_PostacinLote52009_5.set('fieldImages', {'ALIMENT.': 'TextEdit', 'Sosten': 'TextEdit', 'TIPO/POSTE': 'TextEdit', 'Coord. X': 'TextEdit', 'Coord. Y': 'TextEdit', 'Fábrica': 'TextEdit', });
lyr_MT3x185_L5_6.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': '', 'ÍTEM': '', 'ALIMENT.': '', });
lyr_MT3x35_L5_7.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': '', 'ALIMENT.': '', 'ÍTEM': '', });
lyr_MT3x70L5_8.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': '', 'ALIMEN.': '', 'ÍTEM': '', });
lyr_BT3x701x501x25L5_9.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': '', 'ALIMENT.': '', 'ÍTEM': '', });
lyr_FALTANTES_10.set('fieldImages', {'INICIO-FIN': 'TextEdit', });
lyr_TEMPORAL_11.set('fieldImages', {'ALIMENTADO': 'TextEdit', 'DR/DOC': 'TextEdit', 'LONGITUD': 'TextEdit', 'INICIO-FIN': 'TextEdit', });
lyr_ESTAQUEOSISTEMA230724_1.set('fieldLabels', {'Fecha de Estaqueo': 'no label', 'Numero de Sosten': 'no label', 'Alimentadores Lote 5': 'no label', 'Tramo': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Poste': 'no label', 'Tipo de Poste': 'no label', 'Cambio Sosten': 'no label', 'Motivo': 'no label', 'Número de Fábrica': 'no label', 'Marca': 'no label', });
lyr_ESTAQUEOSL5_2.set('fieldLabels', {'Sostén': 'no label', 'ESTE': 'no label', 'NORTE': 'no label', 'LATITUD': 'no label', 'LONGITUD': 'no label', });
lyr_PostacionExistenteL5_3.set('fieldLabels', {'Nro de Sos': 'no label', 'Coord. X': 'no label', 'Coord. Y': 'no label', 'Sosten': 'no label', 'Poste': 'no label', });
lyr_POSTACINSISTEMA_4.set('fieldLabels', {'#': 'no label', 'Tipo': 'no label', 'Numero de Sosten': 'no label', 'Alimentadores Lote 5': 'no label', 'Cuadrilla 5': 'no label', 'Marca': 'no label', 'Número de Fábrica': 'no label', 'Poste': 'no label', 'Tipo de Poste': 'no label', 'Cambio Sosten': 'no label', 'Motivo': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Fecha de Postación': 'no label', 'Creado': 'no label', });
lyr_PostacinLote52009_5.set('fieldLabels', {'ALIMENT.': 'no label', 'Sosten': 'no label', 'TIPO/POSTE': 'no label', 'Coord. X': 'no label', 'Coord. Y': 'no label', 'Fábrica': 'no label', });
lyr_MT3x185_L5_6.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', 'DO/ACO': 'no label', 'ÍTEM': 'no label', 'ALIMENT.': 'no label', });
lyr_MT3x35_L5_7.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', 'DO/ACO': 'no label', 'ALIMENT.': 'no label', 'ÍTEM': 'no label', });
lyr_MT3x70L5_8.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', 'DO/ACO': 'no label', 'ALIMEN.': 'no label', 'ÍTEM': 'no label', });
lyr_BT3x701x501x25L5_9.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', 'DO/ACO': 'no label', 'ALIMENT.': 'no label', 'ÍTEM': 'no label', });
lyr_FALTANTES_10.set('fieldLabels', {'INICIO-FIN': 'no label', });
lyr_TEMPORAL_11.set('fieldLabels', {'ALIMENTADO': 'no label', 'DR/DOC': 'no label', 'LONGITUD': 'no label', 'INICIO-FIN': 'no label', });
lyr_TEMPORAL_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});