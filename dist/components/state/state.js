import {mapMutations} from "vuex";

const state = {
	props: ["data"],
	computed: {
		classObject() {
			const {type, checked} = this.data;
			return {
				primary: type === "primary",
				warning: type === "warning",
				checked,
			}
		}
	},
	methods: {
		...mapMutations({
			selectStateById: "trackerStore/selectStateById"
		}),
	}

};

export default state

