import bgTopMobile from "../images/bg-pattern-top-mobile.svg"
import bgBottomMobile from "../images/bg-pattern-bottom-mobile.svg"

import bgTopDesktop from "../images/bg-pattern-top-desktop.svg"
import bgBottomDesktop from "../images/bg-pattern-bottom-desktop.svg"

export const Background = () => {
  return (
    <div>
        <picture className="absolute top-0 left-0 -z-1">
            <source media="(max-width: 375px)" src={bgTopMobile} />
            <source media="(min-width: 376px)" src={bgTopDesktop} />
            <img src={bgTopMobile} alt="" />
        </picture>
        <picture className="absolute bottom-0 right-0 -z-1">
            <source media="(max-width: 375px)" src={bgBottomMobile} />
            <source media="(min-width: 376px)" src={bgBottomDesktop} />
            <img src={bgBottomMobile} alt="" />
        </picture>
    </div>
    
  )
}
