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
var format_POSTACIEXISTENTE_2 = new ol.format.GeoJSON();
var features_POSTACIEXISTENTE_2 = format_POSTACIEXISTENTE_2.readFeatures(json_POSTACIEXISTENTE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_POSTACIEXISTENTE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSTACIEXISTENTE_2.addFeatures(features_POSTACIEXISTENTE_2);
var lyr_POSTACIEXISTENTE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POSTACIEXISTENTE_2, 
                style: style_POSTACIEXISTENTE_2,
                popuplayertitle: 'POSTACIÓ EXISTENTE',
                interactive: true,
                title: '<img src="styles/legend/POSTACIEXISTENTE_2.png" /> POSTACIÓ EXISTENTE'
            });
var format_POSTACIEXISTENTEL4_3 = new ol.format.GeoJSON();
var features_POSTACIEXISTENTEL4_3 = format_POSTACIEXISTENTEL4_3.readFeatures(json_POSTACIEXISTENTEL4_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_POSTACIEXISTENTEL4_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSTACIEXISTENTEL4_3.addFeatures(features_POSTACIEXISTENTEL4_3);
var lyr_POSTACIEXISTENTEL4_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POSTACIEXISTENTEL4_3, 
                style: style_POSTACIEXISTENTEL4_3,
                popuplayertitle: 'POSTACIÓ EXISTENTE L4',
                interactive: true,
                title: '<img src="styles/legend/POSTACIEXISTENTEL4_3.png" /> POSTACIÓ EXISTENTE L4'
            });
var format_POSTACIN_LOTE4_4 = new ol.format.GeoJSON();
var features_POSTACIN_LOTE4_4 = format_POSTACIN_LOTE4_4.readFeatures(json_POSTACIN_LOTE4_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_POSTACIN_LOTE4_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSTACIN_LOTE4_4.addFeatures(features_POSTACIN_LOTE4_4);
var lyr_POSTACIN_LOTE4_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POSTACIN_LOTE4_4, 
                style: style_POSTACIN_LOTE4_4,
                popuplayertitle: 'POSTACIÓN_LOTE 4',
                interactive: true,
                title: '<img src="styles/legend/POSTACIN_LOTE4_4.png" /> POSTACIÓN_LOTE 4'
            });
var format_PostacionSistL4Existente01092025_5 = new ol.format.GeoJSON();
var features_PostacionSistL4Existente01092025_5 = format_PostacionSistL4Existente01092025_5.readFeatures(json_PostacionSistL4Existente01092025_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionSistL4Existente01092025_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionSistL4Existente01092025_5.addFeatures(features_PostacionSistL4Existente01092025_5);
var lyr_PostacionSistL4Existente01092025_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionSistL4Existente01092025_5, 
                style: style_PostacionSistL4Existente01092025_5,
                popuplayertitle: 'Postacion Sist L4 Existente 01-09-2025',
                interactive: true,
                title: '<img src="styles/legend/PostacionSistL4Existente01092025_5.png" /> Postacion Sist L4 Existente 01-09-2025'
            });
var format_PostacionSistL4Nuevo01092025_6 = new ol.format.GeoJSON();
var features_PostacionSistL4Nuevo01092025_6 = format_PostacionSistL4Nuevo01092025_6.readFeatures(json_PostacionSistL4Nuevo01092025_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionSistL4Nuevo01092025_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionSistL4Nuevo01092025_6.addFeatures(features_PostacionSistL4Nuevo01092025_6);
var lyr_PostacionSistL4Nuevo01092025_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionSistL4Nuevo01092025_6, 
                style: style_PostacionSistL4Nuevo01092025_6,
                popuplayertitle: 'Postacion Sist L4 Nuevo 01-09-2025',
                interactive: true,
                title: '<img src="styles/legend/PostacionSistL4Nuevo01092025_6.png" /> Postacion Sist L4 Nuevo 01-09-2025'
            });
