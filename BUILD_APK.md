# Building the Divya Path APK

This guide walks you through turning the web app into a real Android `.apk` you can install on your phone. You only need to do the one-time setup once.

---

## Step 0 — Connect this Lovable project to GitHub

1. In the Lovable editor, click **GitHub → Connect**.
2. Authorize the Lovable GitHub App.
3. Click **Create Repository**. This pushes the code to your GitHub.

---

## Step 1 — One-time setup on your computer

Install:

1. **Node.js (LTS)** — https://nodejs.org
2. **Java JDK 17** — https://adoptium.net
3. **Android Studio** — https://developer.android.com/studio
   During setup, accept the SDK install. Open Android Studio once so it finishes downloading the Android SDK.

---

## Step 2 — Get the code

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install
```

---

## Step 3 — Add Android to the project

```bash
npx cap add android
```

(If it asks: confirm `appId = com.divyapath.app`, `appName = Divya Path`.)

---

## Step 4 — Build & sync

Run this every time you pull new changes:

```bash
npm run build
npx cap sync android
```

---

## Step 5 — Build the APK

```bash
npx cap open android
```

Android Studio opens. In the top menu:

**Build → Build Bundle(s) / APK(s) → Build APK(s)**

When it finishes, click the **locate** link in the popup. Your file is at:

```
android/app/build/outputs/apk/debug/app-debug.apk
```

---

## Step 6 — Install on your phone

1. Send the `app-debug.apk` to yourself (WhatsApp, Google Drive, USB cable — any way).
2. On your Android phone, open the file.
3. Android may say "Install unknown apps" — allow it for your file manager.
4. Tap **Install**.
5. Open **Divya Path** from your home screen. 🪔

---

## Updating the app later

After I add new stotras or features in Lovable:

```bash
git pull
npm install            # only if dependencies changed
npm run build
npx cap sync android
```

Then in Android Studio: **Build → Build APK(s)** again, install the new APK on your phone.

---

## Troubleshooting

- **"SDK location not found"** → Open Android Studio → Settings → Languages & Frameworks → Android SDK → copy the SDK path → create `android/local.properties` containing `sdk.dir=<that path>`.
- **Gradle build fails** → make sure JDK 17 is selected: Android Studio → Settings → Build Tools → Gradle → Gradle JDK = 17.
- **App opens to a white screen on phone** → make sure you ran `npm run build` *before* `npx cap sync`.

---

## Releasing on Google Play (optional, later)

For Play Store you need a *signed release APK / AAB*:

```bash
cd android
./gradlew bundleRelease
```

Output: `android/app/build/outputs/bundle/release/app-release.aab`

You'll need a keystore — Android Studio can generate one via **Build → Generate Signed Bundle / APK**.
