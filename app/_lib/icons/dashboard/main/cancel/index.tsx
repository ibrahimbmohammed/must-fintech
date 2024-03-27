interface WalletProps {
  className: string;
}

function CanCleIcon({ className }: WalletProps) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.001 6L6.00098 18"
        stroke="url(#paint0_linear_200_6914)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.00098 6L18.001 18"
        stroke="url(#paint1_linear_200_6914)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_200_6914"
          x1="4.02955"
          y1="3.91667"
          x2="19.3407"
          y2="20.2644"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3800" />
          <stop offset="1" stopColor="#EE7930" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_200_6914"
          x1="4.02955"
          y1="3.91667"
          x2="19.3407"
          y2="20.2644"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3800" />
          <stop offset="1" stopColor="#EE7930" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default CanCleIcon;
