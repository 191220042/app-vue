<template>
  <div id="employee-table">
    <table>
      <thead>
        <tr>
          <th>Player name</th>
          <th>Score</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.id">
          <td v-if="editing == employee.id">
            <input type="text" v-model="employee.name" />
          </td>
          <td v-else>{{ employee.name }}</td>
          <td v-if="editing == employee.id">
            <input type="text" v-model="employee.role" />
          </td>
          <td v-else>{{ employee.role }}</td>
          <td v-if="editing == employee.id">
            <button @click="editEmployee(employee)">Save</button>
            <button @click="cancelEdit(employee)">Cancel</button>
          </td>
          <td v-else>
            <button @click="editMode(employee)">Edit</button>
            <button @click="handleDelete(employee.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "employee-table",
  props: {
    employees: Array,
  },
  data() {
    return {
      editing: null,
    };
  },
  methods: {
    handleDelete(id) {
      this.$emit("delete:employee", id);
    },
    cancelEdit(employee) {
      Object.assign(employee, this.cacheEmployee);
      this.editing = null;
    },
    editMode(employee) {
      this.cacheEmployee = Object.assign({}, employee);
      this.editing = employee.id;
    },
    editEmployee(employee) {
      if (employee.name == "" || employee.id == "") return;
      this.$emit("edit:employee", employee.id, employee);
      this.editing = null;
    },
  },
};
</script>

<style scoped></style>
