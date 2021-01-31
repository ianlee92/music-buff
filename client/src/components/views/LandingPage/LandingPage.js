import React, {useState, useEffect} from 'react';
import CarouselPage from './Sections/CarouselPage';
import "./LandingPage.scss";
import SearchMenu from '../NavBar/Sections/SearchMenu';
import axios from 'axios';
function LandingPage(props) {
    const [Products, setProducts] = useState([])
    const [SearchTerm, setSearchTerm] = useState("")
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)

    const getProduct = (body) => {
        axios.post('/api/product/products', body)
        .then(response => {
            if(response.data.success){
                if(body.loadMore) {
                    setProducts([...Products, ...response.data.productInfo])
                } else {
                    setProducts(response.data.productInfo)
                }
            } else {
                alert("상품들을 가져오는데 실패했습니다.")
            }
        })
    }
    
    useEffect(() => {
        let body = {
            skip: Skip,
            limit: Limit
        }
        getProduct(body)
    }, [])

    

    // const loadMoreHandler =()=>{
    //     let skip = Skip + Limit
    //             // 더보기전갯수 + 8
    //     let body = {
    //         skip: skip,
    //         limit: Limit,
    //         loadMore: true
    //     }
    //     getProduct(body)
    //     setSkip(skip)
    // }

    const updateSearchTerm = (newSearchTerm) => {
        let body = {
            skip: 0,
            limit: Limit,
            searchTerm: newSearchTerm
        }
        setSkip(0)
        setSearchTerm(newSearchTerm)
        getProduct(body)
    }

    return (
        
        <div class="landing-division-background" style={{ width:'100%', margin: '3rem auto'}}>
            <div class="column-landing-left">
                
            </div>
            <div class="column-landing-center" style={{textAlign:'center'}}>
                <SearchMenu 
                    refreshFunction={updateSearchTerm}
                />
                {/* <CarouselPage/> */}
                <img style={{width:'100%'}} src="https://images.unsplash.com/photo-1502773860571-211a597d6e4b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80"/>
            </div>
            <div class="column-landing-right">
                
            </div>
            
        </div>
    )
}

export default LandingPage