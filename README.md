# Interledger

This project uses Gulp, Jekyll, Cloudcannon Suite. It is meant for hosting on Cloudcannon, but it is possible to reconfigure for other hosting solutions.

## Getting Started ##
1. Install Ruby 3.2 +
2. Run `gem install bundler`
3. Install Node packages: `yarn install`

## Daily Startup ##
1. `cd` to project directory
2. Start environment: `yarn dev`
3. Navigate to [http://localhost:4000/](http://localhost:4000/)

## Known issues ##

- An error "Error: error:0308010C:digital envelope routines::unsupported" will be output during `yarn dev` but will not prevent the build from completing.
