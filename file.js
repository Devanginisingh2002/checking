document.addEventListener('DOMContentLoaded', function() {
    var faqQuestions = document.querySelectorAll('.faq-question');
  
    faqQuestions.forEach(function(question) {
      question.addEventListener('click', function() {
        // This toggles the answer display
        var answer = this.nextElementSibling;
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
  
        // This toggles the plus/minus icon
        var icon = this.querySelector('.toggle-icon');
        if (icon.classList.contains('fa-plus')) {
          // Reset all icons to 'plus' and close all other answers
          document.querySelectorAll('.faq-item .faq-answer').forEach(function(a) {
            a.style.display = 'none';
          });
          document.querySelectorAll('.faq-item .toggle-icon').forEach(function(i) {
            i.classList.remove('fa-minus');
            i.classList.add('fa-plus');
          });
          // Then toggle the clicked one to 'minus' and show the answer
          icon.classList.remove('fa-plus');
          icon.classList.add('fa-minus');
          answer.style.display = 'block';
        } else {
          icon.classList.remove('fa-minus');
          icon.classList.add('fa-plus');
        }
      });
    });
  });
  