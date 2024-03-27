import { ImSpinner2 } from 'react-icons/im';

interface SpinnerIconProps {
  className?: string;
}
const SpinnerIcon = ({ className = ' ' }: SpinnerIconProps) => (
  <div className={`flex h-screen w-full items-center justify-center   ${className}`}>
    <span className="animate-spin">
      <ImSpinner2 className="text-xl text-violet-700" />
    </span>
  </div>
);

export default SpinnerIcon;
