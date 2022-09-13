import express, { json, Request, Response, response } from 'express'

const app = express()

app.get('/games', (request: Request, response: Response) => {
	return response.json([])
})

app.get('/games/:id/ads', (request: Request, response: Response) => {
	return json([])
})

app.get('/ads', (request: Request, response: Response) => {
	response.json([
		{
			id: 1,
			nome: 'Anúncio 1',
		},
	])
})

app.listen(3333)
