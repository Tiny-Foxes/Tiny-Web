const members = [
    'moruzerinho6', 'SheepyChris', 'JoseVarelaP', 'SHRMP0', 'AppleArcade120',
    'ArcticFqx', 'TeamRizu', 'akym-tsubby', 'concubidated', 'DanielRotwind',
    'Gabrimax98', 'hanubeki', 'JapanYoshi', 'Jousway', 'JustMoneko',
    'Kaede573', 'KannushiLink', 'Ksempac', 'ListenerJubatus', 'MattMayuga',
    'MechMaelstrom', 'MrThatKid', 'nitroburr', 'Rosho128', 'Scraticus',
    'snil4', 'vithov1120', 'XeroOl', 'jose1771'
]
const membersWithDescription = {
    'moruzerinho6': 'No more than one, not less than one.',
    'JoseVarelaP': 'A programmer that normally does themes for NotITG, OpenITG and SM5. Currently a developer for Project MoonDance.',
    'TeamRizu': 'The creators of StepMania OutFox',
    'Rosho128': 'Hi, My name is Bakhtiar "Rosho" Yasmeen, and I want to help you.',
    'Scraticus': 'Old Bastard, DJ, and musically minded programmer and teacher.',
}
const membersElem = document.getElementById('bye')

for (let i = 0; i < members.length; i++) {
    const current = document.createElement('div')
    current.classList.add('col-md-3')

    const profileAnchor = document.createElement('a')
    profileAnchor.target = "_blank"
    profileAnchor.href = `https://github.com/${members[i]}`

    const avatar = document.createElement('img')
    avatar.classList.add('rounded-circle')
    avatar.setAttribute('style', 'max-width: 380px')
    avatar.setAttribute('width', 150)
    avatar.setAttribute('height', 150)
    avatar.src = `members/${members[i]}.png`

    const name = document.createElement('h2')
    const boldName = document.createElement('strong')
    boldName.innerHTML = members[i]
    name.appendChild(boldName)

    profileAnchor.appendChild(avatar)
    profileAnchor.appendChild(name)
    current.appendChild(profileAnchor)
    if (membersWithDescription[members[i]]) {
        const description = document.createElement('p')
        description.innerHTML = membersWithDescription[members[i]]
        current.appendChild(description)
    }
    membersElem.appendChild(current)
}