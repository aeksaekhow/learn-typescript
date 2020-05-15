// Code goes here!
import axious from 'axios'

const form = document.querySelector('form')!
const addressInput = document.getElementById('address')! as HTMLInputElement
const GOOGLE_API_KEY = 'AIzaSyBx8r_Hv3DxMJ8V7v8lfcUf-qoqqbB1pew'
type GoogleGeocodingResponse = {
    results: {
                geometry: {
                    location: {
                        lat: number,
                        lng: number
                    }
                }
    }[],
    status: 'OK'
}

const onSearchAddress = async (e: Event) => {
    e.preventDefault()

    const address = addressInput.value
    try {
        const response = await axious.get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(address)}&key=${GOOGLE_API_KEY}`)
        if (response.data.status != 'OK') {
            throw new Error('Could not fetch location!')
        }
        const coordinates = response.data.results[0].geometry.location
        const map = new google.maps.Map(document.getElementById('map')!, {
            center: coordinates,
            zoom: 8
        });
        new google.maps.Marker({position: coordinates, map})
    }
    catch (e) {
        console.error(e)
    }
}

form.addEventListener('submit', onSearchAddress)