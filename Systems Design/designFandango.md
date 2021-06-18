USER PROMPT: I want to be able to book move theater seats online
- Design an API and a schema that may suit a movie ticket booking service


MVP: What does an MVP movie booking service look like?
 - search for movies by date, location, title of movie, show times and see the various options
 - ability to select a movie to see based on show times
 - see available seats in a theater
 - reserve seat/s
 - purchase ticket online
 - send confirmation of purchase and e-ticket


USER STORY: As a user, I want to be able to ...
- search for a movie
- select a movie
- see availabe times for specific movie
- select a time to see movie
- see seat map with available seats
- reserve seat/s
- purchase ticket
- get confirmation of succesful purchase


API DESIGN
- want to go through an API to fetch some sort of data 
- API can be internal (aka microservice) or external (3rd party)
- base the API design on the MVP
- what processes does this API need to facilitate?
- input => output
- parameter => return value
- define a set of query parameters and what date each will return


SEARCH MOVIES API
- What return data is essential for an MVP => movie showings
- useful parameters are search filters
- Parameters
  - keyword (string) => movies filtered by keyword
  - city (string) => movies filtered by city
  - dateTime => movies filtered by start time
  - etc...
 
 - API call = searchMovies(keyword, city, dateTime)


RESERVE SEATS API
- What return data is essential for an MVP => booking success or failure
  - success = all info is valid and booking is added to database
  - failure = if info is not accepted (for variety of reasons)
- useful parameters are booking details
- Parameters
  - sessionId (string) to keep track of specific user's reservation
  - movieId to reserve
  - seatsReserved (array)
  - showingId to reserve

- API call = seatReservation(sessionId, movieId, showingId, seatsReserved)


SCHEMA

ASSOCIATIONS
- User have many bookings
- City have many theatres
- Theatres have many theater rooms
- Theater room has multiple showings
- A movie has multiple showings
- A showing has many bookings
- Theater room has many seats (up to a limit) that can be reserved


MODELS
- City
- Theater
- TheaterRoom 
- TheaterRoomSeat
- TheaterRoomShowing
- TheaterMovie
- Movie
- User
- Booking
- Showing
