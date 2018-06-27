<template>
  <div>
    <ul>
      <li
        v-for="(people, i) in peoples"
        :key="i">
        {{ `name: ${people.name} -- describe:${people.describe} -- age:${people.age}`}}
        <button
          @click="editPeople(people)">
          编辑
        </button>
      </li>
    </ul>
    <button
      @click="newPeople">
      新增
    </button>
  </div>
</template>

<script>
export default {
  name: 'People',
  computed: {
    peoples() {
      return this.$store.state.people.peoples
    }
  },
  methods: {
    newPeople() {
      this.$store.commit('NEW_PEOPLE', {
        name: 's',
        describe: 's',
        age: 15
      })
    },
    editPeople(people) {
      this.$store.commit('EDIT_PEOPLE', {
        people,
        updates: {
          name: 'ss',
          describe: 'ss',
          age: 18
        }
      })
    }
  }
}
</script>
