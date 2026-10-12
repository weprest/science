const projectSlug = 'forensic-nursing-scientific-day'

const eventImageFiles = [
  'WhatsApp Image 2026-10-11 at 11.01.36 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.37 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.37 PM (1).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.38 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.38 PM (1).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.38 PM (2).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.39 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.39 PM (1).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.40 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.40 PM (1).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.40 PM (2).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.40 PM (3).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.41 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.41 PM (1).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.41 PM (2).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.41 PM (3).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.41 PM (4).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.41 PM (5).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.41 PM (6).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.42 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.42 PM (1).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.42 PM (2).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.42 PM (3).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.43 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.43 PM (1).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.43 PM (2).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.43 PM (3).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.43 PM (4).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.43 PM (5).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.43 PM (6).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.44 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.44 PM (1).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.44 PM (2).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.44 PM (3).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.44 PM (4).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.44 PM (5).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.45 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.45 PM (1).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.45 PM (2).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.45 PM (3).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.45 PM (4).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.45 PM (5).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.45 PM (6).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.46 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.46 PM (1).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.46 PM (2).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.46 PM (3).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.46 PM (4).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.46 PM (5).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.46 PM (6).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.47 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.47 PM (1).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.47 PM (2).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.47 PM (3).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.47 PM (4).jpeg',
  'WhatsApp Image 2026-10-11 at 11.01.48 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.45 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.47 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.48 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.48 PM (1).jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.48 PM (2).jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.48 PM (3).jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.48 PM (4).jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.50 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.51 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.51 PM (1).jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.51 PM (2).jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.51 PM (3).jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.52 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.52 PM (1).jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.52 PM (2).jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.52 PM (3).jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.52 PM (4).jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.53 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.53 PM (1).jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.53 PM (2).jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.53 PM (3).jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.53 PM (4).jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.54 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.54 PM (1).jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.54 PM (2).jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.54 PM (3).jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.54 PM (4).jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.55 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.55 PM (1).jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.55 PM (2).jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.55 PM (3).jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.55 PM (4).jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.56 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 11.25.56 PM (1).jpeg',
]

const eventImages = eventImageFiles.map(
  (filename) => `/assets/ens/${encodeURIComponent(filename)}`,
)

const captions = [
  'Event setup',
  'Main stage',
  'Registration',
  'Branding',
  'Audience',
  'Scientific sessions',
  'Speakers',
  'Certificates',
  'Catering',
  'Event highlights',
]

const eventGallery = eventImages.map((src, index) => ({
  src,
  alt: `Nursing Law & Forensic Science Day event image ${index + 1}`,
}))

const eventHighlights = eventImages.map((src, index) => ({
  ...eventGallery[index],
  caption: captions[index % captions.length],
}))

const patientSafetyImageFiles = [
  '19308715-5460-41fe-a39f-87bc5dbfc35b.jpg',
  'WhatsApp Image 2026-10-11 at 5.06.07 PM (1).jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.07 PM (2).jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.07 PM (3).jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.07 PM (4).jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.07 PM (5).jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.07 PM (6).jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.07 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.08 PM (1).jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.08 PM (2).jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.08 PM (3).jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.08 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.09 PM (1).jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.09 PM (2).jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.09 PM (3).jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.09 PM (4).jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.09 PM (5).jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.09 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.10 PM (1).jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.10 PM (2).jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.10 PM (3).jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.10 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.11 PM (1).jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.11 PM (2).jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.11 PM (3).jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.11 PM (4).jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.11 PM (5).jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.11 PM.jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.12 PM (1).jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.12 PM (2).jpeg',
  'WhatsApp Image 2026-10-11 at 5.06.12 PM.jpeg',
  'b32e4354-6868-4d1a-90cc-d17b4139a3cc.jpg',
  'b8a924f9-2922-44e0-ada6-8885a7fd1cf2.jpg',
]

const patientSafetyGallery = patientSafetyImageFiles.map((filename, index) => ({
  src: `/assets/pshe/${encodeURIComponent(filename)}`,
  alt: `Patient Safety & Health Economics Scientific Day event image ${index + 1}`,
}))

const patientSafetyVideos = [
  'WhatsApp Video 2026-10-11 at 5.06.08 PM (1).mp4',
  'WhatsApp Video 2026-10-11 at 5.06.08 PM.mp4',
  'WhatsApp Video 2026-10-11 at 5.06.10 PM.mp4',
].map((filename, index) => ({
  src: `/assets/pshe/${encodeURIComponent(filename)}`,
  poster: patientSafetyGallery[0].src,
  alt: `Patient Safety & Health Economics Scientific Day video ${index + 1}`,
}))

const eventGalleryPhotos = {
  [projectSlug]: eventGallery,
  'patient-safety-health-economics-scientific-day': patientSafetyGallery,
}

const eventVideos = {
  'patient-safety-health-economics-scientific-day': patientSafetyVideos,
}

const highlights = {
  [projectSlug]: eventHighlights,
  'patient-safety-health-economics-scientific-day': patientSafetyGallery.map((photo, index) => ({
    ...photo,
    caption: captions[index % captions.length],
  })),
}

export { eventGalleryPhotos as a, eventVideos as b, highlights as e }
