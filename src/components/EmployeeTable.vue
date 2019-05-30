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
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          :key="employee.id"
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
              v-model="employee.email"
            >
          </td>
          <td v-else>{{employee.email}}</td>
          <td v-if="editing === employee.id">
            <button @click="editEmployee(employee)">Save</button>
            <button
              class="muted-button"
              @click="cancelEdit(employee)"
            >Cancel</button>
          </td>
          <td v-else>
            <button @click="editMode(employee)">Edit</button>
            <button @click="$emit('delete:employee', employee.id)">Delete</button>
          </td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'employee-table',
  props: {
    employees: Array,
  },
  data() {
    return {
      editing: null,
    }
  },
  methods: {
    editMode(employee) {
      this.cachedEmployee = Object.assign({}, employee)
      this.editing = employee.id
    },

    cancelEdit(employee) {
      Object.assign(employee, this.cachedEmployee)
      this.editing = null;
    },

    editEmployee(employee) {
      if (employee.name === '' || employee.email === '') return
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
