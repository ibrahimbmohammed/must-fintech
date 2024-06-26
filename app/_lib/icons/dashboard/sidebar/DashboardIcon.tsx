// eslint-disable-next-line import/no-unresolved
import { IconProps } from './Icon.types';

function DashboardIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 24H2.66667C1.2 24 0 22.8 0 21.3333V2.66667C0 1.2 1.2 0 2.66667 0H8C9.46667 0 10.6667 1.2 10.6667 2.66667V21.3333C10.6667 22.8 9.46667 24 8 24ZM16 24H21.3333C22.8 24 24 22.8 24 21.3333V14.6667C24 13.2 22.8 12 21.3333 12H16C14.5333 12 13.3333 13.2 13.3333 14.6667V21.3333C13.3333 22.8 14.5333 24 16 24ZM24 6.66667V2.66667C24 1.2 22.8 0 21.3333 0H16C14.5333 0 13.3333 1.2 13.3333 2.66667V6.66667C13.3333 8.13333 14.5333 9.33333 16 9.33333H21.3333C22.8 9.33333 24 8.13333 24 6.66667Z" />
    </svg>
  );
}

export default DashboardIcon;
