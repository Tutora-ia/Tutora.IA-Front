'use client'

import styles from './ProgressBar.css';
import Image from 'next/image';
import capeloNivel from "./assets/capeloNivel.png";

export default function ProgressBar() {
    return(
        <div className='containerNivel'>
            <div className='containerImage'>
                <Image
                    src={capeloNivel}
                    alt= "capelo Roxo de nivel"
                    className="ImageNivel"
                    fill={true}
                    priority={false}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="progressBar" data-label="100/100"></div>
        </div>
    )
}