<template>
  <div id="battle">
    <h1>Players</h1>
    <employee-form v-on:add:employee="addEmployee" />
    <employee-table
      v-bind:employees="employees"
      v-on:delete:employee="deleteEmployee"
      v-on:edit:employee="editEmployee"
    />
    <router-link to="/playerShow">Battle</router-link>
  </div>
</template>

<script>
import EmployeeTable from "../components/EmployeeTable";
import EmployeeForm from "../components/EmployeeForm";
import { mapState } from "vuex";

export default {
  name: "Battle",
  components: {
    EmployeeTable,
    EmployeeForm,
  },
  data() {
    return {
      employees: [],
    };
  },
  computed: mapState({
    getData: function(state) {
      let localData = JSON.parse(window.localStorage.getItem("employees"));
      if (state.employees.length == 0 && localData) {
        this.$store.commit("init", localData); //同步操作
      }
      return state.employees;
    },
  }),
  mounted() {
    this.employees = this.getData;
  },
  methods: {
    addEmployee(employee) {
      const lastId =
        this.employees.length > 0
          ? this.employees[this.employees.length - 1].id
          : 0;
      const id = lastId + 1;
      const newEmployee = { ...employee, id };
      this.employees = [...this.employees, newEmployee];
      fetch(`http://localhost:8083/employees/${id}`, {
        method: "PUT",
        // Headers : new  Headers({
        //   'Access-Control-Allow-Origin':'*',
        //   "Content-Type":'text/plain'
        // }),
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          firstName: employee.name,
          lastName: "",
          name: employee.name,
          role: employee.role,
        }),
      })
        .then((res) => res.text())
        .then(console.log);

      this.$store.commit("init", this.employees);
    },
    deleteEmployee(id) {
      this.employees = this.employees.filter((employee) => employee.id != id);
      fetch(`http://localhost:8083/employees/delete/${id}`, {
        method: "DELETE",
        // Headers : new  Headers({
        //   'Access-Control-Allow-Origin':'*',
        //   "Content-Type":'text/plain'
        // }),
        headers: {
          "content-Type": "application/json",
        },
      })
        .then((res) => res.text())
        .then(console.log);

      this.$store.commit("init", this.employees);
    },
    editEmployee(id, updateEmployee) {
      this.employees = this.employees.map((employee) =>
        employee.id == id ? updateEmployee : employee
      );

      fetch(`http://localhost:8083/employees/${id}`, {
        method: "PUT",
        // Headers : new  Headers({
        //   'Access-Control-Allow-Origin':'*',
        //   "Content-Type":'text/plain'
        // }),
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          firstName: updateEmployee.name,
          lastName: "",
          name: updateEmployee.name,
          role: updateEmployee.role,
        }),
      })
        .then((res) => res.text())
        .then(console.log);

      this.$store.commit("init", this.employees);
    },
  },
};
</script>

<style scoped></style>
