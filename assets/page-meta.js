(() => {
  const pages = [
    {
      match: /^\/(?:about(?:\.html)?)(?:\/|$)/,
      en: {
        title: 'About Us | SCIENCE Event Management',
        description:
          'Meet SCIENCE Event Management and learn about our vision, mission, and approach to creating meaningful event experiences.',
      },
      ar: {
        title: 'من نحن | ساينس لإدارة الفعاليات',
        description: 'تعرف على ساينس لإدارة الفعاليات ورؤيتنا في ابتكار تجارب فعاليات مميزة.',
      },
    },
    {
      match: /^\/services(?:\.html)?(?:\/|$)/,
      en: {
        title: 'Services | SCIENCE Event Management',
        description:
          'Explore event management, production, branding, registration, and digital solutions from SCIENCE Event Management.',
      },
      ar: {
        title: 'خدماتنا | ساينس لإدارة الفعاليات',
        description: 'اكتشف خدمات إدارة الفعاليات والإنتاج والتصميم والتسجيل والحلول الرقمية.',
      },
    },
    {
      match: /^\/(?:work\.html|work|our-work|our-events)(?:\/|$)/,
      en: {
        title: 'Our Events | SCIENCE Event Management',
        description:
          'Explore scientific conferences, corporate events, exhibitions, and experiences delivered by SCIENCE Event Management.',
      },
      ar: {
        title: 'فعالياتنا | ساينس لإدارة الفعاليات',
        description: 'استكشف المؤتمرات العلمية وفعاليات الشركات والمعارض التي نظمتها ساينس.',
      },
    },
    {
      match: /^\/case-studies(?:\.html)?(?:\/|$)/,
      en: {
        title: 'Case Studies | SCIENCE Event Management',
        description:
          'Discover how SCIENCE Event Management turns event goals into carefully delivered experiences.',
      },
      ar: {
        title: 'دراسات الحالة | ساينس لإدارة الفعاليات',
        description: 'اكتشف كيف نحول أهداف الفعاليات إلى تجارب متكاملة ومدروسة.',
      },
    },
    {
      match: /^\/(?:experience\.html|experience|science-experience)(?:\/|$)/,
      en: {
        title: 'Experience | SCIENCE Event Management',
        description:
          'Discover the SCIENCE experience: thoughtful strategy, creative design, precise production, and seamless event delivery.',
      },
      ar: {
        title: 'التجربة | ساينس لإدارة الفعاليات',
        description: 'اكتشف تجربة ساينس من التخطيط والتصميم إلى الإنتاج والتنفيذ المتقن.',
      },
    },
    {
      match: /^\/team(?:\.html)?(?:\/|$)/,
      en: {
        title: 'Our Team | SCIENCE Event Management',
        description:
          'Meet the event strategists, producers, and creative professionals behind SCIENCE Event Management.',
      },
      ar: {
        title: 'فريقنا | ساينس لإدارة الفعاليات',
        description: 'تعرف على فريق التخطيط والإنتاج والإبداع في ساينس لإدارة الفعاليات.',
      },
    },
    {
      match: /^\/contact(?:\.html)?(?:\/|$)/,
      en: {
        title: 'Contact Us | SCIENCE Event Management',
        description:
          'Contact SCIENCE Event Management to plan a medical, scientific, corporate, or exhibition event.',
      },
      ar: {
        title: 'تواصل معنا | ساينس لإدارة الفعاليات',
        description: 'تواصل معنا للتخطيط لمؤتمر طبي أو علمي أو فعالية للشركات أو معرض.',
      },
    },
    {
      match: /^\/social(?:\.html)?(?:\/|$)/,
      en: {
        title: 'Social | SCIENCE Event Management',
        description: 'Connect with SCIENCE Event Management on social media.',
      },
      ar: {
        title: 'حساباتنا | ساينس لإدارة الفعاليات',
        description: 'تابع ساينس لإدارة الفعاليات عبر منصات التواصل الاجتماعي.',
      },
    },
  ]

  const updateMetadata = () => {
    let pathname = window.location.pathname
    try {
      pathname = decodeURIComponent(pathname)
    } catch {
      pathname = window.location.pathname
    }
    const page = pages.find(({ match }) => match.test(pathname))
    const language = document.documentElement.lang === 'ar' ? 'ar' : 'en'
    const metadata = (page ?? {
      en: {
        title: 'SCIENCE Event Management | Memorable Event Experiences',
        description:
          'SCIENCE Event Management creates memorable medical, scientific, and corporate events through thoughtful planning, production, and design.',
      },
      ar: {
        title: 'ساينس لإدارة الفعاليات | تجارب فعاليات مميزة',
        description: 'تنظم ساينس المؤتمرات الطبية والأيام العلمية وفعاليات الشركات والمعارض.',
      },
    })[language]

    if (document.title !== metadata.title) {
      document.title = metadata.title
    }

    const description = document.querySelector('meta[name="description"]')
    if (description && description.content !== metadata.description) {
      description.content = metadata.description
    }
  }

  const notifyRouteChange = () => {
    window.dispatchEvent(new Event('site:routechange'))
  }

  for (const method of ['pushState', 'replaceState']) {
    const original = window.history[method]
    window.history[method] = function (...args) {
      const result = original.apply(this, args)
      notifyRouteChange()
      return result
    }
  }

  window.addEventListener('popstate', updateMetadata)
  window.addEventListener('site:routechange', updateMetadata)
  new MutationObserver(updateMetadata).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['lang'],
  })
  new MutationObserver(updateMetadata).observe(document.head, {
    subtree: true,
    childList: true,
    characterData: true,
  })

  updateMetadata()
})()
