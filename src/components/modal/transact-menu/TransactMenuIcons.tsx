import {useTheme} from '@react-navigation/native';
import React from 'react';
import * as Svg from 'react-native-svg';
import {
  Action,
  Midnight,
  NeutralSlate,
  ProgressBlue,
} from '../../../styles/colors';
import {BitPayTheme} from '../../../themes/bitpay';

const BuyCrypto = () => {
  const theme = useTheme();

  return (
    <Svg.Svg width="46" height="46" viewBox="0 0 46 46" fill="none">
      <Svg.G clipPath="url(#clip0)">
        <Svg.Circle
          cx="22.6449"
          cy="22.6449"
          r="22.6449"
          fill={theme.dark ? Midnight : NeutralSlate}
        />
        <Svg.Path
          fill={Action}
          d="M23.9638 31.2152H22.4459V29.3178C21.7518 29.2464 21.0966 29.0518 20.4803 28.7339C19.8641 28.4096 19.3614 27.9296 18.9722 27.2939C18.5829 26.6582 18.3883 25.8311 18.3883 24.8127H20.8014C20.8014 25.4743 20.9182 25.9933 21.1517 26.3695C21.3853 26.7392 21.6836 27.002 22.0469 27.1576C22.4102 27.3068 22.7832 27.3814 23.1659 27.3814C23.8794 27.3814 24.4243 27.2031 24.8006 26.8463C25.1768 26.4895 25.3649 26.0257 25.3649 25.4549C25.3649 24.897 25.193 24.4397 24.8492 24.0829C24.5054 23.7261 23.9086 23.3985 23.0589 23.1001C22.2221 22.8082 21.4955 22.4774 20.8793 22.1076C20.263 21.7379 19.783 21.2806 19.4392 20.7357C19.1019 20.1908 18.9332 19.5129 18.9332 18.7021C18.9332 17.6058 19.2673 16.7171 19.9354 16.036C20.6101 15.3484 21.5085 14.9429 22.6307 14.8197V12.7082H24.1584V14.8392C25.2611 14.9948 26.1304 15.4619 26.7661 16.2403C27.4083 17.0122 27.7294 18.0501 27.7294 19.354H25.326C25.326 18.5431 25.1444 17.9074 24.7811 17.4469C24.4243 16.9863 23.9313 16.756 23.3021 16.756C22.6275 16.756 22.1312 16.9409 21.8134 17.3106C21.502 17.6739 21.3463 18.1345 21.3463 18.6923C21.3463 19.2372 21.5117 19.6816 21.8426 20.0254C22.1799 20.3692 22.7961 20.7033 23.6913 21.0276C24.5281 21.3325 25.2514 21.673 25.8612 22.0493C26.4774 22.419 26.951 22.8731 27.2818 23.4115C27.6191 23.9499 27.7878 24.6245 27.7878 25.4354C27.7878 26.5706 27.4407 27.4723 26.7466 28.1404C26.0525 28.8021 25.1249 29.1945 23.9638 29.3178V31.2152Z"
        />
      </Svg.G>
    </Svg.Svg>
  );
};

