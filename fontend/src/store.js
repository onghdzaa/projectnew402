import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    staff: [],
    bookinghistory: [],
    listcustomer: [],
    calender: [],
    listprice: [],
  },
  mutations: {
    set_staff: (state, staff) => (state.staff = staff),
    set_bookinghistory: (state, bookinghistory) =>
      (state.bookinghistory = bookinghistory),
    set_customer: (state, listcustomer) => (state.listcustomer = listcustomer),
    set_calender: (state, calender) => (state.calender = calender),
    set_listprice: (state, listprice) => (state.listprice = listprice),
  },
  actions: {
    set_staff: ({ commit }) =>
      axios
        .get("http://localhost:5000/staff")
        .then((res) => commit("set_staff", res.data)),
    set_bookinghistory: ({ commit }) =>
      axios
        .get("http://localhost:5000/bookinghistory/api")
        .then((res) => commit("set_bookinghistory", res.data)),
    set_customer: ({ commit }) =>
      axios
        .get("http://localhost:5000/listcustomer")
        .then((res) => commit("set_customer", res.data)),
    set_calender: ({ commit }) =>
      axios
        .get("http://localhost:5000/calender")
        .then((res) => commit("set_calender", res.data)),
    set_listprice: ({ commit }) =>
      axios
        .get("http://localhost:5000/listprice")
        .then((res) => commit("set_listprice", res.data)),
  },
});
