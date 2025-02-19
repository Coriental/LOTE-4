ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([421705.874590, 7161734.450756, 500580.622532, 7203252.553985]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PDL4_2 = new ol.format.GeoJSON();
var features_PDL4_2 = format_PDL4_2.readFeatures(json_PDL4_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PDL4_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL4_2.addFeatures(features_PDL4_2);
var lyr_PDL4_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDL4_2, 
                style: style_PDL4_2,
                popuplayertitle: "PD L4",
                interactive: true,
                title: '<img src="styles/legend/PDL4_2.png" /> PD L4'
            });
var format_PDL4Sist11022025_3 = new ol.format.GeoJSON();
var features_PDL4Sist11022025_3 = format_PDL4Sist11022025_3.readFeatures(json_PDL4Sist11022025_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PDL4Sist11022025_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL4Sist11022025_3.addFeatures(features_PDL4Sist11022025_3);
var lyr_PDL4Sist11022025_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDL4Sist11022025_3, 
                style: style_PDL4Sist11022025_3,
                popuplayertitle: "PD L4 Sist 11-02-2025",
                interactive: true,
                title: '<img src="styles/legend/PDL4Sist11022025_3.png" /> PD L4 Sist 11-02-2025'
            });
var format_POSTACIEXISTENTE_4 = new ol.format.GeoJSON();
var features_POSTACIEXISTENTE_4 = format_POSTACIEXISTENTE_4.readFeatures(json_POSTACIEXISTENTE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_POSTACIEXISTENTE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSTACIEXISTENTE_4.addFeatures(features_POSTACIEXISTENTE_4);
var lyr_POSTACIEXISTENTE_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POSTACIEXISTENTE_4, 
                style: style_POSTACIEXISTENTE_4,
                popuplayertitle: "POSTACIÓ EXISTENTE",
                interactive: true,
                title: '<img src="styles/legend/POSTACIEXISTENTE_4.png" /> POSTACIÓ EXISTENTE'
            });
var format_POSTACIEXISTENTEL4_5 = new ol.format.GeoJSON();
var features_POSTACIEXISTENTEL4_5 = format_POSTACIEXISTENTEL4_5.readFeatures(json_POSTACIEXISTENTEL4_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_POSTACIEXISTENTEL4_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSTACIEXISTENTEL4_5.addFeatures(features_POSTACIEXISTENTEL4_5);
var lyr_POSTACIEXISTENTEL4_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POSTACIEXISTENTEL4_5, 
                style: style_POSTACIEXISTENTEL4_5,
                popuplayertitle: "POSTACIÓ EXISTENTE L4",
                interactive: true,
                title: '<img src="styles/legend/POSTACIEXISTENTEL4_5.png" /> POSTACIÓ EXISTENTE L4'
            });
var format_POSTACIN_LOTE4_6 = new ol.format.GeoJSON();
var features_POSTACIN_LOTE4_6 = format_POSTACIN_LOTE4_6.readFeatures(json_POSTACIN_LOTE4_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_POSTACIN_LOTE4_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSTACIN_LOTE4_6.addFeatures(features_POSTACIN_LOTE4_6);
var lyr_POSTACIN_LOTE4_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POSTACIN_LOTE4_6, 
                style: style_POSTACIN_LOTE4_6,
                popuplayertitle: "POSTACIÓN_LOTE 4",
                interactive: true,
                title: '<img src="styles/legend/POSTACIN_LOTE4_6.png" /> POSTACIÓN_LOTE 4'
            });
var format_PostacionSistL4Nuevo31012025_7 = new ol.format.GeoJSON();
var features_PostacionSistL4Nuevo31012025_7 = format_PostacionSistL4Nuevo31012025_7.readFeatures(json_PostacionSistL4Nuevo31012025_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionSistL4Nuevo31012025_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionSistL4Nuevo31012025_7.addFeatures(features_PostacionSistL4Nuevo31012025_7);
var lyr_PostacionSistL4Nuevo31012025_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionSistL4Nuevo31012025_7, 
                style: style_PostacionSistL4Nuevo31012025_7,
                popuplayertitle: "Postacion Sist L4 Nuevo 31-01-2025",
                interactive: true,
                title: '<img src="styles/legend/PostacionSistL4Nuevo31012025_7.png" /> Postacion Sist L4 Nuevo 31-01-2025'
            });
