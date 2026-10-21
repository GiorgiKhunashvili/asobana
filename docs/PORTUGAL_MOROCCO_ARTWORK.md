# Portugal and Morocco artwork — revision 28

Generated 2026-10-20 using the built-in `image_gen.imagegen` tool, one request per destination. No CLI fallback or external reference images. The tool did not identify a model version. These stylized destination illustrations are not documentary photographs or exact architectural reconstructions.

All ten full portraits and postcard crops were visually inspected. Master PNGs are 1024×1536 and preserved locally under `artifacts/scenes/`; twenty JPEGs are bundled under `mobile/assets/scenes/`. The existing `scripts/build-scenes.py` exports quality-80 backgrounds and quality-78 card strips with destination-specific crop positions. Prior artwork is preserved. Georgian captions and sourced facts are in `mobile/src/content/destinations.ts`; sources and approval scope are in [PLACE_FACTS.md](PLACE_FACTS.md).

| Destination                   | Levels  | Background                                         | Postcard crop                                           | Master                                           |
| ----------------------------- | ------- | -------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------ |
| ლაგუში (lagos)                | 296–300 | [JPEG](../mobile/assets/scenes/lagos.jpg)          | [JPEG](../mobile/assets/scenes/lagos-band.jpg)          | [PNG](../artifacts/scenes/60-lagos.png)          |
| ლისაბონი (lisbon)             | 301–305 | [JPEG](../mobile/assets/scenes/lisbon.jpg)         | [JPEG](../mobile/assets/scenes/lisbon-band.jpg)         | [PNG](../artifacts/scenes/61-lisbon.png)         |
| სინტრა (sintra)               | 306–310 | [JPEG](../mobile/assets/scenes/sintra.jpg)         | [JPEG](../mobile/assets/scenes/sintra-band.jpg)         | [PNG](../artifacts/scenes/62-sintra.png)         |
| პორტუ (porto)                 | 311–315 | [JPEG](../mobile/assets/scenes/porto.jpg)          | [JPEG](../mobile/assets/scenes/porto-band.jpg)          | [PNG](../artifacts/scenes/63-porto.png)          |
| ტანჟერი (tangier)             | 316–320 | [JPEG](../mobile/assets/scenes/tangier.jpg)        | [JPEG](../mobile/assets/scenes/tangier-band.jpg)        | [PNG](../artifacts/scenes/64-tangier.png)        |
| შეფშაუენი (chefchaouen)       | 321–325 | [JPEG](../mobile/assets/scenes/chefchaouen.jpg)    | [JPEG](../mobile/assets/scenes/chefchaouen-band.jpg)    | [PNG](../artifacts/scenes/65-chefchaouen.png)    |
| ფესი (fez)                    | 326–330 | [JPEG](../mobile/assets/scenes/fez.jpg)            | [JPEG](../mobile/assets/scenes/fez-band.jpg)            | [PNG](../artifacts/scenes/66-fez.png)            |
| მერზუგა (merzouga)            | 331–335 | [JPEG](../mobile/assets/scenes/merzouga.jpg)       | [JPEG](../mobile/assets/scenes/merzouga-band.jpg)       | [PNG](../artifacts/scenes/67-merzouga.png)       |
| აით-ბენ-ჰადუ (ait-ben-haddou) | 336–340 | [JPEG](../mobile/assets/scenes/ait-ben-haddou.jpg) | [JPEG](../mobile/assets/scenes/ait-ben-haddou-band.jpg) | [PNG](../artifacts/scenes/68-ait-ben-haddou.png) |
| მარაკეში (marrakech)          | 341–345 | [JPEG](../mobile/assets/scenes/marrakech.jpg)      | [JPEG](../mobile/assets/scenes/marrakech-band.jpg)      | [PNG](../artifacts/scenes/69-marrakech.png)      |

## Visual review

Each destination retains its own focal landmark and palette. Lisbon’s postcard focuses on the tram, Chefchaouen on the blue lane, Fez on the tiled arch, and Merzouga on the dunes. Narrow crops are landmark details rather than complete portrait reproductions. Sintra and Marrakech crops were raised to retain tower tops. The full backgrounds leave broad skies for puzzle overlays. No text, labels or interface elements are baked into the images.

[Postcard contact sheet](../artifacts/journey-v28/postcard-preview.jpg). This is static visual review, not a native-device playtest.

## Exact prompts

### lagos

