<template>
  <div id="employee-table">
    <p
      v-if="employees.length < 1"
      class="empty-table"
    >
      No employees
    </p>
    <table v-else>
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-bind:key="employee.id"
          v-for="employee in employees"
        >
          <td v-if="editing === employee.id">
            <input
              type="text"
              v-model="employee.name"
            >
          </td>
          <td v-else>{{employee.name}}</td>
          <td v-if="editing === employee.id">
            <input
              type="text"
              v-model="employee.position"
            >
          </td>
          <td v-else>{{employee.position}}</td>
          <td v-if="editing === employee.id">
            <button @click="editEmployee(employee)">Save</button>
            <button
              class="muted-button"
              @click="editing = null"
            >Cancel</button>
          </td>
          <td v-else>
            <button @click="editMode(employee.id)">Edit</button>
            <button @click="$emit('remove:employee', employee.id)">Delete</button>
          </td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'employee-table',
  props: [
    'employees'
  ],
  data() {
    return {
      editing: null,
    }
  },
  methods: {
    editMode(id) {
      this.editing = id
    },

    editEmployee(employee) {
      if (employee.name === '' || employee.position === '') return
      this.$emit('edit:employee', employee.id, employee)
      this.editing = null
    }
  }
}
</script>

<style scoped>
button {
  margin: 0 0.5rem 0 0;
}

input {
  margin: 0;
}

.empty-table {
  text-align: center;
}
</style>
