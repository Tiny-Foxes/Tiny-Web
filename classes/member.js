/**
 * @typedef people
 * @property {string[]} members
 * @property {Object.<string, string>} membersWithDescription
 * @property {Object.<string, Object.<string, boolean>>} specialStatus
 */
export class MemberPublisher {
  constructor () {
    /**
     * @type {people}
     */
    this.people = null
    /**
     * @type {string[]}
     */
    this.members = null
    /**
     * @type {Object.<string, string>}
     */
    this.membersWithDescription = null
    /**
     * @type {Object.<string, Object.<string, boolean>>}
     */
    this.specialStatus = null
  }

  /**
   * USE THIS BEFORE ANYTHING. Requests data from people.json and implements it on class properties.
   * @returns {Promise<people>}
   */
  async init() {
    // hacky but gets the job done.
    const jsonPath = window.location.hostname === 'tiny-foxes.github.io' ? '../Tiny-Web/storage/people.json' : '../storage/people.json'
    const data = await $.getJSON(jsonPath)
    this.people = data
    this.members = this.people.members
    this.specialStatus = this.people.specialStatus
    this.membersWithDescription = this.people.membersWithDescription
    return data
  }

  /**
   * Gets description from member
   * @param {string} member 
   * @returns {string}
   */
  memberDescription(member) {
    return this.membersWithDescription[member]
  }

  /**
   * Gets member special status.
   * @param {string} member 
   * @returns {Object.<string, boolean>}
   */
  memberStatus(member) {
    return this.specialStatus[member]
  }

  /**
   * Gets an array of object of members with atleast given status.
   * @param {string} status 
   * @returns {Object.<string, Object.<string, boolean>>[]}
   */
  membersWithStatusObj(status) {
    return this.specialStatus.filter((m) => m[status])
  }

  /**
   * Gets an array of member names with given status
   * @param {string} status 
   * @returns {string[]}
   */
  membersWithStatus(status) {
    const membersObj = this.specialStatus.filter((m) => m[status])

    if (!membersObj) return []

    return Object.keys(membersObj)
  }
}