import * as projectsScript from './projectsScript.js'
import * as aboutScript from './aboutScript.js'
$('[data-toggle="tooltip"]').tooltip()
const lastPage = new Set()
lastPage.add('home')
const smallScreen = new Set()
const about = document.getElementById("about")
const projects = document.getElementById("projects")
const home = document.getElementById("home")
const news = document.getElementById("news")
const logo = document.getElementById("logo")
const logoTitle = document.getElementById("logoTitle")
const pageContent = document.getElementById("pageContent")
const activePage = function (newPage) {
  if (lastPage.has(newPage)) {
    return
  }

  $(`#${lastPage.keys().next().value}`).removeClass("active")
  $(`#${newPage}`).addClass("active")
}

const resizeSmall = function () {
  const w_w = $(window).width()
  if (w_w <= 768) {
    $("#bye").addClass("text-center")
    $("#bye").addClass("img-fluid")
  }
}

const switchPage = (page, script, args) => {
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

about.onclick = async function () {
  switchPage('about', aboutScript.main)  
}

news.onclick = async function () {
  switchPage("news", function(){ $("#pageContent").load("news.html") })
}

projects.onclick = function () {
  switchPage("projects", projectsScript.main)
}

home.onclick = function () {
  switchPage('home', function(){ $("#pageContent").load("home.html") })
}

logo.onclick = function () {
  switchPage('home', function(){ $("#pageContent").load("home.html") })
}

logoTitle.onclick = function () {
  switchPage('home', function(){ $("#pageContent").load("home.html") })
}

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip()
  let w_w = $(window).width()
  if (w_w <= 768) {
    if (lastPage.has("about")) return
    $("#bye").addClass("text-center")
    $("#bye").addClass("img-fluid")
    
    smallScreen.has(1)
  } else {
    smallScreen.has(0)
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
