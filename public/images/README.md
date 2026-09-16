All photographs are from Pexels, under the Pexels licence (free for commercial
use, no attribution required). IDs are recorded so a frame can be re-pulled or
re-cropped from the original: https://www.pexels.com/photo/<id>/

hero-surveillance.jpg   IN USE. Composited to match the approved mockup's hero:
                        a dome CCTV camera hanging into frame, a bank of camera
                        feeds behind it, blending into a bright office with a
                        headset operator on the right.
                        Built from three Pexels photos (30692441 control room,
                        7709302 office, 7364948 dome camera).

hero-operations-centre.jpg  Alternative single photo, Pexels 19317897.
                        Swap by changing `src` in sections/hero.tsx.

Service cards — 1400x933, q76. Rendered ~290x148, so the slot crops to roughly
2:1 off the centre; check the subject survives that crop before swapping one.

  service-surveillance.jpg        30692441  unmanned control room, camera feeds
  service-virtual-assistants.jpg  8204396   headset operator at a desk
  service-bookkeeping.jpg         209224    calculator and pen on a bar chart
  service-back-office.jpg         10347152  desk with a lever-arch file, papers

Section backdrops — 1920x1080, q70. Each sits under a navy scrim of 0.82-1.0
opacity, so these are texture, not content. They are normalised to a mean
luminance of 52 and desaturated to 0.72 before saving: the section gradients
were drawn against dark photographs, and an untreated stock frame reads far too
bright and too warm underneath them. Re-run that treatment on any replacement.

  why-us-facility.jpg     19317897  operations centre, wall of displays
  office-operations.jpg   12526862  empty open-plan office, cool light
  testimonial-office.jpg  36631701  open-plan office, planting

No `blurDataURL` on any of these, unlike the hero. The backdrops are invisible
under their scrim, and the cards sit below the fold on `bg-navy-900`, so they
fade in from the dark ground with no intermediate frame to get wrong — which is
the failure the hero's inline preview exists to avoid.
