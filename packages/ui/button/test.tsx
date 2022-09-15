import { defineComponent } from 'vue';
import { TsxButton, SfcButton } from '.';

export const ButtonExample = defineComponent({
	setup() {
		return () => (
			<>
				<TsxButton label="TEST" />

				<SfcButton label="TEST" />
			</>
		);
	},
});
