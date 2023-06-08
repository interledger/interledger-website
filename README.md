# Interledger

This project uses Gulp, Jekyll, Cloudcannon Suite. It is meant for hosting on Cloudcannon, but it is possible to reconfigure for other hosting solutions.

## Getting Started ##
1. Install Ruby 2.6.7
2. Run `gem install bundler:2.2.19`
3. Install Node packages: `yarn install`

## Daily Startup ##
1. `cd` to project directory
2. Start environment: `yarn dev`
3. Navigate to [http://localhost:4000/](http://localhost:4000/)

## Known issues ##

- Because Ruby 2.6.7 is no longer supported, if you have to run locally, it is recommended to use a Ruby environment manager to handle your ruby versions
    - If you are using rbenv for this, and run into build errors during install, do check the full log to determine the source of the error
    - `vm.c:2295:9: error: call to undeclared function 'rb_native_mutex_destroy'; ISO C99 ` can be resolved with `CFLAGS="-Wno-error=implicit-function-declaration" rbenv install 2.6.7` (refer to https://github.com/rbenv/ruby-build/issues/1747)
