import { useState } from 'react'
import './App.css'
import React from 'react'

import Map from "https://js.arcgis.com/4.25/@arcgis/core/Map.js"
import MapView from "https://js.arcgis.com/4.25/@arcgis/core/views/MapView.js"
import esriConfig from "https://js.arcgis.com/4.25/@arcgis/core/config.js";
import FeatureLayer from "https://js.arcgis.com/4.25/@arcgis/core/layers/FeatureLayer.js";
import Extent from "https://js.arcgis.com/4.25/@arcgis/core/geometry/Extent.js"
import Home from "https://js.arcgis.com/4.25/@arcgis/core/widgets/Home.js";
import Legend from "https://js.arcgis.com/4.25/@arcgis/core/widgets/Legend.js";
import { useEffect } from 'react';


function App() {


  function mapa() {
    esriConfig.apiKey = "AAPK3a46155e72e141f7a1e526779e26ee9eAjXhDfndw1NljGMOgVuF26eFX3-eeUXZZOyG1ndpeWqpSuegyvOx67wvbav2qGrx";


    const map = new Map({
      basemap: "streets"
    });

    const view = new MapView({
      map: map,
      // center: [ -74.1031707204775,4.686182163946811],
      // zoom: 10,
      container: "map"
    });
    // agregamos la capa al mapa
    const layer = new FeatureLayer({
      url: "https://hermes2.invias.gov.co/server/rest/services/MapaCarreteras/RedVial/FeatureServer"
    });
    map.add(layer);


    // agregarmos el exten al mapa
    const colombiaExtent = new Extent({
      xmin: -79.025833,
      ymin: -4.2275,
      xmax: -66.854167,
      ymax: 12.458333,
    });
    view.extent = colombiaExtent;

    // agregamos el botoon home para que vuelve al exten inical
    const homeButton = new Home({ view });
    view.ui.add(homeButton, 'top-left');

  // agregamos la leyenda para ver los simbolos de la capa
    let legend = new Legend({
      view: view
    });
  
    
  }

  useEffect(() => {
    mapa()
  }, []);


  return (

    <>
      <link rel="stylesheet" href="https://js.arcgis.com/4.26/esri/themes/light/main.css"></link>
      <div id="map" >
      </div>


    </>
  )
}


export default App