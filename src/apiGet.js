const API_BASE = 'http://api.tvmaze.com';

export const getResult = async search => {
    const response = await fetch(`${API_BASE}/${search}`);
    const results = await response.json();

    return results;
};
