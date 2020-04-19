import Vue from "vue"
import app from "./app/app.vue"
import store from './stores'

new Vue({
	el: "#myApp",
	store,
	render: h => h(app)
});