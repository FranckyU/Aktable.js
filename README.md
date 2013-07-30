# Stasis template for front end prototyping

## We love Stasis and you should too !

### About this app

This is a template for those who use stasis [http://stasis.me](http://stasis.me) as a primary tool for static web app prototyping.  
It's a great tool for getting from PSD to Rails or Sinatra (or any framework) without missing the fun of HAML, SASS and CoffeeScript.  
Enjoy !

### Components

We are focusing on developers' productivity so we use selected tools to make it possible in our everyday work.

+ HAML/SASS as default templating and styling markup languages
+ CoffeeScript as JS prepocessor, G'bye C like syntactic salt, Bonjour Ruby and Haskell goodness
+ Bootstrap as main CSS framework, but it's up to everyone to choose his own
+ JQuery, it's the lingua franca of today's JS
+ You're free to add your own libraries on top of that

### Things included:

+ A simple layout which loads the stylesheets and JS files
+ A basic index page
+ a basic coffeescript file to test everythings OK

### Installation

1. clone this repo
2. make sure you have a fresh ruby 2.0.0 or + installation (We use RVM to manage our rubies, but you can use rbenv or chruby)
3. `cd` to the project directory and execute `bundle install`
4. If everythings OK, you sould be able to run `stasis -d 3030` for example to generate html files
5. The generated HTML files are on the /public directory. Open it on your browser or navigate to http://127.0.0.1:3030
6. Follow Stasis guidelines for digging deeper at [http://stasis.me](http://stasis.me) 