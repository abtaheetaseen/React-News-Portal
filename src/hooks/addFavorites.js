import toast from "react-hot-toast";

const getFavoriteNews = () => {
    let news = [];
    const storedNews = localStorage.getItem("favorite-news");
    if(storedNews){
        news = JSON.parse(storedNews);
    }

    return news;
}

// save data in localStorage
const savedNews = (data) => {
    let news = getFavoriteNews();
    const isExist = news.find(item => item.author === data.author);
    if(isExist){
        return toast.error("Already is favorite list");
    }

    news.push(data);
    localStorage.setItem("favorite-news", JSON.stringify(news));
    toast.success("News added to favorite list");
}

export {getFavoriteNews, savedNews}