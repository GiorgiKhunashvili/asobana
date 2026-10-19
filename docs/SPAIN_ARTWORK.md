# Spain destination artwork — revision 23

Generated on 2026-10-18 with the built-in `image_gen.imagegen` tool, one request per
destination, following the imagegen skill. The tool did not report a model version;
none is inferred. No CLI/API fallback or third-party reference images were used.
These generated travel illustrations are not documentary photographs or exact
architectural reconstructions. Applicable account/tool terms govern usage; no
exclusive-rights claim is made.

## Saved assets

PNG masters are preserved under the ignored `artifacts/scenes/` directory. Twelve
JPEGs are bundled app assets; the original tool outputs also remain locally.

| Destination | Levels  | Master                                      | Background                                    | Card strip                                         | Sky     | Accent  |
| ----------- | ------- | ------------------------------------------- | --------------------------------------------- | -------------------------------------------------- | ------- | ------- |
| Barcelona   | 266–270 | [PNG](../artifacts/scenes/54-barcelona.png) | [JPEG](../mobile/assets/scenes/barcelona.jpg) | [JPEG](../mobile/assets/scenes/barcelona-band.jpg) | #9DA1D2 | #795134 |
| Valencia    | 271–275 | [PNG](../artifacts/scenes/55-valencia.png)  | [JPEG](../mobile/assets/scenes/valencia.jpg)  | [JPEG](../mobile/assets/scenes/valencia-band.jpg)  | #82A0C4 | #286A78 |
| Madrid      | 276–280 | [PNG](../artifacts/scenes/56-madrid.png)    | [JPEG](../mobile/assets/scenes/madrid.jpg)    | [JPEG](../mobile/assets/scenes/madrid-band.jpg)    | #C89FA2 | #6C5B45 |
| Granada     | 281–285 | [PNG](../artifacts/scenes/57-granada.png)   | [JPEG](../mobile/assets/scenes/granada.jpg)   | [JPEG](../mobile/assets/scenes/granada-band.jpg)   | #C9A3A6 | #8E4B39 |
| Cordoba     | 286–290 | [PNG](../artifacts/scenes/58-cordoba.png)   | [JPEG](../mobile/assets/scenes/cordoba.jpg)   | [JPEG](../mobile/assets/scenes/cordoba-band.jpg)   | #B4B0CB | #756039 |
| Seville     | 291–295 | [PNG](../artifacts/scenes/59-seville.png)   | [JPEG](../mobile/assets/scenes/seville.jpg)   | [JPEG](../mobile/assets/scenes/seville-band.jpg)   | #B4B1C4 | #934F34 |

## Export and visual review

All portraits are 1024×1536. `scripts/build-scenes.py` exports quality-80 JPEG
backgrounds and quality-78 card crops. Crops use these fractions of portrait height:
Barcelona 35–61%, Valencia 51–77%, Madrid 45–71%, Granada 45–71%, Córdoba 44–70%,
Seville 48–74%. Strip dimensions are 1024×399 or 1024×400 due to rounding.
Previously bundled JPEGs were preserved.

Full portraits and 350×112 card previews were visually inspected. Barcelona's crop
was raised to retain the top cross and focuses on the spires. Valencia focuses on
curved architecture and its reflection, leaving the tall pylon outside the strip.
Madrid and Granada show the palace facades. Córdoba emphasizes the cathedral and
bridge setting. Seville's strip focuses on the central facade and arcades, cropping
the tall side towers; the full portrait includes them. These narrow strips are
detail crops. There is no text, watermark or UI baked into the illustrations.
Broad skies leave quiet areas for puzzle overlays. This is static asset review,
not native-device testing.

All six are registered in `mobile/src/theme/scenes.ts`; Spain and its stops are in
`mobile/src/theme/journey.ts`. Captions and owner-approved facts are in
`mobile/src/content/destinations.ts`. Sources and explicit approval of all six facts
on 2026-10-18 are recorded in [PLACE_FACTS.md](PLACE_FACTS.md).

## Bundle validation

`npx expo export --platform ios` passed on 2026-10-18 with all twelve Spain JPEGs
listed in the output. Full application checks passed with 264 tests in 34 suites;
all 295 levels were validated and solved. The export log is
`artifacts/journey-v23/ios-export.log`. The owner subsequently requested a local
native release: all twelve Spain JPEGs were verified in the signed **0.1.0 (12)**
IPA and uploaded to TestFlight on 2026-10-18. See [TESTFLIGHT.md](TESTFLIGHT.md) for
Apple's processing status. Physical-device playtesting remains outstanding.

## Exact generation prompts

### barcelona

```text
Use case: stylized-concept. Asset type: premium mobile Georgian crossword journey background. Create a serene painterly travel illustration, portrait 1024x1536, 2:3. Soft architectural detail with atmospheric brushwork, luminous warm haze and rich but restrained colors, consistent premium travel-game style. Composition: upper 55 percent is quiet softly graded middle-tone sky with faint clouds, landmark concentrated in the lower half, all important features inside central 80 percent. View from enough distance to include the entire main landmark silhouette. Calm readable background for game tiles. No lettering, labels, watermark, UI, foreground people, cars or signage. Subject: Barcelona, Spain, an evocative view of the Sagrada Familia basilica with its distinctive organic stone spires rising above warm terracotta city roofs. Recognizable Gaudi architecture with sculptural facades, framed by subtle green trees below. Warm pale honey stone, lavender-blue sky and late-afternoon light. Place the highest spire no higher than 45 percent down the portrait. This is a stylized destination illustration, not a construction-status photograph; no cranes or invented additional skyscrapers.
```

