# React Spotify App

## Running the SPA
Populate the `.env.local` by following the `.env.example` - You will also need to setup a Spotify Developer Account, see the instructions below.

### Spotify Setup
1. Create an App on the Spotify Dev Portal
2. Get the Client ID
3. Set the Redirect URI to `http://localhost:3000` as shown below:
![Screenshot Example](/public/images/screenshot.png)

Use `npm start`

- Built with `node v16.14.2` and `npm v8.3.1`

## Task Requirements
- [x] A user should be able to view a grid of their recently played tracks.

  - [x] This should include a relevant image for each track.

- [x] In a sidebar, a user should be able to view a list of all recently played artists.

  - [x] This should be in order of most recently played.

  - [x] On click of an artist, the grid of recently played tracks should be filtered by the relevant artist.

  - [x] _BONUS_ | On refresh of the page, any applied filter should be persisted.

### My Additional Bonuses
- Used Material UI Library
- Used the User object from Spotify via another API endpoint
- Implemented Pagination as well as filtering


### What would I do if this was an actual Production App?

- I wouldn't do this via a SPA and I would use NextJS instead as out of the box its more production ready and I would be able to utilise the server for storing access tokens, instead of exposing my Spotify App's Client ID to the world.
- If I **had to** do this again as an SPA I wouldn't use the Implicit Grant Flow and instead use this [Authentication method](https://developer.spotify.com/documentation/general/guides/authorization/code-flow/), as the Spotify docs recommends. Mainly for the refresh token ability.
- It would be good to use Jest or another testing framework
- It would be good if the App was actually responsive to other screen-sizes etc
- I would be using SCSS over CSS for sure and might possibly drop Material UI as a dependacy.