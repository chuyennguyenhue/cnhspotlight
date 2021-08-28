'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "5581461677582f06e29c3f31b5da98d0",
"version.json": "a2460bad3ec3feef085834a8e7c55d67",
"assets/images/spotify.png": "7a34cf4279c6f8f8c97a1250ccce40a4",
"assets/images/text_size.svg": "a80dedb28098d4c1baab92b1eb0f738b",
"assets/images/blank.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"assets/images/web.svg": "d3cd92189072744d45a462b8abc48906",
"assets/images/text_size_dark.svg": "138e99b64bdefed0bfd83953a6212406",
"assets/images/apple_podcasts.png": "5324c0561a8a32e79ba171d620ad9fae",
"assets/images/android_share_dark.svg": "40dd3f955ae9c7d9e4f463295cc150f4",
"assets/images/android_share.svg": "96758dd3b474b4c090aec62afb8ac706",
"assets/images/placeholder.jpeg": "76eb88d39f827de6c7fe3ab8a1975252",
"assets/images/apple_share.svg": "40174194e840517d9f78d9aa60294916",
"assets/images/stlawu_icon.png": "3f0dbd6e8efbb1be286495fe18202745",
"assets/images/logo-spotlight-white.png": "ce7743910659684776bf0ab6e2f83773",
"assets/images/icon.png": "d4cd54338c72c6c14a8338b704ae918b",
"assets/images/logo-spotlight-dark.png": "1ebc4f0ea6e048a71a65868bde574df5",
"assets/images/facebook.svg": "0587f70c98d05d35833d892558712ade",
"assets/images/thnlogo_long.png": "d094dbbc0b0357762bbdfd9754bdd12b",
"assets/images/apple_share_dark.svg": "caa4c1e4bee839746f3e63547bf6962c",
"assets/fonts/Cabin-Bold.ttf": "f36168da5d6b38f8723fa1f2ccaf288f",
"assets/fonts/Cabin-MediumItalic.ttf": "4df5a5d7eb6526fb3cf8b948af0022af",
"assets/fonts/Cabin-Medium.ttf": "663f55b214418d4c55b85c6fc32ab18a",
"assets/fonts/Cabin-Regular.ttf": "548e005a375c047eb8bd9485508eb58a",
"assets/fonts/Cabin-BoldItalic.ttf": "0a3425148b612cba4487067676cfc22d",
"assets/fonts/Cabin-SemiBoldItalic.ttf": "e7eacf19fd2cafd9d83327a5e9815483",
"assets/fonts/Cabin-SemiBold.ttf": "a1d55ab7b51b14040f84b41d67f18ec1",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/SF-Pro-Rounded-Light.otf": "5d6b13c011fc2e019e5276b4ae744bdf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/FontManifest.json": "312df616d201736c6862b5a1fb4e2c0b",
"assets/AssetManifest.json": "c236eb65ca02e792b3ebf6c8d7e7a32a",
"assets/NOTICES": "154bf375651af346aa5181326e4aab9c",
"README.md": "d9fec75372da6c786d1b533b9e26def0",
"favicon.png": "d18847fe619236713101dfb80326a114",
"index.html": "322f7844e28bea37353a0cd55679953c",
"/": "c1f86d81152a0fcb6319af863a5072d2",
"manifest.json": "63e12b7fbb0a7f58023115f6956500a3",
"pubspec.lock": "daf4d090d272d94bf0aaa25c6f3b2301",
"pubspec.yaml": "f2adbcca699a60059d27190211b83670",
"android/build.gradle": "c623b72066529d69fd25f9851aa88263",
"android/gradle.properties": "4b01dcf11166d04a1ee03bc0bac87b2a",
"android/settings.gradle": "b673a8efad7eaed18692f958a191f21a",
"android/app/build.gradle": "de5e873998253fabae51540d002819a9",
"android/app/src/debug/AndroidManifest.xml": "f430bd7edebf225c7a4b29e405fed09c",
"android/app/src/main/AndroidManifest.xml": "cdba15b54699581f1a315a2e0f255a1f",
"android/app/src/main/kotlin/com/example/web/MainActivity.kt": "12319e79b274dcb3e3c70d21fda2d252",
"android/app/src/main/res/drawable-v21/launch_background.xml": "bff4b9cd8e98754261159601bd94abd3",
"android/app/src/main/res/drawable/launch_background.xml": "12c379b886cbd7e72cfee6060a0947d4",
"android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"android/app/src/main/res/values-night/styles.xml": "b98b32ea0a3c018ad99a73ab8e77d32f",
"android/app/src/main/res/values/styles.xml": "28e128a0ed9ec526c8673198e751a3cc",
"android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "52533b7c97ea341b8c6a13aba97f53e6",
"android/app/src/profile/AndroidManifest.xml": "f430bd7edebf225c7a4b29e405fed09c",
"android/gradle/wrapper/gradle-wrapper.properties": "229502955d529ae0e02c6ad58236b7a0",
"android/local.properties": "c66fbe53c29aa6d78e607f22b0d1df83",
"icons/Icon-192.png": "711b92a2cc35305d49396f8a6dc5d6d6",
"icons/Icon-512.png": "aea15e8d8d7eee210cc5b06c8b68cf27",
"ios/Flutter/AppFrameworkInfo.plist": "a3fe1631377200e1c450eb0c7c59b011",
"ios/Flutter/Debug.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Flutter/Release.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Flutter/Generated.xcconfig": "4e3f9ab03d1b9eca6e39a3e2b15bbc05",
"ios/Flutter/flutter_export_environment.sh": "9e1b4bee60b659a8881507d3fdea25a4",
"ios/Runner.xcodeproj/project.pbxproj": "707cbfe9f8a97890084e1164cba0a659",
"ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "77d69f353bbf342ad71a24f69ec331ff",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "5da85f8957f771f0c1002fdc60fc4a04",
"ios/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"ios/Runner/AppDelegate.swift": "b431e1eaead2cfc3718b75ba2c5f45aa",
"ios/Runner/Info.plist": "ab3a445c3edb3f6e924b84664dfc4653",
"ios/Runner/Runner-Bridging-Header.h": "7ad7b5cea096132de13ba526b2b9efbe",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "31a08e429403e265cabfb31b3d65f049",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "e2b9a9fb66c6f8165a179d370eb723c0",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "19898f3eea0783250a0e2a20dc147827",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "128e30cc061e49f503f48c338a21380e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "9595f5692fac4a15b50616d6549e9ed4",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "2adf6396c0f80a2ddc96ead2f2405220",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "f8e7955550407d4ec71d28e7c2d8c8c6",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "19898f3eea0783250a0e2a20dc147827",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "a34a631e106b9e7251e55fa199d34bca",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "7af6f2ed506e771a319d46846dde1f26",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "975d8a8c44f5d28ac65263294b84b0c5",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "c0fa6a088a2d486e4d75a012096d611b",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "d86de75e9341c42432a12b3d58e364b8",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "b9e927ac17345f2d5f052fe68a3487f9",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "f7ee1b402881509d197f34963e569927",
"ios/Runner/Base.lproj/LaunchScreen.storyboard": "b428258a72232cdd2cc04136ec23e656",
"ios/Runner/Base.lproj/Main.storyboard": "2b4e6b099f6729340a5ecc272c06cff7",
"ios/Runner/GeneratedPluginRegistrant.h": "51e4cefb306d339b47a67bb0477a1d27",
"ios/Runner/GeneratedPluginRegistrant.m": "7c20af7f75e9fa38e8686b147b13159a",
"lib/main.dart": "d3ca21ba00468c1863143c63d4f13db2",
"test/widget_test.dart": "b935758c242109475af672c9117d63e4",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/index.html": "c1f86d81152a0fcb6319af863a5072d2",
"web/manifest.json": "413c4532dcafd9c5a1da281130bab0eb",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".dart_tool/package_config.json": "b0ee742ab8e699ebfbfa364c466a38c7",
".dart_tool/version": "7d30aa8b30a57b85d658fcd54426884a",
".dart_tool/package_config_subset": "d4c5017dee9d876f4acb9d1528e6a653",
".dart_tool/flutter_build/f67f7d38d2d8a139c82b812458857faa/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/flutter_build/f67f7d38d2d8a139c82b812458857faa/main.dart": "94ccc3b9765cf7f1c580ec2a5d33e6d9",
".dart_tool/flutter_build/f67f7d38d2d8a139c82b812458857faa/web_entrypoint.stamp": "5ad831602a63e230a536579cf2a9be34",
".dart_tool/flutter_build/f67f7d38d2d8a139c82b812458857faa/app.dill": "4fc0ce48ca89269f112107d6e764b042",
".dart_tool/flutter_build/f67f7d38d2d8a139c82b812458857faa/app.dill.deps": "856ceb368ed4f9442cdbc18dba940d77",
".dart_tool/flutter_build/f67f7d38d2d8a139c82b812458857faa/main.dart.js": "c2e2871978b60adb444479ef594059a2",
".dart_tool/flutter_build/f67f7d38d2d8a139c82b812458857faa/main.dart.js.deps": "23cd9ebe32140aea05bff1fb0292f3a4",
".dart_tool/flutter_build/f67f7d38d2d8a139c82b812458857faa/dart2js.d": "5e8bf7af6809f71e38f352b01939e78a",
".dart_tool/flutter_build/f67f7d38d2d8a139c82b812458857faa/dart2js.stamp": "187871fd3d0efb5e47eab76b5eb98fae",
".dart_tool/flutter_build/f67f7d38d2d8a139c82b812458857faa/flutter_assets.d": "0584d7a5c722e56757917d1cfc471a0e",
".dart_tool/flutter_build/f67f7d38d2d8a139c82b812458857faa/web_resources.d": "3a95a80905ffccd8be01c36860c4fe1a",
".dart_tool/flutter_build/f67f7d38d2d8a139c82b812458857faa/web_release_bundle.stamp": "553d05b4b3882f1d6e30fbcb2c01be89",
".dart_tool/flutter_build/f67f7d38d2d8a139c82b812458857faa/service_worker.d": "2744f98671b6ca4b7d6c3b17695aaddd",
".dart_tool/flutter_build/f67f7d38d2d8a139c82b812458857faa/web_service_worker.stamp": "a9550c16dfc60d22e09be9ab65f899fd",
".dart_tool/flutter_build/f67f7d38d2d8a139c82b812458857faa/outputs.json": "b1637eef879a6690f2a50c2a75b39ff9",
".dart_tool/flutter_build/aa42e8ba5c0df923c455e5851ee5f6e7/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/flutter_build/aa42e8ba5c0df923c455e5851ee5f6e7/main.dart": "94ccc3b9765cf7f1c580ec2a5d33e6d9",
".dart_tool/flutter_build/aa42e8ba5c0df923c455e5851ee5f6e7/web_entrypoint.stamp": "80bb184dd23e398bdafadb3f96090130",
".dart_tool/flutter_build/aa42e8ba5c0df923c455e5851ee5f6e7/app.dill": "c48906188ba840bc6ced0659ceff8c7e",
".dart_tool/flutter_build/aa42e8ba5c0df923c455e5851ee5f6e7/app.dill.deps": "4057a75fcbbd057d24e43dc56438818e",
".dart_tool/flutter_build/aa42e8ba5c0df923c455e5851ee5f6e7/main.dart.js": "45052a39c4d48ce22baf292d7f9e74be",
".dart_tool/flutter_build/aa42e8ba5c0df923c455e5851ee5f6e7/main.dart.js.deps": "63d304bb9484f9dd4d9a14586d932452",
".dart_tool/flutter_build/aa42e8ba5c0df923c455e5851ee5f6e7/dart2js.d": "a6b1c267b792e34d50b1f1933eae2a8f",
".dart_tool/flutter_build/aa42e8ba5c0df923c455e5851ee5f6e7/dart2js.stamp": "cdbccddf67820ddd6269594ab5768b31",
".dart_tool/flutter_build/aa42e8ba5c0df923c455e5851ee5f6e7/flutter_assets.d": "0584d7a5c722e56757917d1cfc471a0e",
".dart_tool/flutter_build/aa42e8ba5c0df923c455e5851ee5f6e7/web_resources.d": "3a95a80905ffccd8be01c36860c4fe1a",
".dart_tool/flutter_build/aa42e8ba5c0df923c455e5851ee5f6e7/web_release_bundle.stamp": "b34815fce42b995ab5fb684fd0e22831",
".dart_tool/flutter_build/aa42e8ba5c0df923c455e5851ee5f6e7/service_worker.d": "3a5653dbe634ca0a2834b0a1a3ff9479",
".dart_tool/flutter_build/aa42e8ba5c0df923c455e5851ee5f6e7/web_service_worker.stamp": "daf8e3075843ac16c26e2dacbca00a8e",
".dart_tool/flutter_build/aa42e8ba5c0df923c455e5851ee5f6e7/outputs.json": "b1637eef879a6690f2a50c2a75b39ff9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
