const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const newPrompt = window.deferredPrompt;
    
    if (!newPrompt) {
        console.log('ALREADY INSTALLED');
        return;
    }

    newPrompt.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true)
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {window.deferredPrompt = null});
