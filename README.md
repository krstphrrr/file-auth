# Dummy react app for Auth0 client/backend communication

Fetch button becomes available once user is logged in. This button triggers an api route protected by JSON web tokens provided by auth0. Triggering that route captures the user data (in addition to metadata related to the requested resource) and stores it as a mongo entry. 

