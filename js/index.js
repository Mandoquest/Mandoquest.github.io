function ZeigeMenu() {
  const box = document.getElementById('Menu');
  const flexbox = document.getElementById('Flexbox');

  flexbox.style.display = (flexbox.style.display === 'none') ? 'flex' : 'none';
  box.style.display = (box.style.display === 'block') ? 'none' : 'block';
  box.style.width = (box.stylewidth === '100vw') ? '0' : '100vw';
  box.style.height = (box.style.height === '100vh') ? '0' : '100vh';
  box.style.zIndex = (box.style.zIndex === '999') ? '0' : '999';
}