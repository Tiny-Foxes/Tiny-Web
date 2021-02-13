$(() => {
    const members = [
        'Scraticus', 'concubidated', 'ListenerJubatus', 'JoseVarelaP', 'Jousway',
        'MrThatKid', 'moruzerinho6', 'ArcticFqx', 'hanubeki', 'Gabrimax98', 'JustMoneko',
        'SHRMP0', 'SheepyChris', 'AppleArcade120', 'TeamRizu', 'akym-tsubby',
        'DanielRotwind', 'JapanYoshi', 'Kaede573', 'KannushiLink', 'Ksempac', 
        'MattMayuga', 'MechMaelstrom', 'Rosho128', 'snil4', 'vithov1120', 
        'XeroOl', 'jose1771', 'Sudospective'
    ]
    const membersWithDescription = {
        'moruzerinho6': 'No more than one, not less than one.',
        'JoseVarelaP': 'A programmer that normally does themes for NotITG, OpenITG and SM5. Currently a developer for Project MoonDance.',
        'TeamRizu': 'The creators of StepMania OutFox',
        'Rosho128': 'Hi, My name is Bakhtiar "Rosho" Yasmeen, and I want to help you.',
        'Scraticus': 'Old Bastard, DJ, and musically minded programmer and teacher.',
        'Sudospective': 'Hi, I\'m Avery. You can call me Sudo. I nag my computers to do things for me.'
    }
    const specialStatus = {
        JoseVarelaP: {
            teamRizu: true,
            projectMoondance: true,
            translator: true
        },
        ListenerJubatus: {
            teamRizu: true,
            projectMoondance: true,
            noteskinMaker: true,
            judgmentMaker: true
        },
        MrThatKid: {
            teamRizu: true,
            projectMoondance: true
        },
        Scraticus: {
            teamRizu: true,
            projectMoondance: true,
            tinyFoxesFounder: true,
            toolMaker: true
        },
        concubidated: {
            teamRizu: true,
            projectMoondance: true
        },
        Jousway: {
            teamRizu: true,
            projectMoondance: true,
            noteskinMaker: true
        },
        moruzerinho6: {
            projectMoondance: true,
            tinyFoxesFounder: true,
            translator: true,
            toolMaker: true
        },
        JustMoneko: {
            projectMoondance: true,
            translator: true
        },
        Gabrimax98: {
            projectMoondance: true,
            translator: true
        },
        ArcticFqx: {
            projectMoondance: true
        },
        hanubeki: {
            projectMoondance: true,
            translator: true
        },
        snil4: {
            translator: true
        },
        SHRMP0: {
            translator: true
        },
        SheepyChris: {
            translator: true
        },
        DanielRotwind: {
            translator: true
        },
        Kaede573: {
            translator: true
        },
        Ksempac: {
            translator: true,
            toolMaker: true
        },
        vithov1120: {
            translator: true
        },
        jose1771: {
            translator: true
        },
        "akym-tsubby": {
            noteskinMaker: true
        },
        AppleArcade120: {
            judgmentMaker: true,
            noteskinMaker: true
        },
        JapanYoshi: {
            judgmentMaker: true,
            noteskinMaker: true
        },
        KannushiLink: {
            judgmentMaker: true
        },
        MattMayuga: {
            judgmentMaker: true
        },
        MechMaelstrom: {
            noteskinMaker: true
        },
        XeroOl: {
            toolMaker: true
        },
        Sudospective: {
            toolMaker: true
        }
    }

    const generateProfiles = (members, specialStatus, membersWithDescription) => {
        let membersElem = document.getElementById('bye')    
        membersElem.innerHTML = ''

        if (!members) {
            return
        }
        for (let i = 0; i < members.length; i++) {
            const current = document.createElement('div')
            current.classList.add('col-md-3')
            if (i % 4) {
                current.setAttribute('style', 'border-style: none none none outset; height: 320px')
            } else {
                current.setAttribute('style', 'height: 320px')
            }
    
            const statuses = specialStatus[members[i]]
            if (statuses) {
                const items = document.createElement('div')
                items.setAttribute('style', 'position: absolute')
                for (let s = 0; s < Object.keys(statuses).length; s++) {
                    let special = document.createElement('img')
    
                    switch (Object.keys(statuses)[s]) {
                        case 'teamRizu':
                            special.src = 'members/TeamRizu.png'
                            tippy(special, {
                                content: members[i] === 'Scraticus' ? 'Team Rizu Lead' : 'Team Rizu Member'
                            })
                            break
                        case 'projectMoondance':
                            special.src = 'projectMoondance.png'
                            tippy(special, {
                                content: 'Project Moondance Staff'
                            })
                        break
                        case 'tinyFoxesFounder':
                            special.src = 'tinyFoxes.png'
                            tippy(special, {
                                content: 'TinyFoxes Founder'
                            })
                            break
                        case 'translator':
                            special = document.createElement('i')
                            special.classList.add('fas', 'fa-language', 'fa-xs')
                            tippy(special, {
                                content: 'Translator'
                            })
                            break
                        case 'noteskinMaker':
                            special.src = 'arrowup.png'
                            tippy(special, {
                                content: 'Noteskin Maker'
                            })
                            break
                        case 'judgmentMaker':
                            special.src = 'yeah.png'
                            tippy(special, {
                                content: 'Judgment Maker'
                            })
                            break
                        case 'toolMaker':
                            special = document.createElement('i')
                            special.classList.add('fas', 'fa-tools', 'fa-sm')
                            tippy(special, {
                                content: 'Tool Maker'
                            })
                            break
                        default:
                        break
                    }
                    special.setAttribute('style', 'display: flex; width: 16px; height: 16px; text-align: center; align-items: flex-start; justify-content: flex-end')
                    items.appendChild(special)
                    current.appendChild(items)
                }
            }


            const profileAnchor = document.createElement('a')
            const avatarAnchor = document.createElement('a')

            const avatar = document.createElement('img')
            avatar.classList.add('rounded-circle')
            avatar.setAttribute('style', 'max-width: 380px')
            avatar.setAttribute('width', 150)
            avatar.setAttribute('height', 150)
            avatar.src = `members/${members[i]}.png`
            avatarAnchor.href = `https://github.com/${members[i]}`
            avatarAnchor.target = '_blank'

            const name = document.createElement('p')
            const boldName = document.createElement('strong')
            boldName.innerHTML = members[i]
            name.setAttribute('style', 'fontsize: medium')
            name.appendChild(boldName)

            avatarAnchor.append(avatar)
            profileAnchor.appendChild(avatarAnchor)
            profileAnchor.appendChild(name)

            current.appendChild(profileAnchor)
            if (membersWithDescription[members[i]]) {
                const description = document.createElement('p')
                description.style.fontSize = 'small'
                description.innerHTML = membersWithDescription[members[i]]
                current.appendChild(description)
            }
            membersElem.appendChild(current)
            membersElem.setAttribute('style', 'text-align: center')
        }
    }

    generateProfiles(members, specialStatus, membersWithDescription)

    const filters = new Set()
    const rizuFilter = document.getElementById('rizuFilter')
    const moondanceFilter = document.getElementById('moondanceFilter')
    const founder = document.getElementById('founderFilter')
    const translator = document.getElementById('translatorFilter')
    const noteskin = document.getElementById('noteskinFilter')
    const judgment = document.getElementById('judgmentFilter')
    const tool = document.getElementById('toolFilter')

    const filteredMembers = () => {
        let memberList = members

        const possibleFilters = ['rizu', 'moondance', 'founder', 'translator', 'noteskin', 'judgment', 'tool']
        const checkObjects = ['teamRizu', 'projectMoondance', 'tinyFoxesFounder', 'translator', 'noteskinMaker', 'judgmentMaker', 'toolMaker']

        for (let i = 0; i < possibleFilters.length; i++) {
            if (filters.has(possibleFilters[i])) {
                memberList = memberList.filter(m => specialStatus[m] && specialStatus[m][checkObjects[i]])
            }
        }

        return memberList
    }
    rizuFilter.onclick = () => {

        if (filters.has('rizu')) {
            filters.delete('rizu')
            rizuFilter.classList.remove('btn-primary')
            rizuFilter.classList.add('btn-outline-secondary')
        } else {
            filters.add('rizu')
            rizuFilter.classList.remove('btn-outline-secondary')
            rizuFilter.classList.add('btn-primary')
        }

        generateProfiles(filteredMembers(), specialStatus, membersWithDescription)
    }

    moondanceFilter.onclick = () => {
        if (filters.has('moondance')) {
            filters.delete('moondance')
            moondanceFilter.classList.remove('btn-primary')
            moondanceFilter.classList.add('btn-outline-secondary')
        } else {
            filters.add('moondance')
            moondanceFilter.classList.remove('btn-outline-secondary')
            moondanceFilter.classList.add('btn-primary')
        }

        generateProfiles(filteredMembers(), specialStatus, membersWithDescription)
    }

    founder.onclick = () => {
        if (filters.has('founder')) {
            filters.delete('founder')
            founder.classList.remove('btn-primary')
            founder.classList.add('btn-outline-secondary')
        } else {
            filters.add('founder')
            founder.classList.remove('btn-outline-secondary')
            founder.classList.add('btn-primary')
        }

        generateProfiles(filteredMembers(), specialStatus, membersWithDescription)
    }

    translator.onclick = () => {
        if (filters.has('translator')) {
            filters.delete('translator')
            translator.classList.remove('btn-primary')
            translator.classList.add('btn-outline-secondary')
        } else {
            filters.add('translator')
            translator.classList.remove('btn-outline-secondary')
            translator.classList.add('btn-primary')
        }

        generateProfiles(filteredMembers(), specialStatus, membersWithDescription)
    }

    noteskin.onclick = () => {
        if (filters.has('noteskin')) {
            filters.delete('noteskin')
            noteskin.classList.remove('btn-primary')
            noteskin.classList.add('btn-outline-secondary')
        } else {
            filters.add('noteskin')
            noteskin.classList.remove('btn-outline-secondary')
            noteskin.classList.add('btn-primary')
        }

        generateProfiles(filteredMembers(), specialStatus, membersWithDescription)
    }

    judgment.onclick = () => {
        if (filters.has('judgment')) {
            filters.delete('judgment')
            judgment.classList.remove('btn-primary')
            judgment.classList.add('btn-outline-secondary')
        } else {
            filters.add('judgment')
            judgment.classList.remove('btn-outline-secondary')
            judgment.classList.add('btn-primary')
        }

        generateProfiles(filteredMembers(), specialStatus, membersWithDescription)
    }

    tool.onclick = () => {
        if (filters.has('tool')) {
            filters.delete('tool')
            tool.classList.remove('btn-primary')
            tool.classList.add('btn-outline-secondary')
        } else {
            filters.add('tool')
            tool.classList.remove('btn-outline-secondary')
            tool.classList.add('btn-primary')
        }

        generateProfiles(filteredMembers(), specialStatus, membersWithDescription)
    }
})