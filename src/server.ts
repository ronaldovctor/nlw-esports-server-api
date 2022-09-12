import express, { Request, Response, response } from 'express'

const app = express()

app.get('/ads', (request: Request, response: Response) => {
	response.json([
		{
			id: 1,
			nome: 'Anúncio 1',
		},
	])
})

app.listen(3333)