const BuyGiftCard = () => {
  const theme = useTheme();

  return (
    <Svg.Svg width="46" height="46" viewBox="0 0 46 46" fill="none">
      <Svg.Circle
        cx="22.6449"
        cy="22.6449"
        r="22.6449"
        fill={theme.dark ? Midnight : NeutralSlate}
      />
      <Svg.Path
        fill={Action}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.3664 16.5312H28.4019C28.5425 16.2827 28.6245 15.995 28.6245 15.6875C28.6245 14.757 27.8865 14 26.9793 14C25.8914 14 25.2009 14.7228 24.7857 15.4178C24.3706 14.7228 23.6801 14 22.5922 14C21.685 14 20.947 14.757 20.947 15.6875C20.947 15.995 21.029 16.2827 21.1696 16.5312H18.2051C18.0535 16.5312 17.9309 16.6572 17.9309 16.8125V19.0625C17.9309 19.2178 18.0535 19.3438 18.2051 19.3438H31.3664C31.5179 19.3438 31.6406 19.2178 31.6406 19.0625V16.8125C31.6406 16.6572 31.5179 16.5312 31.3664 16.5312ZM26.9793 15.125C27.2816 15.125 27.5277 15.3773 27.5277 15.6875C27.5277 15.9977 27.2816 16.25 26.9793 16.25H25.585C25.8389 15.7352 26.286 15.125 26.9793 15.125ZM23.9867 16.25C23.7329 15.7354 23.2857 15.125 22.5922 15.125C22.2899 15.125 22.0438 15.3773 22.0438 15.6875C22.0438 15.9977 22.2899 16.25 22.5922 16.25H23.9867Z"
      />
      <Svg.Path
        fill={Action}
        d="M31.0869 28.0073C31.0762 27.9522 30.7985 26.6562 28.6245 26.6562H25.4337C25.5438 26.9273 25.6084 27.2126 25.6084 27.5C25.6084 27.6553 25.4857 27.7812 25.3342 27.7812H20.3987C20.2471 27.7812 20.1245 27.6553 20.1245 27.5C20.1245 27.3447 20.2471 27.2188 20.3987 27.2188H25.034C24.8855 26.4076 24.1253 25.6531 23.3314 25.5456C23.2678 25.5392 23.2044 25.5312 23.1406 25.5312H21.0893C20.3671 24.5314 18.9801 23.8438 17.6568 23.8438H14.9148C14.7633 23.8438 14.6406 23.9697 14.6406 24.125V28.0625C14.6406 28.1682 14.6985 28.2652 14.7906 28.3131L20.9433 31.5247C21.3268 31.7035 21.7276 31.793 22.1143 31.793C22.4541 31.7929 22.7832 31.7238 23.0793 31.5857L30.9211 28.3232C31.0432 28.2723 31.1129 28.1398 31.0869 28.0073Z"
      />
      <Svg.Path
        fill={Action}
        d="M21.3519 24.9688H23.1406C23.2118 24.9688 23.283 24.9752 23.354 24.9826L23.3842 24.9856C24.0668 25.0779 24.711 25.5102 25.1287 26.0938H28.6244C29.1776 26.0938 29.6253 26.1737 29.9954 26.2961V20.1875C29.9954 20.0322 29.8728 19.9062 29.7212 19.9062H19.8502C19.6987 19.9062 19.576 20.0322 19.576 20.1875V23.6927C20.2686 23.9886 20.8943 24.4268 21.3519 24.9688Z"
      />
    </Svg.Svg>
  );
};

const Close = () => {
  const theme = useTheme();

  return (
    <Svg.Svg width="37" height="37" viewBox="0 0 37 37" fill="none">
      <Svg.Rect
        width="36.2319"
        height="36.2319"
        rx="18.1159"
        fill={theme.dark ? Midnight : ProgressBlue}
      />
      <Svg.Path
        fill="white"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.9919 11.7109L24.5209 23.2399L23.2399 24.5208L11.711 12.9919L12.9919 11.7109Z"
      />
      <Svg.Path
        fill="white"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7109 23.2397L23.2399 11.7108L24.5208 12.9918L12.9919 24.5207L11.7109 23.2397Z"
      />
    </Svg.Svg>
  );
};

