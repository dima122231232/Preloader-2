"use client";

import gsap from "gsap";
import React, { useEffect} from "react";
import "./Preloader.css";

const Preloader = () => {
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        const waitForImages = async () => {
            const images = [
                "/preloader/1.jpg",
                "/preloader/2.jpg",
                "/preloader/3.jpg",
                "/preloader/4.jpg",
                "/preloader/5.jpg",
                "/preloader/6.jpg",
                "/preloader/7.jpg",
                "/preloader/8.jpg",
                "/preloader/9.jpg",

            ];

            await Promise.all(
                images.map((src) => {
                    return new Promise((resolve) => {
                        const img = new Image();
                        img.src = src;

                        if (img.decode) {
                            img.decode().then(resolve).catch(resolve);
                        } else {
                            img.onload = resolve;
                            img.onerror = resolve;
                        }
                    });
                })
            );

            return true;
        };

        const initializeAnimation = async () => {
            await waitForImages();

            const paths = gsap.utils.toArray(".preloader-header path");
            const pathsGroup = [paths[8],paths[0],paths[4],paths[7],paths[3],paths[5],paths[2],paths[6],paths[1],];
            const preloaderImages = gsap.utils.toArray(".preloader-images .img");
            const tl = gsap.timeline({delay:.25});
            tl.to(pathsGroup, {
                opacity: 1,
                stagger: 0.24,
                duration: .01,
                ease:"none"
            })
            preloaderImages.forEach((preloaderImg, index) => { tl.to( preloaderImg, { opacity:0, duration:.2, delay:index * .25, } ,"0") })
            // tl.to(".preloader-header", {
            //     y: "-40vh",
            //     duration: .6,
            //     ease:"power3.out"
            // },"-=.8")
            tl.to(".preloader-header path", {
                fill: "#000",
                duration: .2,
                ease:"none"
            },"<")
            // .to(".preloader-header", {
            //     y: "-40vh",
            //     duration: 1,
            //     delay:0,
            //     ease:"power3.out"
            // })


        }
        initializeAnimation();
    }, []);


    return (
        <div className="preloader">
            <div className="preloader-images">
                <div className="img"><img src="/preloader/1.jpg" alt="" /></div>
                <div className="img"><img src="/preloader/2.jpg" alt="" /></div>
                <div className="img"><img src="/preloader/3.jpg" alt="" /></div>
                <div className="img"><img src="/preloader/4.jpg" alt="" /></div>
                <div className="img"><img src="/preloader/5.jpg" alt="" /></div> 
                <div className="img"><img src="/preloader/6.jpg" alt="" /></div>
                <div className="img"><img src="/preloader/7.jpg" alt="" /></div>
                <div className="img"><img src="/preloader/8.jpg" alt="" /></div>
                <div className="img"><img src="/preloader/9.jpg" alt="" /></div> 

            </div>

            <div className="preloader-header">
                <svg width="131" height="26" viewBox="0 0 131 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M115.862 12.9186C115.862 8.51798 118.836 5.52783 123.254 5.52783C127.673 5.52783 130.646 8.51798 130.646 12.9186C130.646 17.3193 127.673 20.3094 123.254 20.3094C118.836 20.3094 115.862 17.3479 115.862 12.9186ZM127.531 12.9186C127.531 10.1263 125.832 8.30328 123.254 8.30328C120.676 8.30328 119.005 10.125 119.005 12.9186C119.005 15.7123 120.676 17.7148 123.254 17.7148C125.832 17.7148 127.531 15.7123 127.531 12.9186Z" fill="white" fillOpacity="0.9"/>
                    <path d="M96.8933 10.2677C96.8933 4.2588 100.604 0.225098 106.467 0.225098C110.999 0.225098 114.256 2.93289 114.907 7.10842H111.536C110.884 4.62574 109.016 3.07472 106.325 3.07472C102.557 3.07472 100.235 6.03624 100.235 10.2677C100.235 14.4992 102.501 17.4607 106.24 17.4607C108.987 17.4607 110.886 15.937 111.509 13.427H114.88C114.256 17.6026 110.886 20.3104 106.269 20.3104C100.49 20.3104 96.8933 16.3339 96.8933 10.2677Z" fill="white" fillOpacity="0.9"/>
                    <path d="M81.3901 12.9472C81.3901 8.49065 84.2513 5.52783 88.5274 5.52783C92.8035 5.52783 95.5236 8.17967 95.6085 12.4112C95.6085 12.7781 95.5797 13.1724 95.5236 13.5679H84.591V13.7657C84.6759 16.2198 86.2332 17.828 88.6411 17.828C90.5106 17.828 91.8707 16.8977 92.2953 15.2894H95.3537C94.8442 18.139 92.4089 20.3107 88.8109 20.3107C84.2513 20.3107 81.3901 17.3765 81.3901 12.9485V12.9472ZM92.4364 11.339C92.1202 9.37026 90.6896 8.3241 88.5562 8.30328C86.4161 8.28376 84.9359 9.37026 84.7047 11.339H92.4377H92.4364Z" fill="white" fillOpacity="0.9"/>
                    <path d="M73.4935 5.57959C69.7883 5.5861 67.1479 8.04926 67.1479 11.6848V20.1413H70.3135V11.8852C70.3135 10.1936 71.053 8.32251 73.5079 8.30429C75.9745 8.28477 76.6735 10.1949 76.6735 11.8852V20.1413H79.839V11.6848C79.839 8.04926 77.1974 5.58479 73.4922 5.57959H73.4935Z" fill="white" fillOpacity="0.9"/>
                    <path d="M61.7 1.83338C61.7 0.761199 62.5217 0 63.5695 0C64.6173 0 65.4391 0.761199 65.4391 1.83338C65.4391 2.90557 64.6173 3.66677 63.5695 3.66677C62.5217 3.66677 61.7 2.90427 61.7 1.83338ZM62.0109 5.69663H65.0693V20.1399H62.0109V5.69663Z" fill="white" fillOpacity="0.9"/>
                    <path d="M57.0556 5.69699H59.7181V19.5482C59.7181 23.47 57.5089 25.9514 52.2974 25.9514C48.4459 25.9514 45.7546 24.174 45.471 20.9301H48.587C48.9554 22.5384 50.3716 23.47 52.5234 23.47C55.186 23.47 56.6871 22.2 56.6871 19.4363V17.828C55.7243 19.2672 54.2231 20.1975 51.9564 20.1975C48.02 20.1975 45.1013 17.4611 45.1013 12.8627C45.1013 8.26425 48.0187 5.52783 51.9564 5.52783C54.2218 5.52783 55.7804 6.51414 56.7146 7.95326L57.0542 5.69699H57.0556ZM56.5238 12.9199C56.5238 10.0755 54.538 8.30458 52.3849 8.30458C49.5838 8.30458 47.8567 10.0768 47.8697 12.8653C47.8841 16.1378 50.126 17.37 52.3849 17.37C54.5223 17.37 56.5238 16.1885 56.5238 12.9212V12.9199Z" fill="white" fillOpacity="0.9"/>
                    <path d="M43.6718 12.7007C43.5529 8.67349 40.3468 5.55322 36.2693 5.55322C32.1918 5.55322 28.8616 8.7932 28.8616 12.931C28.8616 17.0688 32.1147 20.3088 36.2693 20.3088C37.9324 20.3088 39.4505 19.7883 40.6747 18.8996V20.1188H43.677V12.6877L43.6718 12.6994V12.7007ZM36.2693 17.5385C33.6746 17.5385 31.6431 15.5152 31.6431 12.931C31.6431 10.3468 33.6746 8.30395 36.2693 8.30395C38.8639 8.30395 40.8955 10.3468 40.8955 12.931C40.8955 15.5152 38.8639 17.5385 36.2693 17.5385Z" fill="white" fillOpacity="0.9"/>
                    <path d="M11.5527 5.55322C13.4732 5.55322 15.1364 6.26368 16.2874 7.45947C17.4384 6.26368 19.1015 5.55322 21.022 5.55322C21.0273 5.55322 21.0325 5.55322 21.0377 5.55322C21.0429 5.55322 21.0468 5.55322 21.0508 5.55322C21.154 5.55322 21.2559 5.55582 21.3565 5.55973C21.3695 5.55973 21.3826 5.56103 21.3957 5.56233C21.4728 5.56623 21.5485 5.57144 21.6243 5.57664C22.6407 5.65211 23.5644 5.92016 24.3601 6.34955C26.2218 7.35538 27.3819 9.24992 27.3819 11.6597V20.1162H24.2164V11.8601C24.2164 10.1686 23.5109 8.26882 21.0508 8.30395C18.5907 8.34038 17.8852 10.1686 17.8852 11.8601V20.1162H14.6909L14.7196 19.8859V11.6311C14.7196 9.9968 14.001 8.26491 11.5253 8.30395C9.08085 8.34299 8.35968 10.1686 8.35968 11.8601V20.1162H5.19409V11.6597C5.19409 8.01899 7.84231 5.55322 11.5553 5.55322H11.5527Z" fill="white" fillOpacity="0.9"/>
                    <path d="M0 0.394043H3.25704V20.141H0V0.394043Z" fill="white" fillOpacity="0.9"/>
                </svg>
            </div>

            <p>
                The end of the preloader animation will depend on the{" "}
                <span style={{ color: "red" }}>hero section.</span>
            </p>
        </div>
    );
};

export default Preloader;