$(() => {
    console.log('called')
let repos = [
    {
        name: "OutFox-Translations",
        description: "Repository for translation files for OutFox.",
        contributors: ['moruzerinho6', 'hanubeki', 'JustMoneko']
    },
    {
        name: "Simply-Love-OutFox",
        description: "a fork of Simply Love focused on additional tweaks for compatibility and integrations with StepMania OutFox 5.3",
        contributors: ['JoseVarelaP']
    },
    {
        name: "sm5-legacy",
        description: "The legacy theme from StepMania 5.0.x with slight performance tweaks for OutFox.",
        contributors: ['MrThatKid', 'JoseVarelaP']
    },
    {
        name: "SoundWaves-Colors",
        description: "Community made color schemes for SoundWaves",
        contributors: ['moruzerinho6', 'Rosho128', 'AppleArcade120']
    },
    {
        name: "Translation-Toolkit",
        description: "A small application to automate some tasks for translators",
        contributors: ['Ksempac', 'moruzerinho6']
    },
    {
        name: "MoondanceWeb",
        description: "Language files for the Project Moondance website",
        contributors: ['moruzerinho6']
    },
    {
        name: "smtheme-soundwaves-community",
        description: "Community version of Soundwaves, the StepMania 5.3 default theme.",
        contributors: ['ListenerJubatus', 'moruzerinho6', 'Rosho128']
    },
    {
        name: "Outfox-fr",
        description: "French (fr) Translation for StepMania 5.3 \"Outfox\"",
        contributors: ['Ksempac', 'Kaede573']
    },
    {
        name: "OutFox-he",
        description: "Hebrew (he) Translation for StepMania 5.3 \"Outfox\"",
        contributors: ['snil4']
    },
    {
        name: "OutFox-DE",
        description: "German (de) Translation for StepMania 5.3 \"Outfox\"",
        contributors: ['DanielRotwind','moruzerinho6']
    },
    {
        name: "OutFox-es",
        description: "Español (es) Translation for StepMania 5.3 \"Outfox\"",
        contributors: ['JoseVarelaP', 'moruzerinho6']
    },
    {
        name: "OutfoxPTBR",
        description: "Brazilian Portuguese (PT-BR) Translation for StepMania 5.3 \"Outfox\"",
        contributors: ['moruzerinho6', 'SheepyChris', 'SHRMP0']
    },
    {
        name: "OutFox-ja",
        description: "Japanese (ja) Translation for StepMania 5.3 \"Outfox\"",
        contributors: ['hanubeki']
    },
    {
        name: "OutFox-PL",
        description: "Polish (pl) Translation for StepMania 5.3 \"Outfox\"",
        contributors: ['JustMoneko']
    },
    {
        name: "OutFox-hu",
        description: "Hungarian (hu)  Translation for StepMania 5.3 \"Outfox\"",
        contributors: ['KaZo75', 'moruzerinho6']
    },
    {
        name: "OutFox-IT",
        description: "Italian (IT)  Translation for StepMania 5.3 \"Outfox\"",
        contributors: ['Gabrimax98']
    },
    {
        name: "XML-Convert",
        description: "tool to help convert OpenITG/NotITG song-specific xml files into lua files",
        contributors: ['XeroOl']
    },
    {
        name: "Tiny-Webini",
        description: "Translate Project Moondance like StepMania",
        contributors: ['moruzerinho6']
    },
    {
        name: "MoondanceWeb-PT",
        description: "Portuguese translation of Project Moondance website.",
        contributors: ['moruzerinho6', 'SheepyChris', 'SHRMP0']
    },
    {
        name: "JudgeFonts-by-MattMayuga",
        description: "No description.",
        contributors: ['MattMayuga']
    },
    {
        name: "Aqui-Alpha-Noteskins",
        description: "Global Noteskins for StepMania 5.3",
        contributors: ['akym-tsubby', 'moruzerinho6']
    },
    {
        name: "R.O.B.-Bot-Custom",
        description: "No description.",
        contributors: ['MechMaelstrom', 'moruzerinho6']
    },
    {
        name: "Lambda-PTBR",
        description: "Brazilian Portuguese (PT-BR) Translation for StepMania 5.3 \"Lambda\"",
        contributors: ['moruzerinho6']
    },
    {
        name: "ArGame-Customizations",
        description: "Customizations created by AppleArcade120 are stored here.",
        contributors: ['AppleArcade120']
    },
    {
        name: "TF_Wheels",
        description: "TinyFoxesWheels",
        contributors: ['Jousway']
    },
    /*{
        name: "Tiny-Manager",
        description: "Quick look at Tiny-Foxes projects.",
        contributors: ['moruzerinho6', 'JoseVarelaP', 'ListenerJubatus']
    },*/
    {
        name: "Lambda-PL",
        description: "Polish (PL) Translation for StepMania 5.3 \"Lambda\" theme",
        contributors: ['JustMoneko']
    },
    {
        name: "MoondanceWeb-PL",
        description: "No description.",
        contributors: ['JustMoneko']
    },
    {
        name: "Simply-Love-PTBR",
        description: "Brazilian Portuguese (PT-BR) Translation for Simply Love",
        contributors: ['moruzerinho6']
    },
    {
        name: "CircoCero-PTBR",
        description: "Brazilian Portuguese (PT-BR) Translation for StepMania 5.3 \"CircoCero\"",
        contributors: ['moruzerinho6']
    },
    {
        name: "Judge",
        description: "Multilingual judgments by Haley",
        contributors: ['JapanYoshi']
    }
]

let contentDiv = document.getElementById('bye')

for (let i = 0; i < repos.length; i++) {
    const currentRepo = repos[i]
    const repoDiv = document.createElement('div')
    repoDiv.classList.add('col-md-6')

    const nameAnchor = document.createElement('a')
    nameAnchor.href = `https://github.com/Tiny-Foxes/${currentRepo.name}`
    nameAnchor.target = '_blank'
    nameAnchor.setAttribute('style', 'color: black')
    const repoName = document.createElement('p')
    repoName.innerHTML = currentRepo.name
    repoName.setAttribute('style', 'font-size: 32px; font-weight:bold')
    nameAnchor.appendChild(repoName)

    const repoDescription = document.createElement('p')

    /*if ((i % 1) === 0) {

    }*/
    repoDescription.setAttribute('style', 'height: 48px')
    repoDescription.innerHTML = currentRepo.description

    const items = document.createElement('div')
    items.setAttribute('style', 'display: flex; align-items: flex-end; justify-content: flex-end')

    const contributors = document.createElement('p')
    contributors.innerHTML = 'Contributors'
    items.appendChild(contributors)

    for (let i = 0; i < 3; i++) {
        let currentBall = document.createElement('div')

        if (currentRepo.contributors.length >= i + 1) {
            currentBall = document.createElement('img')
            currentBall.src = `members/${currentRepo.contributors[i]}.png`
            currentBall.setAttribute('style', 'width: 50px; height: 50px; border-radius: 100%; margin-left: 8px')
            items.appendChild(currentBall)
        }
    }
    
    /*
    const checkRepository = document.createElement('p')
    const checkRepoAnchor = document.createElement('a')
    checkRepoAnchor.href = `https://github.com/Tiny-Foxes/${currentRepo.name}`
    checkRepoAnchor.target = '_blank'
    checkRepoAnchor.classList.add('btn', 'btn-success')
    checkRepoAnchor.innerHTML = 'Check Repository &raquo;'
    checkRepository.appendChild(checkRepoAnchor)
    */

    repoDiv.appendChild(nameAnchor)
    repoDiv.appendChild(repoDescription)
    repoDiv.appendChild(items)
    // repoDiv.appendChild(checkRepository)

    contentDiv.appendChild(repoDiv)
} 
})
