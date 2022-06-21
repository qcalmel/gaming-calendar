import axios from "axios";

const getGamesFromSearch = (query) => {
  return axios({
    url: `/games`,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "vdyvkae7tp66ret5xpmzl00h0je5eu",
      Authorization: "Bearer hyx8ewg9unrgtuo2ntac21itvfxep9",
    },
    data: `fields 
            id,
            name,
            cover.url,
            first_release_date,
            platforms.name,
            release_dates.human,
            release_dates.category,
            release_dates.date;
            search "${query}";
            where version_parent = null & category = 0 & platforms != null;
            limit 200;`,
  });
};

export { getGamesFromSearch };
