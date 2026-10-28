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

  // 4. Registration Form & Country Auto-Detection with Flags (supports multiple forms on a page)
  const countrySelects = document.querySelectorAll('.PhoneInputCountrySelect');

  const updateFlagDisplayForSelect = (selectEl, countryCode) => {
    const parent = selectEl ? selectEl.closest('.PhoneInputCountry') : null;
    if (!parent) return;

    let flagImg = parent.querySelector('.country-flag-icon');
    if (!flagImg) {
      flagImg = document.createElement('img');
      flagImg.className = 'country-flag-icon w-5 h-3.5 rounded-xs object-cover flex-shrink-0';
      parent.insertBefore(flagImg, selectEl);
    }

    const code = (countryCode || 'AE').toLowerCase();
    flagImg.src = `https://flagcdn.com/w40/${code}.png`;
    flagImg.alt = countryCode || 'AE';
  };

  if (countrySelects.length > 0) {
    const optionsHtml = COUNTRIES.map((c) =>
      `<option value="${c.code}" data-dial="${c.dial}" title="${c.name}">${c.code} (${c.dial})</option>`
    ).join('');

    countrySelects.forEach((selectEl) => {
      selectEl.innerHTML = optionsHtml;
      selectEl.value = 'AE';
      updateFlagDisplayForSelect(selectEl, 'AE');

      selectEl.addEventListener('change', () => {
        updateFlagDisplayForSelect(selectEl, selectEl.value);
      });
    });

    // Auto-detect visitor's country by IP
    detectUserCountry().then((detectedCode) => {
      if (detectedCode) {
        countrySelects.forEach((selectEl) => {
          selectEl.value = detectedCode;
          updateFlagDisplayForSelect(selectEl, detectedCode);
        });
      }
    });
  }

  const regForms = document.querySelectorAll('#registration-form, #hero-registration-form, .js-registration-form');
  regForms.forEach((regForm) => {
    const submitBtn = regForm.querySelector('button[type="submit"]') || document.getElementById('form-submit-btn');
    const localCountrySelect = regForm.querySelector('.PhoneInputCountrySelect') || document.getElementById('country-code-select');

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
      
      const selectedCountry = localCountrySelect ? getCountryByCode(localCountrySelect.value) : getCountryByCode('AE');
      const dialCode = selectedCountry ? selectedCountry.dial : '+971';

      // Format clean phone number with dial code
      const cleanPhone = phoneNum.startsWith('+') ? phoneNum : `${dialCode} ${phoneNum}`;

      const searchParams = new URLSearchParams(window.location.search);
      const utmCampaign = searchParams.get('utm_campaign') || searchParams.get('utm_source') || '';

      const WEBHOOK_URL = 'https://n8n.srv1625508.hstgr.cloud/webhook/979a4b97-a515-4ee0-96e3-5d0ddb475e99';
      const WEBHOOK_TOKEN = 'fsa_n8n_secret_token_2026_x99a';

      const isLyraPage =
        window.location.pathname.includes('lyra-at-ghaf-woods') ||
        window.location.hash === '#lyra-at-ghaf-woods';

      const payload = {
        name: name,
        phone: cleanPhone,
        email: email,
        source: 'Website',
        sub_source: isLyraPage
          ? 'Lyra at Ghaf Woods Page Registration Form'
          : 'Forest Living Website Registration Form',
        utm_campaign: utmCampaign,
        campaign_url: window.location.href,
        project: isLyraPage ? 'Lyra at Ghaf Woods' : 'Forest Living',
        developer: isLyraPage ? 'Majid Al Futtaim' : 'Forest Living',
        community: isLyraPage ? 'Ghaf Woods, Dubailand' : 'Forest Living Community',
        property_type: 'Residential',
        key_requirement: '',
        activity_description: isLyraPage
          ? 'New lead registration submitted from Lyra at Ghaf Woods page'
          : 'New lead registration submitted from landing page',
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
  });

  // 5. Table of Contents Toggle (Lyra at Ghaf Woods page)
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
});
