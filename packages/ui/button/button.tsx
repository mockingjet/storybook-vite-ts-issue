import { computed, defineComponent } from 'vue';
import { ButtonSize } from './tokens';

export const Button = defineComponent({
	props: {
		size: {
			type: String as () => `${ButtonSize}`,
			default: ButtonSize.sm,
		},
		label: String,
	},
	setup(props) {
		const sizeClasses = computed(() => {
			if (props.size === ButtonSize.sm) return 'w:100 h:32';
			else if (props.size === ButtonSize.md) return 'w:120 h:36';
			else if (props.size === ButtonSize.lg) return 'w:140 h:40';
			return 'w:100 h:32';
		});

		return () => <button class={sizeClasses.value}>{props.label}</button>;
	},
});
