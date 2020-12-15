import React from 'react';

const GroceryIcon: React.FC<any> = ({ width, height }) => {
  const w = width;
  const h = height;
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M19.1919 3.72361L19.9526 3.47595L20.7339 5.87615L19.9731 6.12361L19.1919 3.72361Z"
          fill="#004777"
        />
        <path
          d="M18.0195 6.52402L18.7803 6.27637L19.5617 8.67616L18.801 8.92402L18.0195 6.52402Z"
          fill="#004777"
        />
        <path
          d="M4.53145 7.69059C4.44707 8.30172 4.62539 8.92008 5.02266 9.39215L5.6002 10.1166V16.7998H6.4002V10.7474L6.97812 11.1326C7.11269 11.2222 7.2877 11.2222 7.42227 11.1326L8.4002 10.4798L9.37812 11.1318C9.51269 11.2214 9.6877 11.2214 9.82227 11.1318L10.8002 10.4798L11.7781 11.1318C11.9127 11.2214 12.0877 11.2214 12.2223 11.1318L13.2002 10.4798L14.1781 11.1318C14.3127 11.2214 14.4877 11.2214 14.6223 11.1318L15.6002 10.4798L16.4002 11.013V23.1998H7.60019V23.9998H18.8002C19.9043 23.9984 20.7988 23.1039 20.8002 21.9998V9.99977C20.7992 9.91188 20.7689 9.82672 20.7143 9.75778L23.0258 3.60387C23.3369 2.77711 23.223 1.85055 22.7211 1.12379C22.2441 0.418713 21.4477 -0.00277179 20.5967 -0.000232734C19.5119 0.00992352 18.5457 0.687658 18.167 1.70426L17.5398 3.37379L16.8002 2.63414V1.19977C16.8002 0.978869 16.6211 0.799767 16.4002 0.799767H12.0002C11.7793 0.799767 11.6002 0.978869 11.6002 1.19977V1.8861C11.148 1.47633 10.466 1.45309 9.98691 1.83141V1.19977C9.98691 0.54508 9.45625 0.0142204 8.80137 0.0142204C8.14668 0.0142204 7.61582 0.54508 7.61582 1.19977V1.8318C7.39687 1.65035 7.12129 1.55113 6.83691 1.55172C6.50684 1.55094 6.19043 1.68414 5.96016 1.92106C5.48574 2.40992 5.48281 3.18649 5.95332 3.67906L6.32578 4.06344C6.19023 4.12555 6.06719 4.21188 5.9627 4.31813L5.96016 4.31969L5.95625 4.32379C5.86309 4.41949 5.78594 4.52965 5.72812 4.65016L5.27227 3.80817L4.56855 4.18903L5.60293 6.09821C5.55664 6.12457 5.51016 6.15016 5.46621 6.18024C5.4498 6.19137 5.43535 6.20426 5.41934 6.21539L3.87148 4.78903L3.3291 5.37731L4.8666 6.79488C4.69004 7.065 4.57559 7.37086 4.53145 7.69059ZM12.9781 9.66695L12.0002 10.3197L11.0223 9.66774C10.8877 9.57809 10.7127 9.57809 10.5781 9.66774L9.60937 10.3138C9.60703 10.2738 9.60019 10.239 9.60019 10.2005C9.59766 9.32145 10.2322 8.56969 11.0992 8.42477C11.9664 8.27965 12.8109 8.78395 13.0945 9.61617C13.0533 9.62692 13.0141 9.64391 12.9781 9.66695ZM14.0002 10.0525L13.9926 10.0474C13.9445 9.2066 13.4916 8.44137 12.7775 7.99469C12.0637 7.54801 11.1773 7.47535 10.4002 7.79977V5.19977H14.0002V10.0525ZM20.0002 21.9998C20.0002 22.6625 19.4629 23.1998 18.8002 23.1998H17.2002V11.0138L18.0002 10.4798L18.9781 11.1318C19.1127 11.2214 19.2877 11.2214 19.4223 11.1318L20.0002 10.7474V21.9998ZM18.9158 1.98531C19.1766 1.28024 19.8449 0.808947 20.5967 0.799767C21.1846 0.798595 21.7344 1.0902 22.0635 1.57731C22.4166 2.08883 22.4963 2.74098 22.277 3.32262L19.8002 9.91969L19.2002 10.3197L18.2223 9.66774C18.0877 9.57809 17.9127 9.57809 17.7781 9.66774L16.8002 10.3197L15.9887 9.77867L18.9158 1.98531ZM17.2311 4.19625L15.1082 9.84703L14.8002 10.0525V4.96539L16.4002 3.36539L17.2311 4.19625ZM12.4002 1.59977H16.0002V2.39977H12.4002V1.59977ZM12.1658 3.19977H15.4346L14.2346 4.39977H10.9658L12.1658 3.19977ZM6.53105 2.48219C6.61133 2.39938 6.72168 2.3525 6.83691 2.3525C6.95234 2.3527 7.0627 2.39938 7.14297 2.48219L7.73027 3.08219C7.84434 3.1986 8.01758 3.23395 8.16816 3.17203C8.31875 3.10992 8.4168 2.96266 8.41582 2.79977V1.19977C8.40937 1.05778 8.48144 0.923791 8.60332 0.850939C8.72539 0.777892 8.87754 0.777892 8.99941 0.850939C9.12148 0.923791 9.19355 1.05778 9.18691 1.19977V2.79977C9.18711 2.96207 9.28535 3.10817 9.43574 3.16949C9.58594 3.23102 9.7584 3.19547 9.87227 3.07985L10.4613 2.47985C10.6301 2.31363 10.9008 2.31363 11.0693 2.47985C11.2432 2.65778 11.2432 2.94176 11.0693 3.11969L9.89102 4.31969L9.90293 4.3318L9.71738 4.51735C9.68516 4.55055 9.65918 4.58922 9.64023 4.63141C9.63457 4.64371 9.63144 4.65621 9.62695 4.66891C9.61504 4.70309 9.60781 4.73863 9.60547 4.77457C9.60547 4.78336 9.60059 4.79059 9.60059 4.79938V8.3277C9.50957 8.41481 9.425 8.50836 9.34785 8.60778L8.59219 6.99977C8.31328 6.44488 7.80918 6.03668 7.2082 5.87985C7.06836 5.84371 6.925 5.82184 6.78066 5.815L6.67812 5.69488C6.59824 5.60328 6.53789 5.5318 6.52812 5.52184C6.4248 5.41363 6.38008 5.26207 6.4082 5.115C6.42305 5.03141 6.46152 4.95406 6.51895 4.89176L6.52617 4.88492L6.53613 4.87418C6.68105 4.73219 6.90547 4.71129 7.07422 4.82379C7.24395 4.93727 7.47168 4.90465 7.60293 4.7484C7.73418 4.59195 7.72656 4.36207 7.58535 4.21461L6.52812 3.1234C6.35645 2.94371 6.35781 2.66031 6.53105 2.48219ZM5.32422 7.79977C5.37637 7.41207 5.59102 7.06481 5.91465 6.84488C6.23555 6.62789 6.63418 6.55914 7.00937 6.65621C7.38437 6.75348 7.69961 7.00719 7.87461 7.35289L8.89414 9.52457C8.86895 9.61813 8.84902 9.71305 8.83457 9.80895L8.62383 9.66813C8.48945 9.57848 8.31426 9.57848 8.17988 9.66813L7.2002 10.3197L6.31309 9.7277L6.22734 9.62028L7.25859 8.82301L6.76895 8.1902L5.7291 8.99449L5.64023 8.88375C5.38574 8.58375 5.2709 8.18961 5.32422 7.79977Z"
          fill="#004777"
        />
        <path
          d="M1.65439 23.0023C1.9583 23.6154 2.58447 24.0023 3.26865 24C3.54893 23.9996 3.8251 23.9344 4.07588 23.8096L4.40029 23.6473L4.7251 23.8096C4.97568 23.9344 5.25186 23.9996 5.53193 24C6.21631 24.0023 6.84228 23.6154 7.14639 23.0023L7.28584 22.7225C7.7542 21.7826 7.99873 20.7473 8.00029 19.6973C7.99893 18.5395 7.06084 17.6014 5.90303 17.6C5.51279 17.6012 5.13057 17.7119 4.80029 17.9199V17.6C4.80029 16.7164 4.08389 16 3.20029 16V16.8C3.64209 16.8 4.00029 17.1582 4.00029 17.6V17.9199C3.67002 17.7119 3.28779 17.6012 2.89756 17.6C1.73975 17.6014 0.80166 18.5395 0.800293 19.6973C0.80166 20.7475 1.04619 21.7832 1.51475 22.7232L1.65439 23.0023ZM2.89756 18.4C3.2417 18.399 3.57197 18.5359 3.81475 18.7801L4.11748 19.0828C4.27373 19.2389 4.52686 19.2389 4.68311 19.0828L4.98584 18.7801C5.35693 18.409 5.91475 18.298 6.39951 18.4988C6.88428 18.6996 7.20029 19.1727 7.20029 19.6973C7.19932 20.6234 6.98369 21.5367 6.57021 22.3656L6.43076 22.6457C6.26103 22.9865 5.9126 23.2014 5.53193 23.2C5.37607 23.1998 5.22236 23.1635 5.08271 23.0939L4.5792 22.842C4.4665 22.7857 4.33408 22.7857 4.22158 22.842L3.71826 23.0939C3.57861 23.1635 3.42471 23.1998 3.26865 23.2C2.88779 23.2012 2.53916 22.9857 2.36982 22.6443L2.23037 22.3645C1.81709 21.5359 1.60146 20.623 1.60029 19.6973C1.60127 18.9813 2.18154 18.401 2.89756 18.4Z"
          fill="#004777"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { GroceryIcon };
