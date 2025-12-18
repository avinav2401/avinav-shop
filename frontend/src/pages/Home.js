import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

import LazyLoad from '../components/LazyLoad'

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />

      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"} />
      <HorizontalCardProduct category={"watches"} heading={"Popular's Watches"} />

      <LazyLoad>
        <VerticalCardProduct category={"mobiles"} heading={"Mobiles"} />
      </LazyLoad>
      <LazyLoad>
        <VerticalCardProduct category={"Mouse"} heading={"Mouse"} />
      </LazyLoad>
      <LazyLoad>
        <VerticalCardProduct category={"televisions"} heading={"Televisions"} />
      </LazyLoad>
      <LazyLoad>
        <VerticalCardProduct category={"camera"} heading={"Camera & Photography"} />
      </LazyLoad>
      <LazyLoad>
        <VerticalCardProduct category={"earphones"} heading={"Wired Earphones"} />
      </LazyLoad>
      <LazyLoad>
        <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"} />
      </LazyLoad>
      <LazyLoad>
        <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"} />
      </LazyLoad>
      <LazyLoad>
        <VerticalCardProduct category={"trimmers"} heading={"Trimmers"} />
      </LazyLoad>
    </div>
  )
}


export default Home