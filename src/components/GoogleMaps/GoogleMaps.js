import React, { PureComponent } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={17}
    defaultCenter={{ lat: -23.536427, lng: -46.646293 }}
  >
    {props.dados ? props.dados.map((post, i) =>
      <Marker position={{ lat: post.py, lng: post.px }} key={i} onClick={()=>props.vaila(post)}/>
    ) : console.log("ASDASDFAS")}
    {/* {props.isMarkerShown && <Marker position={{ lat: -23.536427, lng: -46.64629 }} onClick={props.onMarkerClick} />} */}
  </GoogleMap>
)

class GoogleMaps extends PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        dados={this.props.data.vs}
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        vaila={this.props.algumacoisa}
      />
    )
  }
}

export default GoogleMaps;