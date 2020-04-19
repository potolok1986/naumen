import state from "../state/state.vue";
import {mapMutations, mapState} from "vuex";

const tracker = {
	components: {
		state,
	},
	computed: {
		...mapState({
			statusList: state => state.trackerStore.statusList,
			stage: state => state.trackerStore.stage,
		})
	},
	methods: {
		...mapMutations({
			setStage: "trackerStore/setStage"
		})
	}
};
export default tracker