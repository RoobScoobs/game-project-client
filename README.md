
# TIC-TAC-TOE

## Introduction

Github page:

## Technologies Used

In the process of building a SPA application, the primary programming language used for the game engine
is Javascript. The basic styling and markup is done through HTML and CSS, with minimal use of
the front-end framework of Bootstrap. AJAX techniques were also used to communicate with the
server-side.


## Development Process

The development process never began by coding. First, it was important to research single page
applications in order to see how its functionality differs from a web site with multiple pages.
This is where the magic of AJAX requests comes into play, but more on that later. After research
came the wireframes, which were the visual blueprint that lead into development. It helped
get the basic markups on the page.

At the time of writing the HTML and CSS, I chose a different layout from the one shown in the wireframe.
The design in the wireframe was highly interactive, and rather than being bogged down by
numerous animations (e.g. hide, show, transitions), I decided to go for a two-column layout,
so the user can not only see the game board but also be able to immediately login and register.
After laying the skeleton of the page, I jumped into making the page interactive by adding event handlers, beginning with the login, registration, sign out, change password, create and retrieve games. Coding the events was done
in conjunction with the AJAX requests. Working with the api in this case was interesting because
we were limited to only seeing the data in the backend through curl requests. Updating the game
was particularly difficult too.

The best feeling throughout the entire development process was seeing the game updated in the console.
Despite missing a number of requirements to pass, it felt like I had completed the project with flying colors.   
The feeling was short-lived as I dove into building out the rest of the application. The process was
undoubtedly frustrating, and I found myself wrestling with Javascript, forcing poorly written code down its
throat and crossing my fingers for a successful outcome. I had not completed all of the API work before
working on the game logic. I tried my best to time-box between the two giants, but sometimes it's easy
to get lost in the rabbit hole. During these times, I found solace in the issue filer. Without it I
don't think I would be as close to completing a working project.

I found that keeping a notebook for pseudo code, diagrams or snippets of your stream of thoughts is highly useful.
It's funny thinking back to the stereotypical representation of a coder, furiously typing away on their keyboard,
hacking into databases in less than 60 seconds. The majority of the time, at least for me, was sitting down
and thinking about the problem, working out the logic and proceedings of the game step-by-step. It was
the kind of mental exercise that was simultaneously fun and very challenging, although, I would be hard pressed
to say that I didn't hit some lows throughout project week. Self-doubt and discouragement definitely
crept in, but I realized this is not a make or break. I'll continue to improve as long as I continue to
put in the effort.


## Unsolved Problems

- Visually display the player's turn
- Turn on the click events on the game board after creating a new game
- Display a table with a user's game history and statistics
- Prompt to show successful login, registration, etc
- Develop modular code, better separation of files
- Sign-in and return to game progress 

### WireFrames & User Stories

https://docs.google.com/document/d/1SdnAoFjvBdx4d7wwNC7oRoYTdVFwGGAGLumOoOOGQfM/edit?usp=sharing

As a user, I want to be able to register, so I can play a game.
As a user, I want to be able to sign in, so I can keep track of my games.
As a user, I want to be able to change my password, if need be.
As a user, I want to face off against another user, so I can show them how good I am at tic tac toe.
As a user, I want to see my game history and statistics, so I know how many games I've played, won and lost.