```text
Use case: stylized-concept. Asset type: premium mobile Georgian crossword journey background and matching postcard illustration. Create a serene painterly travel illustration, portrait 1024x1536, 2:3. Soft architectural detail with atmospheric brushwork, luminous warm haze and rich but restrained colors, consistent premium travel-game style. Composition: upper 55 percent is quiet softly graded middle-tone sky with faint clouds; landmark concentrated in lower half, important features inside central 80 percent. View from enough distance to preserve the entire landmark silhouette. Calm readable background for game tiles. No lettering, labels, watermark, borders, UI, foreground people or signage. Subject: Lagos in Portugal's Algarve, the golden limestone sea cliffs and graceful rock arches of Ponta da Piedade above clear turquoise Atlantic water. Distant viewpoint, sunlit ochre rock formations concentrated in lower half, calm teal sea and a wide soft blue sky.
```

### lisbon

```text
Use case: stylized-concept. Asset type: premium mobile Georgian crossword journey background and matching postcard illustration. Create a serene painterly travel illustration, portrait 1024x1536, 2:3. Soft architectural detail with atmospheric brushwork, luminous warm haze and rich but restrained colors, consistent premium travel-game style. Composition: upper 55 percent is quiet softly graded middle-tone sky with faint clouds; landmark concentrated in lower half, important features inside central 80 percent. View from enough distance to preserve the entire landmark silhouette. Calm readable background for game tiles. No lettering, labels, watermark, borders, UI, foreground people or signage. Subject: Lisbon, Portugal, a small traditional yellow tram on a gently sloping cobbled street, pastel cream and pink facades with restrained blue Portuguese azulejo tile details, distant red roofs and a glimpse of the Tagus. Wide view from an open overlook, buildings and tram kept in lower half. No visible letters, tram numbers or signs.
```

### sintra

```text
Use case: stylized-concept. Asset type: premium mobile Georgian crossword journey background and matching postcard illustration. Create a serene painterly travel illustration, portrait 1024x1536, 2:3. Soft architectural detail with atmospheric brushwork, luminous warm haze and rich but restrained colors, consistent premium travel-game style. Composition: upper 55 percent is quiet softly graded middle-tone sky with faint clouds; landmark concentrated in lower half, important features inside central 80 percent. View from enough distance to preserve the entire landmark silhouette. Calm readable background for game tiles. No lettering, labels, watermark, borders, UI, foreground people or signage. Subject: Sintra, Portugal, the recognizable red and yellow Pena Palace with its varied towers on a wooded hill. View across the forest from far enough away to show the full palace silhouette. Warm yellow facade and terracotta-red tower, muted green forest and lilac-blue sky. Palace confined to lower half, highest tower below 45 percent of portrait.
```

### porto

```text
Use case: stylized-concept. Asset type: premium mobile Georgian crossword journey background and matching postcard illustration. Create a serene painterly travel illustration, portrait 1024x1536, 2:3. Soft architectural detail with atmospheric brushwork, luminous warm haze and rich but restrained colors, consistent premium travel-game style. Composition: upper 55 percent is quiet softly graded middle-tone sky with faint clouds; landmark concentrated in lower half, important features inside central 80 percent. View from enough distance to preserve the entire landmark silhouette. Calm readable background for game tiles. No lettering, labels, watermark, borders, UI, foreground people or signage. Subject: Porto, Portugal, the Ribeira riverfront with colorful narrow houses and the recognizable great iron arch of the Luis I Bridge over the Douro. Distant riverside view with full bridge silhouette, warm cream and ochre houses and calm blue-green reflections. Riverfront and bridge in lower half under a broad hazy sky.
```

### tangier

```text
Use case: stylized-concept. Asset type: premium mobile Georgian crossword journey background and matching postcard illustration. Create a serene painterly travel illustration, portrait 1024x1536, 2:3. Soft architectural detail with atmospheric brushwork, luminous warm haze and rich but restrained colors, consistent premium travel-game style. Composition: upper 55 percent is quiet softly graded middle-tone sky with faint clouds; landmark concentrated in lower half, important features inside central 80 percent. View from enough distance to preserve the entire landmark silhouette. Calm readable background for game tiles. No lettering, labels, watermark, borders, UI, foreground people or signage. Subject: Tangier, Morocco, a quiet elevated view of the whitewashed old medina descending toward the blue Strait of Gibraltar. Low white and pale cream homes, a simple terrace and subtle greenery in the lower foreground, wide sea and soft lavender sky. Warm sun on white walls, no fantasy domes or invented skyscrapers.
```

### chefchaouen

```text
Use case: stylized-concept. Asset type: premium mobile Georgian crossword journey background and matching postcard illustration. Create a serene painterly travel illustration, portrait 1024x1536, 2:3. Soft architectural detail with atmospheric brushwork, luminous warm haze and rich but restrained colors, consistent premium travel-game style. Composition: upper 55 percent is quiet softly graded middle-tone sky with faint clouds; landmark concentrated in lower half, important features inside central 80 percent. View from enough distance to preserve the entire landmark silhouette. Calm readable background for game tiles. No lettering, labels, watermark, borders, UI, foreground people or signage. Subject: Chefchaouen, Morocco, an open bluewashed lane with simple blue doors, worn steps and terracotta flowerpots, backed by the softly hazy Rif mountains. Wide view across a low blue courtyard with the lane running toward a distant mountain, keep buildings below mid-height so broad sky fills upper half. Varied cobalt and powder-blue walls, flowers as small restrained accents.
```

