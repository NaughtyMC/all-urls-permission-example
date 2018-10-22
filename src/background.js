chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.instruction === 'requestPermission') {
		console.log('Requesting <all_urls> permission');
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
