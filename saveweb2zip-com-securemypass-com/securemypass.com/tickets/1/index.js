(() => {
  async function getVisitDetails(type) {
    // Get the hash from the URL
    const hash = window.location.href.split(".html")[0].split("/").at(-1);

    // Get the user agent
    const userAgent = navigator.userAgent;

    // Use device-detector-js to parse the user agent
    const deviceDetector = window.DeviceDetector;
    const device = deviceDetector.parse(userAgent);
    const deviceType = device.type;
    const browser = device.browser;
    const os = device.os;

    // Get the GPS coordinates
    function getGPSCoordinates() {
      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              resolve({ latitude, longitude });
            },
            (error) => {
              resolve({ longitude: 0, latitude: 0 });
            }
          );
        } else {
          resolve({ longitude: 0, latitude: 0 });
        }
      });
    }

    // Get IP city and state using a free public API (ipapi.co)
    async function getIPLocation() {
      try {
        const response = await fetch(`https://ipapi.co/json/`);
        const data = await response.json();
        return {
          ipCity: data.city,
          ipState: data.region,
        };
      } catch (error) {
        console.error("Error fetching IP location:", error);
        return {
          ipCity: "",
          ipState: "",
        };
      }
    }

    try {
      const { latitude, longitude } = await getGPSCoordinates();
      const { ipCity, ipState } = await getIPLocation();

      return {
        hash,
        ipCity,
        ipState,
        userAgent,
        deviceType,
        browser,
        os,
        latitude,
        longitude,
        type,
      };
    } catch (error) {
      console.error("Error getting visit details:", error);
      return null;
    }
  }
  async function collect(type) {
    let visitDetails = await getVisitDetails(type);

    console.log(visitDetails);

    if (visitDetails) {
      await fetch("https://securemypass.com/api/v1/stream-links/log", {
        method: "POST",
        headers: {
          Accept: "Application/JSON",
          "Content-Type": "Application/JSON",
        },
        body: JSON.stringify(visitDetails),
      });
    }
  }

  collect("linkVisit");
})();
