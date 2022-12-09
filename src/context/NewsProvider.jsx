import axios from 'axios'
import {useState, useEffect, createContext} from 'react'

const NewsContext = createContext()



const NewsProvider = ({children}) => {
    const [category, setCategory] = useState('general')
    const [news, setNews] = useState([])
    const [page, setPage] = useState(1)
    const [totalNews, setTotalNews] = useState(0)

    const handleChangeCategory = e => {
        setCategory(e.target.value)
    }

    useEffect(() => {
      const fetchAPI = async () =>{
        const key = import.meta.env.VITE_API_KEY

        const url = 
        `https://newsapi.org/v2/top-headlines?country=US&category=${category}&apiKey=${key}`
        const {data} = await axios(url)
        setNews(data.articles)
        setTotalNews(data.totalResults)
      }
      fetchAPI()
    },[category])

  return (
    <NewsContext.Provider value={{category, handleChangeCategory,news }}>
        {children}
    </NewsContext.Provider>
  )
}

export {
    NewsProvider
}

export default NewsContext