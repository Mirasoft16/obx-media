const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
if (menu) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
document.querySelectorAll('#main-nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

document.getElementById('year').textContent = new Date().getFullYear();

function handleSubmit(event) {
  event.preventDefault();
  // Replace this address with OBX MEDIA's real business email before publishing.
  const recipient = 'obxmediang@gmail.com';
  const name = document.getElementById('name').value.trim();
  const business = document.getElementById('business').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();

  if (recipient.includes('YOUR-EMAIL-HERE')) {
    alert('Please replace the placeholder business email in script.js before publishing.');
    return false;
  }

  const subject = encodeURIComponent(`OBX MEDIA Project Enquiry — ${business}`);
  const body = encodeURIComponent(
`Hello OBX MEDIA,

My name is ${name}.
Business/Brand: ${business}
Service needed: ${service}

Project details:
${message}

I would like to discuss the next steps.`
  );
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  return false;
}