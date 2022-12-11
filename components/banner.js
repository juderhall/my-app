
/* 
   Import statements + use of Image object below were made 
   as a suggestion by next.js in order to avoid "img". The 
   resulting code had no complaints from ESLint.

   Later on, I could not get global CSS styles to apply to 
   the image even when I got the file path correct. I did 
   try going back to "img", and it did not fix my issue. 
   I added a CSS component class. This "fixed" the CSS
   issue, but then I realized that the image is not 
   interacting w/ bootstrap classes in-video either (I 
   think). The css has nothing to do with it. What is the 
   point of the bootstrap classes then? I changed my CSS 
   from what is shown in the video to get the same affect. 

   So the actual issue is, why was were my global CSS 
   files not applying. I had two CSS- one auto-generated
   by next.js. Possibly interfering?

   I realized that the image is not interacting with the
   bootstrap classes because there is no bootstrap class
   attached to it. It is attached to the parent 
   container. If the className is attached to the image,
   it does affect the image. But then it also changes
   the ability to apply style attributes to the image. 
*/

import Image from "next/image"
import GloboLogo from "../public/GloboLogo.png"
import {logo} from "./banner.module.css"

/* 
   Using the style attribute, either with an inline 
   object or with a constructed object is discouraged.

   Is it better to use style.className or to deconstruct
   the CSS? 
*/

const substitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "coral"
}

const Banner = (props) => {
    return (
        <header className="row mb-4">
            <div className="col-5">
                <Image 
                    src={GloboLogo} 
                    alt="logo"
                    className={logo}
                    // className="logo"
                />
                {/* <img src="./GloboLogo.png" alt="logo" className="logo"/> */}
            </div>
            <div className="col-7 mt-5" style={substitleStyle}>
                {props.headerText}
            </div>
        </header>
    )
}

export default Banner