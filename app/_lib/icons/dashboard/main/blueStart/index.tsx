interface WalletProps {
  className?: string;
}

function BlueStartIcon({ className }: WalletProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="mask0_1057_8702" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="15">
        <path
          d="M7.5617 0.79838C7.75157 0.452536 8.24843 0.452536 8.4383 0.79838L10.3882 4.35026C10.46 4.48107 10.5865 4.57297 10.7331 4.60084L14.7137 5.35773C15.1013 5.43143 15.2548 5.90398 14.9846 6.19142L12.2091 9.14349C12.1069 9.25221 12.0586 9.40091 12.0774 9.54895L12.5876 13.5686C12.6373 13.96 12.2353 14.2521 11.8784 14.0839L8.21316 12.3565C8.07817 12.2928 7.92183 12.2928 7.78684 12.3565L4.12158 14.0839C3.7647 14.2521 3.36272 13.96 3.41241 13.5686L3.92263 9.54895C3.94142 9.40091 3.89311 9.25221 3.79089 9.14349L1.01541 6.19142C0.745165 5.90398 0.898705 5.43143 1.28629 5.35773L5.26689 4.60084C5.41349 4.57297 5.53997 4.48107 5.61179 4.35026L7.5617 0.79838Z"
          fill="#D6D6D6"
        />
      </mask>
      <g mask="url(#mask0_1057_8702)">
        <rect y="-1" width="17" height="17" fill="#000080" />
      </g>
    </svg>
  );
}

export default BlueStartIcon;
