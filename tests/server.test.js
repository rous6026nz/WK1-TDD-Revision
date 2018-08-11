const request = require('supertest')
const server = require('../server')

// 
// Test root endpoint.
// 
test('/ test to see if we get a 200 status code', () => {

	// Act
	request(server)
  		.get('/')
  		.end((err, res) => {
			
			// Assert
    		expect(err).toBeNull()
      		expect(res.text).toBe('Hello out there!')
    	})
})

// 
// Test login page endpoint.
// 
test('/login return a status code 200 and HTML mark-up', () => {

	// Act
	request(server)
		.get('/login')
		.end((err, res) => {

			// Assert
			expect(err).toBeNull()
			expect(res.status).toBe(200)
			expect(res.text).toBe('Login')
		})
})

// 
// Test registration page endpoint.
// 
test('/registration return a status code 200 and HTML mark-up', () => {

	// Act
	request(server)
		.get('/register')
		.end((err, res) => {

			// Assert
			expect(err).toBeNull()
			expect(res.status).toBe(200)
			expect(res.text).toBe('Register')
		})
})

// 
// Test profile with query endpoint.
// 
test('/profile?name=silvia test to check we get a 200 status code and silvia as a string', () => {

  	// Arrange
  	const query = '?name=silvia'
    
    // Act
    request(server)
  		.get('/profile' + query)
  		.end((err, res) => {

			// Assert
    		expect(err).toBeNull()
      		expect(res.status).toBe(200)
			expect(res.text).toBe('silvia')
    	})
})

// 
// Test profiles with id parameter.
// 
test('/profiles/:id returns a profile page', () => {

	//Arrange
  	const id = 2
    
  	// Act
    request(server)
  		.get('/profiles/' + id)
  		.end((err, res) => {

			// Assert
    		expect(err).toBeNull()
      		expect(res.status).toBe(200)
      		expect(res.text).toBe('Silvia')
    	})
})