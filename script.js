const intro = document.querySelector('#intro');
const envelopeStage = document.querySelector('#envelopeStage');
const envelope = document.querySelector('#openLetter');
const letter = document.querySelector('#letter');

document.querySelector('#showEnvelope').addEventListener('click', () => {
  intro.classList.add('hidden');
  envelopeStage.classList.remove('hidden');
});

envelope.addEventListener('click', () => {
  if (envelope.classList.contains('open')) return;
  envelope.classList.add('open');
  setTimeout(() => {
    envelopeStage.classList.add('hidden');
    letter.classList.remove('hidden');
  }, 1250);
});

document.querySelector('#readAgain').addEventListener('click', () => {
  letter.classList.add('hidden');
  envelope.classList.remove('open');
  intro.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
