import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 36vXPe-B9ISr-9SckxcRTSNd2LdbLxdjAP8H3LQuJnk',
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;