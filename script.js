/**
 * ============================================
 * miima サイト JavaScript
 * ============================================
 * siteData.js のデータからDOMを動的に生成します
 */

document.addEventListener('DOMContentLoaded', () => {
    const D = SITE_DATA;

    // ─── Hero ───
    initHero(D.hero);

    // ─── Works ───
    initWorks(D.worksCategories, D.works);

    // ─── About ───
    initAbout(D.about);

    // ─── History & Achievements ───
    initHistory(D.history);
    initAchievements(D.achievements);

    // ─── Services ───
    initServices(D.services);

    // ─── Contact ───
    initContact(D.contact);

    // ─── Footer ───
    document.getElementById('footerCopy').textContent = D.footer.copyright;

    // ─── Animations & Nav ───
    initScrollReveal();
    initNavbar();
    initMobileMenu();
    initModal();
});


/* ═══════════════════════════════════════
   HERO
   ═══════════════════════════════════════ */
function initHero(data) {
    document.getElementById('heroCatchcopy').textContent = data.catchcopy;
    document.getElementById('heroDescription').textContent = data.description;

    const ctaContainer = document.getElementById('heroCta');
    data.cta.forEach(btn => {
        const a = document.createElement('a');
        a.href = btn.href;
        a.className = `btn btn--${btn.style}`;
        a.textContent = btn.label;
        ctaContainer.appendChild(a);
    });
}


/* ═══════════════════════════════════════
   WORKS
   ═══════════════════════════════════════ */
function initWorks(categories, works) {
    // Filter buttons
    const filterContainer = document.getElementById('worksFilter');
    if (filterContainer) {
        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `filter-btn${cat.id === 'all' ? ' active' : ''}`;
            btn.dataset.category = cat.id;
            btn.textContent = cat.label;
            btn.addEventListener('click', () => filterWorks(cat.id));
            filterContainer.appendChild(btn);
        });
    }

    // Work cards
    const grid = document.getElementById('worksGrid');
    works.forEach((work, index) => {
        const card = document.createElement('div');
        card.className = 'work-card reveal';
        card.dataset.category = work.category;
        card.dataset.index = index;
        card.style.transitionDelay = `${(index % 3) * 0.1}s`;
        card.innerHTML = `
            <div class="work-card-thumb">
                <img src="${work.thumbnail}" alt="制作実績" loading="lazy">
            </div>
            <div class="work-card-info">
                <h3 class="work-card-title">${work.title}</h3>
            </div>
        `;
        card.addEventListener('click', (e) => {
            e.preventDefault();
            openWorkModal(index);
        });
        grid.appendChild(card);
    });
}

function filterWorks(category) {
    // Update buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });

    // Filter cards
    document.querySelectorAll('.work-card').forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}


/* ═══════════════════════════════════════
   MODAL
   ═══════════════════════════════════════ */
