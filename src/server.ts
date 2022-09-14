import express, { json, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.get('/games', async (request: Request, response: Response) => {
	const games = await prisma.game.findMany({
		include: {
			_count: {
				select: {
					ads: true,
				},
			},
		},
	})
	return response.json(games)
})

app.get('/games/:id/ads', (request: Request, response: Response) => {
	return json()
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
