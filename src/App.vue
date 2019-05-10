<template>
  <div
    id="app"
    class="small-container"
  >
    <h1>Pied Piper Employees</h1>

    <employee-form @add:employee="addEmployee" />
    <employee-table
      :employees="employees"
      @remove:employee="removeEmployee"
      @edit:employee="editEmployee"
    />
  </div>
</template>

<script>
import EmployeeTable from '@/components/EmployeeTable.vue'
import EmployeeForm from '@/components/EmployeeForm.vue'

export default {
  name: "app",
  components: {
    EmployeeTable,
    EmployeeForm,
  },
  data() {
    return {
      employees: [
        {
          id: 1,
          name: 'Richard Henricks',
          position: 'CEO',
        },
        {
          id: 2,
          name: 'Erlich Bachmann',
          position: 'Entrepreneur',
        },
        {
          id: 3,
          name: 'Bertram Gilfoyle',
          position: 'DevOps',
        },
        {
          id: 4,
          name: 'Dinesh Chugtai',
          position: 'Programmer',
        },
      ]
    }
  },
  methods: {
    addEmployee(employee) {
      const lastId = this.employees.length > 0 ? this.employees[this.employees.length - 1].id : 0
      const id = lastId + 1
      const newEmployee = { ...employee, id }

      this.employees = [...this.employees, newEmployee]
    },

    editEmployee(id, updatedEmployee) {
      this.employees = this.employees.map(employee => employee.id === id ? updatedEmployee : employee)
    },

    removeEmployee(id) {
      this.employees = this.employees.filter(employee => employee.id !== id)
    },
  },
}
</script>

<style>
button {
  background: #009435;
  border: 1px solid #009435;
}

button:hover,
button:active,
button:focus {
  background: #32a95d;
  border: 1px solid #32a95d;
}

.small-container {
  max-width: 680px;
}
</style>
