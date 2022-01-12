import React from 'react'
import style from './style/Home.css'
import { Link } from 'react-router-dom'
import { gsap, TweenMax, Power3, TimelineMax } from 'gsap'
import { useRef, useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Home = () => {
    let bgImg = useRef(null);
    let moonImg = useRef(null)
    let mountainImg = useRef(null)
    let roadImg = useRef(null)
    let textImg = useRef(null)

    useEffect(() => {
        // bgImg.style.display = 'none'
        // console.log(bgImg);
        TweenMax.to(bgImg,.8,{y: -100,ease: Power3.ease,delay:1 });
        TweenMax.from(moonImg,.8,{x: -1500,ease: Power3.ease,delay:.5 });
        TweenMax.from(mountainImg,.8,{y: 1500,ease: Power3.ease,delay:.7});
        TweenMax.from(roadImg,.8,{y: 1500,ease: Power3.ease,delay:.9});
        TweenMax.from(textImg, .8, { y: 1500, opacity: 0.1, ease: Power3.ease, delay:1});

        let tl = new TimelineMax({
            scrollTrigger:{
                trigger:'.main',
                start:'top 20%',
                end:'top 20%',
                toggleActions:'restart none none reverse',
            }
        })
        tl.from('h1',{x:200,duration:.5,opacity:0})
        tl.from('p',{opacity:0})
        tl.from('.linkk',{opacity:0});
    },[])

    return ( 
        <div>
            <section>
                <img ref={bg => {bgImg = bg}} src="./images/bg.jpg" id={style.bg} alt="bg" />
                <img ref={bg => {moonImg = bg}} src="./images/moon.png" id={style.moon} alt="moon" />
                <img ref={bg => {mountainImg = bg}} src="./images/mountain.png" id={style.mountain} alt="mountain" />
                <img ref={bg => {roadImg = bg}} src="./images/road.png" id={style.road} alt="road" />
                <h2 ref={bg => {textImg = bg}} id="text">R weather</h2>
            </section>
            <main className="main">
                <h1 className='h11'>Built for <span>You</span></h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptatem dolor! Dignissimos quidem
                    praesentium nihil recusandae dolorem, accusamus iusto architecto consequuntur ut sint neque, unde alias,
                    eligendi aliquid beatae at reiciendis voluptatum totam. Maiores officiis cupiditate ratione? Deserunt
                    veritatis dignissimos dicta molestiae at iure incidunt, accusamus nisi rem cum iste illo eius laudantium
                    ullam, consequuntur quisquam excepturi ipsam nam! Totam inventore, modi cumque velit delectus tempora unde
                    ea veniam facilis consequatur laudantium impedit. Iusto nulla ab eligendi praesentium ullam. Labore eos at
                    corrupti soluta unde aperiam, quos provident quaerat tenetur aspernatur illum iusto pariatur repudiandae
                    culpa non consequuntur sunt tempore.</p>
                    <div className="linkk"><Link to="/weather">Check now...</Link>
            </div>
            </main>
        </div>
     );
}
 
export default Home;