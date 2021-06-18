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
- want to go through some API to fetch some sort of data 
- base the API design on the MVP
- what parameters to consider?
- Search Movies API
- Reserve Seats API


SEARCH MOVIES API
- Parameters
  - keyword (string) to filter 
  - city (string) to fiter by
  - dateTime to filter by movie starttime
 
 - searchMovies(keyword, city, dateTime)


RESERVE SEATS API
- need to keep track of the users and their possible reservations
- Parameters
  - sessionId (string) to keep track of specific user's reservation
  - movieId to reserve
  - seatsReserved (array)
  - showingId to reserve
- return successful or failed depending on reservation status


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
