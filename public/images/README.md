All photographs are from Pexels, under the Pexels licence (free for commercial
use, no attribution required). IDs are recorded so a frame can be re-pulled or
re-cropped from the original: https://www.pexels.com/photo/<id>/

hero-surveillance.jpg   IN USE. 2400x960. The finished hero artwork supplied by
                        the client (_design/IMG_5522.PNG) — the mockup scene in
                        one frame: dome camera, a wall of camera feeds with an
                        operator in front of it, and a bright office with a
                        headset operator on the right.

                        PROVENANCE: supplied by the client, not stock. Origin and
                        usage rights have not been verified here; confirm before
                        launch. It replaced a three-photo Pexels composite that
                        approximated the same scene.

                        The source is 2132x498 (4.28:1) but the hero slot renders
                        near 2.6:1, so object-cover on the raw file would crop
                        about 20% off each side — taking the camera off the left
                        and the operator off the right. It is therefore scaled to
                        the full 2400 width and padded to 960 tall. The padding is
                        a stretched, blurred copy of the outermost rows rather
                        than a flat fill, which would leave a visible horizon; the
                        bands sit under the header and the top/bottom gradients.
                        Re-run scratch hero-supplied.js logic if the artwork is
                        replaced.

                        On desktop the camera falls behind the headline and the
                        left scrim, which is why it reads faintly. That is the
                        scrim doing its job — the dome is bright white and would
                        otherwise fight white type. The mockup avoids it only
                        because its type is proportionally smaller.

                        HERO_BLUR in sections/hero.tsx is a 160px JPEG of THIS
                        file. Regenerate it whenever this image changes, or the
                        hero paints the previous composite before the photo
                        arrives.

                        Mobile uses object-[20%_center]; previewClassName must
                        mirror whatever that is set to.

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