var format_PostacionSistL4Existente31012025_8 = new ol.format.GeoJSON();
var features_PostacionSistL4Existente31012025_8 = format_PostacionSistL4Existente31012025_8.readFeatures(json_PostacionSistL4Existente31012025_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionSistL4Existente31012025_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionSistL4Existente31012025_8.addFeatures(features_PostacionSistL4Existente31012025_8);
var lyr_PostacionSistL4Existente31012025_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionSistL4Existente31012025_8, 
                style: style_PostacionSistL4Existente31012025_8,
                popuplayertitle: "Postacion Sist L4 Existente 31-01-2025",
                interactive: true,
                title: '<img src="styles/legend/PostacionSistL4Existente31012025_8.png" /> Postacion Sist L4 Existente 31-01-2025'
            });
var format_MTsubterraneoL43x1x240_9 = new ol.format.GeoJSON();
var features_MTsubterraneoL43x1x240_9 = format_MTsubterraneoL43x1x240_9.readFeatures(json_MTsubterraneoL43x1x240_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MTsubterraneoL43x1x240_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MTsubterraneoL43x1x240_9.addFeatures(features_MTsubterraneoL43x1x240_9);
var lyr_MTsubterraneoL43x1x240_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MTsubterraneoL43x1x240_9, 
                style: style_MTsubterraneoL43x1x240_9,
                popuplayertitle: "MT subterraneo L4 3x1x240",
                interactive: true,
                title: '<img src="styles/legend/MTsubterraneoL43x1x240_9.png" /> MT subterraneo L4 3x1x240'
            });
var format_BT3x701x501x25_10 = new ol.format.GeoJSON();
var features_BT3x701x501x25_10 = format_BT3x701x501x25_10.readFeatures(json_BT3x701x501x25_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_BT3x701x501x25_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BT3x701x501x25_10.addFeatures(features_BT3x701x501x25_10);
var lyr_BT3x701x501x25_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BT3x701x501x25_10, 
                style: style_BT3x701x501x25_10,
                popuplayertitle: "BT 3x70+1x50+1x25",
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25_10.png" /> BT 3x70+1x50+1x25'
            });
var format_BT3x701x501x25actual_11 = new ol.format.GeoJSON();
var features_BT3x701x501x25actual_11 = format_BT3x701x501x25actual_11.readFeatures(json_BT3x701x501x25actual_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_BT3x701x501x25actual_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BT3x701x501x25actual_11.addFeatures(features_BT3x701x501x25actual_11);
var lyr_BT3x701x501x25actual_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BT3x701x501x25actual_11, 
                style: style_BT3x701x501x25actual_11,
                popuplayertitle: "BT 3x70+1x50+1x25 actual",
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25actual_11.png" /> BT 3x70+1x50+1x25 actual'
            });
var format_MT_3x35_12 = new ol.format.GeoJSON();
var features_MT_3x35_12 = format_MT_3x35_12.readFeatures(json_MT_3x35_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT_3x35_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT_3x35_12.addFeatures(features_MT_3x35_12);
var lyr_MT_3x35_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT_3x35_12, 
                style: style_MT_3x35_12,
                popuplayertitle: "MT_3x35",
                interactive: true,
                title: '<img src="styles/legend/MT_3x35_12.png" /> MT_3x35'
            });
var format_MT_3x70_13 = new ol.format.GeoJSON();
var features_MT_3x70_13 = format_MT_3x70_13.readFeatures(json_MT_3x70_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT_3x70_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT_3x70_13.addFeatures(features_MT_3x70_13);
var lyr_MT_3x70_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT_3x70_13, 
                style: style_MT_3x70_13,
                popuplayertitle: "MT_3x70",
                interactive: true,
                title: '<img src="styles/legend/MT_3x70_13.png" /> MT_3x70'
            });
