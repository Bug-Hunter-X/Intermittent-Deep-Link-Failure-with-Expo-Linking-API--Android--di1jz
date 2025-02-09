# Expo Linking API Deep Link Failure

This repository demonstrates a bug in the Expo `Linking` API where the `addEventListener` function for deep links sometimes fails to trigger. This is particularly noticeable on Android devices, resulting in the app not reacting to deep links as intended. The problem is intermittent, making it challenging to reproduce consistently.

## Bug Report

The primary issue is the unreliability of `Linking.addEventListener`.  Even when the app is in the foreground or background, there are instances where the deep link event is not handled properly, leaving the app unresponsive. This is especially troublesome with Android devices.  The exact trigger remains undetermined and appears random.

## Reproduction Steps (Inconsistent)

1. Run the app.
2. Open a deep link (the specific link is defined in the code).
3. Observe whether the app reacts to the link.  This will be inconsistent.

## Potential Causes

* **Android system behavior:** This could be related to Android's background app restrictions or handling of intent filters.
* **Expo's Linking API implementation:**  There might be edge cases in Expo's handling of deep links that are not fully addressed. 
* **Interference with other libraries or modules:** Conflicting or improperly configured libraries may interfere with the `Linking` API's functionality.

## Solution (Workaround)

The provided solution involves using a combination of `Linking.getInitialURL` on app launch and `Linking.addEventListener` to increase the chance of capturing the deep link.  Although not perfect, this approach helps improve the reliability of handling deep links.