const request = require('supertest')
const server = require('../server')

// Test root endpoint.
test('/ test to see if we get a 200 status code', () => {
	request(server)
  		.get('/')
  		.end((err, res) => {
    		expect(err).toBeNull()
      		expect(res.status).toBe(200)
    	})
})

// Test profile with query endpoint.
test('/profile?name=silvia test to check we get a 200 status code', () => {
  	// Arrange
  	const query = '?name=silvia'
    
    // Assert
    request(server)
  		.get('/profile' + query)
  		.end((err, res) => {
    		expect(err).toBeNull()			// Make sure no errors occur.
      		expect(res.status).toBe(200)	// Make sure a page is returned.
      		expect(res.text).not.toBeNull()	// Make sure some HTML mark-up is returned.
    	})
})

// Test profiles with id parameter.
test('/profiles/:id returns a profile page', () => {
	//Arrange
  	const id = parseInt(req.params.id)
    
  	// Act
  	// Call supertest
    request(server)
  		.get('/profiles/' + id)
  
  	// Assert
  		.end((err, res) => {
    		expect(err).toBeNull()
      		expect(res.status).toBe(200)
      		expect(res.text).toBe('Silvia')
    	})
})