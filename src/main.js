import './index.css';
import { COUNTRIES, getCountryByCode, detectUserCountry } from './data/countries';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menuDrawer = document.getElementById('mobile-menu');

  if (menuBtn && menuDrawer) {
    menuBtn.addEventListener('click', () => {
      const isHidden = menuDrawer.classList.contains('hidden');
      if (isHidden) {
        menuDrawer.classList.remove('hidden');
        menuBtn.setAttribute('aria-expanded', 'true');
      } else {
        menuDrawer.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });

    const mobileNavLinks = menuDrawer.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuDrawer.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. FAQ Accordion Toggle
  const faqButtons = document.querySelectorAll('.faq-toggle-btn');
  faqButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.faq-item');
      if (!parent) return;
      const content = parent.querySelector('.faq-content');
      const icon = btn.querySelector('.faq-icon');
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      // Optionally close other items in the same section
      const section = btn.closest('section');
      if (section) {
        const siblingButtons = section.querySelectorAll('.faq-toggle-btn');
        siblingButtons.forEach(otherBtn => {
          if (otherBtn !== btn) {
            otherBtn.setAttribute('aria-expanded', 'false');
            const otherParent = otherBtn.closest('.faq-item');
            if (otherParent) {
              const otherContent = otherParent.querySelector('.faq-content');
              const otherIcon = otherBtn.querySelector('.faq-icon');
              if (otherContent) otherContent.classList.add('hidden');
              if (otherIcon) otherIcon.textContent = '+';
            }
          }
        });
      }

      if (isExpanded) {
        btn.setAttribute('aria-expanded', 'false');
        if (content) content.classList.add('hidden');
        if (icon) icon.textContent = '+';
      } else {
        btn.setAttribute('aria-expanded', 'true');
        if (content) content.classList.remove('hidden');
        if (icon) icon.textContent = '−';
      }
    });
  });

  // 3. Floor Plans Tab Switcher
  const floorPlanTabs = document.querySelectorAll('.floorplan-tab');
  const floorPlanTitle = document.getElementById('floorplan-title');
  const floorPlanSize = document.getElementById('floorplan-size');
  const floorPlanPrice = document.getElementById('floorplan-price');
  const floorPlanImg = document.getElementById('floorplan-img');

  const plansData = {
    '1 Br': { size: '829 – 899 Sqft', price: 'Starting Price: 1.5M', label: '1-BEDROOM' },
    '2 Br': { size: '1,248 – 1,330 Sqft', price: 'Starting Price: 2.4M', label: '2-BEDROOM' },
    '3 Br': { size: '1,968 – 2,080 Sqft', price: 'Starting Price: 3.8M', label: '3-BEDROOM' }
  };

  floorPlanTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const planKey = tab.dataset.plan;
      if (!planKey || !plansData[planKey]) return;

      floorPlanTabs.forEach(t => {
        t.classList.remove('border-black', 'text-black', 'bg-white', 'shadow-xs');
        t.classList.add('text-gray-400', 'border-transparent');
      });

      tab.classList.remove('text-gray-400', 'border-transparent');
      tab.classList.add('border-black', 'text-black', 'bg-white', 'shadow-xs');

      const data = plansData[planKey];
      if (floorPlanTitle) floorPlanTitle.textContent = data.label;
      if (floorPlanSize) floorPlanSize.textContent = data.size;
      if (floorPlanPrice) floorPlanPrice.textContent = data.price;
      if (floorPlanImg) floorPlanImg.alt = `${data.label} 2D floor plan sketch`;
    });
  });

  // 4. Registration Form & Country Auto-Detection with Flags
  const regForm = document.getElementById('registration-form');
  const countrySelect = document.getElementById('country-code-select');

  // Helper to ensure flag image exists and updates
  const updateFlagDisplay = (countryCode) => {
    const parent = countrySelect ? countrySelect.closest('.PhoneInputCountry') : null;
    if (!parent) return;

    let flagImg = parent.querySelector('.country-flag-icon');
    if (!flagImg) {
      flagImg = document.createElement('img');
      flagImg.className = 'country-flag-icon w-5 h-3.5 rounded-xs object-cover flex-shrink-0';
      parent.insertBefore(flagImg, countrySelect);
    }

    const code = (countryCode || 'AE').toLowerCase();
    flagImg.src = `https://flagcdn.com/w40/${code}.png`;
    flagImg.alt = countryCode || 'AE';
  };

  if (countrySelect) {
    // Populate select with all countries (short code + dial code, no long country names)
    countrySelect.innerHTML = COUNTRIES.map((c) =>
      `<option value="${c.code}" data-dial="${c.dial}" title="${c.name}">${c.code} (${c.dial})</option>`
    ).join('');

    // Default to UAE initially
    countrySelect.value = 'AE';
    updateFlagDisplay('AE');

    countrySelect.addEventListener('change', () => {
      updateFlagDisplay(countrySelect.value);
    });

    // Auto-detect visitor's country by IP
    detectUserCountry().then((detectedCode) => {
      if (detectedCode && countrySelect) {
        countrySelect.value = detectedCode;
        updateFlagDisplay(detectedCode);
      }
    });
  }

  if (regForm) {
    const submitBtn = document.getElementById('form-submit-btn');

    regForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';
      }

      const formData = new FormData(regForm);
      const name = formData.get('name') || '';
      const email = formData.get('email') || '';
      const phoneNum = (formData.get('phone') || '').toString().trim();
      
      const selectedCountry = countrySelect ? getCountryByCode(countrySelect.value) : getCountryByCode('AE');
      const dialCode = selectedCountry ? selectedCountry.dial : '+971';

      // Format clean phone number with dial code
      const cleanPhone = phoneNum.startsWith('+') ? phoneNum : `${dialCode} ${phoneNum}`;

      const searchParams = new URLSearchParams(window.location.search);
      const utmCampaign = searchParams.get('utm_campaign') || searchParams.get('utm_source') || '';

      const WEBHOOK_URL = 'https://n8n.srv1625508.hstgr.cloud/webhook/979a4b97-a515-4ee0-96e3-5d0ddb475e99';
      const WEBHOOK_TOKEN = 'fsa_n8n_secret_token_2026_x99a';

      const payload = {
        name: name,
        phone: cleanPhone,
        email: email,
        source: 'Website',
        sub_source: 'Forest Living Website Registration Form',
        utm_campaign: utmCampaign,
        campaign_url: window.location.href,
        project: 'Forest Living',
        developer: 'Forest Living',
        community: 'Forest Living Community',
        property_type: 'Residential',
        key_requirement: '',
        activity_description: 'New lead registration submitted from landing page',
        token: WEBHOOK_TOKEN
      };

      try {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': WEBHOOK_TOKEN
          },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        console.warn('Webhook request emitted:', err);
      } finally {
        // Redirect to dedicated Thank You page
        window.location.href = '/thank-you';
      }
    });
  }

  // 5. Table of Contents Toggle (Saima One Residency Clifton page)
  const tocToggleBtn = document.getElementById('toc-toggle-btn');
  const tocContent = document.getElementById('toc-content');
  if (tocToggleBtn && tocContent) {
    tocToggleBtn.addEventListener('click', () => {
      const isHidden = tocContent.classList.contains('hidden');
      if (isHidden) {
        tocContent.classList.remove('hidden');
        tocToggleBtn.setAttribute('aria-expanded', 'true');
      } else {
        tocContent.classList.add('hidden');
        tocToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 6. Appointment Form Submission (Saima One Residency Clifton page)
  const appointmentForm = document.getElementById('appointment-form');
  if (appointmentForm) {
    const appointmentSuccess = document.getElementById('appointment-success');
    const appointmentSubmitBtn = document.getElementById('appointment-submit-btn');

    appointmentForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (appointmentSubmitBtn) {
        appointmentSubmitBtn.disabled = true;
        appointmentSubmitBtn.textContent = 'SUBMITTING...';
      }

      const formData = new FormData(appointmentForm);
      const name = formData.get('name') || '';
      const phone = formData.get('phone') || '';
      const email = formData.get('email') || '';
      const comment = formData.get('comment') || '';

      const searchParams = new URLSearchParams(window.location.search);
      const utmCampaign = searchParams.get('utm_campaign') || searchParams.get('utm_source') || '';

      const WEBHOOK_URL = 'https://n8n.srv1625508.hstgr.cloud/webhook/979a4b97-a515-4ee0-96e3-5d0ddb475e99';
      const WEBHOOK_TOKEN = 'fsa_n8n_secret_token_2026_x99a';

      const payload = {
        name: name,
        phone: phone,
        email: email,
        source: 'Website',
        sub_source: 'Saima One Residency Clifton Appointment Form',
        utm_campaign: utmCampaign,
        campaign_url: window.location.href,
        project: 'Saima One Residency Clifton',
        developer: 'Saima Builders and Developers',
        community: 'Clifton, Karachi',
        property_type: 'Residential',
        key_requirement: comment,
        activity_description: 'New appointment request submitted from Saima One Residency Clifton page',
        token: WEBHOOK_TOKEN
      };

      try {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': WEBHOOK_TOKEN
          },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        console.warn('Webhook request emitted:', err);
      } finally {
        appointmentForm.classList.add('hidden');
        if (appointmentSuccess) {
          appointmentSuccess.classList.remove('hidden');
        }
      }
    });
  }
});
