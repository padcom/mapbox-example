import mapbox from 'mapbox-gl'
import { createApp } from 'vue'
import App from './App.vue'

// Public
mapbox.accessToken = 'pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2p0MG01MXRqMW45cjQzb2R6b2ptc3J4MSJ9.zA2W0IkI0c6KaAhJfk9bWg'
// Development
//mapbox.accessToken = 'pk.eyJ1IjoicGFkY29tIiwiYSI6ImNsYWJocW9vNTAwa2wzcG1peXQ0NmdtN20ifQ.VKFuSEJ-nXZRKDGIN4tbsw'

createApp(App).mount('#app')
