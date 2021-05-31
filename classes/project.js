/**
 * @typedef data
 * @property {string} name
 * @property {string} description
 * @property {string[]} contributors
 * @property {string[]} topics
 */
export class ProjectPublisher {
  constructor() {
    /**
     * @type {data[] | null}
     */
    this.data = null
  }
  // value:{name:string, lang:string} - How to document objects inside array.

  /**
   * USE THIS BEFORE ANYTHING. Requests data from repos.json and implements it on the class data property.
   * @async
   * @function
   * @returns {Promise<data[]>}
   */
  async init() {
    // hacky but gets the job done.
    const jsonPath =
      window.location.hostname === 'tiny-foxes.github.io'
        ? '../Tiny-Web/storage/repos.json'
        : '../storage/repos.json'
    const data = await $.getJSON(jsonPath)
    this.data = data.data

    return data
  }

  /**
   * Returns projects which include an specific member.
   * @param {string} member
   * @returns {data[]} - An array of projects, or an empty array.
   */
  projectWithMember(member) {
    return this.data.filter((project) =>
      project.contributors
        .map((name) => name.toLowerCase())
        .includes(member.toLowerCase())
    )
  }

  /**
   * Returns projects with atleast the given topic.
   * @param {'translation' | 'theme' | 'tool', 'judgment', 'noteskin'} topic - The topic the repository needs.
   * @returns {data[]} - An array of projects, or an empty array.
   */
  projectWithTopic(topic) {
    return this.data.filter((project) => project.topics.includes(topic))
  }

  /**
   * Searches in projects name and description for the given string. The search is include based.
   * @param {string} search
   * @returns {data[]} - An array of projects, or an empty array.
   */
  projectGeneralSearch(search) {
    return this.data.filter((project) => {
      return (
        project.description
          .toLowerCase()
          .split(' ')
          .some((argument) => {
            return argument.includes(search.toLowerCase())
          }) ||
        project.name
          .toLowerCase()
          .split('-')
          .some((argument) => {
            return argument.includes(search.toLowerCase())
          })
      )
    })
  }

  /**
   * Searches in projects name. Searches for exact match, then include and letter.
   * @param {string} search
   * @returns {data[]} - An array of projects, or an empty array.
   */
  projectNameSearch(search) {
    // if the user types the exact name of the repository then we should show.
    const exactMatch = this.data.filter((project) => project.name === search)

    if (exactMatch.length >= 1) return exactMatch

    // in case where search is 'sm5', this should return atleast 'sm5-legacy' repository
    const includeMatch = this.data.filter((project) => {
      return (
        project.name.toLowerCase().split('-').includes(search.toLowerCase()) ||
        project.name.toLowerCase().includes(search.toLowerCase())
      )
    })

    if (includeMatch.length >= 1) return includeMatch

    // In case where user types
    const letterMatch = this.data.filter((project) => {
      return project.name
        .toLowerCase()
        .split('')
        .some((letter) => {
          return search.split('').includes(letter)
        })
    })

    return letterMatch.length >= 1 ? letterMatch : []
  }
}
