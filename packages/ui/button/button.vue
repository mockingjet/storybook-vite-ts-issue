<script setup lang="ts">
	import { computed } from 'vue';
	import { ButtonSize } from './tokens';

	const props = withDefaults(
		defineProps<{
			size: `${ButtonSize}`;
			label: string;
		}>(),
		{
			size: ButtonSize.sm,
		},
	);

	const sizeClasses = computed(() => {
		if (props.size === ButtonSize.sm) return 'w:100 h:32';
		else if (props.size === ButtonSize.md) return 'w:120 h:36';
		else if (props.size === ButtonSize.lg) return 'w:140 h:40';
		return 'w:100 h:32';
	});
</script>
<template>
	<button :class="[sizeClasses]">{{ label }}</button>
</template>
