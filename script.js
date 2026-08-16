  // typewriter intro
  function typeInto(el, text, speed){
    return new Promise((resolve) => {
      let i = 0;
      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      el.appendChild(cursor);
      const tick = () => {
        if(i < text.length){
          cursor.insertAdjacentText('beforebegin', text[i]);
          i++;
          setTimeout(tick, speed);
        } else {
          resolve(cursor);
        }
      };
      tick();
    });
  }

  async function runIntro(){
    const l1 = document.getElementById('typeLine1');
    const l2 = document.getElementById('typeLine2');
    const c1 = await typeInto(l1, 'Preparando uma homenagem\u2026', 45);
    await new Promise(r => setTimeout(r, 350));
    c1.remove();
    const c2 = await typeInto(l2, 'Para o meu pai, com todo o meu amor.', 42);
    await new Promise(r => setTimeout(r, 900));
    document.getElementById('intro').classList.add('hide');
  }

  window.addEventListener('load', () => {
    setTimeout(runIntro, 1150);
  });

  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
