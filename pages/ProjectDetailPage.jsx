import { Link, Navigate, useParams } from 'react-router'
import { useEffect, useRef, useState } from 'react'
import ministryLogo from '../assets/logo.m/s.png'
import medicalServicesLogo from '../assets/logo.m/n.jpeg'
import { eventGalleryPhotos, eventHighlights, eventVideos } from '../data/eventMedia'
import { projectPillars } from '../data/siteData'
import { useLanguage } from '../i18n'
import LazyEventVideo from '../components/LazyEventVideo'

export default function ProjectDetailPage() {
  const { t } = useLanguage()
  const { projectSlug } = useParams()
  const currentIndex = projectPillars.findIndex((project) => project.slug === projectSlug)
  const touchStartX = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [galleryPreviewIndex, setGalleryPreviewIndex] = useState(0)
  const [activeVideo, setActiveVideo] = useState(0)

  const project = currentIndex === -1 ? null : projectPillars[currentIndex]
  const previousProject = currentIndex <= 0 ? null : projectPillars[currentIndex - 1]
  const nextProject = currentIndex === -1 || currentIndex >= projectPillars.length - 1 ? null : projectPillars[currentIndex + 1]
  const highlights = project ? eventHighlights[projectSlug] ?? [] : []
  const videos = project ? eventVideos[projectSlug] ?? [] : []
  const hasExtendedEventInfo = Boolean(project?.eventTitle)
  const galleryPhotos = project ? eventGalleryPhotos[projectSlug] ?? [] : []

  const shuffledHighlights = useRef([])

  if (shuffledHighlights.current.length !== highlights.length) {
    const nextSlides = [...highlights]
    for (let i = nextSlides.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[nextSlides[i], nextSlides[j]] = [nextSlides[j], nextSlides[i]]
    }
    shuffledHighlights.current = nextSlides
  }

  useEffect(() => {
    if (shuffledHighlights.current.length <= 1) return

    const timer = window.setInterval(() => {
      const currentSlides = [...shuffledHighlights.current]
      const firstItem = currentSlides.shift()
      currentSlides.push(firstItem)
      shuffledHighlights.current = currentSlides
      setActiveSlide((current) => (current + 1) % currentSlides.length)
      if (galleryPhotos.length > 1) {
        setGalleryPreviewIndex((current) => (current + 1) % galleryPhotos.length)
      }
    }, 4000)

    return () => window.clearInterval(timer)
  }, [highlights.length, galleryPhotos.length])

  if (currentIndex === -1) {
    return <Navigate to="/our-work" replace />
  }

  const showPreviousSlide = () => {
    const currentSlides = [...shuffledHighlights.current]
    const lastItem = currentSlides.pop()
    currentSlides.unshift(lastItem)
    shuffledHighlights.current = currentSlides
    setActiveSlide((current) => (current - 1 + currentSlides.length) % currentSlides.length)
  }

  const showNextSlide = () => {
    const currentSlides = [...shuffledHighlights.current]
    const firstItem = currentSlides.shift()
    currentSlides.push(firstItem)
    shuffledHighlights.current = currentSlides
    setActiveSlide((current) => (current + 1) % currentSlides.length)
  }

  const handleTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0].clientX
  }

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return

    const deltaX = event.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(deltaX) < 40) {
      touchStartX.current = null
      return
    }

    if (deltaX < 0) {
      showNextSlide()
    } else {
      showPreviousSlide()
    }

    touchStartX.current = null
  }

  return (
    <section className="page-shell section-wrap">
      <Link className="detail-back" to="/our-work">
        {t('Back to all projects')}
      </Link>

      <div className="project-title-layout">
        <div className="section-heading">
          <p className="kicker">{t('PROJECT /')} {t(project.status)}</p>
          <h3>{t(project.name)}</h3>
        </div>
        {['forensic-nursing-scientific-day', 'patient-safety-health-economics-scientific-day', 'egypt-womens-health-summit'].includes(projectSlug) && (
          <div className="project-authority-logos" aria-label="Event authorities">
            <img src={ministryLogo} alt="Ministry of Interior emblem" loading="lazy" decoding="async" />
            <img src={medicalServicesLogo} alt="Medical Services Sector emblem" loading="lazy" decoding="async" />
          </div>
        )}
      </div>

      {hasExtendedEventInfo ? (
        <div className="event-info-card event-info-card--feature event-overview-before-highlights">
          <p className="mini-label">EVENT OVERVIEW</p>
          <h4>{project.eventTitle}</h4>
          <p className="event-subtitle">{project.eventSubtitle}</p>
          <p className="event-theme">Theme: {project.theme}</p>
          <div className="event-meta-grid">
            <div>
              <span>Date</span>
              <strong>{project.date}</strong>
            </div>
            <div>
              <span>Venue</span>
              <strong>{project.venue}</strong>
            </div>
            <div>
              <span>Presented by</span>
              <strong>{project.presentedBy}</strong>
            </div>
          </div>
        </div>
      ) : (
        <div className="event-info-card event-info-card--feature event-overview-before-highlights">
          <p className="mini-label">EVENT OVERVIEW</p>
          <h4>{t(project.name)}</h4>
          <p className="event-subtitle">{t(project.label)}</p>
          {projectSlug === 'patient-safety-health-economics-scientific-day' && (
            <>
              <p className="event-paragraph">
                A scientific event focused on Patient Safety and Health Economics, bringing together healthcare professionals to highlight the importance of patient safety and the role of health economics in improving healthcare quality, efficiency, and sustainability.
              </p>
              <div className="event-meta-grid">
                <div>
                  <span>Event Type</span>
                  <strong>Scientific Day</strong>
                </div>
                <div>
                  <span>Date</span>
                  <strong>12 September 2026</strong>
                </div>
                <div>
                  <span>Venue</span>
                  <strong>Police Hospital, Nasr City, Cairo, Egypt</strong>
                </div>
                <div>
                  <span>Event Organizer / Management</span>
                  <strong>Science Event Management</strong>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {projectSlug === 'egypt-womens-health-summit' && (
        <div className="event-info-layout">
          <div className="event-info-card event-info-card--full">
            <p className="mini-label">SUMMIT OVERVIEW</p>
            <div className="event-meta-grid">
              <div><span>Theme</span><strong>The National Agenda Proposal</strong></div>
              <div><span>Date</span><strong>5–6 October 2026</strong></div>
              <div><span>Venue</span><strong>Cairo Marriott Hotel, Cairo, Egypt</strong></div>
              <div><span>Organizer</span><strong>Science Event Management</strong></div>
              <div><span>Official Authority</span><strong>Ministry of Interior</strong></div>
              <div><span>Associated Initiative</span><strong>Police Medical Services Initiative</strong></div>
            </div>
          </div>

          <div className="event-info-card">
            <p className="mini-label">ABOUT EWHS</p>
            <p className="event-paragraph">
              The Egypt Women’s Health Summit is a platform focused on advancing women’s health in Egypt and encouraging collaboration among healthcare institutions, government entities, private-sector organizations, and civil society.
            </p>
          </div>

          <div className="event-info-card">
            <p className="mini-label">PROPOSED SUMMIT FOCUS AREAS</p>
            <p className="event-paragraph">These are proposed areas of focus, not a confirmed final scientific program.</p>
            <ul className="event-list">
              <li>Women’s and maternal health</li>
              <li>Maternal morbidity and mortality</li>
              <li>Non-communicable diseases</li>
              <li>Reproductive health</li>
              <li>Mental health</li>
              <li>Lifestyle medicine</li>
              <li>Telemedicine and digital health</li>
              <li>Medical tourism</li>
              <li>Health awareness and collaboration between healthcare institutions</li>
            </ul>
          </div>

          <div className="event-info-card event-info-card--full">
            <p className="mini-label">ORGANIZER — SCIENCE EVENT MANAGEMENT</p>
            <img
              src="/assets/science-mark-transparent-B-SVjxf4.png"
              alt="Science Event Management logo"
              loading="lazy"
              decoding="async"
              style={{ width: '72px', height: '72px', objectFit: 'contain' }}
            />
            <div className="event-meta-grid">
              <div><span>Website</span><strong><a href="https://www.elmawy.com/" target="_blank" rel="noreferrer">elmawy.com</a></strong></div>
              <div><span>Email</span><strong><a href="mailto:Science@elmawy.com">Science@elmawy.com</a></strong></div>
              <div><span>Phone</span><strong><a href="tel:01020180180">01020180180</a></strong></div>
              <div><span>Phone</span><strong><a href="tel:01095828282">01095828282</a></strong></div>
              <div><span>Address</span><strong>Unit 1, 2nd Floor, Maxim Mall, North 90th Street, New Cairo, Cairo, Egypt.</strong></div>
            </div>
          </div>
        </div>
      )}

      {highlights.length > 0 ? (
        <div id="gallery" className="event-highlights" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div className="event-highlights-header">
            <p className="kicker">Event Highlights</p>
            <div className="event-highlights-controls">
              <button type="button" className="highlight-arrow" onClick={showPreviousSlide} aria-label="Previous slide">
                ‹
              </button>
              <button type="button" className="highlight-arrow" onClick={showNextSlide} aria-label="Next slide">
                ›
              </button>
              <span className="swipe-hint">Swipe</span>
            </div>
          </div>

          <div className="highlight-viewport" aria-live="polite">
            <div
              className="highlight-track"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {shuffledHighlights.current.map((highlight, index) => (
                <figure className="highlight-slide" key={`${highlight.src}-${highlight.caption}-${index}`}>
                  <img src={highlight.src} alt={highlight.alt} loading="lazy" decoding="async" />
                  <figcaption>{highlight.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="highlight-dots" aria-label="Highlight slides">
            {shuffledHighlights.current.map((highlight, index) => (
              <button
                key={`${highlight.src}-dot-${index}`}
                type="button"
                className={index === activeSlide ? 'is-active' : ''}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      ) : (
        <section id="gallery" className="event-highlights" aria-label="Event photo gallery">
          <div className="event-highlights-header">
            <p className="kicker">Event Highlights</p>
          </div>
          <div className="event-video-empty">
            <p>Event photos will be added here</p>
          </div>
        </section>
      )}

      {galleryPhotos.length > 0 ? (
        <div className="event-gallery-shortcuts" aria-label="Open event photo gallery">
          <button
            type="button"
            className="event-gallery-control"
            aria-label="Previous gallery previews"
            onClick={() => setGalleryPreviewIndex((current) => (current - 1 + galleryPhotos.length) % galleryPhotos.length)}
          >
            ‹
          </button>
          <div className="event-gallery-shortcuts-window" aria-live="polite">
            <div className="event-gallery-shortcuts-track" key={galleryPreviewIndex}>
              {[0, 1].map((offset) => {
                const photo = galleryPhotos[(galleryPreviewIndex + offset) % galleryPhotos.length]

                return (
                  <Link
                    key={`${photo.src}-${galleryPreviewIndex}`}
                    className="event-gallery-shortcut"
                    to={`/our-work/${projectSlug}/gallery`}
                    aria-label={`Open event photo gallery, image ${galleryPreviewIndex + offset + 1}`}
                  >
                    <img src={photo.src} alt="" loading="lazy" decoding="async" />
                  </Link>
                )
              })}
            </div>
          </div>
          <button
            type="button"
            className="event-gallery-control"
            aria-label="Next gallery previews"
            onClick={() => setGalleryPreviewIndex((current) => (current + 1) % galleryPhotos.length)}
          >
            ›
          </button>
        </div>
      ) : (
        <div className="event-gallery-shortcuts event-gallery-shortcuts--empty" aria-label="Event photo previews">
          <span>Photo previews will be added here</span>
        </div>
      )}

      <section id="videos" className="event-videos" aria-labelledby="event-videos-title">
          <div className="event-highlights-header">
            <p className="kicker" id="event-videos-title">Event Videos</p>
            {videos.length > 1 && (
              <div className="event-highlights-controls">
                <button
                  type="button"
                  className="highlight-arrow"
                  onClick={() => setActiveVideo((current) => (current - 1 + videos.length) % videos.length)}
                  aria-label="Previous video"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="highlight-arrow"
                  onClick={() => setActiveVideo((current) => (current + 1) % videos.length)}
                  aria-label="Next video"
                >
                  ›
                </button>
              </div>
            )}
          </div>

          <div className="event-video-viewport">
            {videos.length > 0 ? (
              <div
                className="event-video-track"
                style={{ transform: `translateX(-${activeVideo * 100}%)` }}
              >
                {videos.map((video, index) => (
                  <div className="event-video-slide" key={video.src}>
                    <LazyEventVideo video={video} isActive={index === activeVideo} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="event-video-empty">
                <span className="event-video-empty-icon" aria-hidden="true">▶</span>
                <p>Video highlights will be added here</p>
              </div>
            )}
          </div>
      </section>

      {projectSlug === 'patient-safety-health-economics-scientific-day' && (
        <div className="event-info-layout">
          <div className="event-info-card event-info-card--full">
            <p className="mini-label">EVENT THEMES</p>
            <ul className="event-list">
              <li>Patient Safety</li>
              <li>Health Economics</li>
              <li>Healthcare Quality</li>
              <li>Healthcare Efficiency</li>
              <li>Sustainable Healthcare</li>
            </ul>
          </div>

          <div className="event-info-card event-info-card--full">
            <p className="mini-label">ADDITIONAL INFORMATION</p>
            <div className="event-meta-grid">
              <div><span>Scientific Program</span><strong>Not provided</strong></div>
              <div><span>Speakers</span><strong>Not provided</strong></div>
              <div><span>Event Partners</span><strong>Not provided</strong></div>
              <div><span>Sponsors</span><strong>Not provided</strong></div>
              <div><span>Attendance</span><strong>Not provided</strong></div>
              <div><span>Registration Link</span><strong>Not provided</strong></div>
              <div><span>Official Event Banner</span><strong>Not provided</strong></div>
            </div>
          </div>
        </div>
      )}

      {hasExtendedEventInfo && (
        <div className="event-info-layout">
          <div className="event-info-card">
            <p className="mini-label">ABOUT THE EVENT</p>
            {project.about.map((paragraph) => (
              <p key={paragraph} className="event-paragraph">{paragraph}</p>
            ))}
          </div>

          <div className="event-info-card event-info-card--full">
            <p className="mini-label">SCIENTIFIC PROGRAM</p>
            <div className="event-program-list">
              {project.program.map((item) => (
                <div key={`${item.time}-${item.title}`} className="event-program-item">
                  <div className="event-program-time">{item.time}</div>
                  <div className="event-program-copy">
                    <h5>{item.title}</h5>
                    {item.speaker && item.speaker !== '-' && <p className="event-speaker">{item.speaker}</p>}
                    {item.description && <p>{item.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="event-info-card">
            <p className="mini-label">EVENT MANAGEMENT & EXECUTION</p>
            <ul className="event-list">
              {project.execution.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="event-info-card">
            <p className="mini-label">CONFERENCE MATERIALS & GIVEAWAYS</p>
            <ul className="event-list">
              {project.materials.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="event-info-card">
            <p className="mini-label">EVENT BRANDING</p>
            <p className="event-paragraph">{project.branding}</p>
          </div>

          <div className="event-info-card">
            <p className="mini-label">PHOTOGRAPHY & VIDEOGRAPHY</p>
            <p className="event-paragraph">{project.photography}</p>
          </div>

          <div className="event-info-card event-info-card--full">
            <p className="mini-label">EVENT GALLERY</p>
            <ul className="event-gallery-list">
              {project.gallery.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="detail-grid project-detail-info">
        <article className="page-panel page-panel--feature">
          <p className="mini-label">{t('PROJECT TYPE')}</p>
          <h4>{t(project.label)}</h4>
        </article>
        <aside className="page-panel">
          <p className="mini-label">{t('STATUS')}</p>
          <p className="detail-copy">{t(project.status)}</p>
        </aside>
      </div>

      <nav className="detail-navigation" aria-label={t('Project navigation')}>
        <Link to={previousProject ? `/our-work/${previousProject.slug}` : '/our-work'}>
          <span>{t(previousProject ? 'Previous project' : 'Project overview')}</span>
          <strong>{t(previousProject ? previousProject.name : 'All projects')}</strong>
        </Link>
        <Link to={nextProject ? `/our-work/${nextProject.slug}` : '/our-work'}>
          <span>{t(nextProject ? 'Next project' : 'Project overview')}</span>
          <strong>{t(nextProject ? nextProject.name : 'All projects')}</strong>
        </Link>
      </nav>
    </section>
  )
}