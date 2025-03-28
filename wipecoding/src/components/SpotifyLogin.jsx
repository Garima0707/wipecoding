import { useEffect } from "react";
import spotifyApi, { authenticateSpotify } from "../utils/spotify";

const SpotifyLogin = () => {
  useEffect(() => {
    const hash = window.location.hash.substring(1).split("&").reduce((acc, item) => {
      let parts = item.split("=");
      acc[parts[0]] = decodeURIComponent(parts[1]);
      return acc;
    }, {});
    
    if (hash.access_token) {
      authenticateSpotify(hash.access_token);
    }
  }, []);

  return (
    <a href="https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=token&redirect_uri=http://localhost:5173/callback&scope=user-read-playback-state">
      Login with Spotify
    </a>
  );
};

export default SpotifyLogin;
