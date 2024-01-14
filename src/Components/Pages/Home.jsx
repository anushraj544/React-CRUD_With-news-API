
import axios from 'axios'
import Layout from '../Labels/Layout'
import { useEffect, useState } from 'react'


function Home() {

  const[articles,setArticles]=useState([]);

  async function getData()
  {
    try {
      let res= await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=f0cc6e773fb64514a06f10209408136b`)

  console.log(res.data);
  setArticles(res.data.articles)
      
    } catch (error) {

      console.log(error);
      
    }
  }

  
 useEffect(()=>{
  getData();
 },[])
  return (
    <Layout>
      
      

      <h3 className='App mt-5 mb-4' >Latest News:<i>Top-Headlines</i></h3>

      

      {/* {
          articles.map((items,i)=>{

            return(
              
              <div className="card mt-3  " style={{width:"18rem"}}>
  <img key={i} src={items.urlToImage} className="card-img-top" alt=""></img>
  <div className="card-body">
    <h5 key={i} className="card-title">{items.title}</h5>
    <p  key={i} className="card-text">{items.author}</p>
    <p  key={i} className="card-text">{items.publishedAt}</p>

    <a  key={i} href={items.url} className="btn btn-primary">See Full News</a>
  </div>
</div>

            )
          })
        } */}
      

      {/* grid-card */}

   <div class="row row-cols-1 row-cols-md-3 g-4">
       

       {

        articles.map((items,i)=>{

          return(
            <div class="col">
    <div className="card mt-2  " style={{width:"30rem"}}>
         <img key={i} src={items.urlToImage} className="card-img-top" alt=""></img>
           <div className="card-body">
             <h5 key={i} className="card-title">{items.title}</h5>
             <p  key={i} className="card-text">{items.author}</p>
             <p  key={i} className="card-text">{items.publishedAt}</p>

              <a  key={i} href={items.url} className="btn btn-primary">See Full News</a>
           </div>
     </div>
  </div>
          )
        })
       }
  </div>
      


     
      
      
    
  
    </Layout>
  )
}

export default Home