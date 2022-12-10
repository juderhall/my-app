
/* Import statements below were made as a suggestion by next
   in order to avoid "img". I did try going back to "img", 
   and it did not fix my issue with the CSS class.*/

import Image from "next/image"
import GloboLogo from "../public/GloboLogo.png"

const Banner = () => {
    return (
        <header className="row mb-4">
            <div className="col-5">
                <Image 
                    src={GloboLogo} 
                    alt="logo" 
                    className="logo"
                />
                {/* <img src="./GloboLogo.png" alt="logo" className="logo"/> */}
            </div>
            <div className="col-7 mt-5">
                Providing houses all over the world!
            </div>
        </header>
    )
}

export default Banner