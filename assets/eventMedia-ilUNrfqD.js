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

const eventGalleryPhotos = {
  [projectSlug]: eventGallery,
}

const eventVideos = {}

const highlights = {
  [projectSlug]: eventHighlights,
  default: eventImages.slice(0, 3).map((src, index) => ({
    ...eventGallery[index],
    caption: captions[index],
  })),
}

export { eventGalleryPhotos as a, eventVideos as b, highlights as e }