function initModal() {
    const overlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('modalClose');

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

function openWorkModal(index) {
    const work = SITE_DATA.works[index];
    const body = document.getElementById('modalBody');

    const targetUrl = work.linkUrl || work.videoUrl;
    
    let thumbHtml = `<img src="${work.thumbnail}" alt="制作実績" class="modal-thumb">`;
    if (targetUrl) {
        thumbHtml = `
            <a href="${targetUrl}" target="_blank" rel="noopener noreferrer" class="modal-thumb-link">
                <img src="${work.thumbnail}" alt="制作実績" class="modal-thumb modal-thumb--clickable">
            </a>
        `;
    }

    body.innerHTML = `
        ${thumbHtml}
        <div class="modal-content">
            <h3 class="modal-title">${work.title}</h3>
            <div class="modal-meta">
                <div class="modal-meta-item">
                    <div class="modal-meta-label">Role</div>
                    <div class="modal-meta-value">${work.role}</div>
                </div>
            </div>
            <p class="modal-desc">${work.description}</p>
        </div>
    `;

    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
}


/* ═══════════════════════════════════════
   ABOUT
   ═══════════════════════════════════════ */
function initAbout(data) {
    document.getElementById('aboutImage').src = data.profileImage;
    document.getElementById('aboutName').innerHTML = data.name;
    document.getElementById('aboutTitle').innerHTML = data.title;
    document.getElementById('aboutIntro').innerHTML = data.introduction;

    // Software
    if (data.software) {
        const swContainer = document.getElementById('softwareList');
        data.software.forEach(sw => {
            const span = document.createElement('span');
            span.className = 'specialty-tag';
            span.textContent = sw;
            swContainer.appendChild(span);
        });
    }

    // Equipment
    if (data.equipment) {
        const eqContainer = document.getElementById('equipmentList');
        data.equipment.forEach(eq => {
            const li = document.createElement('li');
            li.className = 'equipment-item';
            li.textContent = eq;
            eqContainer.appendChild(li);
        });
    }

    // SNS Links (Cards)
    if (data.snsLinks) {
        const snsContainer = document.getElementById('snsCards');
        const snsIcons = {
            note: '<img src="assets/square.png" alt="note" class="sns-img-icon">',
            x: '<img src="assets/logo-black.png" alt="X" class="sns-img-icon">',
            instagram: '<img src="assets/Instagram_Glyph_Gradient.png" alt="Instagram" class="sns-img-icon">',
            facebook: '<img src="assets/Facebook_Logo_Primary.png" alt="Facebook" class="sns-img-icon">'
        };
        
        data.snsLinks.forEach(s => {
            const card = document.createElement('a');
            card.className = 'sns-card';
            card.href = s.url;
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
            
            card.innerHTML = `
                <div class="sns-card-header">
                    <span class="sns-card-icon sns-card-icon--${s.icon}">${snsIcons[s.icon] || '🔗'}</span>
                    <span class="sns-card-title">${s.label}</span>
                </div>
                <div class="sns-card-desc">${s.desc}</div>
                <div class="sns-card-url">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                    ${s.url}
                </div>
            `;
            snsContainer.appendChild(card);
        });
    }
}


/* ═══════════════════════════════════════
   HISTORY
   ═══════════════════════════════════════ */
function initHistory(items) {
    const container = document.getElementById('timeline');
    items.forEach(item => {
        const el = document.createElement('div');
        el.className = 'timeline-item reveal';
        el.dataset.type = item.type;
        el.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-year">${item.year}</div>
            <h4 class="timeline-title">${item.title}</h4>
            <p class="timeline-desc">${item.description}</p>
        `;
        container.appendChild(el);
    });
}

function initAchievements(items) {
    const container = document.getElementById('achievementsTimeline');
    if (!container) return;
    items.forEach(item => {
        const el = document.createElement('div');
        el.className = 'timeline-item reveal';
        el.dataset.type = item.type;
        el.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-year">${item.year}</div>
            <h4 class="timeline-title">${item.title}</h4>
            <p class="timeline-desc">${item.description}</p>
        `;
        container.appendChild(el);
    });
}


/* ═══════════════════════════════════════
   SERVICES
   ═══════════════════════════════════════ */
function initServices(services) {
    const grid = document.getElementById('servicesGrid');
    services.forEach((svc, index) => {
        const card = document.createElement('div');
        card.className = 'service-card';
        
        const bgStyle = svc.bgImage ? `style="background-image: url('${svc.bgImage}')"` : '';
        
        card.innerHTML = `
            <div class="service-card-bg" ${bgStyle}></div>
            <div class="service-content">
                <h4 class="service-title">${svc.title}</h4>
                <p class="service-desc">${svc.description}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}


/* ═══════════════════════════════════════
   CONTACT
   ═══════════════════════════════════════ */
function initContact(data) {
    document.getElementById('contactHeading').textContent = data.heading;
    document.getElementById('contactDescription').textContent = data.description;

    // Email
    const emailDisplay = document.getElementById('contactEmailDisplay');
    emailDisplay.textContent = data.email.replace('@', '＠');

    // Response time
    document.getElementById('contactResponse').textContent = data.responseTime;



    // Form categories
    const select = document.getElementById('contactCategory');
    const defaultOpt = document.createElement('option');
    defaultOpt.value = '';
    defaultOpt.textContent = '選択してください';
    select.appendChild(defaultOpt);

    data.formCategories.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat;
        select.appendChild(opt);
    });

    // Form submission
    const form = document.getElementById('contactForm');

    if (data.formEndpoint) {
        // ─── Formspree 送信（推奨）───
        // Gmailに通知が届きます
        form.action = data.formEndpoint;
        form.method = 'POST';

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // --- スパム対策：日本語が含まれていない場合は送信をブロック ---
            const messageValue = document.getElementById('contactMessage').value;
            if (!/([ぁ-んァ-ン一-龥])/.test(messageValue)) {
                alert("スパム対策のため、お問い合わせ内容には日本語を含めて送信してください。");
                return;
            }
            // --------------------------------------------------------

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = '送信中...';
            submitBtn.disabled = true;

            try {
                const formData = new FormData(form);
                const params = new URLSearchParams();
                for (const pair of formData.entries()) {
                    params.append(pair[0], pair[1]);
                }
                const fetchOpts = {
                    method: 'POST',
                    body: params,
                };
                if (data.formEndpoint.includes('formspree')) {
                    fetchOpts.headers = { 'Accept': 'application/json' };
                }

                const res = await fetch(data.formEndpoint, fetchOpts);

                if (res.ok || res.status === 302 || res.type === 'opaque') {
                    // GAS (Google Apps Script) often returns opaque or 302 depending on the redirect
                    submitBtn.textContent = '送信完了 ✓';
                    submitBtn.style.background = '#2d7b5a';
                    form.reset();
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.style.background = '';
                        submitBtn.disabled = false;
                    }, 3000);
                } else {
                    throw new Error('送信に失敗しました');
                }
            } catch (err) {
                submitBtn.textContent = '送信に失敗しました';
                submitBtn.style.background = 'var(--accent-red)';
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
            }
        });
    } else {
        // ─── mailto フォールバック ───
        // Formspreeが未設定の場合、メールクライアントを開きます
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // --- スパム対策：日本語が含まれていない場合は送信をブロック ---
            const messageVal = document.getElementById('contactMessage').value;
            if (!/([ぁ-んァ-ン一-龥])/.test(messageVal)) {
                alert("スパム対策のため、お問い合わせ内容には日本語を含めて送信してください。");
                return;
            }
            // --------------------------------------------------------

            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const category = document.getElementById('contactCategory').value;
            const message = document.getElementById('contactMessage').value;

            const subject = encodeURIComponent(`[miima Web] ${category || 'お問い合わせ'}`);
            const body = encodeURIComponent(
                `お名前: ${name}\nメールアドレス: ${email}\n種別: ${category}\n\n${message}`
            );
            window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
        });
    }
}


/* ═══════════════════════════════════════
   SCROLL REVEAL (IntersectionObserver)
   ═══════════════════════════════════════ */
function initScrollReveal() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}


/* ═══════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════ */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('.section, .hero');
    const navLinks = document.querySelectorAll('.nav-link:not(.nav-link--cta)');

    // Scroll effect
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);

        // Active link tracking
        let currentId = '';
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            if (window.scrollY >= top) {
                currentId = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
        });
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}


/* ═══════════════════════════════════════
   MOBILE MENU
   ═══════════════════════════════════════ */
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
}
