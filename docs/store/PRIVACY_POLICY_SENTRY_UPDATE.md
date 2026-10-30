# Privacy policy update for Sentry and Unity Ads

**Status: draft, not published.** The policy promises to change before data
handling does, so publish this before the first release that includes Sentry or
Unity Ads. Unity's SDK ships in that release even while its AdMob groups are off.
The source is `asobana/privacy/index.html` and `en/asobana/privacy/index.html` in the
separate `spilo-games-website` project. The Georgian text needs the owner's review.

Each change below is a pair: English, then Georgian.

## 1. Date

Set "Last updated" / "ბოლო განახლება" to the publication date.

## 2. Summary: add to the end of the "In short" paragraph

> The game also sends crash and ad error reports so that we can fix problems; they
> don't include your progress or your name.

> თამაში ასევე აგზავნის ავარიული გათიშვისა და რეკლამის შეცდომების ანგარიშებს, რათა
> პრობლემები გავასწოროთ; მათში შენი პროგრესი და სახელი არ არის.

In the same paragraph, change "shows ads from Google AdMob; Google's ad software
collects" to "shows ads from Google AdMob and, on Android, Unity Ads; their ad
software collects".

იმავე აბზაცში "Google AdMob-ის რეკლამას აჩვენებს; რეკლამის საჩვენებლად Google-ის
პროგრამა" შეცვალე ასე: "Google AdMob-ისა და, Android-ზე, Unity Ads-ის რეკლამას
აჩვენებს; რეკლამის საჩვენებლად მათი პროგრამა".

## 3. New section, after "Advertising (Google AdMob)"

### Advertising from Unity Ads (Android)

On Android, some ads may come from Unity Ads, which competes to show ads through
Google AdMob. To show and measure these ads, Unity's software may collect:

- your IP address, which may be used to estimate your device's general location;
- device identifiers, such as the advertising ID or an app-specific ID;
- ad interactions, such as ads shown, taps and views during the ad, not during
  gameplay;
- technical and diagnostic data;
- purchase history, as Unity describes it. Asobana has no in-app purchases.

Unity handles this data under the
[Unity Privacy Policy](https://unity.com/legal/game-player-and-app-user-privacy-policy),
which says it may use it for advertising and share it with advertising partners.
Where the law requires consent, Google's consent form described above covers Unity
too.

### რეკლამა Unity Ads-იდან (Android)

Android-ზე ზოგიერთი რეკლამა შეიძლება Unity Ads-იდან მოდიოდეს, რომელიც რეკლამის
საჩვენებლად Google AdMob-ის საშუალებით მონაწილეობს. ამ რეკლამების საჩვენებლად და
გასაზომად Unity-ის პროგრამამ შეიძლება შეაგროვოს:

- IP მისამართი, რომლითაც შეიძლება შეფასდეს მოწყობილობის მიახლოებითი მდებარეობა;
- მოწყობილობის იდენტიფიკატორები, მაგალითად სარეკლამო ID ან აპის ID;
- რეკლამასთან ურთიერთქმედება: ნაჩვენები რეკლამები, დაჭერები და ნახვა თავად
  რეკლამის დროს და არა თამაშისას;
- ტექნიკური და დიაგნოსტიკური მონაცემები;
- შესყიდვების ისტორია, როგორც ამას Unity აღწერს. ასობანაში შესყიდვები არ არის.

Unity ამ მონაცემებს
[Unity-ის კონფიდენციალურობის პოლიტიკის](https://unity.com/legal/game-player-and-app-user-privacy-policy)
მიხედვით ამუშავებს, რომლის თანახმადაც მათ შეიძლება რეკლამისთვის იყენებდეს და
სარეკლამო პარტნიორებს უზიარებდეს. სადაც კანონი თანხმობას მოითხოვს, ზემოთ აღწერილი
Google-ის თანხმობის ფორმა Unity-საც მოიცავს.

### Crash and ad error reports (Sentry)

So that we can find and fix problems, Asobana sends crash reports and ad error
codes to Sentry, a service that stores them for us in the EU. These reports contain
technical information only:

- what went wrong, such as a crash's error and where it happened in the code, or the
  code of an ad that failed to load;
- the app version and your device's model, system version, language, time zone and
  connection type;
- in crash reports from the device's native code, an app-specific ID created by
  Sentry's software. It isn't your advertising ID.

Reports don't include your game progress, your name or your advertising ID, and
we've turned off the collection of IP addresses. We use them only to keep the game
working. Sentry handles them under the
[Sentry Privacy Policy](https://sentry.io/privacy/).

### ავარიული გათიშვისა და რეკლამის შეცდომების ანგარიშები (Sentry)

პრობლემების პოვნისა და გასწორებისთვის ასობანა ავარიული გათიშვისა და რეკლამის
შეცდომების ანგარიშებს Sentry-ს უგზავნის — სერვისს, რომელიც მათ ჩვენთვის
ევროკავშირში ინახავს. ეს ანგარიშები მხოლოდ ტექნიკურ ინფორმაციას შეიცავს:

- რა მოხდა: მაგალითად, ავარიული გათიშვის შეცდომა და კოდის ის ადგილი, სადაც ის
  მოხდა, ან იმ რეკლამის შეცდომის კოდი, რომელიც ვერ ჩაიტვირთა;
- აპის ვერსია, მოწყობილობის მოდელი, სისტემის ვერსია, ენა, დროის სარტყელი და
  კავშირის ტიპი;
- მოწყობილობის დონის ავარიული გათიშვის ანგარიშებში — აპის ID, რომელსაც Sentry-ის
  პროგრამა ქმნის. ის შენი სარეკლამო ID არ არის.

ანგარიშებში არ არის შენი პროგრესი, სახელი ან სარეკლამო ID, ხოლო IP მისამართების
შეგროვება გამორთული გვაქვს. მათ მხოლოდ თამაშის გამართული მუშაობისთვის ვიყენებთ.
Sentry მათ [Sentry-ის კონფიდენციალურობის პოლიტიკის](https://sentry.io/privacy/)
მიხედვით ამუშავებს.

## 4. "What we don't collect": replace the analytics line

Replace "doesn't contain analytics or tracking tools of our own;" with:

> doesn't contain analytics or tracking tools of our own: the crash and ad error
> reports described above are used only to fix problems;

Replace "საკუთარ ანალიტიკის ან თვალთვალის ხელსაწყოებს არ შეიცავს;" with:

> საკუთარ ანალიტიკის ან თვალთვალის ხელსაწყოებს არ შეიცავს: ზემოთ აღწერილ ავარიული
> გათიშვისა და რეკლამის შეცდომების ანგარიშებს მხოლოდ პრობლემების გასასწორებლად
> ვიყენებთ;