var format_PostacionL4Exist30122025_7 = new ol.format.GeoJSON();
var features_PostacionL4Exist30122025_7 = format_PostacionL4Exist30122025_7.readFeatures(json_PostacionL4Exist30122025_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionL4Exist30122025_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionL4Exist30122025_7.addFeatures(features_PostacionL4Exist30122025_7);
var lyr_PostacionL4Exist30122025_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionL4Exist30122025_7, 
                style: style_PostacionL4Exist30122025_7,
                popuplayertitle: 'Postacion L4 Exist 30-12-2025',
                interactive: true,
                title: '<img src="styles/legend/PostacionL4Exist30122025_7.png" /> Postacion L4 Exist 30-12-2025'
            });
var format_PostacionL4Nuevo30122025_8 = new ol.format.GeoJSON();
var features_PostacionL4Nuevo30122025_8 = format_PostacionL4Nuevo30122025_8.readFeatures(json_PostacionL4Nuevo30122025_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionL4Nuevo30122025_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionL4Nuevo30122025_8.addFeatures(features_PostacionL4Nuevo30122025_8);
var lyr_PostacionL4Nuevo30122025_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionL4Nuevo30122025_8, 
                style: style_PostacionL4Nuevo30122025_8,
                popuplayertitle: 'Postacion L4 Nuevo 30-12-2025',
                interactive: true,
                title: '<img src="styles/legend/PostacionL4Nuevo30122025_8.png" /> Postacion L4 Nuevo 30-12-2025'
            });
var format_BT3x701x501x25_9 = new ol.format.GeoJSON();
var features_BT3x701x501x25_9 = format_BT3x701x501x25_9.readFeatures(json_BT3x701x501x25_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_BT3x701x501x25_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BT3x701x501x25_9.addFeatures(features_BT3x701x501x25_9);
var lyr_BT3x701x501x25_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BT3x701x501x25_9, 
                style: style_BT3x701x501x25_9,
                popuplayertitle: 'BT 3x70+1x50+1x25',
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25_9.png" /> BT 3x70+1x50+1x25'
            });
var format_BT3x701x501x25actual_10 = new ol.format.GeoJSON();
var features_BT3x701x501x25actual_10 = format_BT3x701x501x25actual_10.readFeatures(json_BT3x701x501x25actual_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_BT3x701x501x25actual_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BT3x701x501x25actual_10.addFeatures(features_BT3x701x501x25actual_10);
var lyr_BT3x701x501x25actual_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BT3x701x501x25actual_10, 
                style: style_BT3x701x501x25actual_10,
                popuplayertitle: 'BT 3x70+1x50+1x25 actual',
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25actual_10.png" /> BT 3x70+1x50+1x25 actual'
            });
var format_MT_3x35_11 = new ol.format.GeoJSON();
var features_MT_3x35_11 = format_MT_3x35_11.readFeatures(json_MT_3x35_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT_3x35_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT_3x35_11.addFeatures(features_MT_3x35_11);
var lyr_MT_3x35_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT_3x35_11, 
                style: style_MT_3x35_11,
                popuplayertitle: 'MT_3x35',
                interactive: true,
                title: '<img src="styles/legend/MT_3x35_11.png" /> MT_3x35'
            });
var format_MT_3x70_12 = new ol.format.GeoJSON();
var features_MT_3x70_12 = format_MT_3x70_12.readFeatures(json_MT_3x70_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT_3x70_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT_3x70_12.addFeatures(features_MT_3x70_12);
var lyr_MT_3x70_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT_3x70_12, 
                style: style_MT_3x70_12,
                popuplayertitle: 'MT_3x70',
                interactive: true,
                title: '<img src="styles/legend/MT_3x70_12.png" /> MT_3x70'
            });
var format_MT3x185_L4_13 = new ol.format.GeoJSON();
var features_MT3x185_L4_13 = format_MT3x185_L4_13.readFeatures(json_MT3x185_L4_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x185_L4_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x185_L4_13.addFeatures(features_MT3x185_L4_13);
var lyr_MT3x185_L4_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x185_L4_13, 
                style: style_MT3x185_L4_13,
                popuplayertitle: 'MT 3x185_L4',
                interactive: true,
                title: '<img src="styles/legend/MT3x185_L4_13.png" /> MT 3x185_L4'
            });
var format_RETIRO_14 = new ol.format.GeoJSON();
var features_RETIRO_14 = format_RETIRO_14.readFeatures(json_RETIRO_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_RETIRO_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RETIRO_14.addFeatures(features_RETIRO_14);
var lyr_RETIRO_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RETIRO_14, 
                style: style_RETIRO_14,
                popuplayertitle: 'RETIRO',
                interactive: true,
                title: '<img src="styles/legend/RETIRO_14.png" /> RETIRO'
            });
