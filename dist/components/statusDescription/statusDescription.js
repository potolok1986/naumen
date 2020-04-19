import {mapState} from "vuex";
import documentsError from "@/components/documentsError/documentsError.vue";
import successQuote from "@/components/successQuote/successQuote.vue";

const statusDescription = {
	components: {
		documentsError,
		successQuote,
	},
	computed: {
		...mapState({
			selectedId: state => state.trackerStore.selectedId,
		}),
		templateStrById() {
			let template = "";
			switch (this.selectedId) {
				case 6:
					template = "successQuote";
					break;
				case 9:
					template = "documentsError";
					break;
			}
			return template
		}
	}
};

export default statusDescription;