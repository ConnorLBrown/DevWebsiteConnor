import React from 'react';
import Image from 'next/image';
import MyLogo from "../../../public/CB.png";

const BioPic = () => {
    return (
      <div className="relative" style={{ width: '25%', paddingTop: '25%', }}>
       <div className="absolute inset-0 bg-white overflow-hidden" style={{ border: '3pt solid #6366f1', borderRadius: '10px'}}>
          <div className="relative w-full h-full">
            <Image src={MyLogo} layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    );
};

export default BioPic; 