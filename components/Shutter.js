import { useEffect } from 'react';


const Shutter = () => {

    useEffect(() => {
        const t = document.getElementsByClassName('shutter-top')[0];
        const b = document.getElementsByClassName('shutter-bottom')[0];
        t.style.height = 0;
        b.style.height = 0;
    })

    return (
        <>
            <div className="shutter">
              <div className="shutter-top"></div>
              <div className="shutter-bottom"></div>
            </div>
        </>
    )
}

export default Shutter;