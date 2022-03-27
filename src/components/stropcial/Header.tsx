import { Account } from "../Account";
import { Balance } from "../Balance";
import { ChainId } from "../ChainId";
import { ConnectButton } from "./MetaHandle";

export const Hero = function () {
    

    return( 
        <div className="header">
            <p className="btn btn-ghost btn-sm rounded-btn vfont">
                GITHUB
            </p>
            <br />
            <p className="btn btn-ghost btn-sm rounded-btn vfont">
                INSTA
            </p>
            <div className="flex items-stretch">
                <Account />
                <Balance />
                <ConnectButton />
            </div>
        </div>
    )
}

export default Hero;