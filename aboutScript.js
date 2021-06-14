import * as member from './classes/member.js'

/**
 * @typedef peopleData
 * @property {string[]} members
 * @property {Object.<string, Object.<string, boolean>>} specialStatus
 * @property {Object.<string, string>} membersWithDescription
 */

export const main = async () => {
  await $('#pageContent').load('about.html')
  /**
   *
   * @param {string[]} members
   */
  const generateProfiles = (members) => {
    let membersElem = document.getElementById('bye')
    membersElem.innerHTML = ''

    if (!members) {
      return
    }

    for (let i = 0; i < members.length; i++) {
      const current = document.createElement('div')
      current.classList.add('col-md-3')
      if (i % 4) {
        current.setAttribute(
          'style',
          'border-style: none none none outset; height: 320px'
        )
      } else {
        current.setAttribute('style', 'height: 320px')
      }

      const statuses = Members.memberStatus(members[i])
      if (statuses) {
        const items = document.createElement('div')
        items.setAttribute('style', 'position: absolute')
        for (let s = 0; s < Object.keys(statuses).length; s++) {
          let special = document.createElement('img')

          switch (Object.keys(statuses)[s]) {
            case 'teamRizu':
              special.src = 'members/TeamRizu.png'
              if (members[i] === 'Scraticus') {
                special.setAttribute('data-translation', 'teamRizuLeadTooltip')
                special.title = 'Team Rizu Lead'
              } else {
                special.setAttribute('data-translation', 'teamRizuTooltip')
                special.title = 'Team Rizu Member'
              }
              break
            case 'projectMoondance':
              special.src = 'projectMoondance.png'
              special.setAttribute(
                'data-translation',
                'projectMoondanceTooltip'
              )
              special.title = 'Project Moondance Staff'
              break
            case 'tinyFoxesFounder':
              special.src = 'tinyFoxes.png'
              special.setAttribute('data-translation', 'tinyFounderTooltip')
              special.title = 'TinyFoxes Founder'
              break
            case 'translator':
              special = document.createElement('i')
              special.classList.add('fas', 'fa-language', 'fa-xs')
              special.setAttribute('data-translation', 'translatorTooltip')
              special.title = 'Translator'
              break
            case 'noteskinMaker':
              special.src = 'arrowup.png'
              special.setAttribute('data-translation', 'noteskinMakerTooltip')
              special.title = 'Noteskin Maker'
              break
            case 'judgmentMaker':
              special.src = 'yeah.png'
              special.setAttribute('data-translation', 'judgmentMakerTooltip')
              special.title = 'Judgment Maker'
              break
            case 'toolMaker':
              special = document.createElement('i')
              special.classList.add('fas', 'fa-tools', 'fa-sm')
              special.setAttribute('data-translation', 'toolMakerTooltip')
              special.title = 'Tool Maker'
              break
            default:
              break
          }
          special.setAttribute('data-toggle', 'tooltip')
          special.setAttribute(
            'style',
            'display: flex; width: 16px; height: 16px; text-align: center; align-items: flex-start; justify-content: flex-end'
          )
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
      if (Members.memberDescription(members[i])) {
        const description = document.createElement('p')
        description.style.fontSize = 'small'
        description.innerHTML = Members.memberDescription(members[i])
        current.appendChild(description)
      }
      membersElem.appendChild(current)
      membersElem.setAttribute('style', 'text-align: center')
    }
  }

  // uses data

  const Members = new member.MemberPublisher()
  await Members.init()

  generateProfiles(Members.members)

  const filters = new Set()
  const rizuFilter = document.getElementById('rizuFilter')
  const moondanceFilter = document.getElementById('moondanceFilter')
  const founder = document.getElementById('founderFilter')
  const translator = document.getElementById('translatorFilter')
  const noteskin = document.getElementById('noteskinFilter')
  const judgment = document.getElementById('judgmentFilter')
  const tool = document.getElementById('toolFilter')

  const filteredMembers = () => {
    let memberList = Members.members

    const possibleFilters = [
      'rizu',
      'moondance',
      'founder',
      'translator',
      'noteskin',
      'judgment',
      'tool',
    ]
    const checkObjects = [
      'teamRizu',
      'projectMoondance',
      'tinyFoxesFounder',
      'translator',
      'noteskinMaker',
      'judgmentMaker',
      'toolMaker',
    ]

    for (let i = 0; i < possibleFilters.length; i++) {
      if (filters.has(possibleFilters[i])) {
        memberList = memberList.filter(
          (m) => Members.memberStatus(m) && Members.specialStatus[m][checkObjects[i]]
        )
      }
    }

    return memberList
  }

  /**
   * Applies the filters.
   * @function
   * @param {HTMLElement} filterObj - The element that needs to be clicked to enable the filter.
   * @param {string} filter - The filter name, look possibleFilters array.
   * @param {Set<string>} filters - The filters Set.
   */
  const filterIn = (filterObj, filter) => {
    if (filters.has(filter)) {
      filters.delete(filter)
      filterObj.classList.remove('btn-primary')
      filterObj.classList.add('btn-outline-secondary')
    } else {
      filters.add(filter)
      filterObj.classList.remove('btn-outline-secondary')
      filterObj.classList.add('btn-primary')
    }

    generateProfiles(filteredMembers())
  }

  rizuFilter.onclick = () => {
    filterIn(rizuFilter, 'rizu')
  }

  moondanceFilter.onclick = () => {
    filterIn(moondanceFilter, 'moondance')
  }

  founder.onclick = () => {
    filterIn(founder, 'founder')
  }

  translator.onclick = () => {
    filterIn(translator, 'translator')
  }

  noteskin.onclick = () => {
    filterIn(noteskin, 'noteskin')
  }

  judgment.onclick = () => {
    filterIn(judgment, 'judgment')
  }

  tool.onclick = () => {
    filterIn(tool, 'tool')
  }
}
