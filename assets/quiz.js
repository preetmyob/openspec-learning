/* Quiz Widget for Lessons */

function initQuizzes() {
  document.querySelectorAll('.quiz').forEach(quiz => {
    const options = quiz.querySelectorAll('.quiz-options button');
    const feedback = quiz.querySelector('.quiz-feedback');
    const correctAnswer = quiz.dataset.correct;
    
    options.forEach(option => {
      option.addEventListener('click', () => {
        // Disable all options after selection
        options.forEach(opt => opt.disabled = true);
        
        const isCorrect = option.dataset.answer === correctAnswer;
        
        if (isCorrect) {
          option.classList.add('correct');
          feedback.classList.add('correct');
          feedback.textContent = quiz.dataset.correctFeedback || '✓ Correct!';
        } else {
          option.classList.add('incorrect');
          feedback.classList.add('incorrect');
          feedback.textContent = quiz.dataset.incorrectFeedback || '✗ Not quite. ' + (quiz.dataset.explanation || '');
          
          // Highlight the correct answer
          options.forEach(opt => {
            if (opt.dataset.answer === correctAnswer) {
              opt.classList.add('correct');
            }
          });
        }
        
        feedback.classList.add('show');
      });
    });
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initQuizzes);
} else {
  initQuizzes();
}
