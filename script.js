// JavaScript to show/hide the loading effect
document.addEventListener('beforeunload', function() {
	document.getElementById('loading-effect').style.opacity = 1;
  });
  
  document.addEventListener('load', function() {
	document.getElementById('loading-effect').style.opacity = 0;
  });
  