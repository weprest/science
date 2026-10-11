const projectSlug = 'forensic-nursing-scientific-day'

const eventImages = [
  '/assets/WhatsApp%20Image%202026-10-06%20at%2011.22.31%20PM%20(1)-CtPifHn7.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%2011.22.31%20PM-BSL4DVww.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%2011.22.32%20PM%20(1)-BvqjTviE.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%2011.22.32%20PM%20(2)-D8DbjTXe.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%2011.22.32%20PM%20(3)-B9e8CJWr.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%2011.22.32%20PM-D8tjx2qf.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.30%20PM%20(1)-CNPBk11X.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.30%20PM%20(1)-CVhjciYv.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.30%20PM%20(2)-BvrgA4vR.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.30%20PM%20(2)-DC8ix2Ov.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.30%20PM%20(3)-C6rwNI3z.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.30%20PM%20(3)-QcWKJTrz.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.30%20PM%20(4)-Bb2tvZ82.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.30%20PM%20(4)-BwBxtSK7.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.30%20PM%20(40)-QO3zTrHd.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.30%20PM%20(41)-0xttXbtH.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.30%20PM%20(42)-DWVUEZhl.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.30%20PM%20(43)-DmjF6COL.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.30%20PM%20(44)-CFrWY30H.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.30%20PM%20(46)-CZbZR3J6.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.30%20PM%20(48)-Dq4u7sPb.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.30%20PM%20(5)--yZK4ZJL.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.30%20PM%20(5)-Bqdyihb1.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.30%20PM%20(6)-BSNXtg5f.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.30%20PM%20(7)-BWYJTenL.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.30%20PM-aEgVc0bU.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.31%20PM%20(1)-dQrKwgzL.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.31%20PM%20(2)-BEwGiHbm.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.31%20PM%20(3)-DKgHFh1P.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.31%20PM%20(4)-Ddk3u1k5.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.31%20PM%20(5)-CkjJs_Gl.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.31%20PM%20(6)-DF2qkYug.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.31%20PM%20(7)-C6Kdva8G.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.31%20PM%20(8)-Bhl4W0Vj.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.31%20PM%20(9)-C4syjM-t.jpeg',
  '/assets/WhatsApp%20Image%202026-10-06%20at%209.33.31%20PM-IIdaesRm.jpeg',
]

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
