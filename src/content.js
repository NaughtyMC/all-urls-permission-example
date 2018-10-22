void createElements();
void registerClickListener();

function createElements() {
	const root = document.createElement('div');
	root.id = 'eaf-root';
	root.style.all = 'initial';
	document.documentElement.appendChild(root);
	const shadowRoot = root.attachShadow({ mode: 'open' });

	const container = document.createElement('div');
	container.id = 'eaf-container';
	container.style.visibility = 'hidden';
	const button = document.createElement('button');
	button.id = 'eaf-button';
	button.textContent = 'Ask for permission';
	container.appendChild(button);

	const styleNode = document.createElement('style');
	const cssPath = chrome.extension.getURL('src/styles.css');
	styleNode.innerHTML = `@import "${cssPath}";`;
	shadowRoot.appendChild(styleNode);

	shadowRoot.appendChild(container);
}

function registerClickListener() {
	const button = document.getElementById('eaf-root').shadowRoot.getElementById('eaf-button');
	button.addEventListener('click', function() {
		const message = { instruction: 'requestPermissions' };
		chrome.runtime.sendMessage(message, response => {
			const requestSuccessful = !chrome.runtime.lastError && response.success;
			alert(`You have ${requestSuccessful ? 'successfully' : 'unsuccessfully'} requested permissions`);
		});
	});
}
