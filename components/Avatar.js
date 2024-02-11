import Image from 'next/image';

const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none'>
    <Image 
    className='translate-z-0 w-full h-full'
    src={'/avatar.png'} 
    width={737} 
    height={678} 
    alt=''/>
  </div>;
};

export default Avatar;
