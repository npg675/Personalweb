// Floating Contact Us Modal Logic & Submission

document.addEventListener('DOMContentLoaded', function() {
  // Open modal on trigger
  document.querySelectorAll('.open-contact-modal').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('contactModalOverlay').style.display = 'block';
      document.body.classList.add('modal-open');
    });
  });
  // Close modal on close button or overlay click
  document.getElementById('contactModalClose').addEventListener('click', function() {
    document.getElementById('contactModalOverlay').style.display = 'none';
    document.body.classList.remove('modal-open');
  });
  document.getElementById('contactModalOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
      document.getElementById('contactModalOverlay').style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  });
  // Prevent overlay close when clicking inside modal
  document.getElementById('contactModal').addEventListener('click', function(e) {
    e.stopPropagation();
  });


});
