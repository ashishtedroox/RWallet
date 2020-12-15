import React from 'react';

const Securityicon: React.FC<any> = ({ width, height }) => {
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
          d="M21.0882 4.85922L12.0679 0.052762C11.9341 -0.0186582 11.7737 -0.0176559 11.6409 0.0552679L2.87026 4.86172C2.72642 4.94066 2.63721 5.09152 2.63721 5.25566V11.5341C2.64247 16.6952 5.70026 21.3643 10.429 23.432L11.6464 23.9625C11.7602 24.0121 11.8898 24.0124 12.0038 23.963L13.3756 23.3706C18.192 21.3478 21.3255 16.6335 21.326 11.4096V5.25566C21.326 5.08977 21.2345 4.93715 21.0882 4.85922ZM20.4279 11.4096C20.4269 16.2734 17.5087 20.6621 13.024 22.5444L13.021 22.5459L11.8264 23.0616L10.7884 22.6088C6.38664 20.6842 3.54011 16.3383 3.5351 11.5341V5.52155L11.8597 0.959172L20.4279 5.5248V11.4096Z"
          fill="#004777"
        />
        <path
          d="M8.54663 11.2431C8.3855 11.0544 8.10207 11.032 7.91337 11.1932C7.72468 11.3541 7.70237 11.6377 7.86351 11.8262L10.2357 14.6041C10.394 14.7895 10.6714 14.8148 10.8604 14.6609L16.3851 10.1662C16.5775 10.0099 16.6066 9.72694 16.45 9.53448C16.2936 9.34227 16.0107 9.31295 15.8182 9.46957L10.6339 13.6871L8.54663 11.2431Z"
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

export { Securityicon };
