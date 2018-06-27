import People from '@/class/People'

export const NEW_PEOPLE = (state, msg) => {
  const people = new People(msg)
  state.peoples.push(people)
}

export const EDIT_PEOPLE = (state, { people, updates }) => {
  people.updateName(updates.name)
    .updateDescribe(updates.describe)
    .updateAge(updates.age)
}