### valencia

```text
Use case: stylized-concept. Asset type: premium mobile Georgian crossword journey background. Create a serene painterly travel illustration, portrait 1024x1536, 2:3. Soft architectural detail with atmospheric brushwork, luminous warm haze and rich but restrained colors, consistent premium travel-game style. Composition: upper 55 percent is quiet softly graded middle-tone sky with faint clouds, landmark concentrated in the lower half, all important features inside central 80 percent. View from enough distance to include the entire main landmark silhouette. Calm readable background for game tiles. No lettering, labels, watermark, UI, foreground people, cars or signage. Subject: Valencia, Spain, the City of Arts and Sciences, featuring the low sweeping white shell of the Hemisferic and airy ribbed science-museum architecture reflected in tranquil pale turquoise pools. Recognizable elegant contemporary buildings, not a generic futuristic city. Broad open sky, architecture in the lower third with reflections below, warm peach sunlight on white forms, muted azure sky. No text on buildings.
```

### madrid

```text
Use case: stylized-concept. Asset type: premium mobile Georgian crossword journey background. Create a serene painterly travel illustration, portrait 1024x1536, 2:3. Soft architectural detail with atmospheric brushwork, luminous warm haze and rich but restrained colors, consistent premium travel-game style. Composition: upper 55 percent is quiet softly graded middle-tone sky with faint clouds, landmark concentrated in the lower half, all important features inside central 80 percent. View from enough distance to include the entire main landmark silhouette. Calm readable background for game tiles. No lettering, labels, watermark, UI, foreground people, cars or signage. Subject: Madrid, Spain, the Royal Palace seen across a calm landscaped garden, its long symmetrical pale limestone facade, central royal architectural features and rows of tall windows. Cypress and clipped green garden shapes in lower foreground, distant city softened by haze. Warm ivory and muted sage palette with dusty rose-lilac evening sky. Include whole central facade rather than a close crop. No water or coastal setting.
```

### granada

```text
Use case: stylized-concept. Asset type: premium mobile Georgian crossword journey background. Create a serene painterly travel illustration, portrait 1024x1536, 2:3. Soft architectural detail with atmospheric brushwork, luminous warm haze and rich but restrained colors, consistent premium travel-game style. Composition: upper 55 percent is quiet softly graded middle-tone sky with faint clouds, landmark concentrated in the lower half, all important features inside central 80 percent. View from enough distance to include the entire main landmark silhouette. Calm readable background for game tiles. No lettering, labels, watermark, UI, foreground people, cars or signage. Subject: Granada, Spain, the Alhambra viewed from across the valley: a long ensemble of russet-red fortified towers and walls on a wooded hill, with distant softly painted Sierra Nevada mountain slopes behind. Recognizable Alhambra silhouette and compact hilltop palace, not a fantasy castle. Warm copper and ochre stone, deep soft cypress greens, serene peach-lavender sky, subtle snow only on far mountain tops. Highest towers below 55 percent of portrait height.
```

### cordoba

```text
Use case: stylized-concept. Asset type: premium mobile Georgian crossword journey background. Create a serene painterly travel illustration, portrait 1024x1536, 2:3. Soft architectural detail with atmospheric brushwork, luminous warm haze and rich but restrained colors, consistent premium travel-game style. Composition: upper 55 percent is quiet softly graded middle-tone sky with faint clouds, landmark concentrated in the lower half, all important features inside central 80 percent. View from enough distance to include the entire main landmark silhouette. Calm readable background for game tiles. No lettering, labels, watermark, UI, foreground people, cars or signage. Subject: Cordoba, Spain, its Roman Bridge crossing the calm Guadalquivir toward the broad historic Mosque-Cathedral complex and its distinctive bell tower. Low warm ochre bridge arches and soft reflections, distant old-city roofs with the bell tower anchoring the middle distance, a little riverside greenery below. Muted amber stone and sage water, pale mauve-blue sky. Full landmark silhouettes below 50 percent of portrait, enough empty sky for the crossword.
```

### seville

```text
Use case: stylized-concept. Asset type: premium mobile Georgian crossword journey background. Create a serene painterly travel illustration, portrait 1024x1536, 2:3. Soft architectural detail with atmospheric brushwork, luminous warm haze and rich but restrained colors, consistent premium travel-game style. Composition: upper 55 percent is quiet softly graded middle-tone sky with faint clouds, landmark concentrated in the lower half, all important features inside central 80 percent. View from enough distance to include the entire main landmark silhouette. Calm readable background for game tiles. No lettering, labels, watermark, UI, foreground people, cars or signage. Subject: Seville, Spain, Plaza de Espana: elegant curving red-brick Renaissance Revival building, arcaded facade, twin tall towers, a small decorative ceramic bridge over the narrow crescent canal. Wide distant view preserving both tower tops and the curved plaza architecture, centered in the lower half; towers start no higher than 45 percent down. Restrained cobalt tile accents, warm sunlit terracotta, muted jade water, peach-blue sky. No boats with people, no lettering on tilework.
```
