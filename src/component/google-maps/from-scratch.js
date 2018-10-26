
import React from 'react'
let map;

class GoogleMaps extends React.Component {
    constructor(props){
        super(props)


        this.initMap = this.initMap.bind(this)
    }

    initMap() {
        let map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -25.2744, lng: 133.7751},
            zoom: 3,
            minZoom: 3,
          });
  
          let layer = new google.maps.FusionTablesLayer({
            query: {
        select: 'name, kml_4326',
        from: '1ertEwm-1bMBhpEwHhtNYT47HQ9k2ki_6sRa-UQ'
    },
    styles: [{
      polygonOptions: {
        fillColor: '#00FF00',
        fillOpacity: 0.3
      }
    }, {
      where: 'birds > 300',
      polygonOptions: {
        fillColor: '#0000FF'
      }
    }, {
      where: 'population > 5',
      polygonOptions: {
        fillOpacity: 1.0
      }
    }]
          });
          layer.setMap(map);
    }
    componentDidMount() {
        window.initMap = this.initMap;
        const script = document.createElement('script')
        script.async = true
        script.defer = true
        script.src = `https://maps.googleapis.com/maps/api/js?key=${__GOOGLE_MAPS_JS_API__}&callback=initMap`
        document.head.appendChild(script)
  }

  render() {
    return ( <div> 
            {this.map} 
            <div 
            style = {{
                width: 500,
                height: 500
                }}
            id = "map"/>
            </div>
        )   
    }
}

export default GoogleMaps