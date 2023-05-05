import axios from "axios";

const key = '28720978-48527d1c9d73f1bfd555e68c2'; 

async function getPictures(search, page) {
    return  await axios.get(`https://pixabay.com/api/?q=${search}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=4`).then(
        response => {
            console.log("responce", response)
            // console.log("responce.ok", responce.ok)
            if (response.data.total > 0) {                
                return response;
            }
            return Promise.reject(new Error(`Не знайшлась картинка за запитом ${search}`),);
        }
    ) 
}

export const api = {
    getPictures,
}