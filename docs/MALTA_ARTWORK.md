# Malta destination artwork — revision 21

Generated on 2026-10-18 with the built-in image_gen tool; no CLI/API fallback. The tool did not report a model identifier. These are original generated illustrations, not photographs or exact architectural surveys. The existing Taormina image was inspected for style; no third-party artwork was supplied as an image input.

## Files

| Stop     | Master                             | Bundled background                  | Card strip                               |
| -------- | ---------------------------------- | ----------------------------------- | ---------------------------------------- |
| Valletta | `artifacts/scenes/49-valletta.png` | `mobile/assets/scenes/valletta.jpg` | `mobile/assets/scenes/valletta-band.jpg` |
| Mdina    | `artifacts/scenes/50-mdina.png`    | `mobile/assets/scenes/mdina.jpg`    | `mobile/assets/scenes/mdina-band.jpg`    |

PNG masters are retained in the project's ignored artifacts directory. JPEG backgrounds and horizon strips are bundled through `SCENES`, so the journey, play screen and postcard album use the new artwork. The existing 48 destination images remain unchanged. Run `scripts/build-scenes.py` to reproduce JPEGs from masters; Valletta uses a 42–68% height crop and Mdina a 46–72% crop to retain their skylines.

The artwork follows the existing soft Mediterranean palette, broad quiet sky, warm limestone, portrait framing and text-free backgrounds. Both outputs were visually inspected before integration, and their exported card strips were checked at 350×112 pixels to ensure the skylines stay visible. Use is subject to the account's applicable OpenAI terms; no separate stock-image license is involved and no exclusivity is claimed.

## Exact generation prompts

### valletta

```text
Use case: illustration-story. Asset type: finished full-screen portrait background for Asobana, a premium Georgian crossword mobile game. Create a new serene, richly painted travel illustration with soft photographic detail, gentle atmospheric haze, warm golden-hour light, soft blue/lavender/peach sky, luminous golden limestone, relaxed postcard mood. Match a cohesive collection of Mediterranean landscape paintings. Portrait 2:3 composition, 1024x1536 if possible. Top 58 percent MUST be open softly graduated mid-tone sky with delicate clouds, no buildings, no hard lines, no bright sun disk. Landmark skyline starts around 60–65 percent height. Main architectural interest in lower third and side thirds, a broad quiet center that works behind an opaque circular letter wheel. Keep important landmarks within central 80% width. No typography, words, logos, watermark, borders, interface, foreground people, modern cars or signage. Scene: Valletta, Malta, viewed across calm Grand Harbour in warm late-afternoon light. Honey-gold fortified waterfront with stout bastion walls and tiers of limestone townhouses with tiny traditional colored balconies, a recognizable Maltese church dome and slender spire among the distant skyline. View across turquoise harbour water, subtle ripples, distant haze. Fortified architecture concentrated in the lower-right third, lower-left water and a modest foreground limestone parapet at the edge. Historic Mediterranean city, gentle painterly finish; not Venice, not Greek white-and-blue buildings.
```

### mdina

```text
Use case: illustration-story. Asset type: finished full-screen portrait background for Asobana, a premium Georgian crossword mobile game. Create a new serene, richly painted travel illustration with soft photographic detail, gentle atmospheric haze, warm golden-hour light, soft blue/lavender/peach sky, luminous golden limestone, relaxed postcard mood. Match a cohesive collection of Mediterranean landscape paintings. Portrait 2:3 composition, 1024x1536 if possible. Top 58 percent MUST be open softly graduated mid-tone sky with delicate clouds, no buildings, no hard lines, no bright sun disk. Landmark skyline starts around 60–65 percent height. Main architectural interest in lower third and side thirds, a broad quiet center that works behind an opaque circular letter wheel. Keep important landmarks within central 80% width. No typography, words, logos, watermark, borders, interface, foreground people, modern cars or signage. Scene: Mdina, Malta, the quiet fortified hilltop city at sunset. Honey-colored limestone bastion walls and the skyline of St Paul's Cathedral, its red-brown dome and two modest square bell towers, surrounded by pale stone roofs. View from outside the walls over a little terraced Maltese countryside. Historic city on a low ridge in the lower third; cathedral slightly left of center with no architecture intruding into the upper 58 percent sky. Foreground edges: warm stone, silvery olive foliage and sparse wildflowers. Pale lavender and dusty rose sky shifting to soft apricot at the horizon. Intimate peaceful atmosphere, softly painted limestone details; no sea directly under this inland hilltop city.
```
