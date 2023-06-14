/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import Image from 'next/image'
import prisma from '../img/prisma.svg'
import nxt from '../img/nxt.svg'
import trpc from '../img/trpc.svg'

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <p>Techlonogies Used</p>
        </div> 
        <div>
          <div className="grid grid-flow-col gap-4">
            <Image src={prisma} className="w-10" alt="" />
            <Image src={nxt} className="w-10" alt="" />
            <Image src={trpc} className="w-10" alt="" />
      
          </div>
        </div> 
        <div>
          <p>Copyright © 2023 - All right reserved by Salman</p>
        </div>
      </footer>
    );
};

export default Footer;