var format_MT3x185_L4_14 = new ol.format.GeoJSON();
var features_MT3x185_L4_14 = format_MT3x185_L4_14.readFeatures(json_MT3x185_L4_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x185_L4_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x185_L4_14.addFeatures(features_MT3x185_L4_14);
var lyr_MT3x185_L4_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x185_L4_14, 
                style: style_MT3x185_L4_14,
                popuplayertitle: "MT 3x185_L4",
                interactive: true,
                title: '<img src="styles/legend/MT3x185_L4_14.png" /> MT 3x185_L4'
            });
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
                                layers: [lyr_PDL4_2,lyr_PDL4Sist11022025_3,],
                                fold: "open",
                                title: "Lote 4"});
var group_Lote5 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 5"});
var group_Lote6 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 6"});
var group_PRIORITARIO = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "PRIORITARIO"});
var group_LOTE1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 1"});
var group_LOTE2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 2"});
var group_FDM1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "FDM1"});
var group_FDM2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "FDM2"});
var group_VAU1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU1"});
var group_VAU2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU2"});
var group_VAU3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU3"});
var group_VAU5 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU5"});
var group_VAU9 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU9"});
var group_VAU11 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU11"});
var group_VAU12 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU12"});
var group_VAU13 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU13"});
var group_VAU14 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU14"});
var group_VAU24 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU24"});
var group_VAU25 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU25"});
var group_VAU28 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU28"});
var group_N2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "N2"});
var group_N3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "N3"});
var group_LOTE3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 3"});
var group_LOTE4 = new ol.layer.Group({
                                layers: [lyr_POSTACIEXISTENTE_4,lyr_POSTACIEXISTENTEL4_5,lyr_POSTACIN_LOTE4_6,lyr_PostacionSistL4Nuevo31012025_7,lyr_PostacionSistL4Existente31012025_8,],
                                fold: "open",
                                title: "LOTE 4"});
var group_LOTE5 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 5"});
var group_Baslica = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Basílica"});
var group_LOTE6 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 6"});
var group_Lote2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote2"});
var group_lote5 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "lote 5"});
var group_OpenStreetMap = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "OpenStreetMap"});
var group_MPAADEUBICACN = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "MPAA DE UBICACÓN"});

