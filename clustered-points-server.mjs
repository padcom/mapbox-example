#!/usr/bin/env node

import Supercluster from 'supercluster'
import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'

const data = await fetch('http://localhost:9070/places.json')
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
app.get('/:bbox/:zoom', (req, res) => {
  const bbox = req.params.bbox.split(',').map(parseFloat)
  const zoom = Math.floor(parseFloat(req.params.zoom))
  const clusters = supercluster.getClusters(bbox, zoom)
  res.json(clusters)
})

const listener = app.listen(9000, () => {
  console.log('Listening on', listener.address())
})

// eg: /1,2,3,4/5
