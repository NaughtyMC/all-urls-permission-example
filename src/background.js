chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.instruction === 'requestPermissions') {
		console.log('Requesting <all_urls> permissions');
		chrome.permissions.request(
			{
				origins: ['<all_urls>'],
			},
			permissionsGranted => sendResponse({ success: permissionsGranted }),
		);
		return true;
	}

	sendResponse({});
	return false;
});
