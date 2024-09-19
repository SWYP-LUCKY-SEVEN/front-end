'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

import styles from './navigation.module.scss';
import { IconArrow } from '../../../public/icons';
import useFromStore from '@/store/userFrom';
import { IconHoriz } from '../../../public/icons';

interface NavigationProps {
  title: string;
  onClick?: () => void;
  horiz?: boolean;
}

export default function Navigation({ title, onClick, horiz }: NavigationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { from } = useFromStore();

  const studyId = searchParams.get('studyId');

  const handleBackClick = () => {
    if (onClick) {
      onClick();
    } else {
      if (from) {
        router.push(from);
      } else {
        router.push('/');
      }
    }
  };

  const handleHorizClick = () => {
    router.push(`/studySetting?studyId=${studyId}`);
  };

  return (
    <div className={styles.Header}>
      <button className={styles.BackBtn} onClick={handleBackClick}>
        <Image alt="화살표" height={24} src={IconArrow} width={24} />
      </button>
      {horiz ? (
        <Image
          src={IconHoriz}
          alt="horiz"
          className={styles.horiz}
          onClick={handleHorizClick}
        />
      ) : null}
      <h1 className={styles.Title}>{title}</h1>
    </div>
  );
}
