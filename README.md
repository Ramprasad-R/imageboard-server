# Imageboard Server

### Install NPM packages

`npm install`

### Start a docker container with postgresql and a DB called "imageboard"

`docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=secret -e POSTGRES_DB=imageboard postgres`

### Heroku

Assumed you already have this server project on Github, here's how to do the manual
deployements to Heroku. So without the fancy Github -> Heroku hookup.

1. Create a new app on heroku
2. Add `heroku` as a git remote: `heroku git:remote -a your-app-name-on-heroku`
3. The name will probably this weird looking "fierce-ice-princess-drama" or something
4. Add the free postgresql addon to your Heroku app
5. Use Git to push to the `heroku` origin: `git push heroku master`