const Exchange = () => {
  const theme = useTheme();

  return (
    <Svg.Svg width="46" height="46" viewBox="0 0 46 46" fill="none">
      <Svg.Circle
        cx="22.6449"
        cy="22.6449"
        r="22.6449"
        fill={theme.dark ? Midnight : NeutralSlate}
      />
      <Svg.Path
        fill={Action}
        d="M14.048 22.5538C14.048 17.7366 18.0338 13.8172 22.9327 13.8172C25.1019 13.8172 27.1669 14.585 28.7883 15.9846L26.45 18.284C26.3574 18.375 26.3259 18.5101 26.3686 18.6317C26.4117 18.7534 26.5214 18.8401 26.6516 18.8552L32.4608 19.5272C32.4741 19.5289 32.4874 19.5296 32.5008 19.5296C32.591 19.5296 32.6781 19.4946 32.7423 19.4311C32.8162 19.3586 32.8524 19.2564 32.8401 19.1543L32.1566 13.4419C32.1413 13.3139 32.0531 13.206 31.9294 13.1637C31.8057 13.1217 31.668 13.1522 31.5757 13.2436L29.7557 15.0333C27.8746 13.3814 25.4655 12.4731 22.9327 12.4731C17.28 12.4731 12.6812 16.9953 12.6812 22.5538C12.6812 22.9248 12.9873 23.2258 13.3646 23.2258C13.7418 23.2258 14.048 22.9248 14.048 22.5538Z"
      />
      <Svg.Path
        fill={Action}
        d="M32.831 21.2095C32.4537 21.2095 32.1476 21.5105 32.1476 21.8815C32.1476 26.6991 28.1618 30.6181 23.2629 30.6181C21.0937 30.6181 19.0287 29.8503 17.4076 28.4504L19.7456 26.1513C19.8382 26.0603 19.8697 25.9252 19.827 25.8036C19.7839 25.6819 19.6742 25.5952 19.544 25.5801L13.7348 24.9081C13.6303 24.896 13.5271 24.9316 13.4532 25.0042C13.3794 25.0771 13.3432 25.1789 13.3555 25.281L14.0389 30.9934C14.0543 31.1211 14.1425 31.2293 14.2662 31.2713C14.3028 31.2837 14.3407 31.2901 14.3783 31.2901C14.4675 31.2901 14.5549 31.2555 14.6199 31.1917L16.4399 29.402C18.321 31.0539 20.7298 31.9622 23.2629 31.9622C28.9156 31.9622 33.5144 27.44 33.5144 21.8815C33.5144 21.5105 33.2083 21.2095 32.831 21.2095Z"
      />
    </Svg.Svg>
  );
};

const Receive = () => {
  const theme = useTheme();

  return (
    <Svg.Svg width="46" height="46" viewBox="0 0 46 46" fill="none">
      <Svg.Circle
        cx="22.6449"
        cy="22.6449"
        r="22.6449"
        fill={theme.dark ? Midnight : NeutralSlate}
      />
      <Svg.Path
        fill={Action}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.7102 24.4417L28.2969 22.9622L23.9563 27.5063V14.6138H21.9374V27.5063L17.5968 22.9622L16.1836 24.4417L22.9469 31.522L29.7102 24.4417Z"
      />
    </Svg.Svg>
  );
};

const Scan = () => {
  const theme = useTheme() as BitPayTheme;

  return (
    <Svg.Svg width="52" height="52" viewBox="0 0 46 46" fill="none">
      <Svg.Path
        fill={theme.colors.link}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.1534 15.0967H15.2853V20.2295H17.0214V16.8076H20.4937V15.0967H17.0214H16.1534ZM29.8687 15.0967H30.9103V20.2295H28.827V17.1498H25.702V15.0967H28.827H29.8687ZM30.9103 29.6398H29.8687H28.827H25.702V27.5866H28.827V24.5069H30.9103V29.6398ZM16.327 29.6398H15.2853V24.5069H17.3687V27.5866H20.4937V29.6398H17.3687H16.327ZM33.5145 21.9405H12.6812V22.796H33.5145V21.9405Z"
      />
    </Svg.Svg>
  );
};

const Send = () => {
  const theme = useTheme();

  return (
    <Svg.Svg width="46" height="46" viewBox="0 0 46 46" fill="none">
      <Svg.Circle
        cx="22.6449"
        cy="22.6449"
        r="22.6449"
        fill={theme.dark ? Midnight : NeutralSlate}
      />
      <Svg.Path
        fill={Action}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.7102 21.6941L28.2969 23.1736L23.9563 18.6295V31.522H21.9374V18.6295L17.5968 23.1736L16.1836 21.6941L22.9469 14.6138L29.7102 21.6941Z"
      />
    </Svg.Svg>
  );
};

export default {
  BuyCrypto,
  BuyGiftCard,
  Close,
  Exchange,
  Receive,
  Scan,
  Send,
};
