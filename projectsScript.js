$(() => {
    const repos = [
        {
            name: "OutFox-Translations",
            description: "Repository for translation files for OutFox.",
            contributors: [
                "moruzerinho6",
                "hanubeki",
                "JustMoneko",
                "JoseVarelaP",
                "snil4",
                "Ksempac",
                "ListenerJubatus",
            ],
            topics: ["translation"],
        },
        {
            name: "Simply-Love-OutFox",
            description:
                "a fork of Simply Love focused on additional tweaks for compatibility and integrations with StepMania OutFox 5.3",
            contributors: ["JoseVarelaP"],
            topics: ["theme"],
        },
        {
            name: "sm5-legacy",
            description:
                "The legacy theme from StepMania 5.0.x with slight performance tweaks for OutFox.",
            contributors: ["MrThatKid", "JoseVarelaP"],
            topics: ["theme"],
        },
        {
            name: "SoundWaves-Colors",
            description: "Community made color schemes for SoundWaves",
            contributors: ["moruzerinho6", "Rosho128", "AppleArcade120"],
            topics: ["theme"],
        },
        {
            name: "Translation-Toolkit",
            description: "A small application to automate some tasks for translators",
            contributors: ["Ksempac", "moruzerinho6"],
            topics: ["tool"],
        },
        {
            name: "MoondanceWeb",
            description: "Language files for the Project Moondance website",
            contributors: ["moruzerinho6"],
            topics: ["translation"],
        },
        {
            name: "smtheme-soundwaves-community",
            description:
                "Community version of Soundwaves, the StepMania 5.3 default theme.",
            contributors: ["ListenerJubatus", "moruzerinho6", "Rosho128"],
            topics: ["theme"],
        },
        {
            name: "Outfox-fr",
            description: 'French (fr) Translation for StepMania 5.3 "Outfox"',
            contributors: ["Ksempac", "Kaede573"],
            topics: ["translation"],
        },
        {
            name: "OutFox-he",
            description: 'Hebrew (he) Translation for StepMania 5.3 "Outfox"',
            contributors: ["snil4"],
            topics: ["translation"],
        },
        {
            name: "OutFox-DE",
            description: 'German (de) Translation for StepMania 5.3 "Outfox"',
            contributors: ["DanielRotwind", "moruzerinho6"],
            topics: ["translation"],
        },
        {
            name: "OutFox-es",
            description: 'Español (es) Translation for StepMania 5.3 "Outfox"',
            contributors: ["JoseVarelaP", "moruzerinho6"],
            topics: ["translation"],
        },
        {
            name: "OutfoxPTBR",
            description:
                'Brazilian Portuguese (PT-BR) Translation for StepMania 5.3 "Outfox"',
            contributors: ["moruzerinho6", "SheepyChris", "SHRMP0"],
            topics: ["translation"],
        },
        {
            name: "OutFox-ja",
            description: 'Japanese (ja) Translation for StepMania 5.3 "Outfox"',
            contributors: ["hanubeki"],
            topics: ["translation"],
        },
        {
            name: "OutFox-PL",
            description: 'Polish (pl) Translation for StepMania 5.3 "Outfox"',
            contributors: ["JustMoneko"],
            topics: ["translation"],
        },
        {
            name: "OutFox-hu",
            description: 'Hungarian (hu)  Translation for StepMania 5.3 "Outfox"',
            contributors: ["KaZo75", "moruzerinho6"],
            topics: ["translation"],
        },
        {
            name: "OutFox-IT",
            description: 'Italian (IT)  Translation for StepMania 5.3 "Outfox"',
            contributors: ["Gabrimax98"],
            topics: ["translation"],
        },
        {
            name: "XML-Convert",
            description:
                "tool to help convert OpenITG/NotITG song-specific xml files into lua files",
            contributors: ["XeroOl"],
            topics: ["tool"],
        },
        {
            name: "Tiny-Webini",
            description: "Translate Project Moondance like StepMania",
            contributors: ["moruzerinho6"],
            topics: ["translation", "tool"],
        },
        {
            name: "MoondanceWeb-PT",
            description: "Portuguese translation of Project Moondance website.",
            contributors: ["moruzerinho6", "SheepyChris", "SHRMP0"],
            topics: ["translation"],
        },
        {
            name: "JudgeFonts-by-MattMayuga",
            description: "No description.",
            contributors: ["MattMayuga"],
            topics: ["judgment"],
        },
        {
            name: "Aqui-Alpha-Noteskins",
            description: "Global Noteskins for StepMania 5.3",
            contributors: ["akym-tsubby", "moruzerinho6"],
            topics: ["noteskin"],
        },
        {
            name: "R.O.B.-Bot-Custom",
            description: "No description.",
            contributors: ["MechMaelstrom", "moruzerinho6"],
            topics: ["noteskin"],
        },
        {
            name: "Lambda-PTBR",
            description:
                'Brazilian Portuguese (PT-BR) Translation for StepMania 5.3 "Lambda"',
            contributors: ["moruzerinho6"],
            topics: ["translation"],
        },
        {
            name: "ArGame-Customizations",
            description: "Customizations created by AppleArcade120 are stored here.",
            contributors: ["AppleArcade120"],
            topics: ["theme", "noteskin", "judgment"],
        },
        {
            name: "TF_Wheels",
            description: "TinyFoxesWheels",
            contributors: ["Jousway"],
            topics: ["theme"],
        },
        /*{
            name: "Tiny-Manager",
            description: "Quick look at Tiny-Foxes projects.",
            contributors: ['moruzerinho6', 'JoseVarelaP', 'ListenerJubatus']
        },*/
        {
            name: "Lambda-PL",
            description: 'Polish (PL) Translation for StepMania 5.3 "Lambda" theme',
            contributors: ["JustMoneko"],
            topics: ["translation"],
        },
        {
            name: "MoondanceWeb-PL",
            description: "No description.",
            contributors: ["JustMoneko"],
            topics: ["translation"],
        },
        {
            name: "Simply-Love-PTBR",
            description: "Brazilian Portuguese (PT-BR) Translation for Simply Love",
            contributors: ["moruzerinho6"],
            topics: ["translation"],
        },
        {
            name: "CircoCero-PTBR",
            description:
                'Brazilian Portuguese (PT-BR) Translation for StepMania 5.3 "CircoCero"',
            contributors: ["moruzerinho6"],
            topics: ["translation"],
        },
        {
            name: "Judge",
            description: "Multilingual judgments by Haley",
            contributors: ["JapanYoshi"],
            topics: ["judgment"],
        },
    ]

    const generateRepos = (repos) => {
        const contentDiv = document.getElementById("bye")

        contentDiv.innerHTML = ''
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
            repoName.setAttribute("style", "font-size: 32px; font-weight:bold")
            nameAnchor.appendChild(repoName)

            const repoDescription = document.createElement("p")

            repoDescription.setAttribute("style", "height: 60px; display: flex")
            repoDescription.innerHTML = currentRepo.description

            const items = document.createElement("div")
            items.setAttribute(
                "style",
                "display: flex; align-items: flex-end; justify-content: flex-end"
            )

            const topics = document.createElement("div");
            topics.setAttribute("style", "display: flex");
            for (let i = 0; i < currentRepo.topics.length; i++) {
                const currentTopic = document.createElement("p")
                currentTopic.innerHTML = currentRepo.topics[i]
                currentTopic.classList.add("mr-1");
                currentTopic.setAttribute(
                    "style",
                    "width: 90px; border-radius: 50px; font-size: 16px; color: #58A6FF; line-height: 25px; text-align:center; background: #eaf5ff"
                );
                topics.appendChild(currentTopic)
            }

            const contributors = document.createElement("p")
            contributors.innerHTML = "Contributors"
            items.appendChild(contributors)

            for (let i = 0; i < (currentRepo.contributors.length >= 4 ? 4 : currentRepo.contributors.length); i++) {
                let currentBall = document.createElement("div")

                if (currentRepo.contributors.length >= i + 1) {
                    currentBall = document.createElement("img")
                    currentBall.src = `members/${currentRepo.contributors[i]}.png`
                    currentBall.setAttribute(
                        "style",
                        "width: 50px; height: 50px; border-radius: 100%; margin-left: 8px"
                    )
                    tippy(currentBall, {
                        content: `${currentRepo.contributors[i]}`
                    })
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
    };

    const contributorsListElem = document.getElementById("contributorsList")
    const contributorsList = allContributors()
    const repoFilters = ['translation', 'theme', 'tool', 'judgment', 'noteskin']
    const topicFilter = new Set()
    const memberFilter = new Set()
    const reposByFilters = () => {
        let reposArr = repos

        for (let i = 0; i < repoFilters.length; i++) {
            if (topicFilter.has(repoFilters[i])) {
                reposArr = reposArr.filter(r => r.topics.includes(repoFilters[i]))
            }
        }

        const members = allContributors()
        for (let i = 0; i < members.length; i++) {
            if (memberFilter.has(members[i])) {
                reposArr = reposArr.filter(r => r.contributors.includes(members[i]))
            }
        }

        return reposArr
    }

    for (let i = 0; i < contributorsList.length; i++) {
        const line = document.createElement("li")
        const anchor = document.createElement("a")
        anchor.classList.add("dropdown-item")
        anchor.innerHTML = `<img src="members/${contributorsList[i]}.png" style="height: 32px">  ${contributorsList[i]}`
        anchor.onclick = () => {
            memberFilter.has(contributorsList[i])
                ? memberFilter.delete(contributorsList[i]) && line.setAttribute('style', '')
                : memberFilter.add(contributorsList[i]) && line.setAttribute('style', 'background-color: #58A6FF');

            generateRepos(reposByFilters())
        };
        line.appendChild(anchor);
        contributorsListElem.appendChild(line)
    }

    const translationFilter = document.getElementById("translationFilter")
    const themeFilter = document.getElementById("themeFilter")
    const toolFilter = document.getElementById("toolFilter")
    const judgmentFilter = document.getElementById("judgmentFilter")
    const noteskinFilter = document.getElementById("noteskinFilter")

    translationFilter.onclick = () => {

        if (topicFilter.has("translation")) {
            topicFilter.delete("translation")
            translationFilter.style.background = '#eaf5ff'
        } else {
            topicFilter.add("translation")
            translationFilter.style.background = '#15202f'
        }

        generateRepos(reposByFilters())
    }

    themeFilter.onclick = () => {

        if (topicFilter.has("theme")) {
            topicFilter.delete("theme")
            themeFilter.style.background = '#eaf5ff'
        } else {
            topicFilter.add("theme")
            themeFilter.style.background = '#15202f'
        }

        generateRepos(reposByFilters())
    }

    toolFilter.onclick = () => {
        if (topicFilter.has("tool")) {
            topicFilter.delete("tool")
            toolFilter.style.background = '#eaf5ff'
        } else {
            topicFilter.add("tool")
            toolFilter.style.background = '#15202f'
        }

        generateRepos(reposByFilters())
    }

    judgmentFilter.onclick = () => {
        if (topicFilter.has("judgment")) {
            topicFilter.delete("judgment")
            judgmentFilter.style.background = '#eaf5ff'
        } else {
            topicFilter.add("judgment")
            judgmentFilter.style.background = '#15202f'
        }

        generateRepos(reposByFilters())
    }

    noteskinFilter.onclick = () => {
        if (topicFilter.has("noteskin")) {
            topicFilter.delete("noteskin")
            noteskinFilter.style.background = '#eaf5ff'
        } else {
            topicFilter.add("noteskin")
            noteskinFilter.style.background = '#15202f'
        }
        
        generateRepos(reposByFilters())
    }

    generateRepos(repos)
})
