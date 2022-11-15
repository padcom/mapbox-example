#!/usr/bin/env node

import Supercluster from 'supercluster'
import express from 'express'
import cors from 'cors'
import compression from 'compression'
import fetch from 'node-fetch'

const data = await fetch('https://aplaline.net/mapbox/places.json')
  .then(response => response.json())
  .then(collection => collection.features)

const supercluster = new Supercluster({
  log: true,
  radius: 60,
  extent: 512,
  minZoom: 4,
  maxZoom: 18
})
supercluster.load(data)

const app = express()
app.use(cors())
app.use(express.static('./static', {  }))

app.get('/:bbox/:zoom', async (req, res) => {
  const bbox = req.params.bbox.split(',').map(parseFloat)
  const zoom = Math.floor(parseFloat(req.params.zoom))
  const clusters = supercluster.getClusters(bbox, zoom)
  res.json(clusters)
})

const listener = app.listen(9009, () => {
  console.log('Listening on', listener.address())
})

// eg: /1,2,3,4/5
// siege http://localhost:9000/9,47,10,48/10

// app.use(compression())