var format_PDL4_15 = new ol.format.GeoJSON();
var features_PDL4_15 = format_PDL4_15.readFeatures(json_PDL4_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PDL4_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL4_15.addFeatures(features_PDL4_15);
var lyr_PDL4_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDL4_15, 
                style: style_PDL4_15,
                popuplayertitle: 'PD L4',
                interactive: true,
                title: '<img src="styles/legend/PDL4_15.png" /> PD L4'
            });
var format_PDL4Sist02112025_16 = new ol.format.GeoJSON();
var features_PDL4Sist02112025_16 = format_PDL4Sist02112025_16.readFeatures(json_PDL4Sist02112025_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PDL4Sist02112025_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL4Sist02112025_16.addFeatures(features_PDL4Sist02112025_16);
var lyr_PDL4Sist02112025_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDL4Sist02112025_16, 
                style: style_PDL4Sist02112025_16,
                popuplayertitle: 'PD L4 Sist 02-11-2025',
                interactive: true,
                title: '<img src="styles/legend/PDL4Sist02112025_16.png" /> PD L4 Sist 02-11-2025'
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
                                layers: [],
                                fold: 'close',
                                title: 'Lote 3'});
var group_Lote4 = new ol.layer.Group({
                                layers: [lyr_PDL4_15,lyr_PDL4Sist02112025_16,],
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
                                fold: 'close',
                                title: 'FDM5'});
