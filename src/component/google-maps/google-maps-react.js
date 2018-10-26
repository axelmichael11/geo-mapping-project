import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polygon} from 'google-maps-react';


// ...

class MapContainer extends React.Component {
    constructor(props){
        super(props)
        this.onMapClicked = this.onMapClicked.bind(this)
        this.initMap  = this.initMap.bind(this);
        this.setOptions = {
            
        }
        this.map = new this.props.google.maps.Map(document.getElementById('map'), {
            center: {lat: 41.850033, lng: -87.6500523},
            zoom: 11
          });;

        this.layer = new this.props.google.maps.FusionTablesLayer({
            query: {
              select: 'geometry',
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
        // this.props.google.maps.Map(document.getElementById('map'),
        // {
        //     zoom: 2,
        //     center: new this.props.google.maps.LatLng(10, 0),
        //     mapTypeId: google.maps.MapTypeId.ROADMAP
        // });
    }

    

    onMapClicked(e){
        console.log('CLICKED', e)
    }

    fetchPlaces(mapProps, map) {
        const {google} = mapProps;
        console.log('FETCH PLAGES', mapProps, map)
        const service = new google.maps.places.PlacesService(map);
        // ...
      }

    initMap() {
        this.layer.setMap(this.map);
      }
    render() {
        const style={
            width: '96%', 
            // maxWidth:'800px',
            height: '80%', 
            textAlign:'center',
            position: 'absolute', 
            display:'block'

        }
          console.log('GOOGLE', google)
          
        //   .setOptions({minZoom: 5, maxZoom: 15});
        return (
            <div>
          <Map 
            style={style}
            google={this.initMap()} 
            zoom={this.props.zoom}
            onReady={this.fetchPlaces}
            minZoom={4}

            initialCenter={this.props.center}
            onClick={this.onMapClicked}
            className={'map'}
          > 
          </Map>
          {/* {this.initMap()} */}
          </div>
        );
      }
}



const GoogleMap = GoogleApiWrapper(
    (props) => ({
        apiKey: props.apiKey,
        language: props.language,
        callBack: props.initMap,
    })
)(MapContainer)

export default GoogleMap