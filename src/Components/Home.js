import React from 'react';
import "./Home.css";
import Product from './Product';
import Banner1 from '../BannerImages/Banner1.jpg'
import Banner2 from '../BannerImages/Banner2.jpg'
import Banner3 from '../BannerImages/Banner3.jpg'
import Banner4 from '../BannerImages/Banner4.jpg'
import Banner5 from '../BannerImages/Banner5.jpg'
import Banner6 from '../BannerImages/Banner6.jpg'
import Slider from './Slider';

function Home() {
    const BannerImages =[Banner1,Banner2,Banner3,Banner4,Banner5,Banner6]
  return (
    <div className='home'>
        {/* {
            productsList.map((items)=>{
                return
            })
        } */}
        <div className="home__container">
        <Slider images={BannerImages} />

            <div className="home__row">
                <Product title='ES ESPINHO Maddison Solid Sal Wood Fabric Upholstered 3 Seater Right Hand Side Facing Modular, Sectional, Corner L Shape Sofa Set for Living Room, Teal Color' 
                price={99.99} 
                image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51cf92qyyAS.jpg" alt=""
                rating={4}/>
                <Product id="49538094" 
                title="crocs Unisex-Adult Bayaband Clog Bpk/Cpk Clog" 
                price={39.0} 
                rating= {4} 
                image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/712Brp0hwfL._UL1500_.jpg" />
            </div>
            <div className="home__row">
                <Product id="2344544"
                title="iQOO Z7 5G by vivo (Norway Blue, 6GB RAM, 128GB Storage) | Dimensity 920 5G 6nm Processor | 64MP OIS Ultra Stable Camera | Segment's Brightest AMOLED Display | 44W FlashCharge"
                price={98.99}
                rating={5}
                image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41ebGVIokuL._SX300_SY300_QL70_FMwebp_.jpg" />
                <Product id="4646464"
                title="
                GOVO GOSURROUND 900 | 200W Soundbar, 2.1 Channel Home Theatre, 6.5” Wired Subwoofer, HDMI, AUX, Opt, USB & Bluetooth, 4 Equalizer Modes, Stylish Remote & LED Display, RMS 160W (Platinum Black)"
                price={200}
                rating={4}
                image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81dajKIAn1L._SX569_.jpg" />
                <Product id="6262272"
                title="HP Pavilion Gaming 10th Gen Intel Core i5 Processor 16.1 (40.9 cms) FHD Gaming Laptop"
                price={200}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71FHcGAPevL._SL1498_.jpg"/>
            </div>
            <div className="home__row">
                <Product id="8873823"
                title="
                LG 27 inch 4K-UHD (3840 x 2160) HDR 10 Monitor (Gaming & Design) with IPS Panel" 
                price={89}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg"/>
            </div>
        </div>
    </div>
  )
}

export default Home