### fez

```text
Use case: stylized-concept. Asset type: premium mobile Georgian crossword journey background and matching postcard illustration. Create a serene painterly travel illustration, portrait 1024x1536, 2:3. Soft architectural detail with atmospheric brushwork, luminous warm haze and rich but restrained colors, consistent premium travel-game style. Composition: upper 55 percent is quiet softly graded middle-tone sky with faint clouds; landmark concentrated in lower half, important features inside central 80 percent. View from enough distance to preserve the entire landmark silhouette. Calm readable background for game tiles. No lettering, labels, watermark, borders, UI, foreground people or signage. Subject: Fez, Morocco, the recognizable blue-tiled Bab Bou Jeloud gateway with its large central horseshoe arch and two smaller side arches, viewed across a quiet open plaza. Soft old medina roofs behind, restrained blue geometric ceramic details, warm stone paving. Complete gate facade in lower half under broad dusty blue sky; no lettering or crowds.
```

### merzouga

```text
Use case: stylized-concept. Asset type: premium mobile Georgian crossword journey background and matching postcard illustration. Create a serene painterly travel illustration, portrait 1024x1536, 2:3. Soft architectural detail with atmospheric brushwork, luminous warm haze and rich but restrained colors, consistent premium travel-game style. Composition: upper 55 percent is quiet softly graded middle-tone sky with faint clouds; landmark concentrated in lower half, important features inside central 80 percent. View from enough distance to preserve the entire landmark silhouette. Calm readable background for game tiles. No lettering, labels, watermark, borders, UI, foreground people or signage. Subject: Merzouga, Morocco, the sweeping ochre dunes of Erg Chebbi at sunset, rhythmic sand ridges receding into soft atmospheric distance. Golden amber lit slopes and muted plum shadows, quiet rose-lilac sky in upper 55 percent. Pure serene desert landscape, no buildings, people, camels or fantasy oasis.
```

### ait-ben-haddou

```text
Use case: stylized-concept. Asset type: premium mobile Georgian crossword journey background and matching postcard illustration. Create a serene painterly travel illustration, portrait 1024x1536, 2:3. Soft architectural detail with atmospheric brushwork, luminous warm haze and rich but restrained colors, consistent premium travel-game style. Composition: upper 55 percent is quiet softly graded middle-tone sky with faint clouds; landmark concentrated in lower half, important features inside central 80 percent. View from enough distance to preserve the entire landmark silhouette. Calm readable background for game tiles. No lettering, labels, watermark, borders, UI, foreground people or signage. Subject: Ait Ben Haddou, Morocco, the recognizable earthen fortified village rising in tiers on a low hill, square adobe towers and warm reddish clay walls, a dry stony riverbed and sparse palms in foreground. Wide distant view preserves entire hill and settlement in lower half. Copper and ochre earth against a muted mauve-blue sky. No fantasy castle spires.
```

### marrakech

```text
Use case: stylized-concept. Asset type: premium mobile Georgian crossword journey background and matching postcard illustration. Create a serene painterly travel illustration, portrait 1024x1536, 2:3. Soft architectural detail with atmospheric brushwork, luminous warm haze and rich but restrained colors, consistent premium travel-game style. Composition: upper 55 percent is quiet softly graded middle-tone sky with faint clouds; landmark concentrated in lower half, important features inside central 80 percent. View from enough distance to preserve the entire landmark silhouette. Calm readable background for game tiles. No lettering, labels, watermark, borders, UI, foreground people or signage. Subject: Marrakech, Morocco, a serene painterly evening view across Jemaa el-Fnaa square toward the distant square Koutoubia minaret. Warm terracotta architecture, a few understated market canopies and glowing hanging lanterns along the lower foreground edges. Broad luminous twilight sky, minaret entirely below upper 45 percent. Quiet atmospheric scene without foreground people, readable signs or dense clutter.
```

## Bundle validation

The final iOS export passed with all twenty new JPEGs. All ten full portraits and 350×112 center-cover postcard previews were inspected; final crop ranges preserve Sintra and Marrakech tower tops. The paintings add approximately 3.4 MiB of bundled JPEG data. App validation solved all 345 levels, and the extension tests check image registration, actual JPEG files, country grouping and postcard unlocking. This is an export and static asset review, not a native-device playtest or TestFlight upload.
