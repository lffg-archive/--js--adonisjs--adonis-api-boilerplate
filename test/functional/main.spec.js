'use strict'

const { test, trait } = use('Test/Suite')('Main')

trait('Test/ApiClient')

test('make sure to render the index api resource', async ({ client }) => {
  const response = await client.get('/').end()
  response.assertStatus(200)
  response.assertJSON({ message: 'Hello, world!' })
})
