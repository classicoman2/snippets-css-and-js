# snippets-css-and-js
Snippets of CSS and JS for the classes of the DAW module _Design of Web Interfaces_

Copy them and modify the code to adapt to your application.  

REMEMBER: Always try to improve the code and remove what is unnecessary. 

- [snippets-css-and-js](#snippets-css-and-js)
  * [Short Snippets !](#short-snippets-)
  * [ADVANCED LAYOUT](#advanced-layout)
    + [CSS Flexbox](#css-flexbox)
    + [CSS Grid](#css-grid)
  * [INTERACTIVE ELEMENTS](#interactive-elements)
    + [Accordion](#accordion)
    + [Animated Search Input](#animated-search-input)
    + [Carousel (Slideshow)](#carousel-slideshow)
    + [Cookies Alert](#cookies-alert)
    + [Jump Buttons](#jump-buttons)
    + [MENUS](#menus)
      - [Topnav](#topnav)
      - [Sidebar](#sidebar)
      - [Variations](#variations)
    + [Modal (Pop Up) Windows](#modal-pop-up-windows)
    + [Overlay](#overlay)
    + [Parallax Effect](#parallax-effect)
    + [Tabs](#tabs)


## Short Snippets

- [x] Including CSS and JS files in an HTML doc

## ADVANCED LAYOUT


### CSS Flexbox

- [X] Flexbox properties examples

### CSS Grid

- [x] Basic Grid
- [ ] A basic webpage build using Grid



## INTERACTIVE ELEMENTS

### Accordion

- [x] [Basic Accordion example](https://www.w3schools.com/howto/howto_js_accordion.asp)

### Animated Search Input

An Animated Search Input  is a usual resource to add usability to a site

- [x] [How to create a Search bar](https://www.w3schools.com/howto/howto_css_searchbar.asp). I.e: wook.pt, onallibres.cat and casadellibro.com
- [x] [Basic Animated Search Input](https://www.w3schools.com/howto/howto_css_animated_search.asp)

### Carousel (Slideshow)

- [ ] Slideshow no automàtic. Fés-li un cop d'ull [aquí](https://www.w3schools.com/howto/howto_js_slideshow.asp)
- [ ] Slideshow automàtic. En clicar sobre les imatges, rota. Caldria afegir-li uns botons per fer-lo "professional". Codi original [aqui](https://www.freecodecamp.org/news/how-to-create-a-slideshow/ ) i [aquí](https://codepen.io/AndresUris/pen/rGXpvE)

### Cookies Alert

In the majority of websites, a Cookies Policy alert will pop up when you enter its website, [in the top](https://www.bbc.com/) ([also here](https://www.gov.uk/)) or the bottom of the website and can use a transition to close and even [using an overlay with opacity](https://www.mirror.co.uk/) or with a [centered popup](https://www.msn.com/es-es/noticias/)

### Jump Buttons

- [ ] Jump across without transition
- [ ] Jump across with a transition

### MENUS

#### Topnav

- [x] **Top Menu simple**. A simple and complete top navigation menu. Missing: inactive links. 
  - Empra &lt;ul&gt; per crear estructura
  - Com crear un Dropdown totsol: [aqui funciona amb _hover_](https://www.w3schools.com/howto/howto_css_dropdown.asp) i [aqui, en clicar a sobre](https://www.w3schools.com/howto/howto_js_dropdown.asp)
  - El mateix exemple amb diferent implementació: [aqui](https://www.w3schools.com/howto/howto_css_dropdown_navbar.asp)
- [x] **Top Menu semiresponsive**. El primer element del menu superior es manté en fer-se responsive. Codi original: [aqui](https://www.w3schools.com/howto/howto_js_responsive_navbar_dropdown.asp)
- [x] **Tom Menu total responsive**. Tots els elements s'oculten en fer-se responsiu. Se dedueix fàcilment de l'anterior. **Atenció**: tant aquest com l'anterior menu, si se volen emprar en MÒBIL, s'hauria de modificar el menu per a desplegar-se en clicar, no en navegar per sobre (_hover_)
- [x] **Top Menu mobile**. Per a mòbil. No inclou submenus. Codi original [aquí](https://www.w3schools.com/howto/howto_js_mobile_navbar.asp)
- [x] https://css-tricks.com/solved-with-css-dropdown-menus/

#### Sidebar

- [x] **Fixed Sidebar Menu**. Fés-li un cop d'ull [aquí](https://www.w3schools.com/howto/howto_css_fixed_sidebar.asp)
- [x] **Fixed Sidebar Menu w/Dropwown**. Fés-li un cop d'ull [aqui](https://www.w3schools.com/howto/howto_js_dropdown_sidenav.asp)
- [x] **Responsive Sidebar Menu**. Un menu sidebar se pot fer responsive molt més fàcilment que un top nav menu. Codi original: [aqui](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_sidebar_responsive)

#### Variations

- [x] **Top Menu Fixed**. en fer scroll, manté la seva posició. Doman el valor `position: fixed` al menu superior.
- [x] **Top Menu Hide on scroll**. Codi original [aqui](https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp)
- [x] **Mega Menu**. Just like a simple top menu, with more areas. Fés-li un cop d'ull [aquí](https://www.w3schools.com/howto/howto_css_mega_menu.asp)
- [x] **Sub Navigation Menu**. El dropdown desplegat és horitzontal en lloc de vertical. Fés-li un cop d'ull [aquí](https://www.w3schools.com/howto/howto_css_subnav.asp)
- [x] **Full Screen Overlay Navigation***. El menú es desplega a tota pàgina, amb una _CSS transition_: [aqui](Full screen Overlay Navigation)


### Modal (Pop Up) Windows

A Pop is a window that appears in top of the contents that’s being displayed in the viewport. It’s limited to a small area and has a limited function (normally a form or a warning)

- [x] [Basic Example](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_popup_form)

### Overlay

An Overlay it’s an area that appears in top of the contents that’s being displayed in the viewport

- [x] [Full screen overlay effect (with Transition and opacity effect](https://www.w3schools.com/howto/howto_css_overlay.asp)
- [x] [Full Screen Transition Overlay (with also a Transition on the text of the links)](https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp)

### Parallax Effect

- [x] Basic parallax with fixed image. La imatge es manté fixa i en fer scroll, el text hi passa per sobre. Codi original [aqui](https://www.w3schools.com/howto/howto_css_parallax.asp)
- [x] Use a library to implement Parallax effect that add a dynamic feel to your interfaces. For instance: [simplePARALLAX.js](https://simpleparallax.com)

### Tabs

- [x] [Basic Tab example](https://www.w3schools.com/howto/howto_js_tabs.asp)