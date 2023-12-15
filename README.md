# Special Relativity Visualizer

> This project was completed as the final project for PHYS-2255 at Vanderbilt University.

The goal of this project is to demonstrate various special relativity concepts using 3D graphics. The project is written in Javascript using the [Three.js](https://threejs.org/) library.  

* The project is hosted as a subdirectory of my primary website, [https://cole-ellis.com/physics](https://cole-ellis.com/physics).
* The source code, along with this document and version history, are hosted on GitHub at [https://github.com/thecae/PHYS2255-Final](https://github.com/thecae/PHYS2255-Final).

### Usage

Although this site is hosted, you can run this project locally to try it yourself! To do this, you'll need Node.js, Git, and `npm` installed. Then, run the following commands:

```bash
https://github.com/thecae/PHYS2255-Final
cd PHYS2255-Final
npm install
npm run build
npm run tailwind
npm run start
```

This will host the site at `http://localhost:3000`. You can then navigate to the site in your browser.

### Technologies Used

Here are a list of libraries and sources used for the project.
* The project is built on the Three.JS library, a game engine built in Javascript for web-deployed games.
* We used [JHT's Planet Pixel Emporium](https://planetpixelemporium.com/index.php) to get the texture maps for each of the planets.
* The site is built on React. Several React components are integral parts of the site, including the slider, the clock, and the notification pane.
* The site is rendered using a Pug template, which is transpiled into HTML by the server.
* The server is backboned by Express.js.

In the final deployment, this standalone project was integrated into my personal website, already hosted using React and Express.