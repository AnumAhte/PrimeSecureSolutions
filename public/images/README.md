All photographs are from Pexels, under the Pexels licence (free for commercial
use, no attribution required). IDs are recorded so a frame can be re-pulled or
re-cropped from the original: https://www.pexels.com/photo/<id>/

hero-surveillance.jpg   IN USE. 2400x960, composited to match the approved
                        mockup's hero: a dome CCTV camera hanging into frame, a
                        wall of camera feeds behind it, blending into a bright
                        office with a headset operator on the right.
                        Built from three Pexels photos (11783119 monitor wall —
                        only its right half, the foreground subject is cropped
                        away; 7709302 office; 7364948 dome camera).

                        Rebuilt by scratch/hero.js-style compositing: the wall is
                        kept near 1:1 so the grid of feeds stays legible (scaling
                        it to fill the canvas magnified it to two screens), and
                        is blue-shifted by multiply rather than sharp's `tint`,
                        which washes the image out. The office is feathered in
                        over a short ramp — a long one leaves visible streaks
                        where the two halves are both half-transparent.

                        The camera must clear the top of the section. A 72px
                        header and a 96px scrim at 0.85 opacity cover roughly the
                        top 170px of this canvas; placed any higher the camera is
                        invisible on the page while looking fine in the file. The
                        crop is deliberately tall so the mount still runs to the
                        frame edge while the dome hangs below that band.

                        The camera is an alpha cutout, not a `screen` blend. Screen
                        only works while whatever sits behind it is dark — it
                        erased the camera the moment the wall behind was brightened.

                        Mobile uses object-[20%_center], not the camera's own
                        position (~37%): the narrow crop centred there magnified
                        the dome until it filled the phone screen. Desktop is
                        lg:object-center and unaffected. previewClassName must
                        mirror whatever this is set to.

                        HERO_BLUR in sections/hero.tsx is a 160px JPEG of THIS
                        file. Regenerate it whenever this image changes, or the
                        hero paints the previous composite before the photo
                        arrives.

                        Verify hero changes on the rendered page, not the file.
                        Next caches optimised images in .next/dev/cache/images
                        (not .next/cache/images), and serves WebP to browsers but
                        JPEG to a plain curl — so a stale hero can survive a cache
                        clear and still look correct when fetched by hand.

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
