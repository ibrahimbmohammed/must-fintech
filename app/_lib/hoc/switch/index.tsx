import { Switch } from '@headlessui/react';
import { Dispatch, SetStateAction } from 'react';

interface SwitchHocProps {
  enabled: boolean;
  setEnabled: Dispatch<SetStateAction<boolean>>;
}

export default function SwitchHoc({ enabled = false, setEnabled }: SwitchHocProps) {
  return (
    <div className="py-16">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-[#8b8888]' : 'bg-[#C4C4C4]'}
          relative inline-flex h-[19px] w-[36px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-4' : 'translate-x-0'}
            pointer-events-none inline-block h-[15px] w-[15px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
