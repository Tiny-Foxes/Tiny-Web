import * as projectsScript from './projectsScript.js'
import * as aboutScript from './aboutScript.js'
$('[data-toggle="tooltip"]').tooltip()
const lastPage = new Set()
lastPage.add('home')
const smallScreen = new Set()
if (!sessionStorage.getItem('theme')) {
  sessionStorage.setItem('theme', 'light')
}
const about = document.getElementById("about")
const projects = document.getElementById("projects")
const home = document.getElementById("home")
const news = document.getElementById("news")
const logo = document.getElementById("logo")
const logoTitle = document.getElementById("logoTitle")
const pageContent = document.getElementById("pageContent")
const themeSwitch = document.getElementById('switchTheme')
const navbar = document.getElementById('tinyNavbar')
const darkText = document.getElementById('darkSwitchText')
const activePage = (newPage) => {
  if (lastPage.has(newPage)) {
    return
  }

  $(`#${lastPage.keys().next().value}`).removeClass("active")
  $(`#${newPage}`).addClass("active")
}

const resizeSmall = () => {
  const w_w = $(window).width()
  if (w_w <= 768) {
    $("#bye").addClass("text-center")
    $("#bye").addClass("img-fluid")
  }
}

const switchPage = async (page, script, args) => {
  if (lastPage.has(page)) return
  pageContent.innerHTML = ""

  if (script) {
    script(args)
  }

  activePage(page)
  resizeSmall()
  lastPage.clear()
  lastPage.add(page)
}

about.onclick = async () => {
  switchPage('about', aboutScript.main)  
}

news.onclick = async () => {
  switchPage("news", () => { $("#pageContent").load("news.html") })
}

projects.onclick = () => {
  switchPage("projects", projectsScript.main)
}

home.onclick = function () {
  switchPage('home', () => { $("#pageContent").load("home.html") })
}

logo.onclick = () => {
  switchPage('home', () => { $("#pageContent").load("home.html") })
}

logoTitle.onclick = () => {
  switchPage('home', () => { $("#pageContent").load("home.html") })
}

const applyTheme = () => {
  if (lastPage.keys().next().value === 'about') {
    switchPage('about', aboutScript.main)
  }

  if (sessionStorage.getItem('theme') === 'dark') {
    document.body.style.backgroundColor = '#06090f'
    document.getElementsByTagName('style')[0].innerHTML = `h1, li, h2, h3, h4, h5, p { 
      color: #91c2d9; 
    }`;
    navbar.classList.remove('bg-light', 'navbar-light')
    navbar.classList.add('bg-dark', 'navbar-dark')
    darkText.classList.remove('text-dark')
    darkText.classList.add('text-light')

    const lightElements = document.querySelectorAll('.bg-light')
    const darkElements = document.querySelectorAll('.bg-dark')
    
    lightElements.forEach( (element) => {
      if (element.id !== navbar.id) {
        element.classList.remove('bg-light')
        element.classList.add('bg-dark')
      } 
    })
    
    darkElements.forEach( (element) => {
      if (element.id !== navbar.id) {
        element.classList.remove('bg-dark')
        element.classList.add('bg-light')
      }
    }) 
  } else {
    document.body.style.backgroundColor = ''
    document.getElementsByTagName('style')[0].innerHTML = ''
    navbar.classList.remove('bg-dark', 'navbar-dark')
    navbar.classList.add('bg-light', 'navbar-light')
    darkText.classList.remove('text-light')
    darkText.classList.add('text-dark')
    
    const darkElements = document.querySelectorAll('.bg-dark')
    const lightElements = document.querySelectorAll('.bg-light')

    darkElements.forEach( (element) => {
      if (element.id !== navbar.id) {
        element.classList.remove('bg-dark')
        element.classList.add('bg-light')
      }
    })

    lightElements.forEach( (element) => {
      if (element.id !== navbar.id) {
        element.classList.remove('bg-light')
        element.classList.add('bg-dark')
      }
    })
  }
}

themeSwitch.onclick = () => {
  if (sessionStorage.getItem('theme') === 'dark') {
    sessionStorage.clear()
    sessionStorage.setItem('theme','light')
    applyTheme()
  } else {
    sessionStorage.clear()
    sessionStorage.setItem('theme', 'dark')
    applyTheme()
  }
}

$(document).ready(() => {
  applyTheme()
  $("body").tooltip({ selector: '[data-toggle=tooltip]' });
  let w_w = $(window).width()
  if (w_w <= 768) {
    if (lastPage.has("about")) return
    $("#bye").addClass("text-center")
    $("#bye").addClass("img-fluid")
    
    smallScreen.add(1)
  } else {
    smallScreen.add(0)
  }
  // onResize
  $(window).resize(function () {
    w_w = $(window).width()

    if (lastPage.has("about")) {
      return
    }

    if (w_w > 768) {
      if (smallScreen.has(0)) return
      console.log("Got bigger, remove center.")
      console.log(w_w)
      $("#bye").removeClass("text-center")
      $("#bye").removeClass("img-fluid")
      smallScreen.clear()
      smallScreen.add(0)
    } else {
      if (smallScreen.has(1)) return
      console.log("Got smaller, adding center.")
      console.log(w_w)
      $("#bye").addClass("text-center")
      $("#bye").addClass("img-fluid")
      smallScreen.clear()
      smallScreen.add(1)
    }
  })
})
