import { Component } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import MyMarker from './MyMarker';

class Map extends Component {
  state = {
    viewport: {
      width: '100vw',
      height: '100vh',
      latitude: 41.5868,
      longitude: -93.625,
      zoom: 2
    }
  };

  render() {

    const dummymarkerData = [
      {
        location: "Kashyyyk - Phang Nga Bay ",
        lat: 8.2446,
        lon: 98.5635,
        // offsetLeft: 0,
        // offsetTop: 0,
      },
      {
        location: "Naboo - Villa del Balbianello, Lake Como, Italy",
        lat: 45.9653,
        lon: 9.2025,
        // offsetLeft: -20,
        // offsetTop: 10,
      },
      {
        location: "Theed, Naboo - Plaza de España, Madrid, Spain",
        lat: 40.423382,
        lon: -3.712165,
        // offsetLeft: -20,
        // offsetTop: 10,
      },
      {
        location: "Alderaan - Grindelwald, Switzerland",
        lat: 46.6242,
        lon: 8.0414,
        // offsetLeft: -20,
        // offsetTop: 10,
      },
      {
        location: "Tatooine - Death Valley National Park, California",
        lat: 36.5323,
        lon: -116.9325,
        // offsetLeft: -20,
        // offsetTop: 10,
      },
      {
        location: "Endor - Redwood National and State Parks, California",
        lat: 41.2132,
        lon: -124.0046,
      },
      {
        location: "Endor - Del Norte County, California",
        lat: 41.7076,
        lon: -123.9660,
      },
      {
        location: "Endor - Humboldt County, California",
        lat: 40.7450,
        lon: -123.8695,
      }
      
    ]

    console.log("key" + process.env.NEXT_PUBLIC_MAPS_KEY);
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/brennansaul/ckdm0cscy2l6m1ipcb3s68bia"
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPS_KEY}
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      >
        {/* <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
          <div>You are here</div>
        </Marker> */}
        {dummymarkerData.map(marker => {
          return (
            <MyMarker data={marker} latitude={marker.lat} longitude={marker.lon} offsetLeft={marker.offsetLeft} offsetTop={marker.offsetTop}/>
          )
        })}
      </ReactMapGL>
    );
  }
}



export default Map;