import mapbox from 'mapbox-gl'
import { createApp } from 'vue'
import App from './App.vue'

mapbox.accessToken = 'pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2p0MG01MXRqMW45cjQzb2R6b2ptc3J4MSJ9.zA2W0IkI0c6KaAhJfk9bWg'

createApp(App).mount('#app')

// async function loadImage(map: Map, url: string): Promise<Nullable<HTMLImageElement | ImageBitmap>> {
//   return new Promise((resolve, reject) => {
//     map.loadImage(url, (err, image) => {
//       if (err) reject(err)
//       else resolve(image || null)
//     })
//   })
// }
