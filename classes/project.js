
export class ProjectPublisher {
    constructor () {
      this.data = null
    }
  
    async init() {
      // hacky but gets the job done.
      const jsonPath = window.location.hostname === 'tiny-foxes.github.io' ? '../Tiny-Web/storage/repos.json' : '../storage/repos.json'
      const data = await $.getJSON(jsonPath)
      this.data = data.data

      return data
    }

    projectWithMember(member) {
        return this.data.filter(project => project.contributors.map(name => name.toLowerCase()).includes(member.toLowerCase()))
    }

    projectWithTopic(topic) {
        return this.data.filter(project => project.topics.includes(topic))
    }

    projectGeneralSearch(search) {
        return this.data.filter(project => {
            return project.description.toLowerCase().split(' ').some(
                argument => {
                    return argument.includes(search.toLowerCase())
                }
            )
            
            || 
            
            project.name.toLowerCase().split('-').some( 
                argument => {
                    return argument.includes(search.toLowerCase())
                }
            )
        })
    }

    projectNameSearch(search) {
        // if the user types the exact name of the repository then we should show.
        const exactMatch = this.data.filter(project =>
            project.name === search
        )

        if (exactMatch.length >= 1) return exactMatch

        // in case where search is 'sm5', this should return atleast 'sm5-legacy' repository
        const includeMatch = this.data.filter(project => {
            return project.name.toLowerCase().split('-').includes(search.toLowerCase()) || project.name.toLowerCase().includes(search.toLowerCase())
        })

        if (includeMatch.length >= 1) return includeMatch

        // In case where user types
        const letterMatch = this.data.filter(project => {
            return project.name.toLowerCase().split('').some(letter => {
                return search.split('').includes(letter)
            })
        })

        return letterMatch.length >= 1 ? letterMatch : []
    }
  }