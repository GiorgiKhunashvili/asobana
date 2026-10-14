# Bundled assets

`fonts/NotoSansGeorgian.ttf`: Noto Sans Georgian 2.005 variable font (wght 100–900,
wdth 62.5–100), obtained from
[Google Fonts](https://github.com/google/fonts/tree/main/ofl/notosansgeorgian).
It is the source for the shipped instances and is not loaded by the app.

`fonts/GeoText-Regular.ttf`, `GeoText-SemiBold.ttf`, `GeoText-Bold.ttf` and
`GeoDisplay-Black.ttf` (condensed, wdth 75): static instances cut from that font
with `scripts/instance-fonts.py` and renamed so each style registers under its own
PostScript name. They keep every Mkhedruli and Mtavruli code point. The source
carries no Reserved Font Name; copyright and the SIL Open Font License 1.1 are in
`fonts/OFL.txt` and apply to the instances. Fonts load from the app bundle before
any screen renders; no runtime font fetch is required. Regenerate from the repo root:

```sh
uv run --with fonttools python -I scripts/instance-fonts.py
```

`audio/*.wav`: three original synthesized sine tones generated for this prototype.
No third-party sound recordings, music or image assets are bundled.
