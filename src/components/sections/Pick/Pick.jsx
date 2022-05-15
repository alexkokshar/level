import React, { useState } from 'react';

import HitProgram from './Programs/HitProgram/HitProgram';
import DetoxProgram from './Programs/DetoxProgram/DetoxProgram';
import Losing750 from './Programs/Losing750/Losing750';
import Losing1000 from './Programs/Losing1000/Losing1000';
import Losing1500 from './Programs/Losing1500/Losing1500';
import Balance2000 from './Programs/Balance2000/Balance2000';
import Increase2500 from './Programs/Increase2500/Increase2500';
import Increase3500 from './Programs/Increase3500/Increase3500';
import './Pick.scss';

function Pick() {
  const [activeTab, setActiveTab] = useState(6);

  return (
    <div className="pick" id="pick">
      <h2 className="pick__title">Выберите программу</h2>
      <div className="pick__tabs">
        <div
          className={`pick__tab tab-hit ${activeTab === 1 && 'tab-active'}`}
          onClick={() => setActiveTab(1)}
        >
          <div className="pick__tab-name reg">Хит</div>
          <div className="pick__tab-calories">
            <svg
              data-v-1d1cbe21=""
              data-v-1a7616d6=""
              width="53"
              height="22"
              viewBox="0 0 53 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                data-v-1d1cbe21=""
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5 20.32C15.3712 20.32 19.32 16.3712 19.32 11.5C19.32 6.62885 15.3712 2.68 10.5 2.68C5.62885 2.68 1.68 6.62885 1.68 11.5C1.68 16.3712 5.62885 20.32 10.5 20.32ZM10.5 22C16.299 22 21 17.299 21 11.5C21 5.70101 16.299 1 10.5 1C4.70101 1 0 5.70101 0 11.5C0 17.299 4.70101 22 10.5 22Z"
                fill="black"
              ></path>{' '}
              <path
                data-v-1d1cbe21=""
                d="M52.4785 11.917V12.2861H45.5605V12.0811L50.3115 5.04688H50.6533L49.8125 6.43457L46.1348 11.917H52.4785ZM50.7559 5.04688V15H50.3867V5.04688H50.7559Z"
                fill="black"
              ></path>{' '}
              <path
                data-v-1d1cbe21=""
                d="M52.4785 11.917H53.1785V11.217H52.4785V11.917ZM52.4785 12.2861V12.9861H53.1785V12.2861H52.4785ZM45.5605 12.2861H44.8605V12.9861H45.5605V12.2861ZM45.5605 12.0811L44.9805 11.6893L44.8605 11.8668V12.0811H45.5605ZM50.3115 5.04688V4.34688H49.9396L49.7314 4.65508L50.3115 5.04688ZM50.6533 5.04688L51.252 5.40962L51.8959 4.34688H50.6533V5.04688ZM49.8125 6.43457L50.3938 6.82453L50.4028 6.81112L50.4112 6.79732L49.8125 6.43457ZM46.1348 11.917L45.5534 11.527L44.8223 12.617H46.1348V11.917ZM50.7559 5.04688H51.4559V4.34688H50.7559V5.04688ZM50.7559 15V15.7H51.4559V15H50.7559ZM50.3867 15H49.6867V15.7H50.3867V15ZM50.3867 5.04688V4.34688H49.6867V5.04688H50.3867ZM51.7785 11.917V12.2861H53.1785V11.917H51.7785ZM52.4785 11.5861H45.5605V12.9861H52.4785V11.5861ZM46.2605 12.2861V12.0811H44.8605V12.2861H46.2605ZM46.1406 12.4729L50.8916 5.43867L49.7314 4.65508L44.9805 11.6893L46.1406 12.4729ZM50.3115 5.74687H50.6533V4.34688H50.3115V5.74687ZM50.0546 4.68413L49.2138 6.07182L50.4112 6.79732L51.252 5.40962L50.0546 4.68413ZM49.2312 6.04461L45.5534 11.527L46.7161 12.307L50.3938 6.82453L49.2312 6.04461ZM46.1348 12.617H52.4785V11.217H46.1348V12.617ZM50.0559 5.04688V15H51.4559V5.04688H50.0559ZM50.7559 14.3H50.3867V15.7H50.7559V14.3ZM51.0867 15V5.04688H49.6867V15H51.0867ZM50.3867 5.74687H50.7559V4.34688H50.3867V5.74687Z"
                fill="black"
              ></path>{' '}
              <g data-v-1d1cbe21="">
                <path
                  data-v-1d1cbe21=""
                  d="M31.0703 14.0078L30.7656 13.7188L36.8516 7.5L37.1562 7.80469L31.0703 14.0078ZM37.0703 14.0078L30.9766 7.80469L31.2812 7.5L37.375 13.7188L37.0703 14.0078Z"
                  fill="black"
                ></path>{' '}
                <path
                  data-v-1d1cbe21=""
                  d="M31.0703 14.0078L30.3821 14.7333L31.0954 15.4101L31.7841 14.7081L31.0703 14.0078ZM30.7656 13.7188L30.0509 13.0193L29.3406 13.7452L30.0774 14.4442L30.7656 13.7188ZM36.8516 7.5L37.5587 6.79289L36.8439 6.07811L36.1369 6.80057L36.8516 7.5ZM37.1562 7.80469L37.8701 8.50502L38.5638 7.79798L37.8634 7.09758L37.1562 7.80469ZM37.0703 14.0078L36.3569 14.7086L37.0456 15.4097L37.7586 14.7333L37.0703 14.0078ZM30.9766 7.80469L30.2695 7.09758L29.5686 7.79843L30.2632 8.50548L30.9766 7.80469ZM31.2812 7.5L31.9955 6.80011L31.2885 6.07857L30.5741 6.79289L31.2812 7.5ZM37.375 13.7188L38.0633 14.4442L38.8005 13.7447L38.0892 13.0189L37.375 13.7188ZM31.7586 13.2823L31.4539 12.9933L30.0774 14.4442L30.3821 14.7333L31.7586 13.2823ZM31.4803 14.4182L37.5663 8.19943L36.1369 6.80057L30.0509 13.0193L31.4803 14.4182ZM36.1445 8.20711L36.4491 8.51179L37.8634 7.09758L37.5587 6.79289L36.1445 8.20711ZM36.4424 7.10436L30.3565 13.3075L31.7841 14.7081L37.8701 8.50502L36.4424 7.10436ZM37.7837 13.307L31.6899 7.1039L30.2632 8.50548L36.3569 14.7086L37.7837 13.307ZM31.6837 8.51179L31.9884 8.20711L30.5741 6.79289L30.2695 7.09758L31.6837 8.51179ZM30.567 8.19989L36.6608 14.4186L38.0892 13.0189L31.9955 6.80011L30.567 8.19989ZM36.6867 12.9933L36.3821 13.2823L37.7586 14.7333L38.0633 14.4442L36.6867 12.9933Z"
                  fill="black"
                ></path>
              </g>{' '}
              <path
                data-v-1d1cbe21=""
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5 7.22221C8.13741 7.22221 6.22218 9.13744 6.22218 11.5C6.22218 13.8625 8.13741 15.7778 10.5 15.7778C12.8625 15.7778 14.7777 13.8625 14.7777 11.5C14.7777 10.6243 14.5154 9.81216 14.0652 9.13508C13.8274 8.77737 13.9246 8.29459 14.2823 8.05676C14.64 7.81893 15.1228 7.9161 15.3606 8.2738C15.9752 9.19817 16.3333 10.3084 16.3333 11.5C16.3333 14.7217 13.7216 17.3333 10.5 17.3333C7.2783 17.3333 4.66663 14.7217 4.66663 11.5C4.66663 8.27833 7.2783 5.66666 10.5 5.66666C10.9295 5.66666 11.2777 6.01488 11.2777 6.44443C11.2777 6.87399 10.9295 7.22221 10.5 7.22221Z"
                fill="black"
              ></path>{' '}
              <path
                data-v-1d1cbe21=""
                d="M13.5 7C13.5 7.41421 13.1642 7.75 12.75 7.75C12.3358 7.75 12 7.41421 12 7C12 6.58579 12.3358 6.25 12.75 6.25C13.1642 6.25 13.5 6.58579 13.5 7Z"
                fill="black"
              ></path>
            </svg>
          </div>
        </div>
        <div
          className={`pick__tab tab-detox ${activeTab === 2 && 'tab-active'}`}
          onClick={() => setActiveTab(2)}
        >
          <div className="pick__tab-name reg">Detox</div>
          <div className="pick__tab-calories">
            <svg
              data-v-0c771669=""
              data-v-1a7616d6=""
              width="39"
              height="21"
              viewBox="0 0 39 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                data-v-0c771669=""
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.1687 16.4453C11.6278 16.4453 12 16.8214 12 17.2853V19.32C12 20.2478 11.2556 21 10.3373 21H1.66265C0.744394 21 0 20.2478 0 19.32V7.77188C0 7.33271 0.170194 6.911 0.474131 6.59706L1.55422 5.48146V2.52C1.55422 1.12824 2.67081 0 4.04819 0H7.95181C9.32919 0 10.4458 1.12824 10.4458 2.52V5.48145L11.5259 6.59706C11.8298 6.911 12 7.33271 12 7.77188V11.34C12 11.8039 11.6278 12.18 11.1687 12.18C10.7095 12.18 10.3373 11.8039 10.3373 11.34V7.77188L9.24668 6.64533H2.75332L1.66265 7.77188V19.32L10.3373 19.32V17.2853C10.3373 16.8214 10.7095 16.4453 11.1687 16.4453ZM8.78313 4.96533V2.52C8.78313 2.05608 8.41094 1.68 7.95181 1.68H4.04819C3.58906 1.68 3.21687 2.05608 3.21687 2.52V4.96533H8.78313Z"
                fill="black"
              ></path>{' '}
              <path
                data-v-0c771669=""
                d="M12 14C12 14.5523 11.5523 15 11 15C10.4477 15 10 14.5523 10 14C10 13.4477 10.4477 13 11 13C11.5523 13 12 13.4477 12 14Z"
                fill="black"
              ></path>{' '}
              <path
                data-v-0c771669=""
                d="M38.0273 13.4092C38.0273 14.0107 37.8861 14.5143 37.6035 14.9199C37.321 15.3255 36.9404 15.6309 36.4619 15.8359C35.9834 16.0365 35.4502 16.1367 34.8623 16.1367C34.2653 16.1367 33.7253 16.0365 33.2422 15.8359C32.7637 15.6309 32.3831 15.3255 32.1006 14.9199C31.8226 14.5143 31.6836 14.0107 31.6836 13.4092C31.6836 13.0173 31.7633 12.6595 31.9229 12.3359C32.0869 12.0124 32.3125 11.7344 32.5996 11.502C32.8867 11.2695 33.2217 11.0895 33.6045 10.9619C33.9873 10.8343 34.402 10.7705 34.8486 10.7705C35.4365 10.7705 35.9697 10.8822 36.4482 11.1055C36.9313 11.3288 37.3141 11.6387 37.5967 12.0352C37.8838 12.4271 38.0273 12.8851 38.0273 13.4092ZM37.6514 13.4434C37.6514 12.9648 37.526 12.5501 37.2754 12.1992C37.0247 11.8483 36.6875 11.5771 36.2637 11.3857C35.8398 11.1898 35.3682 11.0918 34.8486 11.0918C34.3245 11.0918 33.8506 11.1898 33.4268 11.3857C33.0029 11.5771 32.668 11.8483 32.4219 12.1992C32.1758 12.5501 32.0527 12.9648 32.0527 13.4434C32.0527 13.9447 32.1758 14.3685 32.4219 14.7148C32.668 15.0612 33.0029 15.3232 33.4268 15.501C33.8551 15.6787 34.3337 15.7676 34.8623 15.7676C35.3818 15.7676 35.8512 15.6787 36.2705 15.501C36.6943 15.3232 37.0293 15.0612 37.2754 14.7148C37.526 14.3685 37.6514 13.9447 37.6514 13.4434ZM37.7402 8.57617C37.7402 9.0638 37.6104 9.49447 37.3506 9.86816C37.0908 10.2419 36.7422 10.5335 36.3047 10.7432C35.8717 10.9528 35.3864 11.0576 34.8486 11.0576C34.3018 11.0576 33.8096 10.9528 33.3721 10.7432C32.9391 10.5335 32.5951 10.2419 32.3398 9.86816C32.0892 9.49447 31.9639 9.0638 31.9639 8.57617C31.9639 7.9974 32.0892 7.51204 32.3398 7.12012C32.5951 6.72363 32.9391 6.42285 33.3721 6.21777C33.805 6.0127 34.2926 5.91016 34.835 5.91016C35.3727 5.91016 35.8604 6.0127 36.2979 6.21777C36.7354 6.42285 37.084 6.72363 37.3438 7.12012C37.6081 7.51204 37.7402 7.9974 37.7402 8.57617ZM37.3711 8.54199C37.3711 8.09993 37.2572 7.71029 37.0293 7.37305C36.8014 7.03125 36.4961 6.76465 36.1133 6.57324C35.7305 6.37728 35.3044 6.2793 34.835 6.2793C34.361 6.2793 33.9349 6.37044 33.5566 6.55273C33.1784 6.73503 32.8799 6.99479 32.6611 7.33203C32.4424 7.66927 32.333 8.07259 32.333 8.54199C32.333 8.99316 32.4424 9.38281 32.6611 9.71094C32.8799 10.0345 33.1784 10.2852 33.5566 10.4629C33.9395 10.6361 34.3701 10.7227 34.8486 10.7227C35.318 10.7227 35.7419 10.6361 36.1201 10.4629C36.5029 10.2852 36.806 10.0345 37.0293 9.71094C37.2572 9.38281 37.3711 8.99316 37.3711 8.54199Z"
                fill="black"
              ></path>{' '}
              <path
                data-v-0c771669=""
                d="M36.4619 15.8359L36.7325 16.4816L36.7377 16.4793L36.4619 15.8359ZM33.2422 15.8359L32.9664 16.4794L32.9738 16.4825L33.2422 15.8359ZM32.1006 14.9199L31.5232 15.3157L31.5262 15.32L32.1006 14.9199ZM31.9229 12.3359L31.2985 12.0194L31.295 12.0264L31.9229 12.3359ZM36.4482 11.1055L36.1522 11.7398L36.1545 11.7409L36.4482 11.1055ZM37.5967 12.0352L37.0266 12.4414L37.032 12.4488L37.5967 12.0352ZM37.2754 12.1992L36.7058 12.6061L37.2754 12.1992ZM36.2637 11.3857L35.9699 12.0211L35.9756 12.0237L36.2637 11.3857ZM33.4268 11.3857L33.7149 12.0237L33.7205 12.0211L33.4268 11.3857ZM32.4219 12.1992L32.995 12.6011L32.4219 12.1992ZM33.4268 15.501L33.156 16.1465L33.1585 16.1475L33.4268 15.501ZM36.2705 15.501L35.9998 14.8554L35.9973 14.8565L36.2705 15.501ZM37.2754 14.7148L36.7083 14.3044L36.7048 14.3094L37.2754 14.7148ZM36.3047 10.7432L36.0022 10.1119L35.9996 10.1131L36.3047 10.7432ZM33.3721 10.7432L33.067 11.3732L33.0696 11.3744L33.3721 10.7432ZM32.3398 9.86816L31.7585 10.2581L31.7618 10.2629L32.3398 9.86816ZM32.3398 7.12012L31.7512 6.74124L31.7501 6.74297L32.3398 7.12012ZM37.3438 7.12012L36.7582 7.50377L36.7634 7.51152L37.3438 7.12012ZM37.0293 7.37305L36.4469 7.76134L36.4493 7.76495L37.0293 7.37305ZM36.1133 6.57324L35.7943 7.19637L35.8002 7.19934L36.1133 6.57324ZM32.6611 9.71094L32.0787 10.0992L32.0812 10.103L32.6611 9.71094ZM33.5566 10.4629L33.2589 11.0965L33.2681 11.1007L33.5566 10.4629ZM36.1201 10.4629L36.4115 11.0994L36.4149 11.0978L36.1201 10.4629ZM37.0293 9.71094L36.4543 9.31166L36.4532 9.31333L37.0293 9.71094ZM37.3273 13.4092C37.3273 13.8992 37.2136 14.255 37.0291 14.5198L38.1779 15.32C38.5586 14.7736 38.7273 14.1223 38.7273 13.4092H37.3273ZM37.0291 14.5198C36.8255 14.8121 36.5511 15.0362 36.1862 15.1925L36.7377 16.4793C37.3298 16.2256 37.8164 15.8389 38.1779 15.32L37.0291 14.5198ZM36.1914 15.1903C35.8092 15.3505 35.3696 15.4367 34.8623 15.4367V16.8367C35.5308 16.8367 36.1576 16.7224 36.7325 16.4815L36.1914 15.1903ZM34.8623 15.4367C34.3445 15.4367 33.8974 15.35 33.5106 15.1894L32.9738 16.4825C33.5531 16.7229 34.1861 16.8367 34.8623 16.8367V15.4367ZM33.5179 15.1925C33.153 15.0362 32.8786 14.8121 32.675 14.5198L31.5262 15.32C31.8877 15.8389 32.3743 16.2256 32.9664 16.4793L33.5179 15.1925ZM32.678 14.5242C32.4962 14.2589 32.3836 13.9014 32.3836 13.4092H30.9836C30.9836 14.1201 31.149 14.7697 31.5232 15.3157L32.678 14.5242ZM32.3836 13.4092C32.3836 13.1151 32.4427 12.8646 32.5507 12.6454L31.295 12.0264C31.084 12.4544 30.9836 12.9194 30.9836 13.4092H32.3836ZM32.5472 12.6525C32.6658 12.4185 32.8281 12.2176 33.04 12.046L32.1592 10.9579C31.7969 11.2512 31.508 11.6062 31.2985 12.0194L32.5472 12.6525ZM33.04 12.046C33.2561 11.8711 33.5153 11.7295 33.8259 11.626L33.3831 10.2978C32.9281 10.4495 32.5173 10.668 32.1592 10.9579L33.04 12.046ZM33.8259 11.626C34.1301 11.5246 34.4693 11.4705 34.8486 11.4705V10.0705C34.3348 10.0705 33.8445 10.144 33.3831 10.2978L33.8259 11.626ZM34.8486 11.4705C35.3459 11.4705 35.7764 11.5644 36.1522 11.7398L36.7443 10.4711C36.163 10.1999 35.5271 10.0705 34.8486 10.0705V11.4705ZM36.1545 11.7409C36.5377 11.918 36.8212 12.1531 37.0266 12.4414L38.1667 11.6289C37.8071 11.1242 37.3249 10.7396 36.742 10.4701L36.1545 11.7409ZM37.032 12.4488C37.2241 12.7111 37.3273 13.0215 37.3273 13.4092H38.7273C38.7273 12.7487 38.5434 12.143 38.1614 11.6215L37.032 12.4488ZM38.3514 13.4434C38.3514 12.8357 38.1897 12.2749 37.845 11.7924L36.7058 12.6061C36.8624 12.8253 36.9514 13.094 36.9514 13.4434H38.3514ZM37.845 11.7924C37.517 11.3331 37.0791 10.9859 36.5518 10.7478L35.9756 12.0237C36.2959 12.1684 36.5325 12.3635 36.7058 12.6061L37.845 11.7924ZM36.5574 10.7504C36.0316 10.5073 35.4581 10.3918 34.8486 10.3918V11.7918C35.2782 11.7918 35.6481 11.8723 35.9699 12.0211L36.5574 10.7504ZM34.8486 10.3918C34.2356 10.3918 33.6596 10.5069 33.133 10.7504L33.7205 12.0211C34.0416 11.8727 34.4135 11.7918 34.8486 11.7918V10.3918ZM33.1386 10.7478C32.6104 10.9863 32.173 11.3349 31.8488 11.7973L32.995 12.6011C33.1629 12.3617 33.3954 12.168 33.7149 12.0237L33.1386 10.7478ZM31.8488 11.7973C31.5106 12.2795 31.3527 12.8385 31.3527 13.4434H32.7527C32.7527 13.0912 32.841 12.8208 32.995 12.6011L31.8488 11.7973ZM31.3527 13.4434C31.3527 14.0631 31.5067 14.6353 31.8512 15.1203L32.9925 14.3094C32.8449 14.1016 32.7527 13.8262 32.7527 13.4434H31.3527ZM31.8512 15.1203C32.1791 15.5818 32.622 15.9226 33.156 16.1465L33.6975 14.8554C33.3838 14.7239 33.1568 14.5406 32.9925 14.3094L31.8512 15.1203ZM33.1585 16.1475C33.683 16.3651 34.2544 16.4676 34.8623 16.4676V15.0676C34.4129 15.0676 34.0273 14.9923 33.695 14.8544L33.1585 16.1475ZM34.8623 16.4676C35.4626 16.4676 36.0267 16.3646 36.5437 16.1455L35.9973 14.8565C35.6758 14.9928 35.3011 15.0676 34.8623 15.0676V16.4676ZM36.5412 16.1465C37.0752 15.9226 37.5181 15.5818 37.846 15.1203L36.7048 14.3094C36.5405 14.5406 36.3134 14.7239 35.9998 14.8554L36.5412 16.1465ZM37.8425 15.1252C38.1937 14.6399 38.3514 14.0658 38.3514 13.4434H36.9514C36.9514 13.8235 36.8584 14.0971 36.7083 14.3045L37.8425 15.1252ZM37.0402 8.57617C37.0402 8.93172 36.9481 9.22074 36.7758 9.46862L37.9254 10.2677C38.2726 9.76819 38.4402 9.19588 38.4402 8.57617H37.0402ZM36.7758 9.46862C36.5898 9.73623 36.3379 9.95105 36.0022 10.1119L36.6072 11.3744C37.1465 11.116 37.5919 10.7475 37.9254 10.2677L36.7758 9.46862ZM35.9996 10.1131C35.6725 10.2715 35.2933 10.3576 34.8486 10.3576V11.7576C35.4795 11.7576 36.071 11.6341 36.6098 11.3732L35.9996 10.1131ZM34.8486 10.3576C34.3931 10.3576 34.0063 10.2708 33.6746 10.1119L33.0696 11.3744C33.6129 11.6348 34.2105 11.7576 34.8486 11.7576V10.3576ZM33.6771 10.1131C33.347 9.95327 33.0998 9.7398 32.9179 9.47339L31.7618 10.2629C32.0903 10.7439 32.5313 11.1138 33.067 11.3732L33.6771 10.1131ZM32.9212 9.47824C32.7544 9.22957 32.6639 8.9371 32.6639 8.57617H31.2639C31.2639 9.19051 31.424 9.75936 31.7585 10.2581L32.9212 9.47824ZM32.6639 8.57617C32.6639 8.09847 32.7667 7.75195 32.9296 7.49726L31.7501 6.74297C31.4117 7.27213 31.2639 7.89632 31.2639 8.57617H32.6639ZM32.9284 7.49899C33.1117 7.21424 33.3549 7.00046 33.6717 6.85039L33.0724 5.58516C32.5233 5.84524 32.0784 6.23302 31.7512 6.74125L32.9284 7.49899ZM33.6717 6.85039C33.9993 6.69521 34.3826 6.61016 34.835 6.61016V5.21016C34.2027 5.21016 33.6107 5.33018 33.0724 5.58516L33.6717 6.85039ZM34.835 6.61016C35.2817 6.61016 35.6663 6.6948 36.0007 6.85159L36.595 5.58395C36.0544 5.33059 35.4637 5.21016 34.835 5.21016V6.61016ZM36.0007 6.85159C36.3232 7.00273 36.571 7.21796 36.7582 7.50374L37.9293 6.7365C37.597 6.2293 37.1475 5.84297 36.595 5.58395L36.0007 6.85159ZM36.7634 7.51152C36.9338 7.76413 37.0402 8.10528 37.0402 8.57617H38.4402C38.4402 7.88951 38.2824 7.25996 37.9241 6.72872L36.7634 7.51152ZM38.0711 8.54199C38.0711 7.97285 37.9221 7.44413 37.6093 6.98115L36.4493 7.76495C36.5922 7.97644 36.6711 8.22702 36.6711 8.54199H38.0711ZM37.6117 6.98476C37.3134 6.53727 36.9133 6.19065 36.4263 5.94714L35.8002 7.19934C36.0788 7.33865 36.2895 7.52523 36.4469 7.76134L37.6117 6.98476ZM36.4323 5.95014C35.9419 5.69912 35.4049 5.5793 34.835 5.5793V6.9793C35.2038 6.9793 35.519 7.05543 35.7943 7.19635L36.4323 5.95014ZM34.835 5.5793C34.2694 5.5793 33.7373 5.6886 33.2527 5.92214L33.8605 7.18333C34.1324 7.05229 34.4526 6.9793 34.835 6.9793V5.5793ZM33.2527 5.92214C32.7643 6.15752 32.3656 6.50134 32.0739 6.9511L33.2484 7.71297C33.3942 7.48825 33.5924 7.31253 33.8605 7.18333L33.2527 5.92214ZM32.0739 6.9511C31.7699 7.41974 31.633 7.96054 31.633 8.54199H33.033C33.033 8.18465 33.1149 7.91881 33.2484 7.71297L32.0739 6.9511ZM31.633 8.54199C31.633 9.11086 31.7727 9.64017 32.0787 10.0992L33.2436 9.32265C33.1121 9.12546 33.033 8.87547 33.033 8.54199H31.633ZM32.0812 10.103C32.3755 10.5383 32.7749 10.869 33.259 11.0964L33.8543 9.82934C33.5819 9.70133 33.3842 9.53067 33.241 9.31889L32.0812 10.103ZM33.2681 11.1007C33.7534 11.3202 34.2844 11.4227 34.8486 11.4227V10.0227C34.4558 10.0227 34.1255 9.95195 33.8452 9.82512L33.2681 11.1007ZM34.8486 11.4227C35.4057 11.4227 35.9307 11.3195 36.4115 11.0994L35.8287 9.82642C35.553 9.95267 35.2304 10.0227 34.8486 10.0227V11.4227ZM36.4149 11.0978C36.9023 10.8715 37.306 10.5424 37.6054 10.1085L36.4532 9.31333C36.306 9.52656 36.1035 9.69883 35.8253 9.82798L36.4149 11.0978ZM37.6043 10.1102C37.9238 9.65004 38.0711 9.11672 38.0711 8.54199H36.6711C36.6711 8.86961 36.5905 9.11559 36.4543 9.31166L37.6043 10.1102Z"
                fill="black"
              ></path>{' '}
              <g data-v-0c771669="">
                <path
                  data-v-0c771669=""
                  d="M18.0703 14.0078L17.7656 13.7188L23.8516 7.5L24.1562 7.80469L18.0703 14.0078ZM24.0703 14.0078L17.9766 7.80469L18.2812 7.5L24.375 13.7188L24.0703 14.0078Z"
                  fill="black"
                ></path>{' '}
                <path
                  data-v-0c771669=""
                  d="M18.0703 14.0078L17.3821 14.7333L18.0954 15.4101L18.7841 14.7081L18.0703 14.0078ZM17.7656 13.7188L17.0509 13.0193L16.3406 13.7452L17.0774 14.4442L17.7656 13.7188ZM23.8516 7.5L24.5587 6.79289L23.8439 6.07811L23.1369 6.80057L23.8516 7.5ZM24.1562 7.80469L24.8701 8.50502L25.5638 7.79798L24.8634 7.09758L24.1562 7.80469ZM24.0703 14.0078L23.3569 14.7086L24.0456 15.4097L24.7586 14.7333L24.0703 14.0078ZM17.9766 7.80469L17.2695 7.09758L16.5686 7.79843L17.2632 8.50548L17.9766 7.80469ZM18.2812 7.5L18.9955 6.80011L18.2885 6.07857L17.5741 6.79289L18.2812 7.5ZM24.375 13.7188L25.0633 14.4442L25.8005 13.7447L25.0892 13.0189L24.375 13.7188ZM18.7586 13.2823L18.4539 12.9933L17.0774 14.4442L17.3821 14.7333L18.7586 13.2823ZM18.4803 14.4182L24.5663 8.19943L23.1369 6.80057L17.0509 13.0193L18.4803 14.4182ZM23.1445 8.20711L23.4491 8.51179L24.8634 7.09758L24.5587 6.79289L23.1445 8.20711ZM23.4424 7.10436L17.3565 13.3075L18.7841 14.7081L24.8701 8.50502L23.4424 7.10436ZM24.7837 13.307L18.6899 7.1039L17.2632 8.50548L23.3569 14.7086L24.7837 13.307ZM18.6837 8.51179L18.9884 8.20711L17.5741 6.79289L17.2695 7.09758L18.6837 8.51179ZM17.567 8.19989L23.6608 14.4186L25.0892 13.0189L18.9955 6.80011L17.567 8.19989ZM23.6867 12.9933L23.3821 13.2823L24.7586 14.7333L25.0633 14.4442L23.6867 12.9933Z"
                  fill="black"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div
          className={`pick__tab tab-losing ${activeTab === 3 && 'tab-active'}`}
          onClick={() => setActiveTab(3)}
        >
          <div className="pick__tab-name reg">Снижение</div>
          <div className="pick__tab-calories">750 ккал</div>
        </div>
        <div
          className={`pick__tab tab-losing ${activeTab === 4 && 'tab-active'}`}
          onClick={() => setActiveTab(4)}
        >
          <div className="pick__tab-name reg">Снижение</div>
          <div className="pick__tab-calories">1000 ккал</div>
        </div>
        <div
          className={`pick__tab tab-losing ${activeTab === 5 && 'tab-active'}`}
          onClick={() => setActiveTab(5)}
        >
          <div className="pick__tab-name reg">Снижение</div>
          <div className="pick__tab-calories">1500 ккал</div>
        </div>
        <div
          className={`pick__tab tab-balans ${activeTab === 6 && 'tab-active'}`}
          onClick={() => setActiveTab(6)}
        >
          <div className="pick__tab-name reg">Баланс</div>
          <div className="pick__tab-calories">2000 ккал</div>
        </div>
        <div
          className={`pick__tab tab-increase ${activeTab === 7 && 'tab-active'}`}
          onClick={() => setActiveTab(7)}
        >
          <div className="pick__tab-name reg">Набор</div>
          <div className="pick__tab-calories">2500 ккал</div>
        </div>
        <div
          className={`pick__tab tab-increase ${activeTab === 8 && 'tab-active'}`}
          onClick={() => setActiveTab(8)}
        >
          <div className="pick__tab-name reg">Набор</div>
          <div className="pick__tab-calories">3500 ккал</div>
        </div>
      </div>
      <div style={{ display: activeTab === 1 ? 'block' : 'none' }}>
        <HitProgram />
      </div>
      <div style={{ display: activeTab === 2 ? 'block' : 'none' }}>
        <DetoxProgram />
      </div>
      <div style={{ display: activeTab === 3 ? 'block' : 'none' }}>
        <Losing750 />
      </div>
      <div style={{ display: activeTab === 4 ? 'block' : 'none' }}>
        <Losing1000 />
      </div>
      <div style={{ display: activeTab === 5 ? 'block' : 'none' }}>
        <Losing1500 />
      </div>
      <div style={{ display: activeTab === 6 ? 'block' : 'none' }}>
        <Balance2000 />
      </div>
      <div style={{ display: activeTab === 7 ? 'block' : 'none' }}>
        <Increase2500 />
      </div>
      <div style={{ display: activeTab === 8 ? 'block' : 'none' }}>
        <Increase3500 />
      </div>
    </div>
  );
}

export default Pick;
