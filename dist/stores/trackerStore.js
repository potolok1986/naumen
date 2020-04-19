import STATUS_LIST from "@/constants/statusList";

const state = {
	statusList: STATUS_LIST,
	stage: 1,
	selectedId: 1,
};

const mutations = {
	selectStateById(state, value) {
		state.selectedId = value;
		state.statusList.forEach(status => {
			const {id} = status;
			if (id < +value) {
				status.selected = false;
				status.checked = true
			} else if (id === +value) {
				status.selected = true;
				status.checked = false;
			} else {
				status.selected = false;
				status.checked = false;
			}
		})
	},
	setStage(state, value) {
		state.stage = value;
	}

};


const trackerStore = {
	namespaced: true,
	state,
	mutations,
};

export default trackerStore