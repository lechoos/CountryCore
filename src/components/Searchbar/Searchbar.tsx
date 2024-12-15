import { Dispatch, SetStateAction } from 'react';
import { CirclePlus } from 'lucide-react';

type SearchProps = {
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
};

export const Searchbar = ({ value, setValue }: SearchProps) => {
	return (
		<div className='relative'>
			<input
				type='text'
				className='p-1 text-base rounded-xl bg-transparent border border-current text-primary-800 dark:text-primary-200'
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			{value && (
				<CirclePlus
					onClick={() => setValue('')}
					className='absolute top-1/2 right-1 -translate-y-1/2 text-primary-800 dark:text-primary-200 rotate-45 cursor-pointer'
				/>
			)}
		</div>
	);
};
