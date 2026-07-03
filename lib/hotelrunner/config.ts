export function isHotelRunnerConfigured() {
  return Boolean(
    process.env.HOTELRUNNER_HR_ID?.trim() &&
      getHotelRunnerToken()?.trim() &&
      getHotelRunnerBaseUrl()?.trim(),
  );
}

export function isHotelRunnerDemoMode() {
  const flag = process.env.HOTELRUNNER_DEMO_MODE?.trim().toLowerCase();

  if (flag === "false") {
    return false;
  }

  if (flag === "true") {
    return true;
  }

  // Default: demo locally when live credentials are missing.
  return !isHotelRunnerConfigured();
}

export function shouldUseHotelRunnerDemo() {
  return isHotelRunnerDemoMode();
}

export function getHotelRunnerBaseUrl() {
  return (
    process.env.HOTELRUNNER_API_URL?.trim() ||
    "https://app.hotelrunner.com/api/v2/apps"
  ).replace(/\/$/, "");
}

export function getHotelRunnerHrId() {
  return process.env.HOTELRUNNER_HR_ID?.trim() ?? "demo-hr-id";
}

export function getHotelRunnerToken() {
  return (
    process.env.HOTELRUNNER_TOKEN?.trim() ||
    process.env.HOTELRUNNER_API_KEY?.trim() ||
    ""
  );
}

export function getHotelRunnerPropertyName() {
  if (shouldUseHotelRunnerDemo()) {
    return process.env.HOTELRUNNER_PROPERTY_NAME?.trim() || "NOVIGO Demo Hotel — Istanbul";
  }

  return process.env.HOTELRUNNER_PROPERTY_NAME?.trim() || "Connected Property";
}
