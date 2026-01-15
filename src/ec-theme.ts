import githubDark from '@shikijs/themes/github-dark';
import githubLight from '@shikijs/themes/github-light';
import type { ThemeRegistration } from 'shiki';

const spectreDark: ThemeRegistration = {
	...githubDark,
	name: 'Spectre Dark',
	type: 'dark',
	colors: {
		...githubDark.colors,
		'activityBar.background': '#1e1e1e',
		'editor.background': '#1e1e1e',
		'statusBar.background': '#1e1e1e',
		'statusBarItem.remoteBackground': '#1e1e1e',
		'tab.activeBackground': '#1e1e1e',
		'titleBar.activeBackground': '#1e1e1e',
		'editorGroupHeader.tabsBackground': '#1e1e1e',
		'panel.background': '#1e1e1e',
		'editor.lineHighlightBackground': '#2a2a2a',
		'sideBar.background': '#1e1e1e',
		'sideBar.border': '#333333',
	},
};

const spectreLight: ThemeRegistration = {
	...githubLight,
	name: 'Spectre Light',
	type: 'light',
	colors: {
		...githubLight.colors,
		'editor.background': '#f8f9fa',
	},
};

export { spectreDark, spectreLight };
