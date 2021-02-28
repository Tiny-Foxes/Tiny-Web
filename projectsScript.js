export const main = async () => {
  $("#pageContent").load("projects.html", async () => {
    const generateRepos = (repos) => {
      const contentDiv = document.getElementById("bye")

      contentDiv.innerHTML = ""
      if (!repos) {
        return
      }
      for (let i = 0; i < repos.length; i++) {
        const currentRepo = repos[i]
        const repoDiv = document.createElement("div")
        repoDiv.classList.add("col-md-6")
        if (i === 0 || i % 2 === 0) {
          repoDiv.setAttribute("style", "border-style: none inset none none")
        }

        const nameAnchor = document.createElement("a")
        nameAnchor.href = `https://github.com/Tiny-Foxes/${currentRepo.name}`
        nameAnchor.target = "_blank"
        nameAnchor.setAttribute("style", "color: black")
        const repoName = document.createElement("p")
        repoName.innerHTML = currentRepo.name
        repoName.setAttribute("style", "font-size: 32px; font-weight: bold")
        nameAnchor.appendChild(repoName)

        const repoDescription = document.createElement("p")

        repoDescription.setAttribute("style", "height: 60px; display: flex")
        repoDescription.innerHTML = currentRepo.description

        const items = document.createElement("div")
        items.setAttribute(
          "style",
          "display: flex; align-items: flex-end; justify-content: flex-end"
        )

        const topics = document.createElement("div")
        topics.setAttribute("style", "display: flex")
        for (let i = 0; i < currentRepo.topics.length; i++) {
          const currentTopic = document.createElement("p")
          currentTopic.innerHTML = currentRepo.topics[i]
          currentTopic.classList.add("mr-1", localStorage.getItem('theme') === 'light' ? 'bg-light' : 'bg-dark')
          currentTopic.setAttribute(
            "style",
            "width: 90px; border-radius: 50px; font-size: 16px; color: #58A6FF; line-height: 25px; text-align:center"
          )
          topics.appendChild(currentTopic)
        }

        const contributors = document.createElement("p")
        contributors.innerHTML = "Contributors"
        items.appendChild(contributors)

        for (
          let i = 0;
          i <
          (currentRepo.contributors.length >= 4
            ? 4
            : currentRepo.contributors.length);
          i++
        ) {
          let currentBall = document.createElement("div")

          if (currentRepo.contributors.length >= i + 1) {
            currentBall = document.createElement("img")
            currentBall.src = `members/${currentRepo.contributors[i]}.png`
            currentBall.setAttribute(
              "style",
              "width: 50px; height: 50px; border-radius: 100%; margin-left: 8px"
            )
            currentBall.setAttribute('data-toggle', 'tooltip')
            currentBall.title = currentRepo.contributors[i]
            items.appendChild(currentBall)
          }
        }

        repoDiv.appendChild(nameAnchor)
        repoDiv.appendChild(repoDescription)
        repoDiv.appendChild(topics)
        repoDiv.appendChild(items)

        contentDiv.appendChild(repoDiv)
      }
    }

    // repos
    $.getJSON('storage/repos.json', (repoData) => {
      const repos = repoData.data
      /**
       * Returns an array with all contributors from all repos.
       * @function
       * @returns {string[]}
       */
      const allContributors = () => {
        let contributors = []
  
        for (let i = 0; i < repos.length; i++) {
          repos[i].contributors.forEach((e) => {
            if (contributors.includes(e)) {
              return
            }
  
            contributors.push(e)
          })
        }
  
        return contributors
      }
  
      const contributorsListElem = document.getElementById("contributorsList")
      const contributorsList = allContributors()
      const repoFilters = ["translation", "theme", "tool", "judgment", "noteskin"]
      const topicFilter = new Set()
      const memberFilter = new Set()
      /**
       * Returns repos taking the filters into account.
       * @function
       * @returns {object[]}
       */
      const reposByFilters = () => {
        let reposArr = repos
  
        for (let i = 0; i < repoFilters.length; i++) {
          if (topicFilter.has(repoFilters[i])) {
            reposArr = reposArr.filter((r) => r.topics.includes(repoFilters[i]))
          }
        }
  
        const members = allContributors()
        for (let i = 0; i < members.length; i++) {
          if (memberFilter.has(members[i])) {
            reposArr = reposArr.filter((r) => r.contributors.includes(members[i]))
          }
        }
  
        return reposArr
      }
  
      for (let i = 0; i < contributorsList.length; i++) {
        const line = document.createElement("li")
        const anchor = document.createElement("a")
        anchor.classList.add("dropdown-item", localStorage.getItem('theme') === 'light' ? 'bg-light' : 'bg-dark')
        anchor.innerHTML = `<img src="members/${contributorsList[i]}.png" style="height: 32px">  ${contributorsList[i]}`
        anchor.onclick = () => {
          if (memberFilter.has(contributorsList[i])) {
            memberFilter.delete(contributorsList[i])
            line.classList.remove('text-primary')
          } else {
            memberFilter.add(contributorsList[i])
            line.classList.add('text-primary')
          }

          generateRepos(reposByFilters())
        }
        line.appendChild(anchor)
        contributorsListElem.appendChild(line)
      }
  
      const translationFilter = document.getElementById("translationFilter")
      const themeFilter = document.getElementById("themeFilter")
      const toolFilter = document.getElementById("toolFilter")
      const judgmentFilter = document.getElementById("judgmentFilter")
      const noteskinFilter = document.getElementById("noteskinFilter")

      /**
       * Applies the filters
       * @function
       * @param {HTMLElement} filterObj - The elem which is clicked to apply the filter
       * @param {string} filter - The filter name, see repoFilters variable
       */
      const filterIn = (filterObj, filter) => {
        if (topicFilter.has(filter)) {
          topicFilter.delete(filter)
          filterObj.classList.remove(`${localStorage.getItem('theme') === 'light' ? 'bg-dark' : 'bg-light'}`)
          filterObj.classList.add(`bg-${localStorage.getItem('theme')}`)
        } else {
          topicFilter.add(filter)
          filterObj.classList.remove(`bg-${localStorage.getItem('theme')}`)
          filterObj.classList.add(`${localStorage.getItem('theme') === 'light' ? 'bg-dark' : 'bg-light'}`)
        }
  
        generateRepos(reposByFilters())
      }

      translationFilter.onclick = () => {
        filterIn(translationFilter, 'translation')
      }
  
      themeFilter.onclick = () => {
        filterIn(themeFilter, 'theme')
      }
  
      toolFilter.onclick = () => {
        filterIn(toolFilter, 'tool')
      }
  
      judgmentFilter.onclick = () => {
        filterIn(judgmentFilter, 'judgment')
      }
  
      noteskinFilter.onclick = () => {
        filterIn(noteskinFilter, 'noteskin')
      }
  
      generateRepos(repos)
    })
  })
}
