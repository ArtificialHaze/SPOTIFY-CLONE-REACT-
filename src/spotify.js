export const endpoint = "https://accounts.spotify.com/authorize";

const redirectUrl = "http://localhost:3000";
const client_id = "1bfcc535ca1947ddb1640f2187bb2430";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((acc, curr) => {
      let parts = curr.split("=");
      acc[parts[0]] = decodeURIComponent(parts[1]);
      return acc;
    }, {});
};

export const loginUrl = `${endpoint}?client_id=${client_id}&redirect_uri=${redirectUrl}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
