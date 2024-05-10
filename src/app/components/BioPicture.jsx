import React from 'react';
import Image from 'next/image';
import MyLogo from "../../../public/CB.png";

const BioPic = () => {
  return (
    <div className="relative" style={{ width: '66.666%', paddingTop: '66.666%' }}>
      <div className="absolute inset-0 overflow-hidden" style={{ border: '1.5pt solid black', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <div className="relative w-full h-full" style={{ borderRadius: '8px' }}>
          <Image src={MyLogo} layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default BioPic;
