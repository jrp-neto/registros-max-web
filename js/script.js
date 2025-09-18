document.addEventListener('DOMContentLoaded', () => {
  // Toggle tema
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;
  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    toggleBtn.textContent = body.classList.contains('dark') ? "🌙" : "☀️";
  });

  // Floating label + placeholder handling
  const groups = document.querySelectorAll('.input-group');
  groups.forEach(group => {
    const input = group.querySelector('input');
    if (!input) return;

    // marca inicialmente se já tiver valor (útil para auto-fill)
    if (input.value.trim() !== '') group.classList.add('filled');

    // guarda placeholder original para restaurar no blur
    const originalPlaceholder = input.getAttribute('placeholder') || '';

    input.addEventListener('focus', () => {
      group.classList.add('focused');
      // esvazia placeholder quando clica (pedido seu)
      input.setAttribute('placeholder', '');
    });

    input.addEventListener('blur', () => {
      group.classList.remove('focused');
      // se tiver valor, mantém 'filled', senão remove
      if (input.value.trim() !== '') group.classList.add('filled');
      else {
        group.classList.remove('filled');
        // restaura placeholder original se estiver vazio
        input.setAttribute('placeholder', originalPlaceholder);
      }
    });

    // ao digitar, já considera como 'filled' se tiver texto
    input.addEventListener('input', () => {
      if (input.value.trim() !== '') group.classList.add('filled');
      else group.classList.remove('filled');
    });
  });
});
    