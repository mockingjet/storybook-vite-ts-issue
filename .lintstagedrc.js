module.exports = {
	'*.{html,json,md,yaml}': ['prettier --write'],
	'*.{js,jsx}': ['prettier --write', 'eslint --fix'],
	'*.{ts,tsx,vue}': ['prettier --write', 'eslint --fix', () => 'vue-tsc --noEmit --skipLibCheck'],
};
