import React from 'react';
import Image from 'next/image';
import MyLogo from "../../../public/Connor.svg";

const BioPic = () => {
    return (
      <div className="relative" style={{ width: '50%', paddingTop: '50%', }}>
        <div className="absolute inset-0 rounded-full bg-white overflow-hidden" style={{ border: '3.5px solid white', borderRadius: '50%',}}>
          <div className="relative w-full h-full">
            <Image src={MyLogo} layout="fill" objectFit="cover" className="rounded-full" />
          </div>
        </div>
      </div>
    );
  };
  
  export default BioPic;
  
  
