import React from 'react';
import Image from 'next/image';
import MyLogo from "../../../public/CB.png";

const BioPic = () => {
  return (
    <div className="relative" style={{ width: '66.666%', paddingTop: '66.666%' }}>
      <div className="absolute inset-0 bg-white overflow-hidden" style={{ border: '1.5pt solid slate', borderRadius: '10px'}}>
        <div className="relative w-full h-full">
          <Image src={MyLogo} layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default BioPic;
