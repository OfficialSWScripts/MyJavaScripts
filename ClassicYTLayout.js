// create the enable button
const enableButton = document.createElement('button');
enableButton.innerText = 'Enable Classic Layout';
enableButton.style.position = 'fixed';
enableButton.style.bottom = '20px';
enableButton.style.left = '50%';
enableButton.style.transform = 'translateX(-50%)';
enableButton.style.padding = '10px 20px';
enableButton.style.background = '#f00';
enableButton.style.color = '#fff';
enableButton.style.border = 'none';
enableButton.style.borderRadius = '5px';
enableButton.style.opacity = 0;
enableButton.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out';

// add the enable button to the page
document.body.appendChild(enableButton);

// create the restore button
const restoreButton = document.createElement('button');
restoreButton.innerText = 'Restore Default Layout';
restoreButton.style.position = 'fixed';
restoreButton.style.bottom = '20px';
restoreButton.style.right = '20px';
restoreButton.style.padding = '10px 20px';
restoreButton.style.background = '#000';
restoreButton.style.color = '#fff';
restoreButton.style.border = 'none';
restoreButton.style.borderRadius = '5px';
restoreButton.style.opacity = 0;
restoreButton.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out';

// add the restore button to the page
document.body.appendChild(restoreButton);

// add a click event listener to the enable button
enableButton.addEventListener('click', () => {
  // enable classic layout
  const disablePolymer = () => {
    document.cookie = "PREF=f6=8";
    location.reload();
  };
  disablePolymer();

  // create the toast notification
  const toast = document.createElement('div');
  toast.innerText = 'Classic Layout enabled!';
  toast.style.position = 'fixed';
  toast.style.bottom = '20px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.padding = '10px';
  toast.style.background = '#000';
  toast.style.color = '#fff';
  toast.style.opacity = 0;
  toast.style.transition = 'opacity 0.3s ease-in-out';

  // add the toast to the page
  document.body.appendChild(toast);

  // show the toast
  setTimeout(() => {
    toast.style.opacity = 1;
  }, 100);

  // hide the toast after 3 seconds
  setTimeout(() => {
    toast.style.opacity = 0;
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
});

// add a click event listener to the restore button
restoreButton.addEventListener('click', () => {
  // restore default layout
  const enablePolymer = () => {
    document.cookie = "PREF=";
    location.reload();
  };
  enablePolymer();

  // create the toast notification
  const toast = document.createElement('div');
  toast.innerText = 'Default Layout restored!';
  toast.style.position = 'fixed';
  toast.style.bottom = '20px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.padding = '10px';
  toast.style.background = '#000';
  toast.style.color = '#fff';
  toast.style.opacity = 0;
  toast.style.transition = 'opacity 0.3s ease-in-out';

  // add the toast to the page
  document.body.appendChild(toast);

  // show the toast
  setTimeout(() => {