var group_VAU1 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU1'});
var group_VAU2 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
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
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 3'});
var group_LOTE4 = new ol.layer.Group({
                                layers: [lyr_POSTACIEXISTENTE_2,lyr_POSTACIEXISTENTEL4_3,lyr_POSTACIN_LOTE4_4,lyr_PostacionSistL4Existente01092025_5,lyr_PostacionSistL4Nuevo01092025_6,lyr_PostacionL4Exist30122025_7,lyr_PostacionL4Nuevo30122025_8,],
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

lyr_GoogleHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_POSTACIEXISTENTE_2.setVisible(true);lyr_POSTACIEXISTENTEL4_3.setVisible(true);lyr_POSTACIN_LOTE4_4.setVisible(true);lyr_PostacionSistL4Existente01092025_5.setVisible(true);lyr_PostacionSistL4Nuevo01092025_6.setVisible(true);lyr_PostacionL4Exist30122025_7.setVisible(true);lyr_PostacionL4Nuevo30122025_8.setVisible(true);lyr_BT3x701x501x25_9.setVisible(true);lyr_BT3x701x501x25actual_10.setVisible(true);lyr_MT_3x35_11.setVisible(true);lyr_MT_3x70_12.setVisible(true);lyr_MT3x185_L4_13.setVisible(true);lyr_RETIRO_14.setVisible(true);lyr_PDL4_15.setVisible(true);lyr_PDL4Sist02112025_16.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OpenStreetMap_1,group_LOTE4,lyr_BT3x701x501x25_9,lyr_BT3x701x501x25actual_10,lyr_MT_3x35_11,lyr_MT_3x70_12,lyr_MT3x185_L4_13,lyr_RETIRO_14,group_Lote4];
lyr_POSTACIEXISTENTE_2.set('fieldAliases', {'id': 'id', 'x': 'x', 'y': 'y', });
lyr_POSTACIEXISTENTEL4_3.set('fieldAliases', {'sosten': 'sosten', 'poste': 'poste', 'xxx': 'xxx', 'xx': 'xx', 'y': 'y', 'yy': 'yy', });
lyr_POSTACIN_LOTE4_4.set('fieldAliases', {'LOTE': 'LOTE', 'ALIMENTADO': 'ALIMENTADO', 'N° DE SOS': 'N° DE SOS', 'TIPO POSTE': 'TIPO POSTE', 'X': 'X', 'Y': 'Y', 'coor. X': 'coor. X', 'coord. y': 'coord. y', 'Coord X': 'Coord X', 'Coord Y': 'Coord Y', });
lyr_PostacionSistL4Existente01092025_5.set('fieldAliases', {'#': '#', 'Alimentadores Lote 4': 'Alimentadores Lote 4', 'Numero de Sosten': 'Numero de Sosten', 'Tipo de Poste': 'Tipo de Poste', 'N�mero de F�brica del Poste': 'N�mero de F�brica del Poste', 'Longitud': 'Longitud', 'Latitud': 'Latitud', });
lyr_PostacionSistL4Nuevo01092025_6.set('fieldAliases', {'#': '#', 'Alimentadores Lote 4': 'Alimentadores Lote 4', 'Numero de Sosten': 'Numero de Sosten', 'Tipo de Poste': 'Tipo de Poste', 'N�mero de F�brica del Poste': 'N�mero de F�brica del Poste', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Grupo': 'Grupo', });
lyr_PostacionL4Exist30122025_7.set('fieldAliases', {'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALIMENTADOR': 'ALIMENTADOR', 'NRO_SOSTEN': 'NRO_SOSTEN', 'TIPO_POSTE': 'TIPO_POSTE', });
lyr_PostacionL4Nuevo30122025_8.set('fieldAliases', {'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALIMENTADOR': 'ALIMENTADOR', 'NRO_SOSTEN': 'NRO_SOSTEN', 'TIPO_POSTE': 'TIPO_POSTE', 'Grupo': 'Grupo', });
lyr_BT3x701x501x25_9.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'Alimentado': 'Alimentado', 'Ítem': 'Ítem', });
lyr_BT3x701x501x25actual_10.set('fieldAliases', {'Fecha': 'Fecha', 'Longitud': 'Longitud', 'Inicio-Fin': 'Inicio-Fin', 'Alimentado': 'Alimentado', 'Ítem': 'Ítem', 'DO/ACO': 'DO/ACO', });
lyr_MT_3x35_11.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO/FIN': 'INICIO/FIN', 'LONGITUD': 'LONGITUD', 'Alimentado': 'Alimentado', 'Ítem': 'Ítem', 'DO/ACO': 'DO/ACO', });
lyr_MT_3x70_12.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'Alimentado': 'Alimentado', 'DO/ACO': 'DO/ACO', 'ítem': 'ítem', });
lyr_MT3x185_L4_13.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'Alimentado': 'Alimentado', 'Ítem': 'Ítem', 'Inicio-F_1': 'Inicio-F_1', });
lyr_RETIRO_14.set('fieldAliases', {'Inicio-Fin': 'Inicio-Fin', 'Longitud': 'Longitud', 'Fecha': 'Fecha', 'Aliment': 'Aliment', 'Item': 'Item', });
lyr_PDL4_15.set('fieldAliases', {'Item': 'Item', 'Certificado': 'Certificado', 'ESTADO': 'ESTADO', 'Contratista': 'Contratista', 'Fecha de montaje': 'Fecha de montaje', 'CANTIDAD': 'CANTIDAD', 'Sigla PD': 'Sigla PD', 'Numero': 'Numero', 'N° OT': 'N° OT', 'Alimentador': 'Alimentador', 'Nro de Sosten': 'Nro de Sosten', 'Dirección': 'Dirección', 'Ciudad': 'Ciudad', 'Coordenada X': 'Coordenada X', 'Coordenada Y': 'Coordenada Y', 'N° Ande': 'N° Ande', 'N° Fabrica': 'N° Fabrica', 'Marca': 'Marca', 'Potencia': 'Potencia', 'Descargador': 'Descargador', 'Corriente Nominal': 'Corriente Nominal', 'Seccionador MT': 'Seccionador MT', 'Fusible Cartucho MT': 'Fusible Cartucho MT', 'Seccionador BT': 'Seccionador BT', 'Fusible NH': 'Fusible NH', 'SPAT (Ohm)': 'SPAT (Ohm)', });
lyr_PDL4Sist02112025_16.set('fieldAliases', {'Sigla PD': 'Sigla PD', 'Numero': 'Numero', 'Alimentador': 'Alimentador', 'Nro de Sosten': 'Nro de Sosten', 'Coordenada X': 'Coordenada X', 'Coordenada Y': 'Coordenada Y', 'N° Ande': 'N° Ande', });
lyr_POSTACIEXISTENTE_2.set('fieldImages', {'id': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_POSTACIEXISTENTEL4_3.set('fieldImages', {'sosten': 'TextEdit', 'poste': 'TextEdit', 'xxx': 'TextEdit', 'xx': 'TextEdit', 'y': 'TextEdit', 'yy': 'TextEdit', });
lyr_POSTACIN_LOTE4_4.set('fieldImages', {'LOTE': 'TextEdit', 'ALIMENTADO': 'TextEdit', 'N° DE SOS': 'TextEdit', 'TIPO POSTE': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'coor. X': 'TextEdit', 'coord. y': 'TextEdit', 'Coord X': 'TextEdit', 'Coord Y': 'TextEdit', });
lyr_PostacionSistL4Existente01092025_5.set('fieldImages', {'#': 'Range', 'Alimentadores Lote 4': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'N�mero de F�brica del Poste': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', });
lyr_PostacionSistL4Nuevo01092025_6.set('fieldImages', {'#': 'Range', 'Alimentadores Lote 4': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'N�mero de F�brica del Poste': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Grupo': '', });
lyr_PostacionL4Exist30122025_7.set('fieldImages', {'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALIMENTADOR': 'TextEdit', 'NRO_SOSTEN': 'TextEdit', 'TIPO_POSTE': 'TextEdit', });
lyr_PostacionL4Nuevo30122025_8.set('fieldImages', {'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALIMENTADOR': 'TextEdit', 'NRO_SOSTEN': 'TextEdit', 'TIPO_POSTE': 'TextEdit', 'Grupo': '', });
lyr_BT3x701x501x25_9.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': 'TextEdit', 'Alimentado': 'TextEdit', 'Ítem': 'TextEdit', });
lyr_BT3x701x501x25actual_10.set('fieldImages', {'Fecha': 'TextEdit', 'Longitud': 'TextEdit', 'Inicio-Fin': 'TextEdit', 'Alimentado': 'TextEdit', 'Ítem': 'TextEdit', 'DO/ACO': 'TextEdit', });
lyr_MT_3x35_11.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO/FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Alimentado': 'TextEdit', 'Ítem': 'TextEdit', 'DO/ACO': 'TextEdit', });
lyr_MT_3x70_12.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Alimentado': 'TextEdit', 'DO/ACO': 'TextEdit', 'ítem': 'TextEdit', });
lyr_MT3x185_L4_13.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': 'TextEdit', 'Alimentado': 'TextEdit', 'Ítem': 'TextEdit', 'Inicio-F_1': '', });
lyr_RETIRO_14.set('fieldImages', {'Inicio-Fin': 'TextEdit', 'Longitud': 'TextEdit', 'Fecha': 'TextEdit', 'Aliment': 'TextEdit', 'Item': 'TextEdit', });
lyr_PDL4_15.set('fieldImages', {'Item': 'TextEdit', 'Certificado': 'Range', 'ESTADO': 'TextEdit', 'Contratista': 'TextEdit', 'Fecha de montaje': 'TextEdit', 'CANTIDAD': 'CheckBox', 'Sigla PD': 'TextEdit', 'Numero': 'Range', 'N° OT': 'TextEdit', 'Alimentador': 'TextEdit', 'Nro de Sosten': 'TextEdit', 'Dirección': 'TextEdit', 'Ciudad': 'TextEdit', 'Coordenada X': 'Range', 'Coordenada Y': 'Range', 'N° Ande': 'Range', 'N° Fabrica': 'Range', 'Marca': 'TextEdit', 'Potencia': 'TextEdit', 'Descargador': 'TextEdit', 'Corriente Nominal': 'TextEdit', 'Seccionador MT': 'TextEdit', 'Fusible Cartucho MT': 'TextEdit', 'Seccionador BT': 'TextEdit', 'Fusible NH': 'TextEdit', 'SPAT (Ohm)': 'TextEdit', });
lyr_PDL4Sist02112025_16.set('fieldImages', {'Sigla PD': 'TextEdit', 'Numero': 'Range', 'Alimentador': 'TextEdit', 'Nro de Sosten': 'TextEdit', 'Coordenada X': 'TextEdit', 'Coordenada Y': 'TextEdit', 'N° Ande': 'Range', });
lyr_POSTACIEXISTENTE_2.set('fieldLabels', {'id': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_POSTACIEXISTENTEL4_3.set('fieldLabels', {'sosten': 'no label', 'poste': 'no label', 'xxx': 'no label', 'xx': 'no label', 'y': 'no label', 'yy': 'no label', });
lyr_POSTACIN_LOTE4_4.set('fieldLabels', {'LOTE': 'no label', 'ALIMENTADO': 'no label', 'N° DE SOS': 'no label', 'TIPO POSTE': 'no label', 'X': 'no label', 'Y': 'no label', 'coor. X': 'no label', 'coord. y': 'no label', 'Coord X': 'no label', 'Coord Y': 'no label', });
lyr_PostacionSistL4Existente01092025_5.set('fieldLabels', {'#': 'no label', 'Alimentadores Lote 4': 'no label', 'Numero de Sosten': 'no label', 'Tipo de Poste': 'no label', 'N�mero de F�brica del Poste': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', });
lyr_PostacionSistL4Nuevo01092025_6.set('fieldLabels', {'#': 'no label', 'Alimentadores Lote 4': 'no label', 'Numero de Sosten': 'no label', 'Tipo de Poste': 'no label', 'N�mero de F�brica del Poste': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', 'Grupo': 'no label', });
lyr_PostacionL4Exist30122025_7.set('fieldLabels', {'LATITUD': 'no label', 'LONGITUD': 'no label', 'ALIMENTADOR': 'no label', 'NRO_SOSTEN': 'no label', 'TIPO_POSTE': 'no label', });
lyr_PostacionL4Nuevo30122025_8.set('fieldLabels', {'LATITUD': 'no label', 'LONGITUD': 'no label', 'ALIMENTADOR': 'no label', 'NRO_SOSTEN': 'no label', 'TIPO_POSTE': 'no label', 'Grupo': 'no label', });
lyr_BT3x701x501x25_9.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', 'DO/ACO': 'no label', 'Alimentado': 'no label', 'Ítem': 'no label', });
lyr_BT3x701x501x25actual_10.set('fieldLabels', {'Fecha': 'no label', 'Longitud': 'no label', 'Inicio-Fin': 'no label', 'Alimentado': 'no label', 'Ítem': 'no label', 'DO/ACO': 'no label', });
lyr_MT_3x35_11.set('fieldLabels', {'FECHA': 'no label', 'INICIO/FIN': 'no label', 'LONGITUD': 'no label', 'Alimentado': 'no label', 'Ítem': 'no label', 'DO/ACO': 'no label', });
lyr_MT_3x70_12.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', 'Alimentado': 'no label', 'DO/ACO': 'no label', 'ítem': 'no label', });
lyr_MT3x185_L4_13.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', 'DO/ACO': 'no label', 'Alimentado': 'no label', 'Ítem': 'no label', 'Inicio-F_1': 'no label', });
lyr_RETIRO_14.set('fieldLabels', {'Inicio-Fin': 'no label', 'Longitud': 'no label', 'Fecha': 'no label', 'Aliment': 'no label', 'Item': 'no label', });
lyr_PDL4_15.set('fieldLabels', {'Item': 'no label', 'Certificado': 'no label', 'ESTADO': 'no label', 'Contratista': 'no label', 'Fecha de montaje': 'no label', 'CANTIDAD': 'no label', 'Sigla PD': 'no label', 'Numero': 'no label', 'N° OT': 'no label', 'Alimentador': 'no label', 'Nro de Sosten': 'no label', 'Dirección': 'no label', 'Ciudad': 'no label', 'Coordenada X': 'no label', 'Coordenada Y': 'no label', 'N° Ande': 'no label', 'N° Fabrica': 'no label', 'Marca': 'no label', 'Potencia': 'no label', 'Descargador': 'no label', 'Corriente Nominal': 'no label', 'Seccionador MT': 'no label', 'Fusible Cartucho MT': 'no label', 'Seccionador BT': 'no label', 'Fusible NH': 'no label', 'SPAT (Ohm)': 'no label', });
lyr_PDL4Sist02112025_16.set('fieldLabels', {'Sigla PD': 'no label', 'Numero': 'no label', 'Alimentador': 'no label', 'Nro de Sosten': 'no label', 'Coordenada X': 'no label', 'Coordenada Y': 'no label', 'N° Ande': 'no label', });
lyr_PDL4Sist02112025_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});