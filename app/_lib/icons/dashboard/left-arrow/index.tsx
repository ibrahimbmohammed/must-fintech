interface WalletProps {
  className?: string;
}

function LeftArrowIcon({ className }: WalletProps) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 9L7.5 6L4.5 3"
        stroke="#8F9AA3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default LeftArrowIcon;