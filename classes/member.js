
export class MemberPublisher {
  constructor () {
    this.people = null
    this.members = null
    this.membersWithDescription = null
    this.specialStatus = null
  }

  async init() {
    const data = await $.getJSON('../storage/people.json')
    this.people = data
    this.members = this.people.members
    this.specialStatus = this.people.specialStatus
    this.membersWithDescription = this.people.membersWithDescription
    return data
  }

  memberDescription(member) {
    return this.membersWithDescription[member]
  }

  memberStatus(member) {
    return this.specialStatus[member]
  }

  membersWithStatusObj(status) {
    return this.specialStatus.filter((m) => m[status])
  }

  membersWithStatus(status) {
    const membersObj = this.specialStatus.filter((m) => m[status])

    if (!membersObj) return []

    return Object.keys(membersObj)
  }
}