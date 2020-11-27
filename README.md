# sm

## Weather App

1. npm install
2. npm run dev-mac (it will build on pc as well) will build the dist folder and run a local server.
3. weather.html or http://localhost:3002/weather.html
4. https://struthy.github.io/sm/weather.html
5. Still to do - look & feel, transitions
6. Still to do - comparmentalise / component the js
7. Still to do - fun details like images, gradients, animations

## Accordion Components

1. npm install
2. npm run dev-mac (it will build on pc as well) will build the dist folder and run a local server.
3. index.html is the file you want to look at.
4. https://struthy.github.io/sm/
5. The scss could be abstracted to be more readable, I have nested the modifiers using &--blagh to show this way of doing it, I generally dont do this as it becomes harder to mainten and find classes, I done it this way for speed.
6. Transitions - I left them basic to cut bloat, easy enough to add them.
7. I couldnt make my mind up whether to use background images for the toggle icons - I went with inline spritesheet svg, benifits to both methods.
8. The verticle line on v1 accordions could prob be done a bit better, at first I tried the psuedo class on the ul, might need some js to get it 100% as per visuals
9. I used BEM on individual elements but I am aware that they could have been targeted by a class higher-up, I know in some situations this is preffered.
10. The organisation of the scss comes https://other.media/itcss-the-inverted-triangle-css-the-right-way-up/ - modified a bit for personal taste .
11. Also checked in latest Safari,,,, there were a few tweaks needed.
12. Left the fonts basic, easy enough to change, just time.