lyr_GoogleHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_PDL4_2.setVisible(true);lyr_PDL4Sist11022025_3.setVisible(true);lyr_POSTACIEXISTENTE_4.setVisible(true);lyr_POSTACIEXISTENTEL4_5.setVisible(true);lyr_POSTACIN_LOTE4_6.setVisible(true);lyr_PostacionSistL4Nuevo31012025_7.setVisible(true);lyr_PostacionSistL4Existente31012025_8.setVisible(true);lyr_MTsubterraneoL43x1x240_9.setVisible(true);lyr_BT3x701x501x25_10.setVisible(true);lyr_BT3x701x501x25actual_11.setVisible(true);lyr_MT_3x35_12.setVisible(true);lyr_MT_3x70_13.setVisible(true);lyr_MT3x185_L4_14.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OpenStreetMap_1,group_Lote4,group_LOTE4,lyr_MTsubterraneoL43x1x240_9,lyr_BT3x701x501x25_10,lyr_BT3x701x501x25actual_11,lyr_MT_3x35_12,lyr_MT_3x70_13,lyr_MT3x185_L4_14];
lyr_PDL4_2.set('fieldAliases', {'Item': 'Item', 'Certificado': 'Certificado', 'ESTADO': 'ESTADO', 'Contratista': 'Contratista', 'Fecha de montaje': 'Fecha de montaje', 'CANTIDAD': 'CANTIDAD', 'Sigla PD': 'Sigla PD', 'Numero': 'Numero', 'N° OT': 'N° OT', 'Alimentador': 'Alimentador', 'Nro de Sosten': 'Nro de Sosten', 'Dirección': 'Dirección', 'Ciudad': 'Ciudad', 'Coordenada X': 'Coordenada X', 'Coordenada Y': 'Coordenada Y', 'N° Ande': 'N° Ande', 'N° Fabrica': 'N° Fabrica', 'Marca': 'Marca', 'Potencia': 'Potencia', 'Descargador': 'Descargador', 'Corriente Nominal': 'Corriente Nominal', 'Seccionador MT': 'Seccionador MT', 'Fusible Cartucho MT': 'Fusible Cartucho MT', 'Seccionador BT': 'Seccionador BT', 'Fusible NH': 'Fusible NH', 'SPAT (Ohm)': 'SPAT (Ohm)', });
lyr_PDL4Sist11022025_3.set('fieldAliases', {'Fecha de inicio': 'Fecha de inicio', 'Numero de Sosten': 'Numero de Sosten', 'Alimentadores Lote 4': 'Alimentadores Lote 4', 'Tipo de Poste': 'Tipo de Poste', 'Nro de Fabrica del trafo': 'Nro de Fabrica del trafo', 'N�ANDE': 'N�ANDE', 'Longitud': 'Longitud', 'Latitud': 'Latitud', });
lyr_POSTACIEXISTENTE_4.set('fieldAliases', {'id': 'id', 'x': 'x', 'y': 'y', });
lyr_POSTACIEXISTENTEL4_5.set('fieldAliases', {'sosten': 'sosten', 'poste': 'poste', 'xxx': 'xxx', 'xx': 'xx', 'y': 'y', 'yy': 'yy', });
lyr_POSTACIN_LOTE4_6.set('fieldAliases', {'LOTE': 'LOTE', 'ALIMENTADO': 'ALIMENTADO', 'N° DE SOS': 'N° DE SOS', 'TIPO POSTE': 'TIPO POSTE', 'X': 'X', 'Y': 'Y', 'coor. X': 'coor. X', 'coord. y': 'coord. y', 'Coord X': 'Coord X', 'Coord Y': 'Coord Y', });
lyr_PostacionSistL4Nuevo31012025_7.set('fieldAliases', {'Fecha de Postaci�n': 'Fecha de Postaci�n', 'Alimentadores Lote 4': 'Alimentadores Lote 4', 'Numero de Sosten': 'Numero de Sosten', 'Tipo de Poste': 'Tipo de Poste', 'N�mero de F�brica del Poste': 'N�mero de F�brica del Poste', 'Longitud': 'Longitud', 'Latitud': 'Latitud', });
lyr_PostacionSistL4Existente31012025_8.set('fieldAliases', {'Fecha de Postaci�n': 'Fecha de Postaci�n', 'Alimentadores Lote 4': 'Alimentadores Lote 4', 'Numero de Sosten': 'Numero de Sosten', 'Tipo de Poste': 'Tipo de Poste', 'N�mero de F�brica del Poste': 'N�mero de F�brica del Poste', 'Longitud': 'Longitud', 'Latitud': 'Latitud', });
lyr_MTsubterraneoL43x1x240_9.set('fieldAliases', {'Fecha': 'Fecha', 'Inicio-Fin': 'Inicio-Fin', 'Longitud': 'Longitud', 'Alimentado': 'Alimentado', 'Item': 'Item', 'DO/ACO': 'DO/ACO', });
lyr_BT3x701x501x25_10.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'Alimentado': 'Alimentado', 'Ítem': 'Ítem', });
lyr_BT3x701x501x25actual_11.set('fieldAliases', {'Fecha': 'Fecha', 'Longitud': 'Longitud', 'Inicio-Fin': 'Inicio-Fin', 'Alimentado': 'Alimentado', 'Ítem': 'Ítem', 'DO/ACO': 'DO/ACO', });
lyr_MT_3x35_12.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO/FIN': 'INICIO/FIN', 'LONGITUD': 'LONGITUD', 'Alimentado': 'Alimentado', 'Ítem': 'Ítem', 'DO/ACO': 'DO/ACO', });
lyr_MT_3x70_13.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'Alimentado': 'Alimentado', 'DO/ACO': 'DO/ACO', 'ítem': 'ítem', });
lyr_MT3x185_L4_14.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'Alimentado': 'Alimentado', 'Ítem': 'Ítem', 'Inicio-F_1': 'Inicio-F_1', });
lyr_PDL4_2.set('fieldImages', {'Item': 'TextEdit', 'Certificado': 'Range', 'ESTADO': 'TextEdit', 'Contratista': 'TextEdit', 'Fecha de montaje': 'TextEdit', 'CANTIDAD': 'CheckBox', 'Sigla PD': 'TextEdit', 'Numero': 'Range', 'N° OT': 'TextEdit', 'Alimentador': 'TextEdit', 'Nro de Sosten': 'TextEdit', 'Dirección': 'TextEdit', 'Ciudad': 'TextEdit', 'Coordenada X': 'Range', 'Coordenada Y': 'Range', 'N° Ande': 'Range', 'N° Fabrica': 'Range', 'Marca': 'TextEdit', 'Potencia': 'TextEdit', 'Descargador': 'TextEdit', 'Corriente Nominal': 'TextEdit', 'Seccionador MT': 'TextEdit', 'Fusible Cartucho MT': 'TextEdit', 'Seccionador BT': 'TextEdit', 'Fusible NH': 'TextEdit', 'SPAT (Ohm)': 'TextEdit', });
lyr_PDL4Sist11022025_3.set('fieldImages', {'Fecha de inicio': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Alimentadores Lote 4': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'Nro de Fabrica del trafo': 'Range', 'N�ANDE': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', });
lyr_POSTACIEXISTENTE_4.set('fieldImages', {'id': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_POSTACIEXISTENTEL4_5.set('fieldImages', {'sosten': 'TextEdit', 'poste': 'TextEdit', 'xxx': 'TextEdit', 'xx': 'TextEdit', 'y': 'TextEdit', 'yy': 'TextEdit', });
lyr_POSTACIN_LOTE4_6.set('fieldImages', {'LOTE': 'TextEdit', 'ALIMENTADO': 'TextEdit', 'N° DE SOS': 'TextEdit', 'TIPO POSTE': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'coor. X': 'TextEdit', 'coord. y': 'TextEdit', 'Coord X': 'TextEdit', 'Coord Y': 'TextEdit', });
lyr_PostacionSistL4Nuevo31012025_7.set('fieldImages', {'Fecha de Postaci�n': 'TextEdit', 'Alimentadores Lote 4': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'N�mero de F�brica del Poste': 'Range', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', });
lyr_PostacionSistL4Existente31012025_8.set('fieldImages', {'Fecha de Postaci�n': 'TextEdit', 'Alimentadores Lote 4': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'N�mero de F�brica del Poste': 'Range', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', });
lyr_MTsubterraneoL43x1x240_9.set('fieldImages', {'Fecha': 'TextEdit', 'Inicio-Fin': 'TextEdit', 'Longitud': 'TextEdit', 'Alimentado': 'TextEdit', 'Item': 'TextEdit', 'DO/ACO': 'TextEdit', });
lyr_BT3x701x501x25_10.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': 'TextEdit', 'Alimentado': 'TextEdit', 'Ítem': 'TextEdit', });
lyr_BT3x701x501x25actual_11.set('fieldImages', {'Fecha': 'TextEdit', 'Longitud': 'TextEdit', 'Inicio-Fin': 'TextEdit', 'Alimentado': 'TextEdit', 'Ítem': 'TextEdit', 'DO/ACO': 'TextEdit', });
lyr_MT_3x35_12.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO/FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Alimentado': 'TextEdit', 'Ítem': 'TextEdit', 'DO/ACO': 'TextEdit', });
lyr_MT_3x70_13.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Alimentado': 'TextEdit', 'DO/ACO': 'TextEdit', 'ítem': 'TextEdit', });
lyr_MT3x185_L4_14.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': 'TextEdit', 'Alimentado': 'TextEdit', 'Ítem': 'TextEdit', 'Inicio-F_1': '', });
lyr_PDL4_2.set('fieldLabels', {'Item': 'no label', 'Certificado': 'no label', 'ESTADO': 'no label', 'Contratista': 'no label', 'Fecha de montaje': 'no label', 'CANTIDAD': 'no label', 'Sigla PD': 'no label', 'Numero': 'no label', 'N° OT': 'no label', 'Alimentador': 'no label', 'Nro de Sosten': 'no label', 'Dirección': 'no label', 'Ciudad': 'no label', 'Coordenada X': 'no label', 'Coordenada Y': 'no label', 'N° Ande': 'no label', 'N° Fabrica': 'no label', 'Marca': 'no label', 'Potencia': 'no label', 'Descargador': 'no label', 'Corriente Nominal': 'no label', 'Seccionador MT': 'no label', 'Fusible Cartucho MT': 'no label', 'Seccionador BT': 'no label', 'Fusible NH': 'no label', 'SPAT (Ohm)': 'no label', });
lyr_PDL4Sist11022025_3.set('fieldLabels', {'Fecha de inicio': 'no label', 'Numero de Sosten': 'no label', 'Alimentadores Lote 4': 'no label', 'Tipo de Poste': 'no label', 'Nro de Fabrica del trafo': 'no label', 'N�ANDE': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', });
lyr_POSTACIEXISTENTE_4.set('fieldLabels', {'id': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_POSTACIEXISTENTEL4_5.set('fieldLabels', {'sosten': 'no label', 'poste': 'no label', 'xxx': 'no label', 'xx': 'no label', 'y': 'no label', 'yy': 'no label', });
lyr_POSTACIN_LOTE4_6.set('fieldLabels', {'LOTE': 'no label', 'ALIMENTADO': 'no label', 'N° DE SOS': 'no label', 'TIPO POSTE': 'no label', 'X': 'no label', 'Y': 'no label', 'coor. X': 'no label', 'coord. y': 'no label', 'Coord X': 'no label', 'Coord Y': 'no label', });
lyr_PostacionSistL4Nuevo31012025_7.set('fieldLabels', {'Fecha de Postaci�n': 'no label', 'Alimentadores Lote 4': 'no label', 'Numero de Sosten': 'no label', 'Tipo de Poste': 'no label', 'N�mero de F�brica del Poste': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', });
lyr_PostacionSistL4Existente31012025_8.set('fieldLabels', {'Fecha de Postaci�n': 'no label', 'Alimentadores Lote 4': 'no label', 'Numero de Sosten': 'no label', 'Tipo de Poste': 'no label', 'N�mero de F�brica del Poste': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', });
lyr_MTsubterraneoL43x1x240_9.set('fieldLabels', {'Fecha': 'no label', 'Inicio-Fin': 'no label', 'Longitud': 'no label', 'Alimentado': 'no label', 'Item': 'no label', 'DO/ACO': 'no label', });
lyr_BT3x701x501x25_10.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', 'DO/ACO': 'no label', 'Alimentado': 'no label', 'Ítem': 'no label', });
lyr_BT3x701x501x25actual_11.set('fieldLabels', {'Fecha': 'no label', 'Longitud': 'no label', 'Inicio-Fin': 'no label', 'Alimentado': 'no label', 'Ítem': 'no label', 'DO/ACO': 'no label', });
lyr_MT_3x35_12.set('fieldLabels', {'FECHA': 'no label', 'INICIO/FIN': 'no label', 'LONGITUD': 'no label', 'Alimentado': 'no label', 'Ítem': 'no label', 'DO/ACO': 'no label', });
lyr_MT_3x70_13.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', 'Alimentado': 'no label', 'DO/ACO': 'no label', 'ítem': 'no label', });
lyr_MT3x185_L4_14.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', 'DO/ACO': 'no label', 'Alimentado': 'no label', 'Ítem': 'no label', 'Inicio-F_1': 'no label', });
lyr_MT3x185_L4_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});