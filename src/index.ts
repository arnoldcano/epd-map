/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */
import "./style.css";
import data from "./data.json";

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 3,
      center: { lat: 6.1682, lng: -75.7366 },
    }
  );

  const markers = data.map(
    (location) =>
      new google.maps.Marker({
        position: location,
        map,
        title: location.address,
        label: {
          text: String(location.numberPeople),
          color: "white",
        },
      })
  );

  const infoWindow = new google.maps.InfoWindow();

  markers.forEach((marker) => {
    google.maps.event.addListener(marker, "click", function () {
      infoWindow.setOptions({
        content: marker.getTitle(),
      });
      infoWindow.open(map, marker);
    });
  });
}

export { initMap };
