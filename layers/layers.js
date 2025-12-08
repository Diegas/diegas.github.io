var wms_layers = [];


        var lyr_OpenStreeMap_0 = new ol.layer.Tile({
            'title': 'OpenStreeMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_problemos_1 = new ol.format.GeoJSON();
var features_problemos_1 = format_problemos_1.readFeatures(json_problemos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_problemos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_problemos_1.addFeatures(features_problemos_1);
cluster_problemos_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_problemos_1
});
var lyr_problemos_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_problemos_1,
maxResolution:280.0446615226196,
 minResolution:0.00028004466152261963,

                style: style_problemos_1,
                popuplayertitle: 'problemos',
                interactive: true,
    title: 'problemos<br />\
    <img src="styles/legend/problemos_1_0.png" /> Kenkėjai<br />\
    <img src="styles/legend/problemos_1_1.png" /> Pažeidimai kirtimuose<br />\
    <img src="styles/legend/problemos_1_2.png" /> Šiukšlės<br />\
    <img src="styles/legend/problemos_1_3.png" /> Sugadinta miško paklotė<br />\
    <img src="styles/legend/problemos_1_4.png" /> Sugadinti keliai<br />' });

lyr_OpenStreeMap_0.setVisible(true);lyr_problemos_1.setVisible(true);
var layersList = [lyr_OpenStreeMap_0,lyr_problemos_1];
lyr_problemos_1.set('fieldAliases', {'id': 'id', 'pavadinimas': 'Pavadinimas', 'aprasymas': 'Aprašymas', 'vart': 'Vartotojas', 'ivedimo_data': 'Problemos užregistravimo data', 'redagavo': 'Redagavo', 'redagavimo_laikas': 'Redagavimo laikas', 'tipas': 'Tipas', 'busena': 'Būsena', 'draustinio_id': 'Draustinio ID', 'rezervato_id': 'Rezervato ID', 'atlikti_iki': 'Atlikti iki', });
lyr_problemos_1.set('fieldImages', {'id': 'TextEdit', 'pavadinimas': 'TextEdit', 'aprasymas': 'TextEdit', 'vart': 'TextEdit', 'ivedimo_data': 'DateTime', 'redagavo': 'TextEdit', 'redagavimo_laikas': 'DateTime', 'tipas': 'Enumeration', 'busena': 'Enumeration', 'draustinio_id': 'TextEdit', 'rezervato_id': 'TextEdit', 'atlikti_iki': 'DateTime', });
lyr_problemos_1.set('fieldLabels', {'id': 'no label', 'pavadinimas': 'inline label - always visible', 'aprasymas': 'inline label - always visible', 'vart': 'inline label - always visible', 'ivedimo_data': 'inline label - always visible', 'redagavo': 'hidden field', 'redagavimo_laikas': 'header label - visible with data', 'tipas': 'hidden field', 'busena': 'inline label - always visible', 'draustinio_id': 'header label - visible with data', 'rezervato_id': 'header label - visible with data', 'atlikti_iki': 'no label', });
lyr_problemos_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});